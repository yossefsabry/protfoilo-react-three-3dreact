import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export default function Shoe({ color, scale = [2, 2, 2], ...props }) {
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group scale={scale} {...props} dispose={null}>
      <mesh
        castShadow={false}
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-envMapIntensity={0.8}
        receiveShadow={false}
      />
      <mesh castShadow={false} receiveShadow={false} geometry={nodes.shoe_1.geometry}>
        <meshStandardMaterial
          color="purple"
          aoMap={materials.mesh.aoMap}
          normalMap={materials.mesh.normalMap}
          normalMap-encoding={THREE.LinearEncoding}
          roughnessMap={materials.mesh.roughnessMap}
          metalnessMap={materials.mesh.metalnessMap}
          envMapIntensity={0.8}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-envMapIntensity={0.8}
      />
    </group>
  );
}

useGLTF.preload("/shoe.gltf");
