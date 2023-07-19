import { IBox } from "../../Interface/3dItems";

export const Box = ({ position }: IBox) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 0.6, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};
