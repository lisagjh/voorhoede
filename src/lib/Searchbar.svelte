<script>
    export let placeholderText = "";
    export let searchTerm="";
 
</script>
 
<!--preventDefault zorgt ervoor dat het form niet verstuurd wordt-->
<form action="#" method="GET" on:submit|preventDefault>
<input type="search" name="" 
    class="search-bar" placeholder={placeholderText}
    aria-label="Search" bind:value={searchTerm}
    />
</form>
 
 
<style>
 
.search-bar {
  min-width: 17.5em;
  padding: 1em 2px;
  margin: 1em;
  border: none;
  border-bottom: 1.35px solid var(--black);
  font-size: 1em;
  outline: var(--grey);
}
 
ul {
  margin: .5em 0em 0em 2em;
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


 
</style>