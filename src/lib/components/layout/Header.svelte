<script>
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>


<nav>  
  <a href="/">
    <img class="logo" src="/logos/nav-logo.png" alt="Лого" width="100px" height="86px"/>
  </a>
  
  <div class="nav-links">
    <ul>
      <!-- <li><a href="#">Начало</a></li> -->
      <li><a href="#">За нас</a></li>
      <li><a href="#">Услуги</a></li>
      <li><a href="#">Блог</a></li>
      <li><a href="#">За вас</a></li>
      <li><a href="#">Контакти</a></li>
    </ul>
  </div>

  <!--Links for monbile-->
  <div class="nav-links-mobile" class:open={menuOpen}>
    <ul>
      <li>
        <a href="#">
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><!-- Icon from HeroIcons v1 Outline by Refactoring UI Inc - https://github.com/tailwindlabs/heroicons/blob/master/LICENSE --><path fill="#2f4d19" stroke="#2f4d19" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 12l2-2m0 0l7-7l7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"/></svg>
          </span>
          <span class="text">Начало</span>
          <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="#2f4d19" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/></svg>
          </span>
        </a>
        <hr>
      </li>
      <li>
        <a href="#">
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...$$props}><!-- Icon from IconPark Outline by ByteDance - https://github.com/bytedance/IconPark/blob/master/LICENSE --><path fill="#2f4d19" stroke="#2f4d19" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M12 7.255A6.99 6.99 0 0 0 9 13a7 7 0 0 0 3.392 6M36 7.255A6.99 6.99 0 0 1 39 13a6.99 6.99 0 0 1-3 5.746M12 40v2h24v-2c0-3.727 0-5.591-.609-7.062a8 8 0 0 0-4.33-4.329C29.592 28 27.728 28 24 28s-5.591 0-7.061.609a8 8 0 0 0-4.33 4.33C12 34.409 12 36.273 12 40m32 2v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496M4 42v-1.2c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496"/></svg>
          </span>
          <span class="text">За нас</span>
          <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="#2f4d19" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/></svg>
          </span>
        </a>
        <hr>
      </li>
      <li>
        <a href="#">
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="#2f4d19" d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5A2.5 2.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V5H4a2 2 0 0 0-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7S5 16.2 3.5 16.2H2V20a2 2 0 0 0 2 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg>
          </span>
          <span class="text">Услуги</span>
          <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="#2f4d19" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/></svg>
          </span>
        </a>
        <hr>
      </li>
      <li>
        <a href="#">
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#2f4d19" d="M4 21q-.825 0-1.412-.587T2 19V3l1.675 1.675L5.325 3L7 4.675L8.675 3l1.65 1.675L12 3l1.675 1.675L15.325 3L17 4.675L18.675 3l1.65 1.675L22 3v16q0 .825-.587 1.413T20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z"/></svg>
          </span>
          <span class="text">Блог</span>
          <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="#2f4d19" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/></svg>
          </span>
        </a>
        <hr>
      </li>
      <li>
       <a href="#">
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...$$props}><!-- Icon from IconPark Outline by ByteDance - https://github.com/bytedance/IconPark/blob/master/LICENSE --><path fill="#2f4d19" stroke="#2f4d19" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M32.608 7A7 7 0 0 1 36 13a7 7 0 0 1-3.392 6M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8M44 42v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496"/></svg>
          </span>
          <span class="text">За вас</span>
          <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="#2f4d19" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/></svg>
          </span>
        </a>
        <hr>
      </li>
      <li>
        <a href="#">
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#2f4d19" d="M11.846 21H6q-.846 0-1.423-.577T4 19v-2.77h3V3h13v6.577l-1 1V4H8v12.23h5.346l-1.5 1.5zm2.385 0v-2.21l5.96-5.934l2.184 2.21L16.441 21zm-4.846-9.846v-1h8.23v1zm0-2.77v-1h8.23v1zm10.806 7.632l.925-.956l-.925-.944l-.95.95z"/></svg>
          </span>
          <span class="text">Контакти</span>
          <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="#2f4d19" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/></svg>
          </span>
        </a>
        <hr>
      </li>
    </ul>
  </div>

  <button class="green-button">
    <a href="#">Запиши Час</a>
  </button>

  <!-- Hamburger Icon -->
  <div class="hamburger" class:open={menuOpen} on:click={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <!-- <div class="hamburger" on:click={toggleMenu}>
    {menuOpen ? '✖' : '☰'}
  </div> -->
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--orange-light);
    padding: 0 40px;
    height: 110px;
    /* position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0; */
  }

  .nav-links {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 20px;
  }

  .nav-links-mobile {
    display: none;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 20px;
  }

  .nav-links ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 50px;
  }

  .nav-links ul li {
    display: inline;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--green-button);
    font-size: 1.2em;
    font-weight: bolder;
  }

  .nav-links a:hover {
    color: var(--green-main);
    transition: 0.3s;
  }

  .green-button {
    /* width: 200px;
    height: 50px; */
    background-color: var(--green-button);
    border: none;
    border-radius: 10px;
    padding: 9px 30px;
    font-size: 1.3em;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 3px #88888884;
  }

  .green-button:hover {
    background-color: var(--blue-example);
    transition: 0.5s;
    box-shadow: 4px 6px #888888b1;
  }

  .green-button a {
    text-decoration: none;
    color: black;
  }

  .hamburger {
    display: none;
    width: 25px;
    height: 18px;
    /* border: 10px solid var(--orange-dark); */
    position: relative;
    cursor: pointer;
    z-index: 1001;
    background-color: rgb(253, 218, 176); /*soft peachy match*/
    border-radius: 8px;
    border: 8px solid rgb(253, 218, 176); /*var(--green-button)*/
    /* padding: 8px; */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

  .hamburger:hover {
    background-color: rgb(249, 206, 154); /* slightly deeper on hover */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    border: 8px solid rgba(249, 206, 154);
    transition: 0.4s;
  }

  .hamburger span {
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: black; /* use your theme color */
    /* border-radius: 2px; */
    left: 0;
    transition: all 0.3s ease-in-out;
  }

  /* Top line */
  .hamburger span:nth-child(1) {
    top: 0;
  }

  /* Middle line */
  .hamburger span:nth-child(2) {
    top: 8px;
  }

  /* Bottom line */
  .hamburger span:nth-child(3) {
    top: 16px;
  }

  /* Animate to X */
  .hamburger.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 8px;
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 8px;
  }

  @media screen and (max-width: 955px) {
    nav {
      height: 95px;
      padding: 0 20px;
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 75px;
    }

    .nav-links a {
      display: flex;
      font-size: 1.1em;
    }

    .nav-links ul {
      gap: 30px;
    }

    .green-button {
      font-size: 1.1em;
      padding: 7px 20px;
    }
  }

  /* Mobile qieries for smaller devices --> */
  @media screen and (max-width: 755px) {
    nav {
      height: 95px;
      margin: none !important;
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 87px;
      height: 75px;
    }

    .hamburger {
      display: flex;
    }

    .nav-links {
      display: none !important;
    }

    .nav-links-mobile {
      display: none;
      position: absolute;
      top: 95px;
      left: 0;
      width: 100%;
      background-color: var(--orange-light);
      flex-direction: column;
      align-items: center;
      padding: 8px 0 16px 0;
      z-index: 1000;
      transition: 0.3s;
    }

    .nav-links-mobile.open {
      display: flex;
    }

    .nav-links-mobile ul {
      list-style: none;
      padding: 0;
      margin: 0;
      width: 95%;
    }

    .nav-links-mobile a {
      display: flex;
      align-items: center;
      justify-content: space-between; /* това праща стрелката вдясно */
      padding: 16px;
      text-decoration: none;
      border-radius: 8px;
      color: #2f4d19;
      transition: background-color 0.2s ease;
    }

    .nav-links-mobile .left-icon {
      display: flex;
      align-items: center;
      margin-right: 15px;
    }

    .nav-links-mobile .text {
      flex-grow: 1;
      text-align: left;
      font-size: 1em;
    }

    .nav-links-mobile .arrow {
      display: flex;
      align-items: center;
      margin-left: 12px;
      width: 19px;
      height: 19px;
    }

    .nav-links-mobile .left-icon svg, .arrow svg {
      width: 20px;
      height: 20px;
      fill: #2f4d19;
    }

    .nav-links-mobile hr {
      width: 95%;
      height: 1px;
      margin: 0 auto;
      border: none;
      background-color: #a6a6a6;
    }

    /* .green-button {
      display: none;
    } */
  }

  @media screen and (max-width: 450px) {
    nav {
      height: 90px;
    }

    .logo {
      width: 78px;
      height: 67px;
    }


    .green-button {
      /* font-size: 1.05em;
      padding: 7px 12px; */
    }

    .nav-links-mobile {
      top: 90px;
    }

    .nav-links a {
      font-size: 1em;
    }

    .nav-links-mobile .text {
      font-size: 0.9em;
    }
  }

  @media screen and (max-width: 350px) {
    nav {
      height: 90px;
    }
    .logo {
      width: 76px;
      height: 65px;
    }
    .green-button {
      font-size: 0.95em;
      padding: 7px 10px;
    }
    .nav-links a {
      font-size: 0.9em;
    }
    .nav-links-mobile a {
      font-size: 0.9em;
    }

    .hamburger {
      border: 6px solid rgb(253, 218, 176); 
    }
  }

  

  /* .logo img {
    width: 143px;
    height: 123px;
  }

  .nav-links-mobile {
    display: flex;
    gap: 30px;
  }

  .nav-links ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .nav-links li {
    margin-right: 20px;
  }

  .nav-links a {
    text-decoration: none;
    color: #000;
    font-size: 1.4em;
    font-weight: bolder;
  }

  .green-button {
    background-color: var(--green-main);
    border: none;
    border-radius: 16px;
    padding: 5px 20px;
    font-size: 1em;
    font-weight: light;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 3px #888888b1;
  }

  .green-button:hover {
    background-color: var(--blue-example);
    transition: 0.5s;
    box-shadow: 4px 6px #888888b1;
  } */
