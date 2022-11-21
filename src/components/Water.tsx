import { Euler } from "three";
import { FunctionComponent } from "react";
import vertexShader from "../shaders/water/vertex.glsl";
import fragmentShader from "../shaders/water/fragment.glsl";

const Water: FunctionComponent = () => {
  return (
    <mesh rotation={new Euler(-Math.PI * 0.5)}>
      <planeBufferGeometry args={[2, 2, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export default Water;
