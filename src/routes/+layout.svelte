<script>
  import './styles.css';
  import Header from '../lib/components/layout/Header.svelte';
  import Footer from '../lib/components/layout/Footer.svelte';

</script>

<Header />

<main>
  <slot /> 
</main>

<Footer />

<style>
  :global(body) {
    margin: 0 !important;
    --orange: rgb(255 172 113);
    --orange-light: rgb(255 236 211);
    --orange-dark: rgba(254, 223, 183, 0.962);
    --green-main: rgba(175,214,131,255);
    --green-secondory: rgba(148, 205, 83, 255);
    --green-dark: rgba(47, 77, 25, 1);
    --green-button: rgba(226, 240, 153, 1);
    --yellow: rgba(254,246,1,255);
    --blue-example: rgba(227,242,255,255);
    font-family: "ABeeZee", sans-serif;
    font-weight: 400;
    font-style: normal;
    /* zoom: 90%; */

    /* min-height: calc(100vh - 140px); */
  }

  main {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* background-color: var(--blue-example); */
    min-height: calc(100vh - 140px);
    /* padding: 20px; */
    height: 1000px;
  }
</style>