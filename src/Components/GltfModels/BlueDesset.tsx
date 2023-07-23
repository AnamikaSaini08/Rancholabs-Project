/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 scene.gltf -t
Author: Paul (https://sketchfab.com/paul_paul_paul)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-skybox-blue-desert-fd952e60be9746e0872840e89fbf7370
Title: FREE - SkyBox Blue Desert
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sphere__0: THREE.Mesh
  }
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial
  }
}

export function BlueDessert(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./Assets/blueDessert/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={1.01}>
        <mesh geometry={nodes.Sphere__0.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={5000000} />
      </group>
    </group>
  )
}

useGLTF.preload('./Assets/blueDessert/scene.gltf')
