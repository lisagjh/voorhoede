<script>
    export let placeholderText = '';
    export let searchbarName = "";
    export let searchTerm='';
    export let listToSearch = [];

  // FilteredItems is a dynamic element that instantly changes depending on the data that is has.
  
  $: filteredItems = listToSearch.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
</script>
 
<form action="#" method="GET" on:submit|preventDefault>
  <input
    type="search"
    name={searchbarName} 
    placeholder={placeholderText}
    aria-label="Search"
    bind:value={searchTerm}
  />
</form>
 
<style>


input {
  min-width: 19em;
  padding: 1em 0;
  margin: 1em;
  border: none;
  border-bottom: 1.5px solid var(--black);
  font-size: 1em;
}

input::placeholder {
  color: var(--black);
}

input::placeholder:focus {
  color: var(--gray);
}

input:focus {
  color: black;
  transition: .35s;
  outline: 1.75px solid var(--blue);
  padding: 1em .85em;
  border-radius: .25em;
}
 
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: .55em;
  width: .55em;
  background: rgb(238, 92, 7);
}

@media (max-width: 402px) {
    input {
        min-width: 14em; /* for small phone screens */
    }
}


 
</style>