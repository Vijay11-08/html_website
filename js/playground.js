/**
 * HTMLVerse - Live HTML Playground Controller
 * Live sandboxed rendering, code presets, responsive viewport toggle, file export.
 */

const PRESETS = {
  starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML5 Starter Playground</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      margin: 2rem;
      background: #f8fafc;
      color: #0f172a;
    }
    .hero {
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      color: white;
      padding: 2.5rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4);
    }
    .hero h1 { margin: 0 0 0.5rem 0; }
    .btn {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.6rem 1.4rem;
      background: white;
      color: #2563eb;
      text-decoration: none;
      font-weight: bold;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Hello from HTML5 Playground! 🚀</h1>
    <p>Edit the code on the left and watch the preview update instantly in real time.</p>
    <a href="#" class="btn" onclick="alert('You clicked the interactive button!')">Click Me</a>
  </div>
</body>
</html>`,

  semantics: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic HTML5 Layout</title>
  <style>
    body { font-family: sans-serif; margin: 0; background: #f1f5f9; }
    header, footer { background: #1e293b; color: white; padding: 1rem 2rem; }
    nav a { color: #38bdf8; margin-right: 1rem; text-decoration: none; }
    main { max-width: 800px; margin: 2rem auto; background: white; padding: 2rem; border-radius: 8px; }
    article { margin-bottom: 2rem; }
    aside { background: #e2e8f0; padding: 1rem; border-radius: 6px; }
  </style>
</head>
<body>
  <header>
    <h2>TechDaily Blog</h2>
    <nav>
      <a href="#home">Home</a>
      <a href="#articles">Articles</a>
      <a href="#about">About</a>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h1>Mastering Modern HTML5 Semantics</h1>
        <p><time datetime="2026-11-23">Nov 23, 2026</time> by <address style="display:inline">Tech Team</address></p>
      </header>
      <p>Semantic tags improve accessibility, SEO indexing, and code readability across modern web platforms.</p>
      <figure>
        <blockquote cite="https://w3.org">
          "Semantic HTML gives meaning to structural content."
        </blockquote>
        <figcaption>— W3C Guidelines</figcaption>
      </figure>
    </article>

    <aside>
      <h3>Related Readings</h3>
      <ul>
        <li><a href="#">Understanding CSS Grid</a></li>
        <li><a href="#">Modern JavaScript ES2026</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 TechDaily. Built with HTML5 Semantics.</p>
  </footer>
</body>
</html>`,

  form: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Accessible Responsive Form</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 2rem; background: #f8fafc; }
    .form-card { max-width: 480px; margin: auto; background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    .field { margin-bottom: 1.2rem; }
    label { display: block; font-weight: 600; margin-bottom: 0.4rem; }
    input, select, textarea { width: 100%; padding: 0.6rem; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; }
    button { width: 100%; padding: 0.75rem; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
    button:hover { background: #0369a1; }
  </style>
</head>
<body>
  <div class="form-card">
    <h2>User Registration</h2>
    <form action="#" method="POST" onsubmit="event.preventDefault(); alert('Form submitted successfully!');">
      <div class="field">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="fullname" placeholder="John Doe" required>
      </div>

      <div class="field">
        <label for="email">Work Email:</label>
        <input type="email" id="email" name="email" placeholder="john@company.com" required>
      </div>

      <div class="field">
        <label for="experience">Experience Level:</label>
        <select id="experience" name="level">
          <option value="beginner">Beginner (0-1 yrs)</option>
          <option value="intermediate">Intermediate (2-4 yrs)</option>
          <option value="senior">Senior (5+ yrs)</option>
        </select>
      </div>

      <div class="field">
        <label for="notes">Bio / Objectives:</label>
        <textarea id="notes" rows="3" placeholder="Tell us about your learning goals..."></textarea>
      </div>

      <button type="submit">Complete Sign Up</button>
    </form>
  </div>
</body>
</html>`,

  dialog: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Native Dialog Element</title>
  <style>
    body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 80vh; }
    button { padding: 0.7rem 1.5rem; font-size: 1rem; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }
    .btn-open { background: #2563eb; color: white; }
    .btn-close { background: #64748b; color: white; margin-top: 1rem; }
    dialog {
      border: none;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.25);
      max-width: 420px;
    }
    dialog::backdrop {
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(4px);
    }
  </style>
</head>
<body>
  <div style="text-align: center;">
    <h1>HTML5 &lt;dialog&gt; API</h1>
    <p>Zero-library native modal popup with built-in accessibility focus trap.</p>
    <button class="btn-open" onclick="document.getElementById('demoModal').showModal()">Open Native Modal</button>
  </div>

  <dialog id="demoModal">
    <h2>Native Dialog Window</h2>
    <p>This modal is rendered with the native HTML5 &lt;dialog&gt; tag. Notice the dimmed backdrop and ESC key listener.</p>
    <button class="btn-close" onclick="document.getElementById('demoModal').close()">Dismiss Window</button>
  </dialog>
</body>
</html>`,

  table: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Data Table</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 2rem; }
    table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
    th, td { padding: 0.75rem 1rem; text-align: left; border-bottom: 1px solid #e2e8f0; }
    thead th { background-color: #0f172a; color: white; }
    tbody tr:hover { background-color: #f8fafc; }
    tfoot th { background-color: #f1f5f9; font-weight: bold; }
    caption { caption-side: top; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem; text-align: left; }
  </style>
</head>
<body>
  <table>
    <caption>Quarterly Cloud Usage Breakdown</caption>
    <thead>
      <tr>
        <th scope="col">Resource</th>
        <th scope="col">Instance Type</th>
        <th scope="col">Monthly Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Compute Engine</td>
        <td>n2-standard-4</td>
        <td>$145.00</td>
      </tr>
      <tr>
        <td>Cloud Storage</td>
        <td>Multi-Region Bucket</td>
        <td>$32.50</td>
      </tr>
      <tr>
        <td>Cloud SQL</td>
        <td>db-custom-2-7680</td>
        <td>$88.20</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="2" scope="row">Estimated Total</th>
        <td><strong>$265.70</strong></td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,

  media: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Media Elements</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 2rem; max-width: 700px; margin: auto; }
    .media-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem; }
    video, audio { width: 100%; border-radius: 8px; margin-top: 0.5rem; }
  </style>
</head>
<body>
  <h1>HTML5 Video & Audio</h1>

  <div class="media-card">
    <h3>Video Player</h3>
    <video controls poster="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600">
      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
  </div>

  <div class="media-card">
    <h3>Audio Player</h3>
    <audio controls>
      <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg">
      Your browser does not support HTML5 audio.
    </audio>
  </div>
</body>
</html>`
};

let debounceTimer = null;

function updatePreview() {
  const codeEditor = document.getElementById('code-editor');
  const previewFrame = document.getElementById('preview-frame');
  if (!codeEditor || !previewFrame) return;

  const code = codeEditor.value;
  const frameDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;

  frameDoc.open();
  frameDoc.write(code);
  frameDoc.close();
}

function handleCodeChange() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(updatePreview, 250);
}

function setViewport(size) {
  const wrapper = document.getElementById('preview-viewport-wrapper');
  const buttons = document.querySelectorAll('[data-viewport]');
  if (!wrapper) return;

  wrapper.classList.remove('device-desktop', 'device-tablet', 'device-mobile');
  wrapper.classList.add(`device-${size}`);

  buttons.forEach(btn => {
    if (btn.getAttribute('data-viewport') === size) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function loadPreset(presetKey) {
  const codeEditor = document.getElementById('code-editor');
  if (!codeEditor) return;

  if (PRESETS[presetKey]) {
    codeEditor.value = PRESETS[presetKey];
    updatePreview();
  }
}

function downloadHtmlFile() {
  const codeEditor = document.getElementById('code-editor');
  if (!codeEditor) return;

  const content = codeEditor.value;
  const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'playground-code.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', () => {
  const codeEditor = document.getElementById('code-editor');
  const presetSelect = document.getElementById('preset-select');
  const downloadBtn = document.getElementById('download-code-btn');
  const copyBtn = document.getElementById('copy-editor-btn');
  const clearBtn = document.getElementById('clear-editor-btn');

  // Check URL query parameters for tag example
  const urlParams = new URLSearchParams(window.location.search);
  const tagParam = urlParams.get('tag');

  if (tagParam && typeof HTML_TAGS_DATA !== 'undefined') {
    const matchedTag = HTML_TAGS_DATA.find(t => t.name.toLowerCase() === tagParam.toLowerCase());
    if (matchedTag && matchedTag.example) {
      codeEditor.value = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><${matchedTag.name}> Tag Demo</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 2rem; background: #f8fafc; color: #1e293b; }
    .demo-box { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); max-width: 650px; margin: auto; }
  </style>
</head>
<body>
  <div class="demo-box">
    <h2>&lt;${matchedTag.name}&gt; Tag Interactive Demonstration</h2>
    <hr>
    <!-- Tag Example Start -->
${matchedTag.example}
    <!-- Tag Example End -->
  </div>
</body>
</html>`;
      if (presetSelect) presetSelect.value = '';
    }
  } else {
    // Default to starter template
    if (codeEditor && !codeEditor.value.trim()) {
      codeEditor.value = PRESETS.starter;
    }
  }

  // Update preview on typing
  if (codeEditor) {
    codeEditor.addEventListener('input', handleCodeChange);
    
    // Support Tab key indentation in textarea
    codeEditor.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = codeEditor.selectionStart;
        const end = codeEditor.selectionEnd;
        codeEditor.value = codeEditor.value.substring(0, start) + '  ' + codeEditor.value.substring(end);
        codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
        handleCodeChange();
      }
    });

    // Initial render
    updatePreview();
  }

  // Preset selector
  if (presetSelect) {
    presetSelect.addEventListener('change', (e) => {
      if (e.target.value) {
        loadPreset(e.target.value);
      }
    });
  }

  // Viewport toggle buttons
  document.querySelectorAll('[data-viewport]').forEach(btn => {
    btn.addEventListener('click', () => {
      setViewport(btn.getAttribute('data-viewport'));
    });
  });

  // Action buttons
  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadHtmlFile);
  }

  if (copyBtn && codeEditor) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(codeEditor.value, copyBtn);
    });
  }

  if (clearBtn && codeEditor) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Clear the entire editor contents?')) {
        codeEditor.value = '';
        updatePreview();
      }
    });
  }
});
