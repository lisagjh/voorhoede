import fetchJson from "$lib/fetch-json.js";

export async function load() {
  let ddaVacancies =
    "https://fdnd-agency.directus.app/items/dda_agencies_vacancies";
  let ddaAgencies = "https://fdnd-agency.directus.app/items/dda_agencies/";

  // Fetch vacancies and agencies data
  const vacatures = await fetchJson(ddaVacancies);
  const agencies = await fetchJson(ddaAgencies);

  // Ensure data exists
  if (!vacatures.data || !agencies.data) {
    throw new Error("Failed to load data");
  }

  // Process agency data
  const agencyData = agencies.data.map((agency) => ({
    id: agency.id,
    title: agency.title,
    photo: agency.photo,
    logo: agency.logo,
  }));

  // Create a Map for fast lookups of agencies by ID
  const agencyMap = new Map(agencyData.map((agency) => [agency.id, agency]));

  // Enrich vacancies with agency details (name, logo, photo, etc.)
  const enrichedVacancies = vacatures.data.map((vacancy) => {
    const agency = agencyMap.get(vacancy.agency_id);
    return {
      ...vacancy,
      agencyName: agency ? agency.title : "Unknown Agency",
      agencyLogo: agency ? agency.logo : null,
      agencyPhoto: agency ? agency.photo : null,
    };
  });

  // Get the first 6 vacancies for latest items
  const latestVacancies = enrichedVacancies.slice(-1, 0);

  return {
    agencies: agencyData, // Agencies data
    vacancyAgencies: enrichedVacancies, // Enriched vacancies data
    latestVacancies: latestVacancies, // Latest vacancies data
  };
}
