/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 scene.gltf -t
Author: bakmosta3 (https://sketchfab.com/bakmosta3)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-hdri-background-fantasy-space-3849f57c182b4d54ba97a1d0111833c9
Title: Free HDRi Background Fantasy space
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_6: THREE.Mesh
    Object_7: THREE.Mesh
    Object_8: THREE.Mesh
    Object_9: THREE.Mesh
    Object_10: THREE.Mesh
    Object_11: THREE.Mesh
    Object_12: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function Disney(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./Assets/disney/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={20.427}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('./Assets/disney/scene.gltf')