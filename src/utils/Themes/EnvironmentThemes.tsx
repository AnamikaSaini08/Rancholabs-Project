import { Environment } from "@react-three/drei";
import { DoubleSide, TextureLoader } from "three";
import * as THREE from "three";
import {Suspense, lazy} from 'react';
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


export const DisneyBackground = () => {
  return (
    <Suspense fallback="Loading...">
      <Disney position={[0, 10, 5]}/>
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
      <NightSky position={[0, 10, 5]}/>
    </Suspense>
  );
};

// export const SpaceCraft = () => {
//   return (
//     <>
//       <Space position={[0, 3, -30]} />
//       <Space position={[0, 2, 30]} />
//       <SpaceTwo position={[15, 0, 7]} />
//     </>
//   );
// };

// export const NightForest =()=>{
//   return (
//     <>
//     <NightSky position={[15, -22, 7]}/>
//     </>
//   );
// }
// export const NightParkBackground =()=>{
//   return (
//     <>
//     <NightPark position={[-100, -100,-100]} />
//     </>
//   );
// }
// export const DisneyBackground =()=>{
//   return (
//     <>
//     <Disney position={[0, 10, 5]}/>
//     </>
//   );
// }

// export const VillageBackground =()=>{
//   return (
//     <mesh>
//     <Village position={[-10, -10, -10]} />
//     </mesh>
//   );
// }
// export const WoodenHomeBackground =()=>{
//   return (
//     <>
//     <WoodenHome position={[0, -0.5, -1]}/>
//     </>
//   );
// }

// export const BlueDessertBackground =()=>{
//   return (
//     <>
//     <BlueDessert position={[0, 5, -20]}/>
//     </>
//   );
// }




