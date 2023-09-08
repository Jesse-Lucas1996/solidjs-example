import { A } from "@solidjs/router";

const App = () => {
  return (
    <div class="text-center">
      <header class="bg-slate-500 min-h-screen flex flex-col items-center justify-center text-white text-3xl">
        Want some cool cat facts? Click below
        <A class="text-3xl underline" href="/cats">
          Cat Facts{" "}
        </A>
      </header>
    </div>
  );
};
export default App;
