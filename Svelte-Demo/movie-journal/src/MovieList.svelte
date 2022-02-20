<script>
  export let movies;
</script>

<!-- Diplay for every object -->
{#each movies as movie (movie.title)}
  <!-- List Element -->
  <div>
    <h3>{movie.title}</h3>
    <p>Your Rating: {movie.rating}</p>
  </div>
{/each}

<!-- Styling -->
<style>
  div {
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
  }
</style>