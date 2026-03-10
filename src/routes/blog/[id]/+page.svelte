<script>
  export let data;
  const { post, coverUrl, imageUrls, readingMin, related } = data;
</script>

<svelte:head>
  <title>{post.title} | Логос – Аз и Ти</title>
  <meta name="description" content={post.excerpt} />
</svelte:head>

<section class="wrap">
  <nav class="crumbs">
    <a href="/">Начало</a>
    <span>›</span>
    <a href="/blog">Блог</a>
    <span>›</span>
    <span class="current">{post.title}</span>
  </nav>

  <header class="hero">
    {#if coverUrl}
      <img class="hero__img" src={coverUrl} alt={post.title} loading="eager" />
    {/if}

    <div class="hero__content">
      <h1>{post.title}</h1>
      <p class="sub">{post.excerpt}</p>

      <div class="meta">
        <span>{post.date}</span>
        <span>•</span>
        <span>{readingMin} мин четене</span>
      </div>

      {#if post.keywords?.length}
        <div class="tags">
          {#each post.keywords as t}
            <span class="tag">{t}</span>
          {/each}
        </div>
      {/if}
    </div>
  </header>

  <article class="article">
    {#each post.content as paragraph}
      <p>{paragraph}</p>
    {/each}
  </article>

  {#if imageUrls.length}
    <section class="gallery">
      <h2>Галерия</h2>
      <div class="grid">
        {#each imageUrls as img}
          <img src={img.url} alt={post.title} loading="lazy" />
        {/each}
      </div>
    </section>
  {/if}

  {#if related.length}
    <section class="related">
      <h2>Още статии</h2>
      <div class="rgrid">
        {#each related as p}
          <a class="rcard" href={`/blog/${p.id}`}>
            <div class="rimg">
              {#if p.coverUrl}
                <img src={p.coverUrl} alt={p.title} loading="lazy" />
              {:else}
                <div class="ph">LOGOS</div>
              {/if}
            </div>
            <div class="rbody">
              <div class="rmeta">{p.date}</div>
              <div class="rtitle">{p.title}</div>
              <div class="rex">{p.excerpt}</div>
            </div>
          </a>
        {/each}
      </div>
    </section>
  {/if}

  <div class="back">
    <a class="btn" href="/blog">← Виж всички статии</a>
  </div>
</section>

<style>
  .wrap {
    max-width: 920px;
    margin: 0 auto;
    padding: 18px 16px 60px;
  }

  .crumbs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 13px;
    opacity: 0.75;
    margin-bottom: 12px;
  }
  .crumbs a {
    color: inherit;
    text-decoration: none;
  }
  .crumbs a:hover {
    text-decoration: underline;
  }
  .current {
    opacity: 0.9;
  }

  .hero {
    border: 1px solid #eee;
    border-radius: 18px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);
  }
  .hero__img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    display: block;
    background: #f5f5f5;
  }
  .hero__content {
    padding: 18px;
  }

  h1 {
    margin: 0 0 8px;
    font-size: 32px;
    letter-spacing: -0.02em;
    line-height: 1.12;
  }
  .sub {
    margin: 0 0 10px;
    opacity: 0.85;
    line-height: 1.6;
  }

  .meta {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 13px;
    opacity: 0.7;
  }

  .tags {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .tag {
    font-size: 12px;
    padding: 7px 10px;
    border: 1px solid #ededed;
    border-radius: 999px;
    background: #fafafa;
  }

  .article {
    margin-top: 18px;
  }
  .article p {
    line-height: 1.8;
    font-size: 16px;
    margin: 0 0 14px;
    opacity: 0.92;
  }

  .gallery {
    margin-top: 26px;
  }
  .gallery h2 {
    margin: 0 0 12px;
    font-size: 20px;
    letter-spacing: -0.01em;
  }
  .grid {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
  .grid img {
    width: 100%;
    border-radius: 14px;
    display: block;
  }

  .related {
    margin-top: 28px;
  }
  .related h2 {
    margin: 0 0 12px;
    font-size: 20px;
  }

  .rgrid {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(3, 1fr);
  }
  .rcard {
    text-decoration: none;
    color: inherit;
    border: 1px solid #eee;
    border-radius: 16px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
  }
  .rcard:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.06);
  }
  .rimg img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    display: block;
    background: #f5f5f5;
  }
  .ph {
    height: 120px;
    display: grid;
    place-items: center;
    opacity: 0.25;
    font-weight: 700;
    letter-spacing: 0.18em;
  }
  .rbody {
    padding: 12px;
  }
  .rmeta {
    font-size: 12px;
    opacity: 0.7;
    margin-bottom: 6px;
  }
  .rtitle {
    font-size: 15px;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 6px;
    letter-spacing: -0.01em;
  }
  .rex {
    font-size: 13px;
    opacity: 0.85;
    line-height: 1.5;
  }

  .back {
    margin-top: 26px;
  }
  .btn {
    display: inline-block;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid #e6e6e6;
    text-decoration: none;
    color: inherit;
    background: #fff;
  }
  .btn:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 900px) {
    .rgrid {
      grid-template-columns: 1fr;
    }
    .hero__img {
      height: 240px;
    }
  }
</style>
