import fetchJson from "$lib/fetch-json.js";

export async function load() {
  const ddaAgencies =
    "https://fdnd-agency.directus.app/items/dda_agencies_vacancies";
  const vacatures = await fetchJson(ddaAgencies);

  const allVacancies = vacatures.data

  return {
    vacancies: allVacancies
  };
}
