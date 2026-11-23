/**
 * HTMLVerse - Tags Directory Controller
 * Real-time filter, search, category pills, dynamic modal view, and playground transfer.
 */

let activeCategory = 'All';
let activeSearchQuery = '';
let activeVoidFilter = 'all';

function getCategoryBadgeClass(category) {
  switch (category) {
    case 'Root & Metadata': return 'badge-root';
    case 'Sectioning & Semantics': return 'badge-semantics';
    case 'Text Content': return 'badge-text';
    case 'Inline Formatting': return 'badge-inline';
    case 'Forms & Inputs': return 'badge-forms';
    case 'Tables': return 'badge-tables';
    case 'Media & Embedded': return 'badge-media';
    case 'Interactive Elements': return 'badge-interactive';
    case 'Scripting': return 'badge-scripting';
    case 'Deprecated & Obsolete': return 'badge-deprecated';
    default: return 'bg-secondary';
  }
}

function renderTagCards() {
  const container = document.getElementById('tags-grid-container');
  const countBadge = document.getElementById('rendered-tags-count');
  if (!container) return;

  const filteredTags = HTML_TAGS_DATA.filter(tagItem => {
    // Category match
    const matchCat = activeCategory === 'All' || tagItem.category === activeCategory;
    
    // Void filter match
    let matchVoid = true;
    if (activeVoidFilter === 'void') matchVoid = tagItem.isVoid;
    if (activeVoidFilter === 'paired') matchVoid = !tagItem.isVoid;
    if (activeVoidFilter === 'deprecated') matchVoid = tagItem.isDeprecated;

    // Search query match (tag name, category, shortDesc, fullDesc, or attributes)
    const q = activeSearchQuery.toLowerCase().trim();
    const matchSearch = !q || 
      tagItem.name.toLowerCase().includes(q) ||
      tagItem.tag.toLowerCase().includes(q) ||
      tagItem.category.toLowerCase().includes(q) ||
      tagItem.shortDesc.toLowerCase().includes(q) ||
      (tagItem.attributes && tagItem.attributes.some(attr => attr.name.toLowerCase().includes(q)));

    return matchCat && matchVoid && matchSearch;
  });

  if (countBadge) {
    countBadge.innerText = `${filteredTags.length} of ${HTML_TAGS_DATA.length} Tags`;
  }

  if (filteredTags.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search text-muted display-4"></i>
        <h4 class="mt-3">No matching HTML tags found</h4>
        <p class="text-secondary">Try adjusting your search keyword or clearing the category filter.</p>
        <button class="btn btn-outline-primary mt-2" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredTags.map(tagItem => {
    const catBadge = getCategoryBadgeClass(tagItem.category);
    const voidBadge = tagItem.isVoid 
      ? '<span class="badge bg-secondary-subtle text-secondary border ms-1">Self-Closing</span>' 
      : '<span class="badge bg-light text-dark border ms-1">Paired &lt;/&gt;</span>';
    const deprecatedBadge = tagItem.isDeprecated 
      ? '<span class="badge bg-danger-subtle text-danger border ms-1"><i class="bi bi-exclamation-triangle"></i> Obsolete</span>' 
      : '';

    return `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card custom-card tag-card shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="tag-code-header">&lt;${escapeHtml(tagItem.name)}&gt;</span>
              <span class="badge badge-category ${catBadge}">${escapeHtml(tagItem.category)}</span>
            </div>
            
            <div class="mb-2">
              ${voidBadge}
              ${deprecatedBadge}
              ${tagItem.attributes && tagItem.attributes.length > 0 ? `<span class="badge bg-info-subtle text-info border ms-1">${tagItem.attributes.length} attrs</span>` : ''}
            </div>

            <p class="card-text text-secondary small flex-grow-1">${escapeHtml(tagItem.shortDesc)}</p>

            <div class="bg-body-secondary p-2 rounded mb-3 font-monospace small text-truncate">
              <code>${escapeHtml(tagItem.syntax)}</code>
            </div>

            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-outline-primary flex-grow-1" onclick="openTagModal('${escapeHtml(tagItem.name)}')">
                <i class="bi bi-info-circle me-1"></i> Full Details
              </button>
              <a href="playground.html?tag=${encodeURIComponent(tagItem.name)}" class="btn btn-sm btn-primary" title="Try in Sandbox">
                <i class="bi bi-play-fill"></i> Try It
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function openTagModal(tagName) {
  const tagItem = HTML_TAGS_DATA.find(t => t.name.toLowerCase() === tagName.toLowerCase());
  if (!tagItem) return;

  const modalTitle = document.getElementById('tagModalLabel');
  const modalBody = document.getElementById('tagModalBody');
  const modalPlaygroundBtn = document.getElementById('modalPlaygroundBtn');

  if (modalTitle) {
    modalTitle.innerHTML = `<span class="font-monospace text-primary">&lt;${escapeHtml(tagItem.name)}&gt;</span> Tag Reference`;
  }

  if (modalPlaygroundBtn) {
    modalPlaygroundBtn.href = `playground.html?tag=${encodeURIComponent(tagItem.name)}`;
  }

  // Generate attributes table HTML
  let attributesHtml = '';
  if (tagItem.attributes && tagItem.attributes.length > 0) {
    attributesHtml = `
      <h6 class="fw-bold mt-4 mb-2"><i class="bi bi-sliders me-1"></i> Key Attributes</h6>
      <div class="table-responsive">
        <table class="table table-sm table-bordered align-middle">
          <thead class="table-light">
            <tr>
              <th style="width: 25%;">Attribute</th>
              <th>Description & Usage</th>
            </tr>
          </thead>
          <tbody>
            ${tagItem.attributes.map(attr => `
              <tr>
                <td><code class="fw-bold text-primary">${escapeHtml(attr.name)}</code></td>
                <td class="small">${escapeHtml(attr.desc)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  } else {
    attributesHtml = `
      <p class="text-muted small mt-3"><em>Supports standard global attributes like <code>id</code>, <code>class</code>, <code>style</code>, <code>title</code>, <code>tabindex</code>.</em></p>
    `;
  }

  // Safe example snippet
  const safeExample = escapeHtml(tagItem.example || '');

  modalBody.innerHTML = `
    <div class="d-flex align-items-center gap-2 mb-3">
      <span class="badge badge-category ${getCategoryBadgeClass(tagItem.category)}">${escapeHtml(tagItem.category)}</span>
      ${tagItem.isVoid ? '<span class="badge bg-secondary">Self-Closing (Void)</span>' : '<span class="badge bg-light text-dark border">Paired Tag</span>'}
      ${tagItem.isDeprecated ? '<span class="badge bg-danger">Deprecated / Obsolete</span>' : '<span class="badge bg-success-subtle text-success border">HTML5 Standard</span>'}
    </div>

    <h6 class="fw-bold mb-1">Description</h6>
    <p class="text-secondary">${escapeHtml(tagItem.fullDesc || tagItem.shortDesc)}</p>

    <h6 class="fw-bold mt-3 mb-1">Syntax</h6>
    <div class="bg-body-secondary p-2 rounded font-monospace small mb-3">
      <code>${escapeHtml(tagItem.syntax)}</code>
    </div>

    ${attributesHtml}

    <div class="d-flex justify-content-between align-items-center mt-4 mb-2">
      <h6 class="fw-bold mb-0"><i class="bi bi-code-slash me-1"></i> Code Example</h6>
      <button class="btn btn-sm btn-outline-secondary copy-btn-modal" onclick="copyModalCode(this)">
        <i class="bi bi-clipboard"></i> Copy
      </button>
    </div>
    <div class="code-container">
      <pre><code id="modal-code-content">${safeExample}</code></pre>
    </div>

    ${tagItem.tip ? `
      <div class="alert alert-info d-flex align-items-start gap-2 mt-3 mb-0 small">
        <i class="bi bi-lightbulb-fill text-warning fs-5"></i>
        <div>
          <strong>Pro Tip / Accessibility:</strong><br>
          ${escapeHtml(tagItem.tip)}
        </div>
      </div>
    ` : ''}
  `;

  const modalInstance = new bootstrap.Modal(document.getElementById('tagDetailModal'));
  modalInstance.show();
}

function copyModalCode(btn) {
  const codeElem = document.getElementById('modal-code-content');
  if (codeElem) {
    copyToClipboard(codeElem.innerText, btn);
  }
}

function resetFilters() {
  activeCategory = 'All';
  activeSearchQuery = '';
  activeVoidFilter = 'all';

  const searchInput = document.getElementById('tags-search-input');
  if (searchInput) searchInput.value = '';

  const voidSelect = document.getElementById('void-filter-select');
  if (voidSelect) voidSelect.value = 'all';

  document.querySelectorAll('.filter-pill').forEach(pill => {
    if (pill.getAttribute('data-category') === 'All') {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  renderTagCards();
}

document.addEventListener('DOMContentLoaded', () => {
  // Category Pills Listener
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category');
      renderTagCards();
    });
  });

  // Search input listener
  const searchInput = document.getElementById('tags-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value;
      renderTagCards();
    });
  }

  // Void filter dropdown
  const voidSelect = document.getElementById('void-filter-select');
  if (voidSelect) {
    voidSelect.addEventListener('change', (e) => {
      activeVoidFilter = e.target.value;
      renderTagCards();
    });
  }

  // Initial render
  renderTagCards();

  // Check URL query parameters for direct tag opening
  const urlParams = new URLSearchParams(window.location.search);
  const requestedTag = urlParams.get('tag');
  if (requestedTag) {
    openTagModal(requestedTag);
  }
});
