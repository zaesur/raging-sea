import { Euler } from "three";
import { FunctionComponent } from "react";

const Water: FunctionComponent = () => {
  return (
    <mesh rotation={new Euler(-Math.PI * 0.5)}>
      <planeBufferGeometry args={[2, 2, 128, 128]} />
      <meshBasicMaterial />
    </mesh>
  );
};

export default Water;
