// ASM: a very small and fast Java bytecode manipulation framework
// Copyright (c) 2000-2011 INRIA, France Telecom
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
// 1. Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
// 3. Neither the name of the copyright holders nor the names of its
//    contributors may be used to endorse or promote products derived from
//    this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
// THE POSSIBILITY OF SUCH DAMAGE.
package org.babyfish.jimmer.impl.asm.tree;

import org.babyfish.jimmer.impl.asm.Opcodes;
import org.babyfish.jimmer.impl.asm.TypePath;

/**
 * A node that represents a type annotation.
 *
 * @author Eric Bruneton
 */
public class TypeAnnotationNode extends AnnotationNode {

  /** A reference to the annotated type. See {@link org.babyfish.jimmer.impl.asm.TypeReference}. */
  public int typeRef;

  /**
   * The path to the annotated type argument, wildcard bound, array element type, or static outer
   * type within the referenced type. May be {@literal null} if the annotation targets 'typeRef' as
   * a whole.
   */
  public TypePath typePath;

  /**
   * Constructs a new {@link AnnotationNode}. <i>Subclasses must not use this constructor</i>.
   * Instead, they must use the {@link #TypeAnnotationNode(int, int, TypePath, String)} version.
   *
   * @param typeRef a reference to the annotated type. See {@link org.babyfish.jimmer.impl.asm.TypeReference}.
   * @param typePath the path to the annotated type argument, wildcard bound, array element type, or
   *     static inner type within 'typeRef'. May be {@literal null} if the annotation targets
   *     'typeRef' as a whole.
   * @param descriptor the class descriptor of the annotation class.
   * @throws IllegalStateException If a subclass calls this constructor.
   */
  public TypeAnnotationNode(final int typeRef, final TypePath typePath, final String descriptor) {
    this(/* latest api = */ Opcodes.ASM9, typeRef, typePath, descriptor);
    if (getClass() != TypeAnnotationNode.class) {
      throw new IllegalStateException();
    }
  }

  /**
   * Constructs a new {@link AnnotationNode}.
   *
   * @param api the ASM API version implemented by this visitor. Must be one of the {@code
   *     ASM}<i>x</i> values in {@link Opcodes}.
   * @param typeRef a reference to the annotated type. See {@link org.babyfish.jimmer.impl.asm.TypeReference}.
   * @param typePath the path to the annotated type argument, wildcard bound, array element type, or
   *     static inner type within 'typeRef'. May be {@literal null} if the annotation targets
   *     'typeRef' as a whole.
   * @param descriptor the class descriptor of the annotation class.
   */
  public TypeAnnotationNode(
      final int api, final int typeRef, final TypePath typePath, final String descriptor) {
    super(api, descriptor);
    this.typeRef = typeRef;
    this.typePath = typePath;
  }
}
