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
    --background: rgb(255 249 238); 
    --orange: rgb(255 172 113);
    --orange-light: rgb(255 236 211);
    --orange-dark: rgba(254, 223, 183, 0.962);
    --green-main: rgba(175,214,131,255);
    --green-secondory: rgba(148, 205, 83, 255);
    --green-dark: rgba(47, 77, 25, 1);
    --green-button: rgb(226, 240, 153);
    --green-button-hover: rgb(233, 244, 176);
    --yellow: rgba(254,246,1,255);
    --blue-example: rgba(227,242,255,255);
    font-weight: 400;
    font-style: normal;
    zoom: 90%;
    
    /* min-height: calc(100vh - 140px); */
  }
  
  :global(h1, h2, h3, h4, h5, h6) {
    font-family: "ABeeZee", sans-serif !important;
  }

  main {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    min-height: calc(100vh - 140px);
    padding: 20px;
    /* height: 2000px; */
    background-color: var(--background);
  }
</style>