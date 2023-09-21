import { type Component, createResource } from "solid-js";
import { BiSolidCat } from "solid-icons/bi";
import { Loading } from "../components/loader";

type CatFact = {
  fact: string;
  error?: any;
};

const Cats: Component = () => {
  const fetchCatFact = async () => {
    const resp = await fetch("https://catfact.ninja/fact");
    const catFact = (await resp.json()) as CatFact;
    return catFact.fact;
  };

  const [fact, { refetch }] = createResource(fetchCatFact);

  return (
    <div class="bg-slate-500 min-h-screen flex flex-col items-center justify-center text-white text-3xl">
      <button
        class="h-24 w-24 p-2 m-2 text-lg text-indigo-100 transition-transform duration-150 rounded-full focus:shadow-outline hover:scale-110 transform hover:rotate-12"
        onClick={refetch}
      >
        <BiSolidCat fill="#FFFFFF" class="h-full w-full" />
      </button>
      <br />
      <div>
        <div>
          {fact.loading && <Loading />}
          {!fact.loading && fact.error && (
            <p>Ruh Roh Raggy Something went wrong</p>
          )}
          {!fact.loading && fact() && <p>{fact() ?? ""}</p>}
        </div>
      </div>
    </div>
  );
};
export default Cats;
