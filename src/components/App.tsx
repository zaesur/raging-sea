import { FunctionComponent } from "react";
import Experience from "./Experience";
import styles from "./App.module.css";

const App: FunctionComponent = () => {
  const model = (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial />
    </mesh>
  );

  return (
    <div className={styles.experience}>
      <Experience>{model}</Experience>
    </div>
  );
};

export default App;
