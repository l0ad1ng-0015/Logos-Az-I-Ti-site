<script lang="ts">
  import { cubicOut } from "svelte/easing";
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

  // TODO: замени с реалните си изображения
  const images: Img[] = [
    {
      id: "sem-01",
      src: "/others/who-are-we.png",
      full: "/others/who-are-we.png",
      w: 1600,
      h: 1067,
      alt: "Семинар",
      category: "Семинари",
    },
    {
      id: "cab-01",
      src: "/images/gallery/office-01.jpg",
      full: "/images/gallery/office-01@2x.jpg",
      w: 1600,
      h: 1067,
      alt: "Кабинет",
      category: "Кабинет",
    },
    {
      id: "cab-02",
      src: "/images/gallery/office-02.jpg",
      w: 1400,
      h: 933,
      alt: "Упражнения",
      category: "Кабинет",
    },
    {
      id: "evt-01",
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

  // --- dedupe safeguard ---
  const dedupe = <T extends { id?: string; src: string }>(arr: T[]) => {
    const map = new Map<string, T>();
    for (const it of arr) map.set(it.id ?? it.src, it);
    return Array.from(map.values());
  };
  $: unique = dedupe(images);

  const byCat = (cat: Cat) =>
    cat === "Всички" ? unique : unique.filter((i) => i.category === cat);
  const countBy = (cat: Cat) =>
    cat === "Всички"
      ? unique.length
      : unique.filter((i) => i.category === cat).length;
  $: filtered = byCat(activeCat);
  $: visible = filtered;

  // --- grid: track loaded thumbs for blur-up ---
  let loaded: Record<string, boolean> = {};
  const markLoaded = (id: string) => (loaded[id] = true);

  // --- viewer state ---
  let isOpen = false;
  let currentIndex = 0;
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;
  let viewerEl: HTMLDivElement | null = null;
  let dir: 1 | -1 = 1; // посока за анимацията

  function lockScroll(lock: boolean) {
    if (typeof document === "undefined") return;
    if (lock) {
      (document.body as any).__prevOverflow = getComputedStyle(
        document.body
      ).overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow =
        (document.body as any).__prevOverflow || "";
      delete (document.body as any).__prevOverflow;
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
    dir = 1;
    currentIndex = (currentIndex + 1) % visible.length;
    resetTransform();
  }
  function prev() {
    dir = -1;
    currentIndex = (currentIndex - 1 + visible.length) % visible.length;
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

  // --- custom transition on wrapper (не върху <img>, за да не се бие с transform от zoom) ---
  function fadeSlide(
    node: Element,
    { duration = 220, x = 22, baseScale = 0.96 } = {}
  ) {
    return {
      duration,
      easing: cubicOut,
      css: (t: number) => {
        const p = t; // 0..1
        const tx = (1 - p) * x; // px
        const sc = baseScale + (1 - baseScale) * p;
        return `opacity:${p}; transform: translateX(${dir === 1 ? tx : -tx}px) scale(${sc});`;
      },
    };
  }
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

<!-- НОВ GRID ИЗГЛЕД -->
<section class="grid">
  {#each visible as img, i (img.id)}
    <article class="tile {loaded[img.id] ? 'loaded' : ''}">
      <button
        class="thumb"
        on:click={() => openViewer(i)}
        aria-label="Отвори снимка"
      >
        <div class="media" style={`aspect-ratio:${img.w}/${img.h}`}>
          <img
            src={img.src}
            alt={img.alt ?? "Снимка"}
            loading="lazy"
            sizes="(max-width: 700px) 48vw, (max-width: 1100px) 33vw, 280px"
            on:load={() => markLoaded(img.id)}
          />
          <div class="overlay">
            <span class="chip">{img.category}</span>
            <span class="zoomIcon" aria-hidden="true">🔍</span>
          </div>
        </div>
      </button>
    </article>
  {/each}
  {#if visible.length === 0}<p class="empty">
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
    <!-- Горен тулбар с по-голямо отстояние -->
    <div class="toolbar top">
      <div class="left">
        <span class="counter">{currentIndex + 1} / {visible.length}</span>
      </div>
      <div class="spacer" aria-hidden="true"></div>
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

    <!-- Стрелки отляво/отдясно -->
    <button class="side-btn prev" on:click={prev} aria-label="Предишна снимка"
      >‹</button
    >
    <button class="side-btn next" on:click={next} aria-label="Следваща снимка"
      >›</button
    >

    <div
      class="stage {scale > 1 ? 'grabbable' : ''}"
      on:pointerdown={onPointerDown}
      on:pointermove={onPointerMove}
      on:pointerup={onPointerUp}
      on:pointercancel={onPointerUp}
    >
      {#if visible[currentIndex]}
        {#key visible[currentIndex].id}
          <!-- WRAP с транзишън; вътре img запазва transform за zoom/pan -->
          <div
            class="imgWrap"
            in:fadeSlide={{ duration: 220 }}
            out:fadeSlide={{ duration: 180 }}
          >
            <img
              class="full"
              draggable="false"
              src={visible[currentIndex].full ?? visible[currentIndex].src}
              alt={visible[currentIndex].alt ?? "Снимка"}
              style={`transform: translate(${offsetX}px, ${offsetY}px) scale(${scale});`}
            />
          </div>
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

  /* НОВ grid вид */
  .grid {
    max-width: 1100px;
    margin: 14px auto 44px;
    display: grid;
    gap: 18px;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
  .tile {
    border-radius: 18px;
    overflow: hidden;
    background: var(--card);
    box-shadow: var(--shadow);
    transition:
      transform 0.18s ease,
      box-shadow 0.18s ease;
  }
  .tile:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 26px rgba(0, 0, 0, 0.12);
  }
  .thumb {
    border: 0;
    padding: 0;
    margin: 0;
    background: transparent;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  .media {
    position: relative;
    width: 100%;
  }
  .media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0;
    filter: blur(8px) saturate(0.9);
    transform: scale(1.04);
    transition:
      opacity 0.35s ease,
      filter 0.35s ease,
      transform 0.35s ease;
  }
  .tile.loaded .media img {
    opacity: 1;
    filter: none;
    transform: scale(1);
  }
  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 10px;
    pointer-events: none;
    opacity: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0) 60%
    );
    transition: opacity 0.2s ease;
  }
  .tile:hover .overlay {
    opacity: 1;
  }
  .chip {
    pointer-events: none;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    font-weight: 700;
    font-size: 0.85rem;
    padding: 6px 10px;
    border-radius: 999px;
    box-shadow: var(--shadow);
  }
  .zoomIcon {
    pointer-events: none;
    font-size: 22px;
    background: #fff;
    border-radius: 999px;
    padding: 6px 10px;
    box-shadow: var(--shadow);
  }

  .empty {
    grid-column: 1/-1;
    text-align: center;
    color: var(--muted);
  }

  /* Модал */
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    flex-direction: column;
    z-index: 9999;
    outline: none;
  }
  .toolbar.top {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px clamp(16px, 4vw, 28px);
    max-width: min(1200px, 96vw);
    margin: 14px auto 0;
    width: 100%;
  }
  .toolbar.top .right {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  .toolbar.top .spacer {
    flex: 1;
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

  .side-btn {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    background: rgba(255, 255, 255, 0.9);
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

  .stage {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    touch-action: none;
    z-index: 1;
  }
  .stage.grabbable {
    cursor: grab;
  }
  .stage.grabbable:active {
    cursor: grabbing;
  }
  .imgWrap {
    will-change: transform, opacity;
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
    .full {
      max-width: 94vw;
      max-height: 72vh;
    }
  }
</style>
