import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Route, Router, Routes } from "@solidjs/router";
import Cats from "./routes/Cats";
import { NotFound } from "./routes/404";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={Cats} />
        <Route path="*" component={NotFound} />
      </Routes>
    </Router>
  ),
  document.getElementById("root") ?? new HTMLElement()
);
