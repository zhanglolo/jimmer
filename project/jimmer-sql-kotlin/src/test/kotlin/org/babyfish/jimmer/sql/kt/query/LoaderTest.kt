package org.babyfish.jimmer.sql.kt.query

import org.babyfish.jimmer.kt.new
import org.babyfish.jimmer.sql.kt.ast.expression.desc
import org.babyfish.jimmer.sql.kt.ast.expression.ne
import org.babyfish.jimmer.sql.kt.common.AbstractQueryTest
import org.babyfish.jimmer.sql.kt.model.BookStore
import org.babyfish.jimmer.sql.kt.model.by
import org.babyfish.jimmer.sql.kt.model.edition
import org.junit.Test
import java.math.BigDecimal
import kotlin.test.expect

class LoaderTest : AbstractQueryTest() {

    @Test
    fun testWithoutFilter() {
        connectAndExpect({ con ->
            sqlClient
                .getListLoader(BookStore::books)
                .forConnection(con)
                .load(new(BookStore::class).by {
                    id = 2L
                })
        }) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.EDITION, tb_1_.PRICE, tb_1_.STORE_ID 
                    |from BOOK as tb_1_ 
                    |where tb_1_.STORE_ID = ?""".trimMargin()
            )
            variables(2L)
            rows(
                """[
                    |--->{
                    |--->--->"id":10,
                    |--->--->"name":"GraphQL in Action",
                    |--->--->"edition":1,
                    |--->--->"price":80.00,
                    |--->--->"store":{"id":2}
                    |--->},{
                    |--->--->"id":11,
                    |--->--->"name":"GraphQL in Action",
                    |--->--->"edition":2,
                    |--->--->"price":81.00,
                    |--->--->"store":{"id":2}
                    |--->},{
                    |--->--->"id":12,
                    |--->--->"name":"GraphQL in Action",
                    |--->--->"edition":3,
                    |--->--->"price":80.00,
                    |--->--->"store":{"id":2}
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testWithFilter() {
        connectAndExpect({ con ->
            sqlClient
                .getListLoader(BookStore::books)
                .forConnection(con)
                .forFilter {
                    orderBy(table.edition.desc())
                    where(table.edition ne 1)
                }
                .load(new(BookStore::class).by {
                    id = 2L
                })
        }) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.EDITION, tb_1_.PRICE, tb_1_.STORE_ID 
                    |from BOOK as tb_1_ 
                    |where tb_1_.STORE_ID = ? and tb_1_.EDITION <> ? 
                    |order by tb_1_.EDITION desc""".trimMargin()
            )
            variables(2L, 1)
            rows(
                """[
                    |--->{
                    |--->--->"id":12,
                    |--->--->"name":"GraphQL in Action",
                    |--->--->"edition":3,
                    |--->--->"price":80.00,
                    |--->--->"store":{"id":2}
                    |--->},{
                    |--->--->"id":11,
                    |--->--->"name":"GraphQL in Action",
                    |--->--->"edition":2,
                    |--->--->"price":81.00,
                    |--->--->"store":{"id":2}
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun test() {
        connectAndExpect({ con ->
            sqlClient
                .getValueLoader(BookStore::avgPrice)
                .forConnection(con)
                .batchLoad(
                    listOf(
                        new(BookStore::class).by {
                            id = 1L
                        },
                        new(BookStore::class).by {
                            id = 2L
                        }
                    )
                )
        }) {
            sql(
                """select tb_1_.STORE_ID, coalesce(avg(tb_1_.PRICE), ?) 
                    |from BOOK as tb_1_ 
                    |where tb_1_.STORE_ID in (?, ?) 
                    |group by tb_1_.STORE_ID""".trimMargin()
            )
            rows(
                """[
                    |--->{
                    |--->--->"{\"id\":1}":58.500000000000,
                    |--->--->"{\"id\":2}":80.333333333333
                    |--->}
                    |]""".trimMargin()
            )
        }
    }
}