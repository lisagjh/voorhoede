import fetchJson from "$lib/fetch-json.js";

export async function load() {
  let ddaVacancies = "https://fdnd-agency.directus.app/items/dda_agencies_vacancies";
  let ddaAgencies = "https://fdnd-agency.directus.app/items/dda_agencies/";

  let vacatures = await fetchJson(ddaVacancies);
  let agencies = await fetchJson(ddaAgencies);

  // Access the `data` property from both API responses
  let allVacatures = vacatures.data;
  let agencyData = agencies.data;

  
  // Create a Map for efficient agency lookups
  let agencyMap = new Map(agencies.data.map(agency => [agency.id, agency.title]));

  // Enrich vacancies with agency names
  let enrichedVacancies = allVacatures.map(vacancy => ({
    ...vacancy,
    agencyName: agencyMap.get(vacancy.agency_id) || 'Unknown Agency',
  }));

  // Take the first 6 vacancies for latest items
  let lastFiveItems = enrichedVacancies.slice(-6).reverse();

  console.log("Server received data:", allVacatures.length);

  return {
    vacancyAgencies: enrichedVacancies,
    latestVacancies: lastFiveItems,
    vacatures: allVacatures,
  };
}