/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 scene.gltf --transform
Author: Muru (https://sketchfab.com/muru)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/space-city-ae679c5cb5fd496a9f5611e516ba9a4c
Title: Space City
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pCylinder1_phong1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCylinder37_Glass_0.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.pCylinder40_lambert9_0.geometry} material={materials.lambert9} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
