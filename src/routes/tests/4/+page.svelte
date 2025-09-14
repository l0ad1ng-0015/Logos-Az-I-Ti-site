<script>
	export let title = 'Галерия | MP Clima';
	export let description =
		'Разгледайте нашата галерия с реални проекти монтажи на климатици. Тук ще откриете примери за качественото обслужване и монтажи, които извършваме, както и различни типове климатични системи, които предлагаме за вашия дом или офис.';

	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let galleryID = 'gallery-01';

	let images = [
		//ВЪТРЕШНИ МОНТАЖИ --->
		{
		  largeURL: '/others/who-are-we.png',
			thumbnailURL: '/others/who-are-we.png',
			galleryClass: 'card',
			width: 500,
			height: 333,
			caption: 'Вътрешен монтаж 1',
			category: 'семинари'
		},
		{
			largeURL: '/others/who-are-we.png',
			thumbnailURL: '/others/who-are-we.png',
			galleryClass: 'card',
			width: 500,
			height: 333,
			caption: 'Вътрешен монтаж 2',
			category: 'in'
		}
	];

	// Categories for filtering
	let categories = [
		{ id: 'all', name: 'Всички', count: images.length },
		{ id: 'семинари', name: 'Семинари', count: images.filter(i => i.category === 'семинари').length },
		{ id: 'кабинет', name: 'Кабинет', count: images.filter(i => i.category === 'кабинет').length }
	];

	let selectedCategory = 'all';

	// Filtered images based on selected category
	$: filteredImages = selectedCategory === 'all'
		? images
		: images.filter(img => img.category === selectedCategory);

	// Split filtered images into 3 columns for masonry layout
	$: column1Images = filteredImages.filter((_, i) => i % 3 === 0);
	$: column2Images = filteredImages.filter((_, i) => i % 3 === 1);
	$: column3Images = filteredImages.filter((_, i) => i % 3 === 2);

	let showLightbox = false;
	let currentImageIndex = 0;

	function openLightbox(index) {
		currentImageIndex = index;
		showLightbox = true;
	}

	function closeLightbox() {
		showLightbox = false;
	}

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
	}

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
	}

	function handleImageLoad(image, event) {
		// Optional: handle image load
	}

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #fff5f0 0%, #ffeee6 100%);
    min-height: 100vh;
  }

  .filters {
    background: white;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    text-align: center;
  }

  .filter-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .filter-btn {
    background: linear-gradient(135deg, #fff8f5 0%, #fff2ee 100%);
    border: 2px solid #ffeee6;
    color: #666;
    padding: 12px 24px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    position: relative;
  }

  .filter-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 154, 115, 0.2);
  }

  .filter-btn.active {
    background: linear-gradient(135deg, #ff9a73 0%, #ff7f50 100%);
    color: white;
    border-color: #ff7f50;
  }

  .filter-count {
    background: rgba(255, 255, 255, 0.2);
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
    margin-left: 8px;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }

  .gallery-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .image-container {
    position: relative;
    width: 100%;
  }

  .gallery-item {
    display: flex;
  align-items: center;
  justify-content: center;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(255, 154, 115, 0.3);
  }

  .gallery-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gallery-item:hover .image-overlay {
    opacity: 1;
  }

  .zoom-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    color: white;
    background: rgba(255, 154, 115, 0.8);
    padding: 8px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .zoom-icon:hover {
    background: rgba(255, 154, 115, 1);
    transform: scale(1.1);
  }

  .image-caption {
    color: white;
    font-size: 1rem;
    font-weight: 500;
    margin-top: auto;
  }

  @media (max-width: 768px) {
    .container {
      padding: 15px;
    }

    .header {
      padding: 30px 20px;
    }

    .header h1 {
      font-size: 2rem;
    }

    .gallery {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .filter-buttons {
      gap: 10px;
    }

    .filter-btn {
      padding: 10px 18px;
      font-size: 0.9rem;
    }

    .lightbox-nav {
      display: none;
    }
  }
</style>


  <div class="filters">
    <div class="filter-buttons">
      {#each categories as category}
        <button 
          class="filter-btn" 
          class:active={selectedCategory === category.id}
          on:click={() => selectedCategory = category.id}
        >
          {category.name}
          <span class="filter-count">{category.count}</span>
        </button>
      {/each}
    </div>
  </div>

  <div class="gallery" id={galleryID}>
    <div class="gallery-column">
      {#each column1Images as image, index (image.largeURL)}
        <a 
          href={image.largeURL} 
          class="gallery-item" 
          data-pswp-width={image.width} 
          data-pswp-height={image.height}
          on:click|preventDefault={() => openLightbox(index * 3)}
        >
          <img 
            src={image.thumbnailURL} 
            alt={image.caption}
            loading="lazy"
            on:load={(e) => handleImageLoad(image, e)}
          />
          <div class="image-overlay">
            <div class="image-caption">{image.caption}</div>
          </div>
        </a>
      {/each}
    </div>
    <div class="gallery-column">
      {#each column2Images as image, index (image.largeURL)}
        <a 
          href={image.largeURL} 
          class="gallery-item" 
          data-pswp-width={image.width} 
          data-pswp-height={image.height}
        >
          <img 
            src={image.thumbnailURL} 
            alt={image.caption}
            loading="lazy"
            on:load={(e) => handleImageLoad(image, e)}
          />
          <div class="image-overlay">
            <div class="image-caption">{image.caption}</div>
          </div>
        </a>
      {/each}
    </div>
    <div class="gallery-column">
      {#each column3Images as image, index (image.largeURL)}
        <a 
          href={image.largeURL} 
          class="gallery-item" 
          data-pswp-width={image.width} 
          data-pswp-height={image.height}
          on:click|preventDefault={() => openLightbox(index * 3 + 2)}
        >
          <img 
            src={image.thumbnailURL} 
            alt={image.caption}
            loading="lazy"
            on:load={(e) => handleImageLoad(image, e)}
          />
          <div class="image-overlay">
            <div class="image-caption">{image.caption}</div>
          </div>
        </a>
      {/each}
    </div>
  </div>