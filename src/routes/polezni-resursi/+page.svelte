<script>
  // SEO
  export let title = "Полезни ресурси | Логос – Аз и Ти";
  export let description =
    "Тук ще намерите различни ресурси, които могат да ви помогнат в постигането на вашите цели. Независимо дали търсите информация, инструменти или вдъхновение, ние сме тук, за да ви подкрепим.";

  export let data;
  const items = data.items || [];
  // филтри
  let q = "";
  let type = "all";
  const exts = Array.from(new Set(data.items.map((i) => i.ext))).sort();

  $: filtered = (data.items || []).filter((i) => {
    const t = q.trim().toLowerCase();
    const matchText = t
      ? i.title.toLowerCase().includes(t) ||
        i.filename.toLowerCase().includes(t)
      : true;
    const matchType = type === "all" ? true : i.ext === type;
    return matchText && matchType;
  });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
</svelte:head>

<!-- Heading -->
<div class="heading">
  <div class="heading-container">
    <div id="h-left">
      <h1>Полезни ресурси</h1>
      <p>
        Тук ще намерите различни ресурси, които могат да Ви помогнат в
        постигането на Вашите цели. Независимо дали търсите информация,
        инструменти или вдъхновение, ние сме тук, за да Ви подкрепим.
      </p>
    </div>
    <div id="h-right">
      <svg
        class="first-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="110.8419 122.2011 248.1 248.1"
        width="70px"
        height="70px"
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
          transform="matrix(1, 0, 0, 1, 106.89191866905466, 118.25107206295286)"
        >
          <g transform="scale(0.5,0.5)">
            <path
              d="M256,7.9c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1c0,-137 -111.1,-248.1 -248.1,-248.1z"
              fill="#feecd3"
            />
            <g>
              <path
                d="M323,88.1h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.9c0,-4.9 -4,-8.9 -8.9,-8.9z"
                fill="#ffac71"
              />
              <text
                style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                transform="matrix(3.565438, 0, 0, 3.140884, -423.405016, -705.154641)"
                x="177.985"
                y="290.296">A</text
              >
            </g>
            <g>
              <path
                d="M243.6,245.5h-133c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0.1,-5 -3.9,-9 -8.8,-9z"
                fill="#eb9783"
              />
              <text
                style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                transform="matrix(3.62775, 0, 0, 3.157958, -515.098067, -551.446882)"
                x="177.985"
                y="290.296">Б</text
              >
            </g>
            <g>
              <g>
                <path
                  d="M402.4,245.5h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0,-5 -4,-9 -8.9,-9z"
                  fill="#edc92f"
                />
                <text
                  style="fill: rgb(241, 230, 230); font-family: Bahnschrift; font-size: 41px; white-space: pre;"
                  transform="matrix(3.581682, 0, 0, 3.157822, -347.678975, -552.280256)"
                  x="177.985"
                  y="290.296">B</text
                >
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg
        class="second-svg"
        style="right: 0;  display: flex; justify-content: end"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="70px"
        height="70px"
        viewBox="0,0,255.99055,255.99055"
      >
        <g transform="translate(38.39858,38.39858) scale(0.7,0.7)"
          ><g
            fill="#e2f099"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
            ><path
              d="M127.99528,310.84567c-100.98549,0 -182.8504,-81.86491 -182.8504,-182.8504v0c0,-100.98549 81.86491,-182.8504 182.8504,-182.8504v0c100.98549,0 182.8504,81.86491 182.8504,182.8504v0c0,100.98549 -81.86491,182.8504 -182.8504,182.8504z"
              id="shape"
            ></path></g
          ><g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
            ><g transform="scale(5.12,5.12)"
              ><path
                d="M25,4.0625c-12.58594,0 -22.9375,8.86328 -22.9375,19.9375c0,6.42578 3.5625,12.09375 8.9375,15.71875c-0.00781,0.21484 0,0.54688 -0.28125,1.59375c-0.34766,1.29297 -1.03516,3.125 -2.46875,5.15625l-1.03125,1.4375l1.78125,0.03125c6.17578,0.02734 9.75391,-4.03125 10.3125,-4.6875c1.82422,0.40625 3.72266,0.6875 5.6875,0.6875c12.58203,0 22.9375,-8.86328 22.9375,-19.9375c0,-11.07422 -10.35547,-19.9375 -22.9375,-19.9375zM25,5.9375c11.71484,0 21.0625,8.15234 21.0625,18.0625c0,9.91016 -9.34766,18.0625 -21.0625,18.0625c-2.00391,0 -3.94922,-0.24219 -5.78125,-0.6875l-0.5625,-0.125l-0.375,0.46875c0,0 -2.89062,3.25781 -7.5,4.03125c0.83203,-1.49219 1.46484,-2.87891 1.75,-3.9375c0.39844,-1.48047 0.40625,-2.5 0.40625,-2.5v-0.5l-0.4375,-0.28125c-5.22656,-3.3125 -8.5625,-8.58984 -8.5625,-14.53125c0,-9.91016 9.34375,-18.0625 21.0625,-18.0625z"
              ></path></g
            ></g
          ></g
        >
      </svg>
    </div>
  </div>
