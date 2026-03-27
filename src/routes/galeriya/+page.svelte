<script lang="ts">
  export let title = "Галерия | Логос – Аз и Ти";
  export let description =
    "Разгледайте галерията на ОЦ Логос „Аз и ти“ – логопедичен център в София. Снимки от нашата среда, занимания, обучения и моменти на развитие и усмивки на децата.";

  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  type Img = {
    id: string;
    src: string;
    full?: string;
    thumb?: string;
    w: number;
    h: number;
    alt?: string;
    category:
      | "Всички"
      | "Великденска терапевтилница"
      | "Коледна терапевтилница"
      | "Коледни партита"
      | "Сърцата терапевтилница"
      | "Семинари и обучения";
  };

  // снимки
  const images: Img[] = [
    // Великден
    {
      id: "velik-01",
      src: "/galeriya/src/velikden/1.jpg",
      full: "/galeriya/src/velikden/1.jpg",
      thumb: "/galeriya/thumbs/velikden/1.jpg",
      w: 1536,
      h: 2048,
      alt: "Великденска терапевтилница 2025 г",
      category: "Семинари и обучения",
    },
    {
      id: "velik-01",
      src: "/galeriya/src/velikden/1.jpg",
      full: "/galeriya/src/velikden/1.jpg",
      thumb: "/galeriya/thumbs/velikden/1.jpg",
      w: 1536,
      h: 2048,
      alt: "Великденска терапевтилница 2025 г",
      category: "Великденска терапевтилница",
    },
    {
      id: "velik-02",
      src: "/galeriya/src/velikden/2.jpg",
      full: "/galeriya/src/velikden/2.jpg",
      thumb: "/galeriya/thumbs/velikden/2.jpg",
      w: 1536,
      h: 2048,
      alt: "Великденска терапевтилница 2025 г",
      category: "Великденска терапевтилница",
    },
    {
      id: "velik-03",
      src: "/galeriya/src/velikden/3.jpg",
      full: "/galeriya/src/velikden/3.jpg",
      thumb: "/galeriya/thumbs/velikden/3.jpg",
      w: 1536,
      h: 2048,
      alt: "Великденска терапевтилница 2025 г",
      category: "Великденска терапевтилница",
    },
    {
      id: "velik-04",
      src: "/galeriya/src/velikden/4.jpg",
      full: "/galeriya/src/velikden/4.jpg",
      thumb: "/galeriya/thumbs/velikden/4.jpg",
      w: 1536,
      h: 2048,
      alt: "Великденска терапевтилница 2025 г",
      category: "Великденска терапевтилница",
    },
    {
      id: "velik-05",
      src: "/galeriya/src/velikden/5.jpg",
      full: "/galeriya/src/velikden/5.jpg",
      thumb: "/galeriya/thumbs/velikden/5.jpg",
      w: 1536,
      h: 2048,
      alt: "Великденска терапевтилница 2025 г",
      category: "Великденска терапевтилница",
    },
    {
      id: "velik-06",
      src: "/galeriya/src/velikden/6.jpg",
      full: "/galeriya/src/velikden/6.jpg",
      thumb: "/galeriya/thumbs/velikden/6.jpg",
      w: 1536,
      h: 2048,
      alt: "Великденска терапевтилница 2025 г",
      category: "Великденска терапевтилница",
    },
    // Коледа
    {
      id: "koleda-01",
      src: "/galeriya/src/koleda/1.jpg",
      full: "/galeriya/src/koleda/1.jpg",
      thumb: "/galeriya/thumbs/koleda/1.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледна терапевтилница 2024 г",
      category: "Коледна терапевтилница",
    },
    {
      id: "koleda-02",
      src: "/galeriya/src/koleda/2.jpg",
      full: "/galeriya/src/koleda/2.jpg",
      thumb: "/galeriya/thumbs/koleda/2.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледна терапевтилница 2024 г",
      category: "Коледна терапевтилница",
    },
    {
      id: "koleda-03",
      src: "/galeriya/src/koleda/3.jpg",
      full: "/galeriya/src/koleda/3.jpg",
      thumb: "/galeriya/thumbs/koleda/3.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледна терапевтилница 2024 г",
      category: "Коледна терапевтилница",
    },
    {
      id: "koleda-04",
      src: "/galeriya/src/koleda/4.jpg",
      full: "/galeriya/src/koleda/4.jpg",
      thumb: "/galeriya/thumbs/koleda/4.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледна терапевтилница 2024 г",
      category: "Коледна терапевтилница",
    },
    {
      id: "koleda-05",
      src: "/galeriya/src/koleda/5.jpg",
      full: "/galeriya/src/koleda/5.jpg",
      thumb: "/galeriya/thumbs/koleda/5.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледна терапевтилница 2024 г",
      category: "Коледна терапевтилница",
    },
    {
      id: "koleda-06",
      src: "/galeriya/src/koleda/6.jpg",
      full: "/galeriya/src/koleda/6.jpg",
      thumb: "/galeriya/thumbs/koleda/6.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледна терапевтилница 2024 г",
      category: "Коледна терапевтилница",
    },
    {
      id: "koleda-07",
      src: "/galeriya/src/koleda/7.jpg",
      full: "/galeriya/src/koleda/7.jpg",
      thumb: "/galeriya/thumbs/koleda/7.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледна терапевтилница 2024 г",
      category: "Коледна терапевтилница",
    },
    // Коледа партита
    {
      id: "koleda-partita-01",
      src: "/galeriya/src/koleda-partita/1.jpg",
      full: "/galeriya/src/koleda-partita/1.jpg",
      thumb: "/galeriya/thumbs/koleda-partita/1.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледни партита 2024 г",
      category: "Коледни партита",
    },
    {
      id: "koleda-partita-02",
      src: "/galeriya/src/koleda-partita/2.jpg",
      full: "/galeriya/src/koleda-partita/2.jpg",
      thumb: "/galeriya/thumbs/koleda-partita/2.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледни партита 2024 г",
      category: "Коледни партита",
    },
    {
      id: "koleda-partita-03",
      src: "/galeriya/src/koleda-partita/3.jpg",
      full: "/galeriya/src/koleda-partita/3.jpg",
      thumb: "/galeriya/thumbs/koleda-partita/3.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледни партита 2024 г",
      category: "Коледни партита",
    },
    {
      id: "koleda-partita-04",
      src: "/galeriya/src/koleda-partita/4.jpg",
      full: "/galeriya/src/koleda-partita/4.jpg",
      thumb: "/galeriya/thumbs/koleda-partita/4.jpg",
      w: 2048,
      h: 1146,
      alt: "Коледни партита 2024 г",
      category: "Коледни партита",
    },
    {
      id: "koleda-partita-05",
      src: "/galeriya/src/koleda-partita/5.jpg",
      full: "/galeriya/src/koleda-partita/5.jpg",
      thumb: "/galeriya/thumbs/koleda-partita/5.jpg",
      w: 2048,
      h: 1536,
      alt: "Коледни партита 2024 г",
      category: "Коледни партита",
    },
    {
      id: "koleda-partita-06",
      src: "/galeriya/src/koleda-partita/6.jpg",
      full: "/galeriya/src/koleda-partita/6.jpg",
      thumb: "/galeriya/thumbs/koleda-partita/6.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледни партита 2024 г",
      category: "Коледни партита",
    },
    {
      id: "koleda-partita-07",
      src: "/galeriya/src/koleda-partita/7.jpg",
      full: "/galeriya/src/koleda-partita/7.jpg",
      thumb: "/galeriya/thumbs/koleda-partita/7.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледни партита 2024 г",
      category: "Коледни партита",
    },
    {
      id: "koleda-partita-08",
      src: "/galeriya/src/koleda-partita/8.jpg",
      full: "/galeriya/src/koleda-partita/8.jpg",
      thumb: "/galeriya/thumbs/koleda-partita/8.jpg",
      w: 1536,
      h: 2048,
      alt: "Коледни партита 2024 г",
      category: "Коледни партита",
    },
    // Терапевтилница
    {
      id: "terapevtilnica-01",
      src: "/galeriya/src/terapevtilnica/1.jpg",
      full: "/galeriya/src/terapevtilnica/1.jpg",
      thumb: "/galeriya/thumbs/terapevtilnica/1.jpg",
      w: 1200,
      h: 1600,
      alt: "Терапевтилница 2024 г",
      category: "Сърцата терапевтилница",
    },
    {
      id: "terapevtilnica-02",
      src: "/galeriya/src/terapevtilnica/2.jpg",
      full: "/galeriya/src/terapevtilnica/2.jpg",
      thumb: "/galeriya/thumbs/terapevtilnica/2.jpg",
      w: 1200,
      h: 1600,
      alt: "Терапевтилница 2024 г",
      category: "Сърцата терапевтилница",
    },
    {
      id: "terapevtilnica-03",
      src: "/galeriya/src/terapevtilnica/3.jpg",
      full: "/galeriya/src/terapevtilnica/3.jpg",
      thumb: "/galeriya/thumbs/terapevtilnica/3.jpg",
      w: 1200,
      h: 1600,
      alt: "Терапевтилница 2024 г",
      category: "Сърцата терапевтилница",
    },
    // Семинари и обучения
    {
      id: "seminari-01",
      src: "/galeriya/src/seminari/1.jpg",
      full: "/galeriya/src/seminari/1.jpg",
      thumb: "/galeriya/thumbs/seminari/1.jpg",
      w: 1536,
      h: 2048,
      alt: "Семинари и обучения",
      category: "Семинари и обучения",
    },
    {
      id: "seminari-02",
      src: "/galeriya/src/seminari/2.jpg",
      full: "/galeriya/src/seminari/2.jpg",
      thumb: "/galeriya/thumbs/seminari/2.jpg",
      w: 1536,
      h: 2048,
      alt: "Семинари и обучения",
      category: "Семинари и обучения",
    },
    {
      id: "seminari-03",
      src: "/galeriya/src/seminari/3.jpg",
      full: "/galeriya/src/seminari/3.jpg",
      thumb: "/galeriya/thumbs/seminari/3.jpg",
      w: 1536,
      h: 2048,
      alt: "Семинари и обучения",
      category: "Семинари и обучения",
    },
    {
      id: "seminari-04",
      src: "/galeriya/src/seminari/4.jpg",
      full: "/galeriya/src/seminari/4.jpg",
      thumb: "/galeriya/thumbs/seminari/4.jpg",
      w: 1536,
      h: 2048,
      alt: "Семинари и обучения",
      category: "Семинари и обучения",
    },
    {
      id: "seminari-05",
      src: "/galeriya/src/seminari/5.jpg",
      full: "/galeriya/src/seminari/5.jpg",
      thumb: "/galeriya/thumbs/seminari/5.jpg",
      w: 1536,
      h: 2048,
      alt: "Семинари и обучения",
      category: "Семинари и обучения",
    },
    {
      id: "seminari-06",
      src: "/galeriya/src/seminari/6.jpg",
      full: "/galeriya/src/seminari/6.jpg",
      thumb: "/galeriya/thumbs/seminari/6.jpg",
      w: 1536,
      h: 2048,
      alt: "Семинари и обучения",
      category: "Семинари и обучения",
    },
    {
      id: "seminari-07",
      src: "/galeriya/src/seminari/7.jpg",
      full: "/galeriya/src/seminari/7.jpg",
      thumb: "/galeriya/thumbs/seminari/7.jpg",
      w: 1536,
      h: 2048,
      alt: "Семинари и обучения",
      category: "Семинари и обучения",
    },
    {
      id: "seminari-08",
      src: "/galeriya/src/seminari/8.jpg",
      full: "/galeriya/src/seminari/8.jpg",
      thumb: "/galeriya/thumbs/seminari/8.jpg",
      w: 1962,
      h: 2048,
      alt: "Семинари и обучения",
      category: "Семинари и обучения",
    },
    {
      id: "seminari-09",
      src: "/galeriya/src/seminari/9.jpg",
      full: "/galeriya/src/seminari/9.jpg",
      thumb: "/galeriya/thumbs/seminari/9.jpg",
      w: 1536,
      h: 2048,
      alt: "Семинари и обучения",
      category: "Семинари и обучения",
    },
    {
      id: "seminari-10",
      src: "/galeriya/src/seminari/10.jpg",
      full: "/galeriya/src/seminari/10.jpg",
      thumb: "/galeriya/thumbs/seminari/10.jpg",
      w: 2048,
      h: 1536,
      alt: "Семинари и обучения",
      category: "Семинари и обучения",
    },
  ];

  const baseCats = [
    "Всички",
    "Великденска терапевтилница",
    "Коледна терапевтилница",
    "Коледни партита",
    "Сърцата терапевтилница",
    "Семинари и обучения",
  ] as const;
  type Cat = (typeof baseCats)[number];
  let activeCat: Cat = "Всички";
  $: activeCat = baseCats.includes(
    $page.url.searchParams.get("category") as Cat,
  )
    ? ($page.url.searchParams.get("category") as Cat)
    : "Всички";

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
        document.body,
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
    { duration = 220, x = 22, baseScale = 0.96 } = {},
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

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta
    name="keywords"
    content="логопедичен център ОЦ Логос Аз и ти, логопедичен център София, логопедичен екип София, логопеди с опит София, сертифицирани логопеди София, логопедичен специалист София, екип логопеди Овча купел, логопедичен кабинет ОЦ Логос, логопедичен кабинет за деца София, галерия логопедичен център София, логопедични занимания снимки, логопед София, логопедичен кабинет Овча купел, логопедичен център ОЦ Логос Аз и ти, снимки от логопедични дейности, логопедична терапия снимки, логопедични игри и упражнения, образователни занимания София, детски логопед София, логопедичен екип София, среда за детско развитие, терапевтични дейности София, логопедични обучения и уъркшопи, логопедична среда за деца, образователни и терапевтични услуги София, logoped Sofia, logopedichen centar Sofia, detski logoped Sofia, galeriya logopedia, logoped Ovtcha kupel, logopedicheski zanyatiya snimki, logopedicheska terapiya snimki, logopedicheski igri i uprazhneniya, obrazovatelni zanyatiya Sofia, detski logoped Sofia, logopedichen ekip Sofia, sreda za detsko razvitie, terapevtichni deynosti Sofia, logopedicheski obuchenia i uarkshopi, logopedicheska sreda za detsa, obrazovatelni i terapevtichni uslugi Sofia"
  />

  <!-- Twitter Card тагове -->
  <meta name="twitter:card" content="/logos/nav-logo.png" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/logos/nav-logo.png" />
  <meta name="twitter:image:alt" content="Галерия" />

  <!-- Open Graph тагове (за Facebook и други) -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/logos/nav-logo.png" />
  <meta property="og:image:alt" content="Галерия" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="/galeriya" />
