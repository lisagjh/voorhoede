import fetchJson from "$lib/fetch-json.js";
import {error, redirect} from '@sveltejs/kit';
export async function load() {
    const ddaAgencies = 'https://fdnd-agency.directus.app/items/dda_agencies/'
    const ddaAgenciesVacancies = 'https://fdnd-agency.directus.app/items/dda_agencies_vacancies/'
    const members = await fetchJson(ddaAgencies)
    const vacatures = await fetchJson(ddaAgenciesVacancies)

    // if (error.status === 404 || error.status === 500) {
    //     // throw new Error('helaas er gaat iets mis');
    //
    //     export function loadtest() {
    //         throw redirect(303, '/a');
    //     }
    //
    // }
    // https://kit.svelte.dev/docs/errors
    // https://learn.svelte.dev/tutorial/redirects
    return {
        members: members.data,
        vacature:vacatures.data
    }


}


