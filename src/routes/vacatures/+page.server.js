import fetchJson from "$lib/fetch-json.js";

export async function load() {
  const ddaAgencies =
    "https://fdnd-agency.directus.app/items/dda_agencies_vacancies";
  const vacatures = await fetchJson(ddaAgencies);

  const first6Items = vacatures.data.slice(0, 10);

  const allVacatures = vacatures.data

  // console.log("First 6 vacancies:", first6Items); // Log first 6 vacancies

  return {
    vacatures: allVacatures
  };
}
