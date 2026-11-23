/**
 * HTMLVerse - Core Global Scripts & UI Interactions
 * Theme Management, Toast Notifications, Keyboard Shortcuts, and Responsive Navigation.
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
      showToast(newTheme === 'dark' ? '🌙 Dark mode activated' : '☀️ Light mode activated');
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

// Global Toast Notification System
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'copy-toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="bi bi-info-circle-fill text-primary"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// Global Copy Code Helper
function copyToClipboard(text, triggerElement) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Code snippet copied to clipboard! 📋');

    if (triggerElement) {
      const originalHtml = triggerElement.innerHTML;
      triggerElement.innerHTML = '<i class="bi bi-check2"></i> Copied!';
      triggerElement.classList.add('btn-success');
      triggerElement.classList.remove('btn-outline-secondary', 'btn-secondary', 'btn-outline-primary');

      setTimeout(() => {
        triggerElement.innerHTML = originalHtml;
        triggerElement.classList.remove('btn-success');
        triggerElement.classList.add('btn-outline-secondary');
      }, 1800);
    }
  }).catch(err => {
    console.error('Failed to copy text: ', err);
    showToast('Failed to copy to clipboard');
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

// Keyboard shortcuts (e.g. Ctrl + K / Cmd + K to focus search)
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.getElementById('tags-search-input') || document.querySelector('input[name="search"]');
      if (searchInput) {
        searchInput.focus();
        showToast('Search activated (Ctrl + K)');
      } else {
        window.location.href = 'tags.html';
      }
    }
  });
}

// Auto close mobile navbar when a link is clicked
function initMobileNav() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarContent');
  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      });
    });
  }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initBackToTop();
  initKeyboardShortcuts();
  initMobileNav();

  // Attach copy listeners for elements with data-copy
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', () => {
      const targetSelector = el.getAttribute('data-copy');
      const targetElem = document.querySelector(targetSelector);
      if (targetElem) {
        copyToClipboard(targetElem.innerText || targetElem.value, el);
      }
    });
  });
});
