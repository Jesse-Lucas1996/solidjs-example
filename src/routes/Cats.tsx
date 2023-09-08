import { createSignal, type Component, Switch, Match } from "solid-js";
import styles from "../App.module.css";
import Cat from "../assets/cat.svg";
import { Loading } from "../components/loader";

const Cats: Component = () => {
  interface State {
    status: "pending" | "resolved" | "rejected" | "";
    data?: any;
    error?: any;
  }

  interface CatFact {
    fact: string;
    error?: any;
  }
  const [state, setState] = createSignal<State>({
    status: "",
    data: null,
    error: null,
  });
  const fetchCatFact = async () => {
    try {
      setState({ status: "pending" });
      const res: CatFact = await (
        await fetch("https://catfact.ninja/fact")
      ).json();
      setState({ status: "resolved", data: res.fact });
    } catch (error: any) {
      setState({ status: "rejected", error: error });
    }
  };

  return (
    <div class={styles.header}>
      <button class={styles.button} onclick={fetchCatFact}>
        <img src={Cat} />
      </button>
      <br />
      <Switch fallback={<div>Click the kitty</div>}>
        <Match when={state().status === "pending"}>
          <Loading />
        </Match>
        <Match when={state().status === "rejected"}>{state().error}</Match>
        <Match when={state().status === "resolved"}>{state().data}</Match>
      </Switch>
    </div>
  );
};

export default Cats;
