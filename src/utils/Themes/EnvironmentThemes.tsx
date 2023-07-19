import { Environment } from "@react-three/drei";
import { DoubleSide, TextureLoader } from "three";
import * as THREE from "three";
import { Space } from "../../Components/GltfModels/BackgroundSpace";
import { SpaceTwo } from "../../Components/GltfModels/SpaceTwo";

export const ParkNight = () => {
  const textureLoader = new TextureLoader();
  const sandTexture = textureLoader.load("./Assets/textures/mars.jpg");
  sandTexture.wrapS = sandTexture.wrapT = THREE.RepeatWrapping;
  sandTexture.repeat.set(9, 9); // Adjust the repeat values to control the tiling

  return (
    <>
      <Environment files="./Assets/HDRIs/nightSky.hdr" background />
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial
          map={sandTexture}
          side={DoubleSide}
          roughness={2}
          metalness={0}
          color={"green"}
        />
      </mesh>
    </>
  );
};

export const SpaceCraft = () => {
  return (
    <>
      <Space position={[0, 4, -17]} />
      <SpaceTwo position={[15, 0, 7]} />
    </>
  );
};

