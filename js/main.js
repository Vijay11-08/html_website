/**
 * HTMLVerse - Core Global Scripts
 * Theme Management, Navigation, Copy Utilities, and Interactive UI Helpers.
 */

// Initialize Theme
function initTheme() {
  const savedTheme = localStorage.getItem('htmlverse-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const activeTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  applyTheme(activeTheme);

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('htmlverse-theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    if (theme === 'dark') {
      themeIcon.className = 'bi bi-sun-fill text-warning';
    } else {
      themeIcon.className = 'bi bi-moon-stars-fill text-dark';
    }
  }
}

// Global Copy Code Helper
function copyToClipboard(text, triggerElement) {
  navigator.clipboard.writeText(text).then(() => {
    if (triggerElement) {
      const originalHtml = triggerElement.innerHTML;
      triggerElement.innerHTML = '<i class="bi bi-check2"></i> Copied!';
      triggerElement.classList.add('btn-success');
      triggerElement.classList.remove('btn-outline-secondary', 'btn-secondary');

      setTimeout(() => {
        triggerElement.innerHTML = originalHtml;
        triggerElement.classList.remove('btn-success');
        triggerElement.classList.add('btn-outline-secondary');
      }, 1800);
    }
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// Back to Top button
function initBackToTop() {
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initBackToTop();

  // Attach copy listeners for elements with data-copy
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', (e) => {
      const targetSelector = el.getAttribute('data-copy');
      const targetElem = document.querySelector(targetSelector);
      if (targetElem) {
        copyToClipboard(targetElem.innerText || targetElem.value, el);
      }
    });
  });
});
