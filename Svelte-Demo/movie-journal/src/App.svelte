<script>
	import ShoppingInput from './ShoppingInput.svelte';
	import ShoppingList from './ShoppingList.svelte';
	import Search from './Search.svelte';

	// create local storage
	let shoppings = localStorage.getItem('shoppings') ? 
	  JSON.parse(localStorage.getItem('shoppings')) : 
	  [];

	// add new entrie
	const submitShopping = shopping => {
	  const updatedShoppings = [ ...shoppings, shopping ];
	  localStorage.setItem('shoppings', JSON.stringify(updatedShoppings));
	  shoppings = updatedShoppings;
	}

	// reset shoppings when search is cleared
	const clearSearch = () => {
	  shoppings = localStorage.getItem('shoppings') ? 
		JSON.parse(localStorage.getItem('shoppings')) : 
		[];
	};

	// search
	// Create copy of all entries
	const search = searchTerm => {
	  const tempShoppings = localStorage.getItem('shoppings') ? 
		JSON.parse(localStorage.getItem('shoppings')) : 
		[];
   
	// Search trough copy with filter method
	  shoppings = tempShoppings.filter(m => 
		m.title.toLowerCase().includes(searchTerm.toLowerCase()));
	};
  </script>
  
  <!-- Create main body of application -->
  <div class='main'>
	<h1>Shopping List</h1>
  
	<!-- external Components -->
	<Search on:search={event => search(event.detail.searchTerm)} on:clearSearch={clearSearch} />	<!--  -->
	<ShoppingInput on:submitShopping={event => submitShopping(event.detail.shopping)} />	<!-- Create new entries, with data from Input element -->
	<ShoppingList shoppings={shoppings} />	<!-- Display list with entries from variable -->
  </div>
  
  <!-- Sytling -->
  <style>
	  .main {
	  width: 500px;
	  max-width: 100%;
	  padding: 1em;
	  margin: auto;
	  text-align: center;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
  </style>