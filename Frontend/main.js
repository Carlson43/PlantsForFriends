// import App from './App.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'Internet',
// 		newProp: 'Hi'
// 	}
// });

// export default app;

import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
  hydrate: true
});