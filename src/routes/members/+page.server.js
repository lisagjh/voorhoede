import fetchJson from "$lib/fetch-json.js";


export async function load() {
    const ddaAgencies = 'https://fdnd-agency.directus.app/items/dda_agencies/'
    const members = await fetchJson(ddaAgencies)

    const first6Items = members.data.slice(0, 6);

    return {
        members: members.data,
        first6Members: first6Items.data
    }
}