export async function getCatFact() {
  const response = await fetch("https://catfact.ninja/fact");
  return response.json();
}
