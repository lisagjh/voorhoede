<script>
    export let placeholderText = '';
    export let searchTerm='';
    export let listToSearch = [];

  // $: Is een dynamisch element wat zich gelijk aanpast op de data die erin zit. 
  // .filter is een built in JS functie die een nieuwe arraay aanmaakt met de juiste items op basis van de requirements
  // Om dit component dus globaal te maken 
  $: filteredItems = listToSearch.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
</script>
 
<form action="#" method="GET" on:submit|preventDefault>
<input type="search" name=""
    class="search-bar" placeholder={placeholderText}
    aria-label="Search" bind:value={searchTerm}
    />
</form>
 
<style>
 
.search-bar {
  min-width: 19em;
  padding: 1em 2px;
  margin: 1em;
  border: none;
  border-bottom: 1.35px solid var(--black);
  font-size: 1em;
  outline: var(--grey);
}
 
 
.search-bar::placeholder {
  color: var(--grey)
}
 
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: .5em;
  width: .5em;
  background: rgb(238, 92, 7);
}

@media (max-width: 402px) {
    .search-bar {
        min-width: 13em; /* for small phone screens */
    }
}
 
</style>