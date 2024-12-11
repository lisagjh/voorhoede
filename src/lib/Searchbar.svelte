<script>
    export let placeholderText = '';
    export let searchbarName = "";
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
  background-color: var(--white);
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