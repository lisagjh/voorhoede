import { writable } from 'svelte';

export const dataStore = writable([]); // Create a writable store

export async function updateData() {
    const fetchedData = await fetchData();
    dataStore.set(fetchedData); // Update the store with fetched data
}