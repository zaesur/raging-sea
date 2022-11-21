import { Canvas } from "@react-three/fiber";
import { FunctionComponent, ReactNode } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

interface ExperienceProps {
  children?: ReactNode;
}

const Experience: FunctionComponent<ExperienceProps> = ({ children }) => {
  return (
    <Canvas dpr={Math.min(2, window.devicePixelRatio)}>
      <color attach="background" args={["black"]} />
      <OrbitControls enableDamping enablePan={false} />
      <PerspectiveCamera
        makeDefault
        fov={75}
        far={100}
        near={0.1}
        position={[1, 1, 1]}
      />
      {children}
    </Canvas>
  );
};

export default Experience;
