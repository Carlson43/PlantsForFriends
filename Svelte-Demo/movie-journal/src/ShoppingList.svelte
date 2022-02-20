<script>
  export let movies;
</script>

{#each movies as movie (movie.title)}
  <div>
    <h3>{shopping.title}</h3>
    <p>Quantity: {shopping.quantity}</p>
  </div>
{/each}

<style>
  div {
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
  }
</style>