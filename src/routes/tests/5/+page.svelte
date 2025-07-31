<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  let formErrors = {};
  let isSubmitting = false;
  let submitSuccess = false;

  function validateForm() {
    formErrors = {};
    
    if (!formData.name.trim()) {
      formErrors.name = 'Името е задължително поле';
    }
    
    if (!formData.email.trim()) {
      formErrors.email = 'Имейлът е задължително поле';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = 'Моля въведете валиден имейл адрес';
    }
    
    if (!formData.phone.trim()) {
      formErrors.phone = 'Телефонът е задължително поле';
    } else if (!/^[\d\s\+\-\(\)]{8,}$/.test(formData.phone)) {
      formErrors.phone = 'Моля въведете валиден телефонен номер';
    }
    
    if (!formData.subject.trim()) {
      formErrors.subject = 'Темата е задължително поле';
    }
    
    if (!formData.message.trim()) {
      formErrors.message = 'Съобщението е задължително поле';
    } else if (formData.message.trim().length < 10) {
      formErrors.message = 'Съобщението трябва да бъде поне 10 символа';
    }
    
    return Object.keys(formErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      isSubmitting = false;
      submitSuccess = true;
      
      // Reset form after successful submission
      formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        submitSuccess = false;
      }, 5000);
    }, 1500);
  }

  function clearError(field) {
    if (formErrors[field]) {
      delete formErrors[field];
      formErrors = formErrors;
    }
  }
</script>

