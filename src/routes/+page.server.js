import fetchJson from "$lib/fetch-json.js";


export async function load() {
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