</style>


<!-- 
 FIRST FIRST ONE

<script>
  // export let title = "Моят сайт";
</script>

<nav>
  <div class="logo">
    <a href="/">
      <img src="/logos/nav-logo.png" alt="Лого" width="137" height="143.73" />
    </a>
  </div>
  <div class="nav-divs">
    <div class="nav-contacts">
      <div class="nav-location">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><path fill="#2f4d19" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"/></svg> ж.к.“Овча купел-1," бл.411, вх."Г", София
      </div>
      <div class="nav-contacts-info">
        <ul>
          <li style="border-right: 2px solid #ffae6c ">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
            Тел :  
            <a href="tel:087 686 0602" style="margin-left: 5px;"> 087 686 0602</a></li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>
            Имейл :
            <a href="mailto:logos-aziti@abv.bg" style="margin-left: 5px;">logos-aziti@abv.bg</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-links">
      <ul>
        <li>
          <a href="#">Начало</a>
        </li>
        <li>
          <a href="#">За нас</a>
        </li>
        <li>
          <a href="#">Блог</a>
        </li>
        <li>
          <a href="#">За вас</a>
        </li>
        <li>
          <a href="#">За вас</a>
        </li>
      </ul>
      <button class="green-button">
        <a href="#">Запишете час</a>
      </button>
    </div>
  </div>
