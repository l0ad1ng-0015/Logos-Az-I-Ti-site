<script>
  export let data;
  const item = data.item;
</script>

{#if !item}
  <section class="wrap">
    <h1>Ресурсът не е намерен</h1>
    <p><a class="back" href="/polezni-resursi">← Обратно към всички ресурси</a></p>
  </section>
{:else}
  <section class="wrap">
    <nav class="crumbs">
      <a class="back" href="/polezni-resursi">← Всички ресурси</a>
      <h2>{item.title}</h2>
    </nav>
    
    <header class="head">
      <div>
        {#if item.tags?.length}
          <div class="tags">
            {#each item.tags as tag}
              <span class="tag">#{tag}</span>
            {/each}
          </div>
        {/if}
      </div>

      {#if item.href}
        <a class="btn" href={item.href} download rel="noopener">Свали</a>
      {/if}
    </header>

    {#if item.description}
      <p class="desc">{item.description}</p>
    {/if}

    {#if ["png", "jpg", "jpeg", "webp", "svg"].includes(item.ext)}
      <div class="viewer">
        <img src={item.href} alt={item.title} />
      </div>
    {:else if item.ext === "pdf"}
      <div class="viewer">
        <iframe src={item.href} title={item.title} loading="lazy"></iframe>
      </div>
    {/if}
  </section>
{/if}

<style>
  /* ---- Shared design tokens (aligned with other pages) ---- */
  :root {
    --orange-dark: #ff7f50;
    --muted: #6b6b6b;
    --font: "ABeeZee", sans-serif;
    --max-width: 1000px;
    --radius: 16px;
    --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  }

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
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .wrap {
    width: 90%;
    max-width: var(--max-width);
    margin: 2.5rem auto;
    padding: 18px;
    background: var(--orange-light);
    border-radius: 14px;
    box-shadow: var(--card-shadow);
  }

  .crumbs {
    font-size: 0.95rem;
    color: var(--muted);
    margin-bottom: 0.75rem;
  }
  .crumbs a {
    color: var(--muted);
    text-decoration: none;
  }
  .crumbs a:hover {
    text-decoration: underline;
    color: #444;
  }

  .back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 999px;
    background: var(--background);
    color: black;
    text-decoration: none;
    font-weight: 700;
    border: 2px solid var(--orange);
    transition: background .15s ease, transform .12s ease, box-shadow .12s ease;
  }
  
  .back:hover {
    background: var(--background-hover);
    transition: 0.3s;
    transform: translateY(-2px);
    border-color: var(--orange-dark);
  }
  /* ---- Header / title area (follows other pages' layout) ---- */
  .head {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
  .head > div {
    flex: 1;
    min-width: 0;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 6px;
  }
  .tag {
    background: var(--background);
    border: 1px solid rgba(0, 0, 0, 0.04);
    padding: 6px 10px;
    border-radius: 999px;
    font-size: rem;
    color: var(--green-dark);
  }

  /* Button matches other pages' CTA look */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--orange);
    color: #fff;
    padding: 10px 18px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 700;
    box-shadow: 0 8px 28px rgba(255, 157, 107, 0.12);
    border: 2px solid rgba(255, 157, 107, 0.08);
    transition:
      transform 0.18s ease,
      box-shadow 0.18s ease;
  }
  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(255, 157, 107, 0.16);
  }
  .btn:focus {
    outline: 3px solid rgba(255, 157, 107, 0.18);
    outline-offset: 3px;
  }

  .desc {
    margin: 1rem 0 1.25rem 0;
    line-height: 1.6;
    font-size: 1.25rem;
    color: #444;
    background: var(--background);
    padding: 12px;
    border-radius: 10px;
    border: 1px solid var(--orange);
  }

  /* Viewer area styled like cards in other pages */
  .viewer {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
  .viewer img,
  .viewer iframe {
    width: 100%;
    max-height: 78vh;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
    object-fit: contain;
  }
  .viewer iframe {
    height: 70vh;
  }

  /* ---- CTA fragment reuse for missing item state ---- */
  .wrap h1 + p {
    margin-top: 12px;
  }

  /* ---- Responsive breakpoints copied from other pages ---- */
  @media screen and (max-width: 955px) {
    .wrap {
      width: 94%;
    }
  }

  @media screen and (max-width: 755px) {
    .head {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
    .wrap {
      margin: 1.25rem auto;
      padding: 14px;
      border-radius: 12px;
    }
    .btn {
      width: 100%;
      justify-content: center;
    }
    .viewer iframe {
      height: 56vh;
    }
  }

  @media screen and (max-width: 475px) {
    .viewer img,
    .viewer iframe {
      max-height: 52vh;
    }
  }

  /* Accessibility: clear focus states (consistent with other pages) */
  a:focus {
    outline: 3px solid rgba(255, 157, 107, 0.14);
    outline-offset: 2px;
  }
</style>
