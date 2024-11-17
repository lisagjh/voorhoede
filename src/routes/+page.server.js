// src/routes/+page.server.js
import fetchJson from "$lib/fetch-json.js";

export async function load() {
  const ddaAgencies = "https://fdnd-agency.directus.app/items/dda_agencies/";
  const ddaAgenciesVacancies =
    "https://fdnd-agency.directus.app/items/dda_agencies_vacancies/";

  const members = await fetchJson(ddaAgencies);
  const vacatures = await fetchJson(ddaAgenciesVacancies);
  const openVacancies = vacatures.data;

  console.log("server found vacancies:", openVacancies.length);

  return { members, vacatures, openVacancies };
}