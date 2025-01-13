import fetchJson from "$lib/fetch-json.js";

export async function load() {
    const ddaAgencies = 'https://fdnd-agency.directus.app/items/dda_agencies/'
    const members = await fetchJson(ddaAgencies)

    return {
        members: members.data,
    }
}