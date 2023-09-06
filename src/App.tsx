import { A } from "@solidjs/router";
import styles from "./App.module.css";

const App = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        Want some cool cat facts? Click below
        <A href="/cats">Cat Facts </A>
      </header>
    </div>
  );
};
export default App;
