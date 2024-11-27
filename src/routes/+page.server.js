import fetchJson from "$lib/fetch-json.js";

export async function load() {
  // API endpoints
  const vacanciesUrl = "https://fdnd-agency.directus.app/items/dda_agencies_vacancies";
  const agenciesUrl = "https://fdnd-agency.directus.app/items/dda_agencies/";

  // fetch data
  const vacanciesData = await fetchJson(vacanciesUrl);
  const agenciesData = await fetchJson(agenciesUrl);

  // map of agencies
  const agencyMap = {};
  for (const agency of agenciesData.data) {
    agencyMap[agency.id] = {
      title: agency.title,
      photo: agency.photo,
      logo: agency.logo,
    };
  }

  // Add agency details to each vacancy
  const enrichedVacancies = vacanciesData.data.map((vacancy) => {
    const agency = agencyMap[vacancy.agency_id] || {}; // If it cant find agency, default to empty array
    return {
      ...vacancy,
      agencyName: agency.title || "Unknown Agency", // If it cant find agency name, use unkown agency
      agencyLogo: agency.logo || null,
      agencyPhoto: agency.photo || null,
    };
  });

  // Get the newest vacancies, sort by newest
  const latestVacancies = enrichedVacancies.slice(-6).reverse();

  return {
    agencies: agenciesData.data.map((agency) => ({
      id: agency.id,
      title: agency.title,
      photo: agency.photo,
      logo: agency.logo,
    })),
    vacancyAgencies: enrichedVacancies, // All vacancies with agency details
    latestVacancies: latestVacancies, // First 6 vacancies
  };
}
