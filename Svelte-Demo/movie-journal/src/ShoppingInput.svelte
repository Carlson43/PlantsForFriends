<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // create variables
    let title ='';
    let quantity = 1;

    // update title
    const onTitleChange = e => {
        title = e.target.value;
    }

    // update number
    const onQuantitySelect = e => {
        quantity = e.target.value;
    }

    // create new object to be added
    const submitShopping = () => {
        if (title) {
        dispatch('submitShopping', {
            shopping: {
            title,
            quantity,
            }
        });
        // reset variables
        title = '';
        quantity = 1;
        }
    }
</script>

<!-- Body of element -->
<div class='main'>
    <!-- Input Title -->
    <input 
      placeholder="Item Title" 
      type='text' 
      value={title}
      on:keyup={onTitleChange}
    />
  
    <!-- Add number -->
    <input class="num_input" type="number" value={quantity} on:change={onQuantitySelect}>
  
    <!-- Submit values and execut function to create new object -->
    <button on:click={submitShopping} disabled={!title}>Submit</button>
  </div>
  
  <!-- Styling -->
  <style>
    .main {
      width: 100%;
      display: flex;
    }
    .main input {
      flex: 1;
    }
    .main input.num_input {
      width: 75px;
      margin-right: 10px;
      margin-left: 10px;
    }
    .main button {
      width: 75px;
    }
  </style>
