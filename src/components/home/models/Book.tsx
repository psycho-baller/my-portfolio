/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: zoging (https://sketchfab.com/zoging)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/book-616e0dd72bf04503a350d774f48a6e6c
title: Book
*/

import type * as THREE from "three";
import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_9: THREE.SkinnedMesh;
    Object_15: THREE.SkinnedMesh;
    Object_17: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    book: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Book Open/Close";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations } = useGLTF("/models/book.glb") as GLTFResult;
  //   @ts-ignore
  const { actions } = useAnimations<GLTFActions>(animations, group);
  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.17}>
          <group name="f8b38bc6583940feb476e7dda518f97bfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="book" />
                <group name="armature_book" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_8" />
                    <group name="Object_14" />
                    <group name="Object_16" />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.book}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.book}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.book}
                      skeleton={nodes.Object_17.skeleton}
                    />
                  </group>
                </group>
                <group name="pages" />
                <group name="pages001" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/book.glb");