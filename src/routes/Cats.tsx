import { createSignal, type Component, Switch, Match } from "solid-js";
import { FaSolidCat } from "solid-icons/fa";
import { Loading } from "../components/loader";

const Cats: Component = () => {
  interface State {
    status: "pending" | "resolved" | "rejected" | "";
    data?: any;
    error?: any;
  }

  type CatFact = {
    fact: string;
    error?: any;
  };
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
    <div class="bg-slate-500 min-h-screen flex flex-col items-center justify-center text-white text-3xl">
      <button
        class="h-24 w-24 p-2 m-2 text-lg text-indigo-100 transition-colors duration-150 rounded-full focus:shadow-outline"
        onclick={fetchCatFact}
      >
        <FaSolidCat class="h-full w-full" />
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
