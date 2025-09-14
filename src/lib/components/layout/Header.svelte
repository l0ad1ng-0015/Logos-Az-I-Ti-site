<script>
  import { onMount } from 'svelte';
  
  let menuOpen = false;
  let activeDropdown = null;
  let isScrolled = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function toggleDropdown(menu) {
    if (activeDropdown === menu) {
      activeDropdown = null;
    } else {
      activeDropdown = menu;
    }
  }

  function closeMenu() {
    menuOpen = false;
    activeDropdown = null;
  }

  function handleLinkClick() {
    // Close mobile menu when navigating to a page
    closeMenu();
  }

  function handleScroll() {
    isScrolled = window.scrollY > 120;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav class:scrolled={isScrolled}>  
  <a href="/" on:click={handleLinkClick}>
    <img class="logo" src="/logos/nav-logo.png" alt="Лого" width="100px" height="86px"/>
  </a>
  
  <div class="nav-links">
    <ul>
      <!-- За нас dropdown -->
      <li class="dropdown">
        <a href="" class="dropdown-toggle" on:mouseenter={() => toggleDropdown('about')} on:mouseleave={() => activeDropdown = null}>
          За нас
          <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="#2f4d19" d="m7 10l5 5l5-5z"/>
          </svg>
        </a>
        <div class="dropdown-menu" class:show={activeDropdown === 'about'} on:mouseenter={() => activeDropdown = 'about'} on:mouseleave={() => activeDropdown = null}>
          <a href="/za-nas" on:click={handleLinkClick}>За нас</a>
          <a href="/seminari" on:click={handleLinkClick}>Семинари</a>
          <a href="/galeriya" on:click={handleLinkClick}>Галерия</a>
        </div>
      </li>

      <!-- Услуги dropdown -->
      <li class="dropdown">
        <a href="" class="dropdown-toggle" on:mouseenter={() => toggleDropdown('services')} on:mouseleave={() => activeDropdown = null}>
          Услуги
          <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="#2f4d19" d="m7 10l5 5l5-5z"/>
          </svg>
        </a>
        <div class="dropdown-menu" class:show={activeDropdown === 'services'} on:mouseenter={() => activeDropdown = 'services'} on:mouseleave={() => activeDropdown = null}>
          <a href="/uslugi" on:click={handleLinkClick}>Всички услуги</a>
          <a href="/uslugi/ranna-prevenciya" on:click={handleLinkClick}>Ранна превенция</a>
          <a href="/uslugi/konsultaciya-i-diagnostika" on:click={handleLinkClick}>Консултация и диагностика</a>
          <a href="/uslugi/logopedichna-terapiya" on:click={handleLinkClick}>Логопедична терапия</a>
          <a href="/uslugi/omt" on:click={handleLinkClick}>Орофациална миофункционална терапия (ОМТ)</a>
          <a href="/uslugi/podpomagane-i-obucheniya" on:click={handleLinkClick}>Подпомагане и обучения</a>
          <a href="/uslugi/logopedichna-vdahnovitelnica" on:click={handleLinkClick}>Логопедична вдъхновителница</a>
      </li>

      <li><a href="/blog" on:click={handleLinkClick}>Блог</a></li>

      <!-- За вас dropdown -->
      <li class="dropdown">
        <a href="" class="dropdown-toggle" on:mouseenter={() => toggleDropdown('clients')} on:mouseleave={() => activeDropdown = null}>
          За вас
          <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="#2f4d19" d="m7 10l5 5l5-5z"/>
          </svg>
        </a>
        <div class="dropdown-menu" class:show={activeDropdown === 'clients'} on:mouseenter={() => activeDropdown = 'clients'} on:mouseleave={() => activeDropdown = null}>
          <a href="/polezni-resursi" on:click={handleLinkClick}>Полезни ресурси</a>
          <a href="/chesto-zadavani-vuprosi" on:click={handleLinkClick}>Често задавани въпроси (ЧЗВ)</a>
          <a href="/otzivi" on:click={handleLinkClick}>Отзиви</a>
        </div>
      </li>

      <li><a href="/kontakti" on:click={handleLinkClick}>Контакти</a></li>
    </ul>
  </div>

  <!--Links for mobile-->
  <div class="nav-links-mobile" class:open={menuOpen}>
    <ul>
      <li>
        <a href="/" on:click={handleLinkClick}>
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#2f4d19" stroke="#2f4d19" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 12l2-2m0 0l7-7l7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"/>
            </svg>
          </span>
          <span class="text">Начало</span>
        </a>
        <hr>
      </li>

      <!-- Mobile За нас dropdown -->
      <li class="mobile-dropdown">
        <div class="mobile-dropdown-header" on:click={() => toggleDropdown('mobile-about')}>
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
              <path fill="#2f4d19" stroke="#2f4d19" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M12 7.255A6.99 6.99 0 0 0 9 13a7 7 0 0 0 3.392 6M36 7.255A6.99 6.99 0 0 1 39 13a6.99 6.99 0 0 1-3 5.746M12 40v2h24v-2c0-3.727 0-5.591-.609-7.062a8 8 0 0 0-4.33-4.329C29.592 28 27.728 28 24 28s-5.591 0-7.061.609a8 8 0 0 0-4.33 4.33C12 34.409 12 36.273 12 40m32 2v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496M4 42v-1.2c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496"/>
            </svg>
          </span>
          <span class="text">За нас</span>
          <span class="arrow" class:rotated={activeDropdown === 'mobile-about'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#2f4d19" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/>
            </svg>
          </span>
        </div>
        <div class="mobile-submenu" class:show={activeDropdown === 'mobile-about'}>
          <a href="/za-nas" on:click={handleLinkClick}>За нас</a>
          <a href="/seminari" on:click={handleLinkClick}>Семинари</a>
          <a href="/galeriya" on:click={handleLinkClick}>Галерия</a>
        </div>
        <hr>
      </li>

      <!-- Mobile Услуги dropdown -->
      <li class="mobile-dropdown">
        <div class="mobile-dropdown-header" on:click={() => toggleDropdown('mobile-services')}>
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#2f4d19" d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5A2.5 2.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V5H4a2 2 0 0 0-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7S5 16.2 3.5 16.2H2V20a2 2 0 0 0 2 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/>
            </svg>
          </span>
          <span class="text">Услуги</span>
          <span class="arrow" class:rotated={activeDropdown === 'mobile-services'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#2f4d19" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/>
            </svg>
          </span>
        </div>
        <div class="mobile-submenu" class:show={activeDropdown === 'mobile-services'}>
          <a href="/uslugi" on:click={handleLinkClick}>Всички услуги</a>
          <a href="/uslugi/ranna-prevenciya" on:click={handleLinkClick}>Ранна превенция</a>
          <a href="/uslugi/konsultaciya-i-diagnostika" on:click={handleLinkClick}>Консултация и диагностика</a>
          <a href="/uslugi/logopedichna-terapiya" on:click={handleLinkClick}>Логопедична терапия</a>
          <a href="/uslugi/omt" on:click={handleLinkClick}>Орофациална миофункционална терапия (ОМТ)</a>
          <a href="/uslugi/podpomagane-i-obucheniya" on:click={handleLinkClick}>Подпомагане и обучения</a>
          <a href="/uslugi/logopedichna-vdahnovitelnica" on:click={handleLinkClick}>Логопедична вдъхновителница</a>
        </div>
        <hr>
      </li>

      <li>
        <a href="/blog" on:click={handleLinkClick}>
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#2f4d19" d="M4 21q-.825 0-1.412-.587T2 19V3l1.675 1.675L5.325 3L7 4.675L8.675 3l1.65 1.675L12 3l1.675 1.675L15.325 3L17 4.675L18.675 3l1.65 1.675L22 3v16q0 .825-.587 1.413T20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z"/>
            </svg>
          </span>
          <span class="text">Блог</span>
        </a>
        <hr>
      </li>

      <!-- Mobile За вас dropdown -->
      <li class="mobile-dropdown">
        <div class="mobile-dropdown-header" on:click={() => toggleDropdown('mobile-clients')}>
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
              <path fill="#2f4d19" stroke="#2f4d19" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M32.608 7A7 7 0 0 1 36 13a7 7 0 0 1-3.392 6M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8M44 42v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496"/>
            </svg>
          </span>
          <span class="text">За вас</span>
          <span class="arrow" class:rotated={activeDropdown === 'mobile-clients'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#2f4d19" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/>
            </svg>
          </span>
        </div>
        <div class="mobile-submenu" class:show={activeDropdown === 'mobile-clients'}>
          <a href="/polezni-resursi" on:click={handleLinkClick}>Полезни ресурси</a>
          <a href="/chesto-zadavani-vuprosi" on:click={handleLinkClick}>Често задавани въпроси (ЧЗВ)</a>
          <a href="/otzivi" on:click={handleLinkClick}>Отзиви</a>
        </div>
        <hr>
      </li>

      <li>
        <a href="/kontakti" on:click={handleLinkClick}>
          <span class="left-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#2f4d19" d="M11.846 21H6q-.846 0-1.423-.577T4 19v-2.77h3V3h13v6.577l-1 1V4H8v12.23h5.346l-1.5 1.5zm2.385 0v-2.21l5.96-5.934l2.184 2.21L16.441 21zm-4.846-9.846v-1h8.23v1zm0-2.77v-1h8.23v1zm10.806 7.632l.925-.956l-.925-.944l-.95.95z"/>
            </svg>
          </span>
          <span class="text">Контакти</span>
        </a>
        <hr>
      </li>
    </ul>
  </div>

  <button class="green-button">
    <a href="#" on:click={handleLinkClick}>Запиши Час</a>
  </button>

  <!-- Hamburger Icon -->
  <div class="hamburger" class:open={menuOpen} on:click={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>

<!-- Add this spacer div to prevent content from being hidden behind the sticky navbar -->
<div class="navbar-spacer"></div>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--orange-light);
    padding: 0 40px;
    height: 110px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;
  }

  nav.scrolled {
    height: 80px;
    padding: 0 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  /* Spacer to prevent content from being hidden behind sticky navbar */
  .navbar-spacer {
    height: 110px;
    transition: height 0.3s ease;
  }

  nav.scrolled + .navbar-spacer {
    height: 80px;
  }

  nav.scrolled .logo {
    width: 70px;
    height: 60px;
  }

  nav.scrolled .nav-links a {
    font-size: 1.1em;
  }

  nav.scrolled .green-button {
    font-size: 1.1em;
    padding: 7px 20px;
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
    position: relative;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--green-dark);
    font-size: 1.2em;
    font-weight: bolder;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .nav-links a:hover {
    color: var(--green-main);
    transition: 0.3s;
  }

  /* Desktop dropdown styles */
  .dropdown {
    position: relative;
  }

  .dropdown-arrow {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  .dropdown:hover .dropdown-arrow {
    transform: rotate(180deg);
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--orange-light);
    min-width: 200px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    border-radius: 8px;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    border: 1px solid #e0e0e0;
  }

  .dropdown-menu.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .dropdown-menu a {
    display: block;
    padding: 12px 16px;
    color: var(--green-dark);
    text-decoration: none;
    font-size: 1em;
    font-weight: normal;
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.2s ease;
  }

  .dropdown-menu a:last-child {
    border-bottom: none;
    border-radius: 0 0 8px 8px;
  }

  .dropdown-menu a:first-child {
    border-radius: 8px 8px 0 0;
  }

  .dropdown-menu a:hover {
    background-color: #f8f9fa;
    color: var(--green-main);
  }

  /* Mobile dropdown styles */
  .mobile-dropdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.2s ease;
  }

  .mobile-dropdown-header:hover {
    background-color: rgba(47, 77, 25, 0.05);
  }

  .mobile-dropdown .left-icon {
    display: flex;
    align-items: center;
    margin-right: 15px;
  }

  .mobile-dropdown .text {
    flex-grow: 1;
    text-align: left;
    font-size: 1em;
    color: #2f4d19;
  }

  .mobile-dropdown .arrow {
    display: flex;
    align-items: center;
    margin-left: 12px;
    width: 19px;
    height: 19px;
    transition: transform 0.3s ease;
  }

  .mobile-dropdown .arrow.rotated {
    transform: rotate(90deg);
  }

  .mobile-submenu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background-color: rgba(47, 77, 25, 0.03);
    margin: 0 16px;
    border-radius: 8px;
  }

  .mobile-submenu.show {
    max-height: 350px;
    padding: 8px 0;
  }

  .mobile-submenu a {
    display: block;
    padding: 12px 20px;
    color: var(--green-dark);
    text-decoration: none;
    font-size: 0.9em;
    border-left: 3px solid transparent;
    transition: all 0.2s ease;
  }

  .mobile-submenu a:hover {
    background-color: rgba(47, 77, 25, 0.08);
    border-left-color: var(--green-main);
    padding-left: 24px;
  }

  .green-button {
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
    background-color: var(--green-button-hover);
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
    position: relative;
    cursor: pointer;
    z-index: 1001;
    background-color: rgb(253, 218, 176);
    border-radius: 8px;
    border: 8px solid rgb(253, 218, 176);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .hamburger:hover {
    background-color: rgb(249, 206, 154);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    border: 8px solid rgba(249, 206, 154);
    transition: 0.4s;
  }

  .hamburger span {
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: black;
    left: 0;
    transition: all 0.3s ease-in-out;
  }

  .hamburger span:nth-child(1) {
    top: 0;
  }

  .hamburger span:nth-child(2) {
    top: 8px;
  }

  .hamburger span:nth-child(3) {
    top: 16px;
  }

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

    nav.scrolled {
      height: 70px;
      padding: 0 15px;
    }

    .navbar-spacer {
      height: 95px;
    }

    nav.scrolled + .navbar-spacer {
      height: 70px;
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 75px;
    }

    nav.scrolled .logo {
      width: 60px;
      height: 55px;
    }

    .nav-links a {
      display: flex;
      font-size: 1.1em;
    }

    nav.scrolled .nav-links a {
      font-size: 1em;
    }

    .nav-links ul {
      gap: 40px;
    }

    nav.scrolled .nav-links ul {
      gap: 30px;
    }

    .green-button {
      font-size: 1.1em;
      padding: 7px 20px;
    }

    nav.scrolled .green-button {
      font-size: 1em;
      padding: 5px 15px;
    }
  }

  @media screen and (max-width: 755px) {
    nav {
      height: 95px;
      margin: none !important;
    }

    nav.scrolled {
      height: 70px;
    }

    .navbar-spacer {
      height: 95px;
    }

    nav.scrolled + .navbar-spacer {
      height: 70px;
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 87px;
      height: 75px;
    }

    nav.scrolled .logo {
      width: 65px;
      height: 55px;
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

    nav.scrolled .nav-links-mobile {
      top: 70px;
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
      justify-content: space-between;
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

    .nav-links-mobile .left-icon svg {
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
  }

  @media screen and (max-width: 450px) {
    nav {
      height: 90px;
    }

    nav.scrolled {
      height: 65px;
    }

    .navbar-spacer {
      height: 90px;
    }

    nav.scrolled + .navbar-spacer {
      height: 65px;
    }

    .logo {
      width: 78px;
      height: 67px;
    }

    nav.scrolled .logo {
      width: 58px;
      height: 50px;
    }

    .nav-links-mobile {
      top: 90px;
    }

    nav.scrolled .nav-links-mobile {
      top: 65px;
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

    nav.scrolled {
      height: 60px;
    }

    .navbar-spacer {
      height: 90px;
    }

    nav.scrolled + .navbar-spacer {
      height: 60px;
    }

    .logo {
      width: 76px;
      height: 65px;
    }

    nav.scrolled .logo {
      width: 55px;
      height: 47px;
    }

    .green-button {
      font-size: 0.95em;
      padding: 7px 10px;
    }

    nav.scrolled .green-button {
      font-size: 0.9em;
      padding: 5px 8px;
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

    .nav-links-mobile {
      top: 90px;
    }

    nav.scrolled .nav-links-mobile {
      top: 60px;
    }
  }
</style>