</svelte:head>

<!-- Heading -->
<div class="heading">
  <div class="heading-container">
    <div id="h-left">
      <h1>Галерия</h1>
      <p>
        В нашата галерия ще откриете моменти от заниманията, събитията и
        вдъхновяващата среда в „Логос – Аз и Ти“. Снимките показват как децата
        учат, играят и се развиват в атмосфера на грижа и творчество.
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

<!-- Filters -->
<div class="filters" aria-label="Филтри">
  <div class="filters-container">
    {#each baseCats as cat}
      <button
        class:active={activeCat === cat}
        on:click={() => (activeCat = cat)}
        aria-pressed={activeCat === cat}
      >
        <span>{cat}</span><span class="count">{countBy(cat)}</span>
      </button>
    {/each}
  </div>
</div>

<!-- Gallery -->
<div class="gallery" id="gallery">
  <div class="gallery-container">
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
                src={img.thumb ?? img.src}
                alt={img.alt ?? "Снимка"}
                loading="lazy"
                sizes="280px"
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
            <button class="pill" on:click={zoomOut} aria-label="Zoom out"
              >–</button
            >
            <button class="pill" on:click={zoomIn} aria-label="Zoom in"
              >+</button
            >
            <button class="pill" on:click={resetTransform} aria-label="Reset"
              >Reset</button
            >
            <button class="close" on:click={closeViewer} aria-label="Затвори"
              >✕</button
            >
          </div>
        </div>

        <!-- Стрелки отляво/отдясно -->
        <button
          class="side-btn prev"
          on:click={prev}
          aria-label="Предишна снимка">‹</button
        >
        <button
          class="side-btn next"
          on:click={next}
          aria-label="Следваща снимка">›</button
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
  </div>
</div>

<style>
  /* ---- 0. Global ---- */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
    transform: translateY(-150%);
  }

  .second-svg {
    align-self: flex-end;
    transform: translateY(45%);
  }

  .heading p {
    font-size: 1.2em;
    line-height: 1.5;
    color: var(--dark-gray);
  }

  /* ---- 2. Filters ---- */
  .filters {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

  .filters-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 90%;
    max-width: 1000px;
  }

  .filters button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--orange-light);
    color: black;
    border: 0;
    border-radius: 999px;
    padding: 10px 14px;
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }

  .filters button .count {
    font-weight: 700;
    font-size: 0.9rem;
    background: var(--orange-dark);
    padding: 0.1rem 0.5rem;
    border-radius: 999px;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.04);
  }
  .filters button.active {
    background: var(--background);
    color: #000;
    outline: 3px solid rgba(247, 162, 116, 0.25);
  }

  /* ---- 3. Gallery ---- */
  .gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    gap: 10px;
    flex-wrap: wrap;
  }

  .gallery-container {
    display: flex;
    justify-content: center;
    width: 90%;
    max-width: 1600px;
  }

  .grid {
    max-width: 1100px;
    margin: 14px auto 44px;
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }
  .tile {
    border-radius: 18px;
    overflow: hidden;
    background: var(--card);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
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
    /* width: 350px; Fixed width */
    height: 220px; /* Fixed height */
    aspect-ratio: unset !important; /* Remove aspect-ratio */
    overflow: hidden;
  }
  .media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    /* opacity: 0;
    filter: blur(8px) saturate(0.9); */
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
    background: var(--orange-light);
    color: #333;
    font-weight: 700;
    font-size: 0.85rem;
    padding: 6px 10px;
    border-radius: 999px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }
  .zoomIcon {
    pointer-events: none;
    font-size: 22px;
    background: var(--orange-light);
    border-radius: 999px;
    padding: 6px 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }

  .empty {
    padding-top: 40px;
    font-size: 1.2rem;
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
    background: var(--orange-light);
    color: #222;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }
  .close {
    background: var(--orange-light);
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
    background: var(--orange-light);
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

  .filters button:hover,
  .chip:hover,
  .zoomIcon:hover,
  .pill:hover,
  .close:hover,
  .side-btn:hover {
    background: var(--orange-dark);
    transition: 0.5s;
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

  /* ---- Media query - 955 ---- */
  @media screen and (max-width: 955px) {
    /* ---- 1. Heading ---- */
    .heading {
      margin: 30px 30px 40px 30px;
    }

    .first-svg {
      transform: translateY(-155%);
    }

    /* ---- 2. Filters ---- */
    .filters-container {
      max-width: 700px;
      width: 100%;
      flex-wrap: wrap;
      gap: 8px;
    }
    .filters button {
      font-size: 1rem;
      padding: 8px 12px;
      margin: 0 6px 8px 6px;
    }

    /* ---- 3. Gallery ---- */
    .gallery {
      max-width: 98vw;
      gap: 6px;
    }
    .gallery-container {
      max-width: 98vw;
      width: 100%;
    }
    .grid {
      max-width: 98vw;
      gap: 14px;
      grid-template-columns: repeat(2, 1fr);
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

    /* ---- 2. Filters ---- */
    .filters {
      gap: 6px;
      margin-bottom: 18px;
    }
    .filters-container {
      flex-direction: column;
      align-items: stretch;
      max-width: 98vw;
      width: 100%;
      gap: 6px;
    }
    .filters button {
      width: 100%;
      margin: 0 0 8px 0;
      font-size: 0.98rem;
      padding: 10px 0;
      justify-content: center;
    }

    /* ---- 3. Gallery ---- */
    .gallery {
      max-width: 100vw;
      gap: 2px;
      padding: 0;
    }
    .gallery-container {
      max-width: 100vw;
      width: 100%;
      padding: 0;
    }
    .grid {
      max-width: 100vw;
      gap: 8px;
      grid-template-columns: 1fr;
      margin: 10px auto 24px;
    }
    .tile {
      border-radius: 12px;
    }

    .full {
      max-width: 90vw;
      max-height: 70vh;
    }

    .side-btn {
      width: 9vw;
      height: 9vw;
      font-size: 6vw;
    }

    .side-btn.prev {
      left: 5px;
      /* top: 420px; */
    }

    .side-btn.next {
      right: 5px;
      /* top: 420px; */
    }
  }

  /* ---- Media query - 350 ---- */
  @media screen and (max-width: 350px) {
    /* ---- 3. Gallery ---- */
    .toolbar.top {
      max-width: fit-content;
    }

    .spacer {
      display: none;
    }
  }
</style>