</div>


<!-- Списък с ресурси -->
{#if !items.length}
<div class="empty"><h3>Все още няма публикувани ресурси. Моля, върнете се по-късно.</h3></div>
{:else}
  <!-- Контроли -->
  <div class="controls">
    <input
      type="search"
      placeholder="Търсене по име или файл..."
      bind:value={q}
      aria-label="Търсене"
    />
    <select bind:value={type} aria-label="Филтър по тип">
      <option value="all">Всички типове</option>
      {#each exts as e}
        <option value={e}>{e.toUpperCase()}</option>
      {/each}
    </select>
  </div>

  <ul class="grid">
    {#each filtered as item}
      <li class="card">
        <div class="card-top">
          <span class="badge">{item.ext.toUpperCase()}</span>
          <a class="btn" href={item.href} download>Свали</a>
        </div>

        <!-- заглавието води към детайлната страница -->
         <a class="title" href={`/polezni-resursi/${item.id}`}>{item.title}
          <p class="desc">{item.description}</p>
        </a>

        {#if item.tags?.length}
          <div class="tags">
            {#each item.tags as tag}
              <span class="tag">#{tag}</span>
            {/each}
          </div>
        {/if}
      </li>
    {/each}
  </ul>
{/if}

<style>
  /* ---- 0. Global ---- */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* ---- 1. Heading (kept mostly as before) ---- */
  .heading {
    background-color: var(--orange);
    text-align: left;
    border-radius: 16px;
    padding: 40px 0 40px 40px;
    margin: 30px 0 40px 0;
    color: #fff;
  }

  .heading-container {
    display: flex;
    justify-content: space-between;
    width: 97%;
    max-width: 1000px;
    margin: 0 auto;
  }

  #h-left {
    width: 50%;
  }

  #h-right {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 20px;
    margin: 20px 0;
    width: 45%;
  }

  .heading h1 {
    font-size: 3.3em;
    margin-bottom: 20px;
    font-family: "ABeeZee", sans-serif;
  }

  .first-svg {
    transform: translateY(-115%);
  }

  .second-svg {
    align-self: flex-end;
    transform: translateY(50%);
  }

  .heading p {
    font-size: 1.2em;
    line-height: 1.5;
    color: var(--dark-gray);
  }

  /* ---- 2. Controls ---- */
  .controls {
    display: flex;
    align-items: center;
    width: 97%;
    max-width: 1030px;
    margin-bottom: 24px;
    gap: 12px;
  }
  .controls input[type="search"] {
    flex: 1;
    padding: 10px 12px;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    font-size: 1.25rem;
    outline: none;
    background: #fff;
  }
  .controls input[type="search"]:focus {
    border-color: var(--orange-light);
    box-shadow: 0 0 0 3px var(--orange-light);
  }
  .controls select {
    padding: 10px 12px;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    font-size: 1.25rem;
    background: #fff;
  }

  /* ---- 3. Improved Grid & Cards ---- */
  .grid {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
    max-width: 1030px;
    width: 97%;
    margin: 0 auto 40px auto;
    padding: 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    padding: 14px;
    gap: 10px;
    min-height: 160px;
    border: 1px solid var(--orange);
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 6px 18px rgba(22, 22, 22, 0.04);
    transition: transform 180ms ease, box-shadow 180ms ease;
  }
  .card:focus-within,
  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(22, 22, 22, 0.07);
  }

  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    font-size: 1.25rem !important;
  }

  .badge {
    display: inline-block;
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 999px;
    background: #eef7d8;
    color: #577a0a;
    border: 1px solid #e2f099;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .btn {
    text-decoration: none;
    background: var(--orange);
    color: #fff;
    border-radius: 999px;
    padding: 8px 12px;
    font-size: 0.95rem;
    font-weight: 700;
    display: inline-block;
    transition: transform 140ms ease, opacity 140ms ease;
  }
  .btn:hover,
  .btn:focus {
    background: var(--orange-dark);
    border: 1px solid var(--orange-light);
    transition: 0.3s;
    transform: translateY(-2px);
    opacity: 0.95;
  }

  .title {
    color: #1f2937;
    font-size: 1.15rem;
    font-weight: 700;
    text-decoration: none;
    line-height: 1.3;
    transition: color 120ms ease;
  }
  .title:hover,
  .title:focus {
    color: var(--orange);
    text-decoration: underline;
  }

  .desc {
    color: #626262;
    font-size: 1rem;
    line-height: 1.45;
    margin-top: 4px;
    flex: 1 0 auto;
  }

  .tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 8px;
  }
  .tag {
    background: #f2f4f7;
    color: #334155;
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 0.82rem;
  }

  /* focus-visible (keyboard) */
  .btn:focus,
  .title:focus {
    outline: 3px solid rgba(255, 161, 64, 0.18);
    outline-offset: 3px;
  }

  /* Empty state */
  .empty {
    max-width: 1000px;
    width: 97%;
    padding: 20px;
    text-align: center;
    font-size: 1.3rem; 
    margin-top: 40px; 
    margin-bottom: 20px
  }

  /* ---- Media query - 955 ---- */
  @media screen and (max-width: 955px) {
    /* ---- 1. Heading ---- */
    .heading {
      margin: 30px 30px 40px 30px;
    }

    .first-svg {
      transform: translateY(-280%);
    }

    .second-svg {
      transform: translateY(285%);
      align-self: flex-start;
    }

    /* prefer two columns on medium screens */
    .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      max-width: 900px;
      width: 93%;
    }

    /* keep controls inline but tighten spacing */
    .controls {
      gap: 10px;
      margin-top: 8px;
      width: 93%;
    }
    .controls input[type="search"],
    .controls select {
      font-size: 1rem;
    }
  }

  /* ---- Media query - 755 ---- */
  @media screen and (max-width: 755px) {
    /* ---- 1. Heading ---- */
    .heading {
      padding: 35px 35px 10px 35px;
      margin: 20px 0 !important;
      text-align: center;
      margin: 0 auto;
    }

    .heading-container {
      flex-direction: column;
    }

    #h-left,
    #h-right {
      width: 100%;
      text-align: center;
      font-size: larger;
      margin: 0 auto;
    }

    #h-right {
      margin-top: 25px;
      padding: 20px 0;
    }

    .heading h1 {
      font-size: 2.5em;
    }

    .heading p {
      text-align: center !important;
      margin: 0 auto !important;
    }

    .first-svg {
      transform: translateY(-40%);
    }

    .second-svg {
      transform: translateY(10%);
      align-self: flex-start;
    }

    /* single-column grid */
    .grid {
      grid-template-columns: 1fr;
      gap: 14px;
      width: 95%;
      max-width: 700px;
    }

    .desc{
      font-size: 1rem !important;
    font-weight: 500;
    line-height: 1.45 !important;
    }

    /* controls stack vertically and stretch to full width */
    .controls {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      width: 95%;
      max-width: 700px;
      margin: 12px auto 20px auto;
    }
    .controls input[type="search"],
    .controls select {
      width: 100%;
      font-size: 1rem;
    }
  }
</style>
