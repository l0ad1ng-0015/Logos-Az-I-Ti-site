<script>
  export let data;
  const item = data.item;
</script>

{#if !item}
  <section class="wrap">
    <h1>Ресурсът не е намерен</h1>
    <p><a href="/resources">← Обратно към всички ресурси</a></p>
  </section>
{:else}
  <section class="wrap">
    <nav class="crumbs">
      <a href="/resources">← Всички ресурси</a>
    </nav>

    <header class="head">
      <div>
        <h1>{item.title}</h1>
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
  .wrap {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
  .crumbs a {
    color: #666;
    text-decoration: none;
  }
  .crumbs a:hover {
    text-decoration: underline;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 0.5rem;
  }
  .tag {
    background: #f6f6f6;
    border: 1px solid #eee;
    padding: 3px 8px;
    border-radius: 999px;
    font-size: 0.85rem;
  }
  .btn {
    text-decoration: none;
    background: #8ac99a;
    color: #1c1c1c;
    border-radius: 999px;
    padding: 10px 16px;
    font-weight: 600;
  }
  .desc {
    margin: 1rem 0;
    line-height: 1.5;
    font-size: 1.05rem;
  }
  .viewer img,
  .viewer iframe {
    width: 100%;
    border-radius: 12px;
    border: 1px solid #eee;
  }
  .viewer iframe {
    height: 70vh;
  }
</style>
