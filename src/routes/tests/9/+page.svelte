<script lang="ts">
  import { onMount } from "svelte";

  type Img = {
    id: string;
    src: string;
    full?: string;
    w: number;
    h: number;
    alt?: string;
    category: "Всички" | "Семинари" | "Кабинет" | "Събития" | "Материали";
  };

  // TODO: замени с реалните си снимки
  const images: Img[] = [
    {
      id: "img1",
      src: "/others/who-are-we.png",
      full: "/others/who-are-we.png",
      w: 500,
      h: 333,
      alt: "Семинар",
      category: "Семинари",
    },
    {
      id: "img2",
      src: "/images/gallery/office-01.jpg",
      full: "/images/gallery/office-01@2x.jpg",
      w: 1600,
      h: 1067,
      alt: "Кабинет",
      category: "Кабинет",
    },
    {
      id: "img3",
      src: "/images/gallery/office-02.jpg",
      w: 1400,
      h: 933,
      alt: "Упражнения",
      category: "Кабинет",
    },
    {
      id: "img4",
      src: "/images/gallery/event-01.jpg",
      w: 1600,
      h: 1067,
      alt: "Събитие",
      category: "Събития",
    },
  ];

  const baseCats = [
    "Всички",
    "Семинари",
    "Кабинет",
    "Събития",
    "Материали",
  ] as const;
  type Cat = (typeof baseCats)[number];
  let activeCat: Cat = "Всички";

  const byCat = (cat: Cat) =>
    cat === "Всички" ? images : images.filter((i) => i.category === cat);
  const countBy = (cat: Cat) =>
    cat === "Всички"
      ? images.length
      : images.filter((i) => i.category === cat).length;

  // viewer state
  let isOpen = false;
  let currentIndex = 0;
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;

  let viewerEl: HTMLDivElement | null = null;

  $: filtered = byCat(activeCat);

  function lockScroll(lock: boolean) {
    if (typeof document === "undefined") return;
    if (lock) {
      document.body.dataset.prevOverflow = getComputedStyle(
        document.body
      ).overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = document.body.dataset.prevOverflow || "";
      delete (document.body as any).dataset?.prevOverflow;
    }
  }

  function openViewer(index: number) {
    currentIndex = index;
    isOpen = true;
    resetTransform();
    lockScroll(true);
    setTimeout(() => viewerEl?.focus(), 0);
  }

  function closeViewer() {
    isOpen = false;
    resetTransform();
    lockScroll(false);
  }

  function next() {
    currentIndex = (currentIndex + 1) % filtered.length;
    resetTransform();
  }
  function prev() {
    currentIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    resetTransform();
  }

  function zoomIn() {
    scale = Math.min(3, +(scale + 0.25).toFixed(2));
  }
  function zoomOut() {
    scale = Math.max(1, +(scale - 0.25).toFixed(2));
    if (scale === 1) {
      offsetX = 0;
      offsetY = 0;
    }
  }
  function resetTransform() {
    scale = 1;
    offsetX = 0;
    offsetY = 0;
  }

  // drag при zoom
  let dragging = false;
  let startX = 0,
    startY = 0,
    startOX = 0,
    startOY = 0;

  function onPointerDown(e: PointerEvent) {
    if (scale === 1) return;
    dragging = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    startX = e.clientX;
    startY = e.clientY;
    startOX = offsetX;
    startOY = offsetY;
  }
  function onPointerMove(e: PointerEvent) {
    if (!dragging) return;
    offsetX = startOX + (e.clientX - startX);
    offsetY = startOY + (e.clientY - startY);
  }
  function onPointerUp() {
    dragging = false;
  }

  // wheel zoom (ctrl / pinch)
  function onWheel(e: WheelEvent) {
    if (!isOpen) return;
    if (e.ctrlKey) {
      e.preventDefault();
      e.deltaY < 0 ? zoomIn() : zoomOut();
    }
  }

  function onKeyDown(e: KeyboardEvent) {
    if (!isOpen) return;
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === "Escape") closeViewer();
    else if (e.key === "+") zoomIn();
    else if (e.key === "-") zoomOut();
    else if (e.key.toLowerCase() === "r") resetTransform();
  }

  onMount(() => () => lockScroll(false));
</script>

<section class="hero">
  <div class="hero-inner">
    <h1>Галерия</h1>
    <p>Моменти от кабинета, семинари и събития.</p>
  </div>
</section>

