import fetchJson from "$lib/fetch-json.js";

export async function load() {
    const ddaAgencies = "https://fdnd-agency.directus.app/items/dda_agencies";

    try {
        const [members] = await Promise.all([
            fetchJson(ddaAgencies),
        ]);

        const allMembers = members.data;

        return {
            members: allMembers,
        };
    } catch (error) {
        console.error("Error while loading data:", error);

        return {
            members: [],
            error: "Failed to load vacancies data",
        };
    }
}