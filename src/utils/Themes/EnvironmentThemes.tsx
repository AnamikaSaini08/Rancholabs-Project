import { Environment } from "@react-three/drei";
import { DoubleSide, TextureLoader } from "three";
import * as THREE from "three";
import {Suspense, lazy} from 'react';
import Shimmer from "../../Components/Home/Shimmer";
const NightSky = lazy(() => import("../../Components/GltfModels/NightSky").then(({ NightSky }) => ({ default: NightSky })),);
// import { SpaceTwo } from "../../Components/GltfModels/SpaceTwo";
// import { NightSky } from "../../Components/GltfModels/NightSky";
// import { BlueDessert } from "../../Components/GltfModels/BlueDesset";
// import { Disney } from "../../Components/GltfModels/Disney";
// import { WoodenHome } from "../../Components/GltfModels/WoodenHome";
// import { Village } from "../../Components/GltfModels/Village";
// import { NightPark } from "../../Components/GltfModels/NightPark";

const WoodenHome = lazy(() => import("../../Components/GltfModels/WoodenHome").then(({ WoodenHome }) => ({ default: WoodenHome })),);
const Disney = lazy(() => import("../../Components/GltfModels/Disney").then(({ Disney }) => ({ default: Disney })),);
const BlueDessert = lazy(() => import("../../Components/GltfModels/BlueDessert").then(({ BlueDessert }) => ({ default: BlueDessert })),);
const NightPark = lazy(() => import("../../Components/GltfModels/NightPark").then(({ NightPark }) => ({ default: NightPark })),);
const SpaceTwo = lazy(() => import("../../Components/GltfModels/SpaceTwo").then(({ SpaceTwo }) => ({ default: SpaceTwo })),);

export const SpaceTwoBackground = () => {
  return (
    <Suspense fallback={<Shimmer/>}>
      <SpaceTwo position={[15, 0, 7]} />
    </Suspense>
  );
};
export const NightParkBackground = () => {
  return (
    <Suspense fallback="Loading...">
      <NightPark position={[0, -20, 0]}/>
    </Suspense>
  );
};

export const DisneyBackground = () => {
  return (
    <Suspense fallback="Loading...">
      <Disney position={[-5, 10, 5]}/>
    </Suspense>
  );
};
export const  WoodenHomeBackground= () => {
  return (
    <Suspense fallback="Loading...">
      <WoodenHome position={[0, -0.5, -1]}/>
    </Suspense>
  );
};
export const NightForest = () => {
  return (
    <Suspense fallback="Loading...">
      <NightSky position={[15, -22, 7]}/>
    </Suspense>
  );
};

export const BlueDessertBackground = () => {
  return (
    <Suspense fallback="Loading...">
      <BlueDessert position={[15,0,15]} />
    </Suspense>
  );
};



