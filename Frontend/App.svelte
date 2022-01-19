<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./src/routes/Home.svelte";
	import About from "./src/routes/About.svelte";
	import Blog from "./src/routes/Blog.svelte";
	import Movies from "./src/routes/Movies.svelte";

	export let url = "";
</script>

<Router url="{url}">
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="blog">Blog</Link>
		<Link to="movies">Movies</Link>
	</nav>
	<div>
		<!-- <Route path="blog/:id" component="{BlogPost}" /> -->
		<Route path="blog" component="{Blog}" />
		<Route path="about" component="{About}" />
		<Route path="movies" component="{Movies}"/>
		<Route path="/"><Home /></Route>
	</div>
</Router> 