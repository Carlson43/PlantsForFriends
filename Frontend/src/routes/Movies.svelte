<script>
	import MovieInput from './components/MovieInput.svelte';
	import MovieList from './MovieList.svelte';
	import Search from './Search.svelte';
	import Navbar from './Navbar.svelte'

    let movies = localStorage.getItem('movies') ? 
	  JSON.parse(localStorage.getItem('movies')) : 
	  [];

	const submitMovie = movie => {
	  const updatedMovies = [ ...movies, movie ];
	  localStorage.setItem('movies', JSON.stringify(updatedMovies));
	  movies = updatedMovies;
	}

	const clearSearch = () => {
	  movies = localStorage.getItem('movies') ? 
		JSON.parse(localStorage.getItem('movies')) : 
		[];
	};

	const search = searchTerm => {
	  const tempMovies = localStorage.getItem('movies') ? 
		JSON.parse(localStorage.getItem('movies')) : 
		[];
   
	  movies = tempMovies.filter(m => 
		m.title.toLowerCase().includes(searchTerm.toLowerCase()));
	};
</script>

<body>
    <Navbar/>
    <div class='container-md text-center'>
      <h1>Movie Journal</h1>
      <h3>featuring Bootsrap!</h3>
    
      <Search on:search={event => search(event.detail.searchTerm)} on:clearSearch={clearSearch} />
      <p></p>
      <MovieInput on:submitMovie={event => submitMovie(event.detail.movie)} />
      <p></p>
      <MovieList movies={movies} />
    </div>  
</body>