<script>
  export let shoppings;
</script>

<!-- Diplay for every object -->
{#each shoppings as shopping (shopping.title)}
  <!-- List Element -->
  <div>
    <h3>{shopping.title}</h3>
    <p>Your Quantity: {shopping.quantity}</p>
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