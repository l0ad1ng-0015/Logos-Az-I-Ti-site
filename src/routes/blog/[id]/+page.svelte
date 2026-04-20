<script>
  export let data;
  console.log("Component rendered with post:", data.post?.id);

  $: post = data.post;
  $: coverUrl = data.coverUrl;
  $: imageUrls = data.imageUrls;
  $: readingMin = data.readingMin;
  $: related = data.related;
  $: postAuthors = data.postAuthors;
  console.log("Post updated:", post?.id, post?.title);
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

      {#if postAuthors.length}
        <div class="authors">
          <h3>
            Автор{#if postAuthors.length > 1}и{/if}
          </h3>
          <div class="authors-grid">
            {#each postAuthors as author}
              <a class="author-card" href="/za-nas#{author.anchor}">
                <div class="author-img">
                  <img src={author.image} alt={author.name} loading="lazy" />
                </div>
                <div class="author-info">
                  <div class="author-name">{author.name}</div>
                  <div class="author-specialty">{author.specialty}</div>
                </div>
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </header>

  <article class="article">
    <div class="article-content">
      <div class="subsection">
        {#each post.content as item}
          {#if item.type === "section"}
            <div class="article-section">
              <h2 class="section-title">{item.title}</h2>
              <div class="section-content">
                {#each item.items as subItem}
                  {#if subItem.type === "paragraph"}
                    <p class={subItem.variant}>{subItem.text}</p>
                  {:else if subItem.type === "list"}
                    <ul>
                      {#each subItem.items as listItem}
                        <li>{listItem}</li>
                      {/each}
                    </ul>
                  {/if}
                {/each}
              </div>
            </div>
          {:else if item.type === "paragraph"}
            <p class={item.variant}>{item.text}</p>
          {:else if item.type === "list"}
            <ul>
              {#each item.items as listItem}
                <li>{listItem}</li>
              {/each}
            </ul>
          {/if}
        {/each}
      </div>
    </div>
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
  /* h2 {
    font-size: 2.4rem;
    line-height: 1.2;
    font-weight: 700;
    color: var(--orange);
    margin-bottom: 1rem;
    text-align: left;
  } */

  .wrap {
    max-width: 920px;
    margin: 0 auto;
    padding: 18px 16px 60px;
  }

  .crumbs {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    margin-bottom: 17px;
    gap: 8px;
    font-size: 13px;
    opacity: 0.75;
    background: var(--orange-light);
    border: 2px solid #f6d6bfcd;
    box-shadow: 0 4px 12px rgba(248, 212, 186, 0.4);
    border-radius: 8px;
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
    background: var(--orange-light);
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
    border: 1px solid rgba(67, 67, 67, 0.448);
    border-radius: 999px;
    background: var(--background);
    color: var(--green-dark);
  }

  .article {
    margin-top: 35px;
  }

  .article-content {
    background: var(--orange-light);
    margin-bottom: 30px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .subsection {
    background: var(--background);
    padding: 20px;
    border: 2px solid var(--orange);
    border-radius: 10px;
  }

  .article p {
    line-height: 1.8;
    font-size: 16px;
    margin: 0 0 14px;
    opacity: 0.92;
  }

  .article-section {
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--orange-light);
  }

  .article-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .section-title {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 16px;
    letter-spacing: -0.01em;
  }

  .section-content p {
    margin-bottom: 10px;
  }

  .section-content p:last-child,
  .section-content li:last-child {
    margin-bottom: 0;
  }

  .article ul,
  .article ol {
    margin: 0 0 20px 24px;
    padding: 0;
  }

  .article ul:last-child {
    margin-bottom: 0;
  }

  .article ul > li,
  .article ol > li {
    line-height: 1.8;
    font-size: 16px;
    margin: 0 0 10px;
    opacity: 0.92;
  }

  .article ul > li {
    list-style-type: disc;
  }

  .article ol > li {
    list-style-type: decimal;
  }

  .article p.highlight {
    background: var(--orange-light);
    padding: 12px 16px;
    border-left: 4px solid var(--orange);
    border-radius: 4px;
    margin: 16px 0 20px 0;
  }

  .article p.bold {
    font-weight: 700;
  }

  .article p.subtitle {
    font-size: 18px;
    font-weight: 600;
    margin: 24px 0 12px 0;
    color: var(--green-dark);
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
    border: 1px solid var(--orange);
    text-decoration: none;
    color: inherit;
    background: var(--orange-light);
  }
  .btn:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }

  .authors {
    margin-top: 16px;
  }
  .authors h3 {
    margin: 0 0 8px;
    font-size: 18px;
    letter-spacing: -0.01em;
    color: var(--green-dark);
  }
  .authors-grid {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .author-card {
    text-decoration: none;
    color: inherit;
    border: 2px solid var(--orange);
    border-radius: 16px;
    overflow: hidden;
    background: var(--background);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
    display: flex;
    align-items: center;
    padding: 12px;
  }
  .author-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.06);
  }
  .author-img img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 12px;
  }
  .author-info {
    flex: 1;
  }
  .author-name {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .author-specialty {
    font-size: 14px;
    opacity: 0.8;
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
