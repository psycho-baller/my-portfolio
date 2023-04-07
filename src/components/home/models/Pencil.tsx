/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: NoLagHere (https://sketchfab.com/NoLagHere)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/pencil-ac2e129c75d54d9b91cbb2980876f23d
title: Pencil
*/

import type * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder_Material004_0: THREE.Mesh;
    Cylinder_Material003_0: THREE.Mesh;
    Cylinder_Material005_0: THREE.Mesh;
    Cylinder_Material001_0: THREE.Mesh;
    Cylinder_Material002_0: THREE.Mesh;
  };
  materials: {
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/pencil.glb") as GLTFResult;
  // const group = useRef<THREE.Group>(null!);

  // useFrame((state, delta) => {
  //   look at the camera
  //   group.current.lookAt(state.camera.position);
  // });

  return (
    <group {...props} dispose={null} scale={0.75} position={[0, 0, -9]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <group rotation={[-Math.PI / 2, 0.6, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_Material004_0.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_Material003_0.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_Material001_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/pencil.glb");
