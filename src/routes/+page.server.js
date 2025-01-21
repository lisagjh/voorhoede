import fetchJson from "$lib/fetch-json.js";

export async function load() {
  const Agencies = "https://fdnd-agency.directus.app/items/dda_agencies";
  const Vacancies =
      "https://fdnd-agency.directus.app/items/dda_agencies_vacancies";
  try {
    const [members,vacancies] = await Promise.all([
      fetchJson(Agencies),
        fetchJson(Vacancies),
    ]);

    const allMembers = members.data;
    const allVacancies = vacancies.data;


    const agencyData = members.data;

    // Create a Map for efficient agency lookups
    const agencyMap = new Map(
        members.data.map((agency) => [agency.id, agency.title])
    );

    // Enrich vacancies with agency names
    const vacancyWithAgencyData = allVacancies.map((vacancy) => ({
      ...vacancy,
      agencyName: agencyMap.get(vacancy.agency_id) || "Unknown Agency",
    }));

    // Take the first 6 vacancies for latest items
    const lastFiveItems = vacancyWithAgencyData.slice(-6).reverse();

    console.log("Server received data:", allVacancies.length);

    return {
      members: allMembers,
      vacancies: allVacancies,
      agencies: agencyData,
      vacancyAgencies: vacancyWithAgencyData,
      latestVacancies: lastFiveItems,
    };
  } catch (error) {
    console.error("Error while loading data:", error);

    return {
      members: [],
      vacancies: [],
      error: "Failed to load vacancies data",
    };
  }
}


// export async function load() {
//   const ddaVacancies =
//     "https://fdnd-agency.directus.app/items/dda_agencies_vacancies";
//   const ddaAgencies = "https://fdnd-agency.directus.app/items/dda_agencies/";
//
//   const vacatures = await fetchJson(ddaVacancies);
//   const agencies = await fetchJson(ddaAgencies);
//
//   // Access the `data` property from both API responses
//   const allVacatures = vacatures.data;
//
//   const agencyData = agencies.data;
//
//   // Create a Map for efficient agency lookups
//   const agencyMap = new Map(
//     agencies.data.map((agency) => [agency.id, agency.title])
//   );
//
//   // Enrich vacancies with agency names
//   const vacancyWithAgencyData = allVacatures.map((vacancy) => ({
//     ...vacancy,
//     agencyName: agencyMap.get(vacancy.agency_id) || "Unknown Agency",
//   }));
//
//   // Take the first 6 vacancies for latest items
//   const lastFiveItems = vacancyWithAgencyData.slice(-6).reverse();
//
//   console.log("Server received data:", allVacatures.length);
//
//   return {
//     agencies: agencyData,
//     vacancyAgencies: vacancyWithAgencyData,
//     latestVacancies: lastFiveItems,
//     vacatures: allVacatures,
//   };
// }
