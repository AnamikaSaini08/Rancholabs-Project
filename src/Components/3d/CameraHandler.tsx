import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export const CameraHandler = () => {
  const cameraRef = useRef();
  const orbit = useRef<any>();

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[-3.6, 6.6, -8.3]}
        fov={40}
      />
      <OrbitControls
        ref={orbit}
        minDistance={3}
        maxDistance={30}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.3}
      />
    </>
  );
};