<div class="contacts-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <h1>Свържете се с нас</h1>
      <p>Готови сме да отговорим на всичките ви въпроси и да ви помогнем</p>
    </div>
  </section>

  <!-- Main Content -->
  <div class="container">
    <div class="contacts-grid">
      <!-- Contact Information -->
      <div class="contact-info">
        <h2>Информация за контакт</h2>
        
        <div class="info-card">
          <div class="info-item">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"/>
              </svg>
            </div>
            <div class="info-text">
              <h3>Адрес</h3>
              <p>ж.к. "Овча купел-1," бл.411, вх."Г"<br>София, България</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/>
              </svg>
            </div>
            <div class="info-text">
              <h3>Телефон</h3>
              <p><a href="tel:087 686 0602">087 686 0602</a></p>
              <p><a href="tel:02 123 4567">02 123 4567</a></p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/>
              </svg>
            </div>
            <div class="info-text">
              <h3>Имейл</h3>
              <p><a href="mailto:logos-aziti@abv.bg">logos-aziti@abv.bg</a></p>
              <p><a href="mailto:info@example.bg">info@example.bg</a></p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M13 17h-2v-6h2zm0-8h-2V7h2z"/>
              </svg>
            </div>
            <div class="info-text">
              <h3>Работно време</h3>
              <p>Понеделник - Петък: 9:00 - 18:00</p>
              <p>Събота: 9:00 - 14:00</p>
              <p>Неделя: Почивен ден</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M13 17h-2v-6h2zm0-8h-2V7h2z"/>
              </svg>
            </div>
            <div class="info-text">
              <h3>Работно време</h3>
              <p>Понеделник - Петък: 9:00 - 18:00</p>
              <p>Събота: 9:00 - 14:00</p>
              <p>Неделя: Почивен ден</p>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div class="social-media">
          <h3>Последвайте ни</h3>
          <div class="social-links">
            <a href="#" class="social-link facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669c1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="social-link instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.771 1.691 4.919 4.919c.058 1.265.069 1.645.069 4.849c0 3.205-.012 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919c-1.266.058-1.644.07-4.85.07c-3.204 0-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92c-.058-1.265-.07-1.644-.07-4.849c0-3.204.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919c1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072c-4.358.2-6.78 2.618-6.98 6.98c-.059 1.281-.073 1.689-.073 4.948c0 3.259.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98c1.281.058 1.689.072 4.948.072c3.259 0 3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98c.059-1.28.073-1.689.073-4.948c0-3.259-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98c-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163s6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="social-link linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065c0-1.138.92-2.063 2.063-2.063c1.14 0 2.064.925 2.064 2.063c0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form-section">
        <h2>Изпратете ни съобщение</h2>
        
        {#if submitSuccess}
          <div class="success-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
            </svg>
            <p>Благодарим ви! Вашето съобщение беше изпратено успешно. Ще се свържем с вас скоро.</p>
          </div>
        {/if}

        <form on:submit={handleSubmit} class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Име *</label>
              <input 
                type="text" 
                id="name" 
                bind:value={formData.name}
                on:input={() => clearError('name')}
                class:error={formErrors.name}
                placeholder="Вашето име"
                required
              />
              {#if formErrors.name}
                <span class="error-message">{formErrors.name}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="email">Имейл *</label>
              <input 
                type="email" 
                id="email" 
                bind:value={formData.email}
                on:input={() => clearError('email')}
                class:error={formErrors.email}
                placeholder="your@email.com"
                required
              />
              {#if formErrors.email}
                <span class="error-message">{formErrors.email}</span>
              {/if}
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="phone">Телефон *</label>
              <input 
                type="tel" 
                id="phone" 
                bind:value={formData.phone}
                on:input={() => clearError('phone')}
                class:error={formErrors.phone}
                placeholder="087 xxx xxxx"
                required
              />
              {#if formErrors.phone}
                <span class="error-message">{formErrors.phone}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="subject">Тема *</label>
              <select 
                id="subject" 
                bind:value={formData.subject}
                on:change={() => clearError('subject')}
                class:error={formErrors.subject}
                required
              >
                <option value="">Изберете тема</option>
                <option value="consultation">Консултация</option>
                <option value="appointment">Запазване на час</option>
                <option value="services">Информация за услуги</option>
                <option value="pricing">Ценова информация</option>
                <option value="other">Друго</option>
              </select>
              {#if formErrors.subject}
                <span class="error-message">{formErrors.subject}</span>
              {/if}
            </div>
          </div>

          <div class="form-group">
            <label for="message">Съобщение *</label>
            <textarea 
              id="message" 
              bind:value={formData.message}
              on:input={() => clearError('message')}
              class:error={formErrors.message}
              placeholder="Опишете как можем да ви помогнем..."
              rows="6"
              required
            ></textarea>
            {#if formErrors.message}
              <span class="error-message">{formErrors.message}</span>
            {/if}
          </div>

          <button type="submit" class="submit-btn" disabled={isSubmitting}>
            {#if isSubmitting}
              <div class="spinner"></div>
              Изпращане...
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2l.01 7z"/>
              </svg>
              Изпрати съобщение
            {/if}
          </button>
        </form>
      </div>
    </div>

    <!-- Map Section -->
    <div class="map-section">
      <h2>Как да ни намерите</h2>
      <div class="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.1234567890123!2d23.2654321!3d42.6876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1234567890123!5m2!1sen!2sbg"
          width="100%" 
          height="400" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          title="Нашето местоположение">
        </iframe>
        <div class="map-overlay">
          <div class="map-info">
            <h3>Лесно достъпно място</h3>
            <p>Намираме се в сърцето на София с лесен достъп с обществен транспорт</p>
            <a href="https://maps.google.com" target="_blank" class="directions-btn">
              Вземете указания
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .contacts-page {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
  }

  .hero-section {
    background: linear-gradient(135deg, #2f4d19 0%, #4a7c59 100%);
    color: white;
    padding: 80px 0;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .hero-content p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
  }

  .contacts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-bottom: 60px;
  }

  /* Contact Information */
  .contact-info h2 {
    color: #2f4d19;
    margin-bottom: 30px;
    font-size: 2rem;
  }

  .info-card {
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #f0f0f0;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
    padding-bottom: 25px;
    border-bottom: 1px solid #f5f5f5;
  }

  .info-item:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .info-item .icon {
    background: linear-gradient(135deg, #2f4d19, #4a7c59);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    flex-shrink: 0;
  }

  .info-text h3 {
    color: #2f4d19;
    margin-bottom: 8px;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .info-text p {
    margin: 0;
    color: #666;
    line-height: 1.5;
  }

  .info-text a {
    color: #2f4d19;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .info-text a:hover {
    color: #4a7c59;
  }

  /* Social Media */
  .social-media {
    margin-top: 40px;
  }

  .social-media h3 {
    color: #2f4d19;
    margin-bottom: 20px;
    font-size: 1.3rem;
  }

  .social-links {
    display: flex;
    gap: 15px;
  }

  .social-link {
    width: 45px;
    height: 45px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .social-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  .social-link.facebook {
    background: #1877f2;
  }

  .social-link.instagram {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  }

  .social-link.linkedin {
    background: #0077b5;
  }

  /* Contact Form */
  .contact-form-section h2 {
    color: #2f4d19;
    margin-bottom: 30px;
    font-size: 2rem;
  }

  .contact-form {
    background: white;
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #f0f0f0;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    margin-bottom: 25px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    color: #2f4d19;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 0.95rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    font-family: inherit;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #2f4d19;
    box-shadow: 0 0 0 3px rgba(47, 77, 25, 0.1);
  }

  .form-group input.error,
  .form-group select.error,
  .form-group textarea.error {
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }

  .error-message {
    color: #dc2626;
    font-size: 0.85rem;
    margin-top: 5px;
    font-weight: 500;
  }

  .submit-btn {
    background: linear-gradient(135deg, #2f4d19, #4a7c59);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
  }

  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(47, 77, 25, 0.3);
  }

  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .success-message {
    background: #dcfce7;
    border: 1px solid #bbf7d0;
    color: #166534;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .success-message svg {
    flex-shrink: 0;
    color: #22c55e;
  }

  /* Map Section */
  .map-section {
    margin-top: 60px;
  }

  .map-section h2 {
    color: #2f4d19;
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
  }

  .map-container {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .map-overlay {
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(255, 255, 255, 0.95);
    padding: 20px;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    max-width: 300px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .map-info h3 {
    color: #2f4d19;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .map-info p {
    color: #666;
    margin-bottom: 15px;
    font-size: 0.9rem;
  }

  .directions-btn {
    background: #2f4d19;
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  .directions-btn:hover {
    background: #4a7c59;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.2rem;
    }

    .hero-content p {
      font-size: 1rem;
      padding: 0 20px;
    }

    .contacts-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .form-row {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .contact-form {
      padding: 30px 20px;
    }

    .info-card {
      padding: 25px 20px;
    }

    .container {
      padding: 40px 15px;
    }

    .map-overlay {
      position: static;
      margin: 20px;
      margin-bottom: 0;
    }

    .social-links {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .hero-section {
      padding: 60px 0;
    }

    .hero-content h1 {
      font-size: 1.8rem;
    }

    .contact-info h2,
    .contact-form-section h2,
    .map-section h2 {
      font-size: 1.5rem;
    }

    .info-item {
      flex-direction: column;
      text-align: center;
    }

    .info-item .icon {
      margin: 0 auto 15px auto;
    }

    .contact-form {
      padding: 25px 15px;
    }

    .info-card {
      padding: 20px 15px;
    }

    .map-overlay {
      margin: 15px;
    }
  }
</style>