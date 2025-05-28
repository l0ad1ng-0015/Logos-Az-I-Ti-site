<script>
    let showAdditionalSection1 = false;
    let showAdditionalSection2 = false;
    let showAdditionalSection3 = false;
    let showAdditionalSection4 = false;
  
    function toggleSection1() {
      showAdditionalSection1 = !showAdditionalSection1;
    }
    function toggleSection2() {
      showAdditionalSection2 = !showAdditionalSection2;
    }
    function toggleSection3() {
      showAdditionalSection3 = !showAdditionalSection3;
    }
    function toggleSection4() {
      showAdditionalSection4 = !showAdditionalSection4;
    }
  </script>
  
  <div class="whyus">
    <div class="whyus-container">
      <h1 id="whyus-h">Защо да изберете нас?</h1>
      <div id="whyus-items">
        <div id="square">
          <!-- SVG тук -->
          <p>Игрови подход</p>
          {#if showAdditionalSection1}
            <p class="info">Ние използваме игрови подход, който прави терапията забавна и ефективна за децата. Игровите техники помагат на децата да се чувстват комфортно и да се ангажират активно в процеса на учене.</p>
            <button class="less" on:click={toggleSection1}>Покажи по-малко</button>
          {:else}
            <button class="more" on:click={toggleSection1}>Покажи повече</button>
          {/if}
        </div>
  
        <!-- Повтаряй структурата за останалите квадратчета -->
        <div id="square">
          <!-- SVG тук -->
          <p>Подкрепа</p>
          {#if showAdditionalSection2}
            <p class="info">Ние използваме игрови подход, който прави терапията забавна и ефективна за децата...</p>
            <button class="less" on:click={toggleSection2}>Покажи по-малко</button>
          {:else}
            <button class="more" on:click={toggleSection2}>Покажи повече</button>
          {/if}
        </div>
  
        <div id="square">
          <!-- SVG тук -->
          <p>Грижа и спокойствие</p>
          {#if showAdditionalSection3}
            <p class="info">Ние използваме игрови подход, който прави терапията забавна и ефективна за децата...</p>
            <button class="less" on:click={toggleSection3}>Покажи по-малко</button>
          {:else}
            <button class="more" on:click={toggleSection3}>Покажи повече</button>
          {/if}
        </div>
  
        <div id="square">
          <!-- SVG тук -->
          <p>Постигане на цели</p>
          {#if showAdditionalSection4}
            <p class="info">Ние използваме игрови подход, който прави терапията забавна и ефективна за децата...</p>
            <button class="less" on:click={toggleSection4}>Покажи по-малко</button>
          {:else}
            <button class="more" on:click={toggleSection4}>Покажи повече</button>
          {/if}
        </div>
      </div>
    </div>
  </div>
  


<style>
.whyus-container {
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
}

#square {
  width: 200px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  text-align: center;
}
</style>