</nav>

<style>
nav {
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  background-color: var(--orange);
}

.logo {
  padding: 25px 65px;
  border-right: 2px solid #ffae6c ; /*#C7C7C7 */
}

.nav-divs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  font-size: 1.25em;
}

.nav-divs svg {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}


.nav-location {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

}

.nav-contacts {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  border-bottom: 2px solid #ffae6c ; /*#C7C7C7 */
  flex: 1;
}

.nav-contacts-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 20px 50px; */
}

.nav-contacts-info ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
  /* margin: 0 16px 16px; */
}

.nav-contacts-info ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}


.nav-contacts-info ul li a {
  color: #000;
  text-decoration: none;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* margin: 10px; */
  padding: 20px;
  gap: clamp(25px, 40px, 60px);
}

.nav-links ul {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 50px;
}

.nav-links ul li {
  display: inline;
}

.nav-links a {
  text-decoration: none;
  color: #000;
  font-size: 1.4em;
  font-weight: bolder;
}


.green-button {
  background-color: var(--green-main);
  border: none;
  border-radius: 16px;
  padding: 5px 20px;
  font-size: 1em;
  font-weight: light;
  color: #fff;
  cursor: pointer;
  box-shadow: 2px 3px #888888b1;
}

.green-button:hover {
  background-color: var(--blue-example);
  transition: 0.5s;
  box-shadow: 4px 6px #888888b1;
}

.green-button a {
  text-decoration: none;
  color: black;
}
</style>




<!-- <script>
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9d1b1; /* Мек фон */
    padding: 15px 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #FF8C42; /* Оранжево за логото */
  }

  .nav-links {
    display: flex;
    gap: 20px;
  }

  .nav-links a {
    text-decoration: none;
    color: #4A4A4A; /* Тъмен текст за четимост */
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: #FF8C42; /* Акцент в оранжево */
  }

  .cta-button {
    background: #71de9b; /* Основен зелен бутон */
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.3s ease;
  }

  .cta-button:hover {
    background: #5ec88a; /* По-тъмен нюанс при hover */
  }

  .menu-icon {
    display: none;
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 60px;
      right: 30px;
      background: #FDF7EC;
      padding: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .nav-links.open {
      display: flex;
    }

    .menu-icon {
      display: block;
    }
  }
</style>

<nav>
  <div class="logo">Лого</div>
  
  <div class="menu-icon" on:click={toggleMenu}>
    {menuOpen ? '✖' : '☰'}
  </div>

  <div class="nav-links {menuOpen ? 'open' : ''}">
    <a href="#">Начало</a>
    <a href="#">За нас</a>
    <a href="#">Услуги</a>
    <a href="#">Контакти</a>
  </div>

  <a href="#" class="cta-button">Запиши час</a>
</nav> --> 
