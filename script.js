// script.js — логика сайта-приглашения

document.addEventListener('DOMContentLoaded', () => {
  console.log('Сайт-приглашение загружен | Павел & Арина | 01.08.2026');

  // ========== ФИКС СКРОЛЛА НА МОБИЛЬНЫХ ==========
  function fixScroll() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      const currentScroll = window.pageYOffset;
      window.scrollTo(0, currentScroll + 1);
      setTimeout(() => {
        window.scrollTo(0, currentScroll);
      }, 10);
    }, 100);
  }

  fixScroll();

  // ========== ОБРАБОТКА ФОТО ==========
  
  // Проверяем наличие фото hero
  const heroImg = document.getElementById('heroPhoto');
  if (heroImg) {
    heroImg.addEventListener('error', () => {
      console.warn('Фото 2.webp не найдено — убедитесь, что файл размещён рядом с index.html');
      heroImg.style.opacity = '0.8';
      heroImg.style.backgroundColor = '#f0f0f0';
      heroImg.alt = 'Изображение Павла и Арины (не загрузилось)';
    });
    
    heroImg.addEventListener('load', () => {
      console.log('✓ Фото 2.webp успешно загружено');
      fixScroll();
    });
  }
  
  // Проверяем наличие фото tilted
  const tiltedImg = document.querySelector('.tilted-photo');
  if (tiltedImg) {
    tiltedImg.addEventListener('error', () => {
      console.warn('Файл 1.png не найден — добавьте изображение в папку с сайтом');
    });
    tiltedImg.addEventListener('load', () => {
      console.log('✓ Фото 1.png загружено, наклон применён');
    });
  }
  
  // Дата
  const dateElement = document.querySelector('.date-number');
  if (dateElement && dateElement.innerText.trim() === '01.08.2026') {
    dateElement.setAttribute('datetime', '2026-08-01');
  }

  // В самом начале DOMContentLoaded:
window.scrollTo(0, 0);

// И добавьте этот обработчик:
window.addEventListener('resize', () => {
  setTimeout(() => window.scrollTo(0, 0), 50);
});
});

// Проверка календаря
setTimeout(() => {
  const calendarDay = document.querySelector('.calendar-days span:nth-child(6)');
  if (calendarDay && calendarDay.innerText === '1') {
    console.log('✓ Календарь загружен, дата 1 августа 2026 выделена');
  }
}, 500);


