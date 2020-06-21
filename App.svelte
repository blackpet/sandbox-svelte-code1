<script>
  import Button from "./Button.svelte";
  import db from "./src/firebase";

  let courses = [];

  db.collection("courses").onSnapshot(data => {
    courses = data.docs.map(doc => doc.data());
  });
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
	<h1>Hello CodeSandbox</h1>
	<h2>Start editing to see some magic happen!</h2>

  <div>
  {#each courses as crs}
    <ul>
      <li>subjCd: {crs.subjCd}</li>
      <li>title: {crs.title}</li>
    </ul>
  {/each}
  </div>

	<Button />
</main>