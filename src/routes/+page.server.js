import fetchJson from "$lib/fetch-json.js";

export async function load() {
  const Agencies = "https://fdnd-agency.directus.app/items/dda_agencies";
  const Vacancies = "https://fdnd-agency.directus.app/items/dda_agencies_vacancies";

  try {

    const [members, vacancies] = await Promise.all([
      fetchJson(Agencies),
      fetchJson(Vacancies),
    ]);

    const allMembers = members.data;
    const allVacancies = vacancies.data;

    // Create a Map for efficient agency lookups in a other function
    const agencyMap = createAgencyMap(allMembers);

    // use 2 parameters in a seperate function for both data tables
    const vacancyWithAgencyData = DataAgenciesDataVacancies(allVacancies, agencyMap);

    // Get the latest vacancies in a seperate function
    const lastFiveItems = getLatestVacancies(vacancyWithAgencyData);

    return {
      vacancies: allVacancies,
      agencies: allMembers,
      vacancyAgencies: vacancyWithAgencyData,
      latestVacancies: lastFiveItems,
    };

  }

  catch (error) {
    console.error("Error while loading data:", error);

    return {
      members: [],
      vacancies: [],
      error: "Failed to load vacancies data",
    };

  }
}

// The code in the functions are the same nothing is change only that it is now in a seperate function
function createAgencyMap(membersData) {
  return new Map(membersData.map((agency) => [agency.id, agency.title]));
}

function DataAgenciesDataVacancies(allVacancies, agencyMap) {
   return allVacancies.map((vacancy) => ({...vacancy, agencyName: agencyMap.get(vacancy.agency_id) || "Unknown Agency",
  }));
}

function getLatestVacancies(getLatestFiveVacancies) {
  return getLatestFiveVacancies.slice(-6).reverse();
}