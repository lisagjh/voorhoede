import fetchJson from "$lib/fetch-json.js";

export async function load() {
  const ddaVacancies = "https://fdnd-agency.directus.app/items/dda_agencies_vacancies";
  const ddaAgencies = "https://fdnd-agency.directus.app/items/dda_agencies/";

  const vacatures = await fetchJson(ddaVacancies);
  const agencies = await fetchJson(ddaAgencies);

  // Access the `data` property from both API responses
  const allVacatures = vacatures.data;
  const agencyData = agencies.data;

  // Create a Map for efficient agency lookups
  const agencyMap = new Map(agencies.data.map(agency => [agency.id, agency.title]));

  // Enrich vacancies with agency names
  const enrichedVacancies = allVacatures.map(vacancy => ({
    ...vacancy,
    agencyName: agencyMap.get(vacancy.agency_id) || 'Unknown Agency',
  }));

  // Take the first 6 vacancies for latest items
  const lastFiveItems = enrichedVacancies.slice(0, 6);

  console.log("Server received data:", allVacatures.length);

  return {
    vacancyAgencies: enrichedVacancies,
    latestVacancies: lastFiveItems,
    vacatures: allVacatures,
  };
}
