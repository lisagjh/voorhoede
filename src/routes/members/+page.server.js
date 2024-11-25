import fetchJson from "$lib/fetch-json.js";


export async function load() {
    const ddaAgencies = 'https://fdnd-agency.directus.app/items/dda_agencies/'
    const members = await fetchJson(ddaAgencies)



    const first6Items = members.data.slice(0, 6);

    console.log(first6Items);
    return {
        // first6Items: first6Items.data,
        // members: members.data

        members: members.data,
        membersSix: first6Items.data
    }
}