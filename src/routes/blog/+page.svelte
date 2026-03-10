<script>
  export let title = "Блог | Логос – Аз и Ти";
  export let description =
    "Блогът на ОЦ Логос „Аз и ти“ скоро ще споделя полезни статии, логопедични съвети и насоки за родители относно развитието на речта, езика и комуникацията при децата.";

  export let data;

  $: items = data?.items ?? [];
  $: allTags = data?.allTags ?? [];

  let q = "";
  let tag = "Всички";

  $: filtered = items.filter((p) => {
    const text = (
      p.title +
      " " +
      p.excerpt +
      " " +
      (p.keywords || []).join(" ")
    ).toLowerCase();
    const okQ = q.trim() ? text.includes(q.trim().toLowerCase()) : true;
    const okTag = tag === "Всички" ? true : (p.keywords || []).includes(tag);
    return okQ && okTag;
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
      <h1>Блог</h1>
      <p>
        Добре дошли в нашия блог, където споделяме авторски статии, полезни
        съвети, вдъхновяващи истории от екипа и на хора, постигнали значителни
        успехи, благодарение на нашите услуги.
      </p>
      <!-- Прочетете техните истории и мнения за постигнатите резултати и положителната промяна в ежедневието им. -->
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

{#if !items.length}
  <div class="empty">
    <h3>Очаквайте нови статии и съвети в нашия блог съвсем скоро!</h3>
  </div>
{:else}
  <section class="wrap">
    <header class="hero">
      <div class="hero__text">
        <div class="controls">
          <input
            type="search"
            placeholder="Търсене ключова дума, заглавие или откъс от статията..."
            bind:value={q}
            aria-label="Търсене"
          />

          <!-- <select bind:value={tag} aria-label="Филтър по тип">
            <option>Всички</option>
            {#each allTags as t}
              <option value={t}>{t}</option>
            {/each}
          </select>
        </div>

        <div class="meta">
          <span>{filtered.length} резултата</span>
        </div> -->
        </div>
      </div>
    </header>

    <div class="grid">
      {#each filtered as post}
        <a class="card" href={`/blog/${post.id}`} aria-label={post.title}>
          <div class="card__img">
            {#if post.coverUrl}
              <img src={post.coverUrl} alt={post.title} loading="lazy" />
            {:else}
              <div class="card__placeholder">LOGOS</div>
            {/if}
          </div>

          <div class="card__body">
            <div class="card__top">
              <div class="date">{post.date}</div>
              <div class="read">{post.readingMin} мин</div>
            </div>

            <h2>{post.title}</h2>
            <p class="excerpt">{post.excerpt}</p>

            {#if post.keywords?.length}
              <div class="tags">
                {#each post.keywords.slice(0, 4) as t}
                  <span class="tag">{t}</span>
                {/each}
              </div>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </section>
{/if}

<style>
  /* ---- 0. Global ---- */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 2.4rem;
    line-height: 1.2;
    font-weight: 700;
    color: var(--orange);
    margin-bottom: 1rem;
    text-align: left;
  }

  /* ---- 1. Heading ---- */
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

  .wrap {
    width: 90%;
    max-width: 1020px;
    margin: 0 auto;
    padding: 20px 40px;
    background: var(--orange-light);
    border-radius: 20px;
  }

  .hero {
    border-radius: 18px;
    padding: 18px 0;
    margin-bottom: 20px;
  }

  .controls {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1030px;
    gap: 12px;
  }

  .controls input[type="search"] {
    flex: 1;
    padding: 10px 12px;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    font-size: 1.25rem;
    outline: none;
    background: var(--background);
  }

  .controls input[type="search"]:focus {
    border-color: var(--orange-light);
    box-shadow: 0 0 0 3px var(--orange-light);
  }

  input,
  select {
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    padding: 11px 12px;
    outline: none;
    background: #fff;
    font-size: 14px;
  }
  input:focus,
  select:focus {
    border-color: #cfcfcf;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.04);
  }

  .meta {
    font-size: 13px;
    opacity: 0.7;
  }

  .grid {
    margin-top: 16px;
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(3, 1fr);
  }

  .card {
    display: grid;
    grid-template-rows: 180px 1fr;
    border: 1px solid #eee;
    border-radius: 16px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    background: #fff;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease,
      border-color 0.15s ease;
  }
  .card:hover {
    transform: translateY(-2px);
    border-color: #e2e2e2;
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.06);
  }

  .card__img {
    background: #f6f6f6;
  }
  .card__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .card__placeholder {
    height: 100%;
    display: grid;
    place-items: center;
    font-weight: 700;
    letter-spacing: 0.18em;
    opacity: 0.25;
  }

  .card__body {
    padding: 14px;
  }
  .card__top {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    opacity: 0.7;
  }

  h2 {
    margin: 8px 0 8px;
    font-size: 18px;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }
  .excerpt {
    margin: 0 0 10px;
    opacity: 0.85;
    line-height: 1.55;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .tag {
    font-size: 12px;
    padding: 6px 9px;
    border: 1px solid #ededed;
    border-radius: 999px;
    background: #fafafa;
    opacity: 0.9;
  }

  @media (max-width: 980px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .controls {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 560px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  /* ---- Media query - 955 ---- */
  @media screen and (max-width: 955px) {
    /* ---- 1. Heading ---- */
    .heading {
      margin: 30px 30px 40px 30px;
    }

    .first-svg {
      transform: translateY(-155%);
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
  }
</style>
