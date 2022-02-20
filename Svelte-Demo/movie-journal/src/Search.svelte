<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // define search term
    let searchTerm = '';
    const search = event => {
            searchTerm = event.target.value;

            // If term exists, search
            if (searchTerm) {
                dispatch('search', {
                searchTerm,
            });
            // Else clearSearch
            } else {
                dispatch('clearSearch', {});
            }
        // }     
    }
</script>

<!-- Search Input -->
<input 
    placeholder="Search Your Items" 
    value={searchTerm}
    on:keyup={search}
/>

<!-- Styling -->
<style>
    input {
        width: 100%;
    }
</style>