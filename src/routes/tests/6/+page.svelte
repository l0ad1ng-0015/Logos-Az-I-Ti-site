<!-- Process Section -->
  <section class="py-20 px-6 section-bg">
  </section>
  <script>
  import { onMount } from 'svelte';
  
  let showDetails = {};
  
  function toggleDetails(section) {
    showDetails[section] = !showDetails[section];
  }
  
  onMount(() => {
    // Initialize show details state
    showDetails = {
      early: false,
      learning: false,
      social: false,
      speech: false,
      assessment: false
    };
  });
</script>

<main class="min-h-screen bg-gradient-to-br from-orange-100 to-peach-50">
  <!-- Hero Section -->
  <section class="hero-gradient text-white py-20 px-6 relative overflow-hidden">
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
        <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <h1 class="text-5xl md:text-6xl font-bold mb-6">Консултация, диагностика и оценка</h1>
      <p class="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
        Професионална диагностика и оценка на детското развитие за своевременно разпознаване на трудности и планиране на подходяща интервенция. Работим с най-съвременните методи и инструменти за точна диагностика.
      </p>
      <div class="flex justify-center gap-4">
        <button class="btn-primary px-8 py-4 rounded-full text-lg font-semibold">
          Запази час
        </button>
        <button class="btn-secondary px-8 py-4 rounded-full text-lg font-semibold">
          Научи повече
        </button>
      </div>
      
      <!-- Floating elements -->
      <div class="absolute top-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
      <div class="absolute bottom-10 left-10 w-12 h-12 bg-white/10 rounded-full animate-float"></div>
    </div>
  </section>

  <!-- Services Overview -->
  <section class="py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gradient mb-6">Нашите диагностични услуги</h2>
        <p class="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Предлагаме комплексна диагностика и оценка в различни области на детското развитие с цел своевременно установяване на специфични нужди и планиране на индивидуална подкрепа. Всички наши оценки са базирани на международни стандарти и най-добри практики.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Early Development -->
        <div class="bg-white rounded-3xl shadow-xl p-8 card-hover border border-orange-100">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 icon-bounce">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Ранно детско развитие (0-6 години)</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">Комплексна оценка на развитието при деца от раждането до школьовъзраст в ключовите области: моторика, речево развитие, когнитивни умения, социално-емоционално развитие</p>
          <button 
            class="text-orange-600 font-bold hover:text-orange-700 transition-colors text-lg"
            on:click={() => toggleDetails('early')}
          >
            {showDetails.early ? 'Скрий детайли ↑' : 'Научи повече ↓'}
          </button>
          
          {#if showDetails.early}
            <div class="mt-6 p-6 bg-gradient-to-br from-orange-50 to-peach-100 rounded-2xl">
              <h4 class="font-bold text-orange-800 mb-4 text-lg">Какво включва оценката:</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-orange-700 mb-2">Моторно развитие:</h5>
                  <ul class="text-sm text-gray-700 space-y-1 mb-4">
                    <li>• Груба моторика (седене, ходене, бягане, скачане)</li>
                    <li>• Фина моторика (хващане, рисуване, писане)</li>
                    <li>• Координация и баланс</li>
                    <li>• Двигателно планиране</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-orange-700 mb-2">Когнитивно развитие:</h5>
                  <ul class="text-sm text-gray-700 space-y-1 mb-4">
                    <li>• Внимание и концентрация</li>
                    <li>• Памет и обработка на информация</li>
                    <li>• Решаване на проблеми</li>
                    <li>• Символично мислене</li>
                  </ul>
                </div>
              </div>
              <div class="bg-white/70 p-4 rounded-xl">
                <h5 class="font-semibold text-orange-700 mb-2">Специални инструменти:</h5>
                <p class="text-sm text-gray-700">Използваме стандартизирани тестове като Bayley Scales, Denver II, и специализирани протоколи за наблюдение на играта и взаимодействието.</p>
              </div>
            </div>
          {/if}
        </div>

        <!-- Learning Difficulties -->
        <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Трудности в обучението</h3>
          <p class="text-gray-600 mb-4">Диагностика на дислексия, дисграфия, дискалкулия, ADHD и други специфични трудности в обучението при деца в училищна възраст</p>
          <button 
            class="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            on:click={() => toggleDetails('learning')}
          >
            {showDetails.learning ? 'Скрий детайли' : 'Научи повече'} →
          </button>
          
          {#if showDetails.learning}
            <div class="mt-4 p-4 bg-orange-50 rounded-lg">
              <h4 class="font-semibold text-orange-800 mb-2">Включва:</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• Психологическо тестуване</li>
                <li>• Оценка на четивни и писмени умения</li>
                <li>• Математически способности</li>
                <li>• Внимание и концентрация</li>
                <li>• Препоръки за учебна подкрепа</li>
              </ul>
            </div>
          {/if}
        </div>

        <!-- Social-Emotional Development -->
        <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Социално-емоционално развитие</h3>
          <p class="text-gray-600 mb-4">Оценка на емоционалната зрелост, социалните умения, поведенчески трудности и адаптация в различни среди</p>
          <button 
            class="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            on:click={() => toggleDetails('social')}
          >
            {showDetails.social ? 'Скрий детайли' : 'Научи повече'} →
          </button>
          
          {#if showDetails.social}
            <div class="mt-4 p-4 bg-orange-50 rounded-lg">
              <h4 class="font-semibold text-orange-800 mb-2">Включва:</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• Наблюдение на социалното взаимодействие</li>
                <li>• Оценка на емоционалната регулация</li>
                <li>• Анализ на поведенчески модели</li>
                <li>• Работа с родители и учители</li>
                <li>• Стратегии за подкрепа</li>
              </ul>
            </div>
          {/if}
        </div>

        <!-- Speech and Language -->
        <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Речево-езиково развитие</h3>
          <p class="text-gray-600 mb-4">Диагностика на речевите и езиковите умения, артикулационни нарушения, заекване и комуникативни трудности</p>
          <button 
            class="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            on:click={() => toggleDetails('speech')}
          >
            {showDetails.speech ? 'Скрий детайли' : 'Научи повече'} →
          </button>
          
          {#if showDetails.speech}
            <div class="mt-4 p-4 bg-orange-50 rounded-lg">
              <h4 class="font-semibold text-orange-800 mb-2">Включва:</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• Логопедична оценка</li>
                <li>• Тестване на речевото разбиране</li>
                <li>• Анализ на артикулацията</li>
                <li>• Оценка на речевата плавност</li>
                <li>• Програма за речева терапия</li>
              </ul>
            </div>
          {/if}
        </div>

        <!-- School Readiness -->
        <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Училищна готовност</h3>
          <p class="text-gray-600 mb-4">Оценка на готовността за постъпване в училище и адаптация към учебните изисквания</p>
          <button 
            class="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            on:click={() => toggleDetails('assessment')}
          >
            {showDetails.assessment ? 'Скрий детайли' : 'Научи повече'} →
          </button>
          
          {#if showDetails.assessment}
            <div class="mt-4 p-4 bg-orange-50 rounded-lg">
              <h4 class="font-semibold text-orange-800 mb-2">Включва:</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• Когнитивна готовност</li>
                <li>• Социално-емоционална зрелост</li>
                <li>• Моторни умения</li>
                <li>• Предграфни умения</li>
                <li>• Препоръки за подготовка</li>
              </ul>
            </div>
          {/if}
        </div>

        <!-- Comprehensive Assessment -->
        <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H19v2h-1.5v11c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2V8H1V6h3.5l1.5-2h6l1.5 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Комплексна оценка</h3>
          <p class="text-gray-600 mb-4">Цялостна многодисциплинарна оценка при сложни случаи, изискващи участието на различни специалисти</p>
          <div class="mt-4 p-4 bg-orange-50 rounded-lg">
            <h4 class="font-semibold text-orange-800 mb-2">Включва екип от:</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Психолог</li>
              <li>• Логопед</li>
              <li>• Специален педагог</li>
              <li>• При необходимост - други специалисти</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Specialist Section -->
  <section class="py-20 px-6 section-bg">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gradient mb-6">Нашият специалист</h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Всички диагностики се провеждат от висококвалифициран специалист с богат опит в областта на детското развитие
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-48 h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl flex-shrink-0 flex items-center justify-center">
              <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div class="flex-1 text-center md:text-left">
              <h3 class="text-3xl font-bold text-gray-800 mb-4">Мария-Паола Тулуш</h3>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                Магистър по Марият Паола Тулуш Приложна Психология Специализацията ми касае и Лице България университет ЕЦ специален преподавател специален Развитие и детско персонално, и възрастни преподавателс, възрастовите проблемите и специализирано рано-разширена, Терапевтична и лечебна преподавателска програма. Завършила съм в Софийския университет "Св. Климент Охридски" - спецoбразовање дьца Вед България университет.
              </p>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-orange-50 p-6 rounded-2xl">
                  <h4 class="font-bold text-orange-800 mb-3">Квалификации:</h4>
                  <ul class="text-sm text-gray-700 space-y-2">
                    <li>✓ Магистър по Приложна психология</li>
                    <li>✓ Специализация в детското развитие</li>
                    <li>✓ Сертифициран терапевт</li>
                    <li>✓ Обучения в международни методики</li>
                  </ul>
                </div>
                <div class="bg-orange-50 p-6 rounded-2xl">
                  <h4 class="font-bold text-orange-800 mb-3">Опит:</h4>
                  <ul class="text-sm text-gray-700 space-y-2">
                    <li>✓ 10+ години работа с деца</li>
                    <li>✓ Над 500 проведени диагностики</li>
                    <li>✓ Работа с различни възрастови групи</li>
                    <li>✓ Сътрудничество с образователни институции</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Additional Services Section -->
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gradient mb-6">Допълнителни услуги</h2>
        <p class="text-xl text-gray-700 max-w-4xl mx-auto">
          Освен основните диагностични услуги, предлагаме и специализирани оценки за конкретни нужди
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- ADHD Assessment -->
        <div class="bg-white rounded-3xl shadow-xl p-8 card-hover border border-orange-100">
          <div class="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">ADHD диагностика</h3>
          <p class="text-gray-600 leading-relaxed">Специализирана оценка за дефицит на вниманието и хиперактивност при деца и възрастни</p>
        </div>

        <!-- Autism Spectrum -->
        <div class="bg-white rounded-3xl shadow-xl p-8 card-hover border border-orange-100">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Аутистичен спектър</h3>
          <p class="text-gray-600 leading-relaxed">Ранна диагностика и оценка на разстройства от аутистичния спектър</p>
        </div>

        <!-- Intellectual Assessment -->
        <div class="bg-white rounded-3xl shadow-xl p-8 card-hover border border-orange-100">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H19v2h-1.5v11c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2V8H1V6h3.5l1.5-2h6l1.5 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">IQ тестване</h3>
          <p class="text-gray-600 leading-relaxed">Оценка на интелектуалните способности чрез стандартизирани IQ тестове</p>
        </div>

        <!-- Giftedness Assessment -->
        <div class="bg-white rounded-3xl shadow-xl p-8 card-hover border border-orange-100">
          <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Надареност</h3>
          <p class="text-gray-600 leading-relaxed">Идентифициране на високи интелектуални способности и таланти при деца</p>
        </div>

        <!-- Career Counseling -->
        <div class="bg-white rounded-3xl shadow-xl p-8 card-hover border border-orange-100">
          <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Професионално ориентиране</h3>
          <p class="text-gray-600 leading-relaxed">Консултации за професионален избор и кариерно развитие за тийнейджъри</p>
        </div>

        <!-- Family Assessment -->
        <div class="bg-white rounded-3xl shadow-xl p-8 card-hover border border-orange-100">
          <div class="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h3l2 4h7l1.31-1.31-4.17.17L14 12.5c-.3-.33-.5-.74-.5-1.2 0-.49.18-.92.49-1.26L15.09 8H12v2.5l-2-.5v3L7.91 15H4v3z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Семейна оценка</h3>
          <p class="text-gray-600 leading-relaxed">Анализ на семейната динамика и взаимоотношенията в семейството</p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16 px-6 bg-gradient-to-r from-orange-50 to-peach-50">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gradient mb-6">Как протича процесът</h2>
        <p class="text-xl text-gray-700">Нашият подход е индивидуален и базиран на най-добрите практики в областта на детската психология</p>
      </div>

      <div class="space-y-12">
        <div class="flex items-start gap-8 process-step">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">1</div>
          <div class="bg-white rounded-2xl p-8 shadow-xl flex-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Първоначална консултация (60-90 мин)</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">Подробна среща с родителите за събиране на анамнеза, обсъждане на притесненията и планиране на индивидуалната оценка</p>
            <div class="bg-orange-50 p-4 rounded-xl">
              <h4 class="font-semibold text-orange-800 mb-2">Включва:</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• Детайлна бременност, раждане и ранно развитие</li>
                <li>• Медицинска история и настоящи здравословни проблеми</li>
                <li>• Семейна история и социална среда</li>
                <li>• Образователна история и настоящи трудности</li>
                <li>• Предишни оценки и интервенции</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex items-start gap-8 process-step">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">2</div>
          <div class="bg-white rounded-2xl p-8 shadow-xl flex-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Диагностично тестване (2-4 сесии)</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">Провеждане на стандартизирани тестове и структурирани наблюдения, съобразени с възрастта и специфичните нужди на детето</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-orange-50 p-4 rounded-xl">
                <h4 class="font-semibold text-orange-800 mb-2">Използвани инструменти:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• WISC-V (интелигентност)</li>
                  <li>• Bayley Scales (ранно развитие)</li>
                  <li>• ADOS-2 (аутизъм)</li>
                  <li>• Conners (ADHD)</li>
                  <li>• Специализирани речеви тестове</li>
                </ul>
              </div>
              <div class="bg-orange-50 p-4 rounded-xl">
                <h4 class="font-semibold text-orange-800 mb-2">Методи на оценка:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Директно тестване</li>
                  <li>• Структурирано наблюдение</li>
                  <li>• Игрова оценка</li>
                  <li>• Интервюта с родители</li>
                  <li>• Училищни въпросници</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-start gap-8 process-step">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">3</div>
          <div class="bg-white rounded-2xl p-8 shadow-xl flex-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Анализ и интерпретация (1-2 седмици)</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">Задълбочена обработка на резултатите и подготовка на подробен писмен доклад с констатации, диагноза и конкретни препоръки</p>
            <div class="bg-orange-50 p-4 rounded-xl">
              <h4 class="font-semibold text-orange-800 mb-2">Докладът включва:</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• Резултати от всички проведени тестове</li>
                <li>• Клинична интерпретация и диагноза</li>
                <li>• Силни страни и области за развитие</li>
                <li>• Конкретни препоръки за интервенция</li>
                <li>• План за проследяване</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex items-start gap-8 process-step">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">4</div>
          <div class="bg-white rounded-2xl p-8 shadow-xl flex-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Обратна връзка (60 мин)</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">Детайлно обсъждане на резултатите с родителите, обяснение на препоръките и планиране на следващи стъпки</p>
            <div class="bg-orange-50 p-4 rounded-xl">
              <h4 class="font-semibold text-orange-800 mb-2">По време на срещата:</h4>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• Обяснение на резултатите в разбираем език</li>
                <li>• Отговори на въпроси на родителите</li>
                <li>• Конкретни стратегии за дома и училището</li>
                <li>• Препоръки за терапии и подкрепа</li>
                <li>• План за повторна оценка при необходимост</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex items-start gap-8 process-step">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">5</div>
          <div class="bg-white rounded-2xl p-8 shadow-xl flex-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Проследяване и подкрепа</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">Периодични консултации за проследяване на прогреса, адаптиране на интервенциите и подкрепа на семейството</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-orange-50 p-4 rounded-xl">
                <h4 class="font-semibold text-orange-800 mb-2">Включва:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Телефонни консултации</li>
                  <li>• Преглед на прогреса</li>
                  <li>• Корекции в плана</li>
                  <li>• Връзка с други специалисти</li>
                </ul>
              </div>
              <div class="bg-orange-50 p-4 rounded-xl">
                <h4 class="font-semibold text-orange-800 mb-2">Честота:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• След 3 месеца - първи преглед</li>
                  <li>• На 6 месеца - оценка на прогреса</li>
                  <li>• Годишно - цялостен преглед</li>
                  <li>• При нужда - допълнителни срещи</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gradient mb-6">Цени на услугите</h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Прозрачни цени без скрити такси. Всички цени включват подробен писмен доклад и консултация за обратна връзка
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Basic Assessment -->
        <div class="bg-white rounded-3xl shadow-xl p-8 card-hover border-2 border-orange-100">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Базова оценка</h3>
            <div class="text-4xl font-bold text-orange-600 mb-2">150 лв</div>
            <p class="text-gray-500 mb-6">Скринингова оценка</p>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Първоначална консултация</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Кратка оценка (60 мин)</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Кратък доклад</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Основни препоръки</span>
            </li>
          </ul>
          <button class="w-full btn-primary py-4 rounded-2xl text-lg font-semibold text-white">
            Избери план
          </button>
        </div>

        <!-- Comprehensive Assessment -->
        <div class="bg-white rounded-3xl shadow-xl p-8 card-hover border-2 border-orange-400 relative">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">ПОПУЛЯРЕН</span>
          </div>
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Комплексна оценка</h3>
            <div class="text-4xl font-bold text-orange-600 mb-2">350 лв</div>
            <p class="text-gray-500 mb-6">Пълна диагностична оценка</p>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Подробна консултация (90 мин)</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Пълно тестване (2-3 сесии)</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Подробен писмен доклад</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Среща за обратна връзка</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">3-месечно проследяване</span>
            </li>
          </ul>
          <button class="w-full btn-primary py-4 rounded-2xl text-lg font-semibold text-white">
            Избери план
          </button>
        </div>

        <!-- Premium Assessment -->
        <div class="bg-white rounded-3xl shadow-xl p-8 card-hover border-2 border-purple-200">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Премиум оценка</h3>
            <div class="text-4xl font-bold text-purple-600 mb-2">550 лв</div>
            <p class="text-gray-500 mb-6">Мултидисциплинарна оценка</p>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Екип от специалисти</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Разширено тестване (3-4 сесии)</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Детайлен мултидисциплинарен доклад</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Индивидуален план за интервенция</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">6-месечно проследяване</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Консултации с училище</span>
            </li>
          </ul>
          <button class="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 py-4 rounded-2xl text-lg font-semibold text-white transition-all">
            Избери план
          </button>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 bg-gradient-to-r from-orange-50 to-peach-100 rounded-3xl p-8">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-orange-800 mb-4">Важна информация за цените</h3>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="font-bold text-orange-800 mb-3">Включено в цената:</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• Всички необходими тестове и материали</li>
              <li>• Подробен писмен доклад (8-15 страници)</li>
              <li>• Среща за обсъждане на резултатите</li>
              <li>• Конкретни препоръки и стратегии</li>
              <li>• Телефонна подкрепа при въпроси</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-orange-800 mb-3">Отстъпки и улеснения:</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• 10% отстъпка за семейства с повече от едно дете</li>
              <li>• Възможност за разсрочване на плащането</li>
              <li>• Специални цени за социални случаи</li>
              <li>• Безплатни консултации за повторни случаи</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <div class="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-8">
        <h2 class="text-3xl font-bold mb-4">Готови сте за консултация?</h2>
        <p class="text-xl mb-6 opacity-90">
          Свържете се с нас за записване на час или за повече информация
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0876860602" class="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
            📞 0876 860 602
          </a>
          <a href="mailto:logos_aziti@abv.bg" class="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors">
            ✉️ logos_aziti@abv.bg
          </a>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  :global(body) {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  svg {
    width: 50px;
  }

  .hero-gradient {
    background: linear-gradient(135deg, #ff7b47 0%, #ff6b3d 25%, #ff5722 50%, #f4511e 75%, #e64a19 100%);
  }

  .card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-float-delayed {
    animation: float 3s ease-in-out infinite;
    animation-delay: 1s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }

  .text-gradient {
    background: linear-gradient(135deg, #ff5722, #ff7b47);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .section-bg {
    background: linear-gradient(135deg, #fef7f0 0%, #fff7ed 50%, #fef3e8 100%);
  }

  .process-step {
    position: relative;
  }

  .process-step::after {
    content: '';
    position: absolute;
    top: 48px;
    left: 24px;
    width: 2px;
    height: 60px;
    background: linear-gradient(to bottom, #ff5722, transparent);
  }

  .process-step:last-child::after {
    display: none;
  }

  .btn-primary {
    background: linear-gradient(135deg, #ff5722, #ff7b47);
    transition: all 0.3s ease;
  }

  .btn-primary:hover {
    background: linear-gradient(135deg, #e64a19, #ff6b3d);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 87, 34, 0.3);
  }

  .btn-secondary {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  .icon-bounce {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
</style>