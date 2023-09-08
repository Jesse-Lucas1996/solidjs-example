import { Link } from "@solidjs/router";

export function NotFound() {
  return (
    <div class="bg-slate-500 min-h-screen flex flex-col items-center justify-center text-white text-3xl">
      <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p class="text-xl mb-4">The page you are looking for does not exist.</p>
      <Link class="text-blue-400 hover:underline" href="/">
        Go back to the home page
      </Link>
    </div>
  );
}
