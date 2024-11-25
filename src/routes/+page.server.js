import fetchJson from "$lib/fetch-json.js";


export async function load() {
<<<<<<< Updated upstream
    // const url = 'https://fdnd.directus.app/items/person/?filter={"squad_id":3}'
    const ddaAgencies = 'https://fdnd-agency.directus.app/items/dda_agencies/'
    const ddaAgenciesVacancies = 'https://fdnd-agency.directus.app/items/dda_agencies_vacancies/'
    const members = await fetchJson(ddaAgencies)
    const vacatures = await fetchJson(ddaAgenciesVacancies)
    return {
        members: members.data,
        vacature:vacatures.data
    }
}
=======
  const ddaAgenciesVacancies =
    "https://fdnd-agency.directus.app/items/dda_agencies_vacancies/";

  let allVacatures = [];

  allVacatures = await fetchJson(ddaAgenciesVacancies);

  console.log("vacatures in server:", allVacatures)
  // Make sure to return the data properly
  return {
    vacatures: allVacatures.data || [], // Ensure vacatures contains data or an empty array
  };
}
>>>>>>> Stashed changes
