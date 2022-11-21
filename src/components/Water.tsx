import { Color, DoubleSide, Euler, ShaderMaterial } from "three";
import { FunctionComponent, useRef } from "react";
import vertexShader from "../shaders/water/vertex.glsl";
import fragmentShader from "../shaders/water/fragment.glsl";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

const Water: FunctionComponent = () => {
  const shaderRef = useRef<ShaderMaterial>(null!);
  const controls = useControls({
    bigWavesElevation: {
      value: 0.2,
      min: 0,
      max: 1,
    },
    bigWavesFrequency: {
      value: [4, 1.5],
    },
    bigWavesSpeed: {
      value: 0.75,
      min: 0,
      max: 4,
    },
    depthColor: {
      value: "#186691",
    },
    surfaceColor: {
      value: "#9bd8ff",
    },
    colorOffset: {
      value: 0.08,
      min: 0,
      max: 1,
    },
    colorMultiplier: {
      value: 5,
      min: 0,
      max: 10,
    },
  });

  useFrame(({ clock }) => {
    shaderRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh rotation={new Euler(-Math.PI * 0.5)}>
      <planeGeometry args={[2, 2, 128, 128]} />
      <shaderMaterial
        side={DoubleSide}
        key={Date.now()}
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        defines={{ PI: Math.PI }}
        uniforms={{
          uTime: { value: 0 },
          uBigWavesElevation: { value: controls.bigWavesElevation },
          uBigWavesFrequency: { value: controls.bigWavesFrequency },
          uBigWavesSpeed: { value: controls.bigWavesSpeed },
          uDepthColor: { value: new Color(controls.depthColor) },
          uSurfaceColor: { value: new Color(controls.surfaceColor) },
          uColorOffset: { value: controls.colorOffset },
          uColorMultiplier: { value: controls.colorMultiplier },
        }}
      />
    </mesh>
  );
};

export default Water;
