import fetchJson from "$lib/fetch-json.js";


export async function load() {
  const ddaAgenciesVacancies =
    "https://fdnd-agency.directus.app/items/dda_agencies_vacancies/";

  let allVacatures = [];

  allVacatures = await fetchJson(ddaAgenciesVacancies);

  console.log("vacatures in server:", allVacatures.data[0])
  // Make sure to return the data properly
  return {
    vacatures: allVacatures
  };
}