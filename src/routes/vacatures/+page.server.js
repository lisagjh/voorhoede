import fetchJson from "$lib/fetch-json.js";

export async function load() {
  const ddaAgenciesUrl = "https://fdnd-agency.directus.app/items/dda_agencies_vacancies";

  try {
    const [vacatures] = await Promise.all([
      fetchJson(ddaAgenciesUrl),
    ]);
    
    const allVacancies = vacatures.data;

    return {
      vacancies: allVacancies,
    };
  } catch (error) {
    console.error("Error while loading data:", error);

    return {
      vacancies: [],
      error: "Failed to load vacancies data",
    };
  }
}