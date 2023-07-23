/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 scene.gltf -t
Author: jimbogies (https://sketchfab.com/jimbogies)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rusty-metal-gallery-5e473371597d426d803a32b2c837c086
Title: Rusty Metal Gallery
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
  }
}

export function WoodenHome(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./Assets/woodenHome/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null} scale={5.0}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.material} />
      </group>
    </group>
  )
}

useGLTF.preload('./Assets/woodenHome/scene.gltf')