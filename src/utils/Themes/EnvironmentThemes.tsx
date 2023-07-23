import { Environment } from "@react-three/drei";
import { DoubleSide, TextureLoader } from "three";
import * as THREE from "three";
import { Space } from "../../Components/GltfModels/BackgroundSpace";
import { SpaceTwo } from "../../Components/GltfModels/SpaceTwo";
import { NightSky } from "../../Components/GltfModels/NightSky";


export const SpaceCraft = () => {
  return (
    <>
      <Space position={[0, 3, -30]} />
      <Space position={[0, 2, 30]} />
      <SpaceTwo position={[15, 0, 7]} />
    </>
  );
};

export const NightForest =()=>{
  return (
    <>
    <NightSky position={[15, -22, 7]}/>
    </>
  );
}



