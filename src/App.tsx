import { Link } from "@solidjs/router";

const App = () => {
  return (
    <div class="text-center">
      <header class="bg-slate-500 min-h-screen flex flex-col items-center justify-center text-white text-3xl">
        Want some cool cat facts? Click below
        <Link class="text-blue-400 hover:underline" href="/">
          Cat Facts{" "}
        </Link>
      </header>
    </div>
  );
};
export default App;