<nav class="filters" aria-label="Филтри">
  {#each baseCats as cat}
    <button
      class:active={activeCat === cat}
      on:click={() => (activeCat = cat)}
      aria-pressed={activeCat === cat}
    >
      <span>{cat}</span><span class="count">{countBy(cat)}</span>
    </button>
  {/each}
</nav>

<section class="grid">
  {#each filtered as img, i}
    <article class="card" style={`aspect-ratio:${img.w}/${img.h}`}>
      <button
        class="thumb"
        on:click={() => openViewer(i)}
        aria-label="Отвори снимка"
      >
        <img loading="lazy" src={img.src} alt={img.alt ?? "Снимка"} />
      </button>
      <div class="badge">{img.category}</div>
    </article>
  {/each}
  {#if filtered.length === 0}<p class="empty">
      Няма снимки в тази категория…
    </p>{/if}
</section>

{#if isOpen}
  <div
    class="backdrop"
    role="dialog"
    aria-modal="true"
    aria-label="Преглед на снимка"
    on:click|self={closeViewer}
    on:wheel={onWheel}
    on:keydown={onKeyDown}
    tabindex="0"
    bind:this={viewerEl}
  >
    <!-- Горен тулбар -->
    <div class="toolbar top">
      <div class="left">
        <span class="counter">{currentIndex + 1} / {filtered.length}</span>
      </div>
      <div class="right">
        <button class="pill" on:click={zoomOut} aria-label="Zoom out">–</button>
        <button class="pill" on:click={zoomIn} aria-label="Zoom in">+</button>
        <button class="pill" on:click={resetTransform} aria-label="Reset"
          >Reset</button
        >
        <button class="close" on:click={closeViewer} aria-label="Затвори"
          >✕</button
        >
      </div>
    </div>

    <!-- Стрелки отстрани -->
    <button class="side-btn prev" on:click={prev} aria-label="Предишна снимка"
      >‹</button
    >
    <button class="side-btn next" on:click={next} aria-label="Следваща снимка"
      >›</button
    >

    <!-- Основната снимка -->
    <div
      class="stage {scale > 1 ? 'grabbable' : ''}"
      on:pointerdown={onPointerDown}
      on:pointermove={onPointerMove}
      on:pointerup={onPointerUp}
      on:pointercancel={onPointerUp}
    >
      {#if filtered[currentIndex]}
        {#key filtered[currentIndex].id}
          <img
            class="full"
            draggable="false"
            src={filtered[currentIndex].full ?? filtered[currentIndex].src}
            alt={filtered[currentIndex].alt ?? "Снимка"}
            style={`transform: translate(${offsetX}px, ${offsetY}px) scale(${scale});`}
          />
        {/key}
      {/if}
    </div>
  </div>
{/if}

<style>
  :root {
    --peach: #ffe9d6;
    --peach-2: #fff3e9;
    --orange: #ff8a4c;
    --orange-2: #ffa36d;
    --text: #3b3b3b;
    --muted: #8b8b8b;
    --card: #fff;
    --shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    --radius: 20px;
  }
  * {
    box-sizing: border-box;
  }

  .hero {
    background: linear-gradient(180deg, var(--orange), var(--orange-2));
    border-radius: 24px;
    padding: 28px 20px;
    margin: 18px auto 10px;
    color: #fff;
    box-shadow: var(--shadow);
  }
  .hero-inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .hero h1 {
    margin: 0 0 6px;
    font-size: clamp(26px, 3.6vw, 38px);
    font-weight: 800;
  }
  .hero p {
    margin: 0;
    opacity: 0.95;
  }

  .filters {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    max-width: 1100px;
    margin: 18px auto 6px;
  }
  .filters button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--peach);
    color: var(--text);
    border: 0;
    border-radius: 999px;
    padding: 10px 14px;
    font-weight: 600;
    box-shadow: var(--shadow);
    cursor: pointer;
  }
  .filters button .count {
    font-weight: 700;
    font-size: 0.9rem;
    background: #fff;
    padding: 0.1rem 0.5rem;
    border-radius: 999px;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.04);
  }
  .filters button.active {
    background: #fff;
    color: #000;
    outline: 3px solid rgba(255, 138, 76, 0.25);
  }

  .grid {
    max-width: 1100px;
    margin: 12px auto 40px;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
  .card {
    position: relative;
    background: var(--card);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
  }
  .thumb {
    border: 0;
    padding: 0;
    margin: 0;
    background: transparent;
    cursor: pointer;
    width: 100%;
    height: 100%;
  } /* <- вече не е zoom-in */
  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.25s ease;
  }
  .thumb:hover img {
    transform: scale(1.03);
  }
  .badge {
    position: absolute;
    left: 12px;
    top: 12px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(6px);
    color: #333;
    padding: 6px 10px;
    border-radius: 999px;
    font-weight: 600;
    box-shadow: var(--shadow);
    font-size: 0.85rem;
  }
  .empty {
    grid-column: 1/-1;
    text-align: center;
    color: var(--muted);
  }

  /* Viewer */
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85); /* по-тъмен фон, скрива header */
    display: flex;
    flex-direction: column;
    z-index: 9999; /* над всичко */
    outline: none;
  }
  .toolbar {
    position: relative;
    z-index: 2; /* над снимката */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    max-width: 1100px;
    margin: 10px auto 0;
    width: 100%;
  }

  /* Горен тулбар */
  .toolbar.top {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    max-width: 1100px;
    margin: 10px auto 0;
    width: 100%;
  }

  /* Стрелки отляво/отдясно по средата */
  .side-btn {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    background: rgba(255, 255, 255, 0.85);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 32px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
  }
  .side-btn.prev {
    left: 20px;
  }
  .side-btn.next {
    right: 20px;
  }
  .side-btn:hover {
    background: #fff;
  }

  .toolbar .left,
  .toolbar .right {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .icon,
  .pill,
  .close {
    border: 0;
    cursor: pointer;
    height: 38px;
    min-width: 38px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 800;
    background: #fff;
    color: #222;
    box-shadow: var(--shadow);
  }
  .icon {
    font-size: 24px;
    line-height: 38px;
    padding: 0 12px;
  }
  .close {
    background: #ffefe6;
  }
  .counter {
    color: #fff;
    font-weight: 700;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(6px);
  }

  .stage {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    touch-action: none;
    z-index: 1;
    cursor: default; /* нормален курсор */
  }
  .stage.grabbable {
    cursor: grab;
  }
  .stage.grabbable:active {
    cursor: grabbing;
  }

  .full {
    max-width: 90vw;
    max-height: 80vh;
    user-select: none;
    will-change: transform;
    transition: transform 0.08s ease-out;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
    border-radius: 16px;
    background: #111;
  }
  @media (max-width: 700px) {
    .hero {
      border-radius: 18px;
    }
    .toolbar {
      padding: 8px 10px;
    }
    .full {
      max-width: 94vw;
      max-height: 72vh;
    }
  }
</style>
