import Water from "./Water";
import Experience from "./Experience";
import { FunctionComponent } from "react";
import styles from "./App.module.css";

const App: FunctionComponent = () => {
  return (
    <div className={styles.experience}>
      <Experience>
        <Water />
      </Experience>
    </div>
  );
};

export default App;
