import { FaSolidCat } from "solid-icons/fa";
export const Loading = () => {
  return (
    <div class="h-24 w-24 p-2 m-2   ">
      <FaSolidCat class="h-full w-full animate-spin dark:text-gray-600 fill-gray"></FaSolidCat>
      <span class="sr-only">Purrrforming request...</span>
    </div>
  );
};
