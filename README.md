# 🚀 HTMLVerse - The Interactive HTML5 Learning Hub & Tag Encyclopedia

A responsive, modern, developer-grade web application created to teach and reference HTML from fundamentals to advanced HTML5 living standards.

Built with **HTML5**, **Bootstrap 5.3**, and modern **vanilla JavaScript**. Zero external build dependencies required!

---

## 🌐 Live Website & Repository Links

- **Live Website (GitHub Pages):** [https://vijay11-08.github.io/html_website/](https://vijay11-08.github.io/html_website/)
- **GitHub Repository:** [https://github.com/Vijay11-08/html_website](https://github.com/Vijay11-08/html_website)
- **Author:** [vijay11-08](https://github.com/Vijay11-08) (`vijayotaradi118@gmail.com`)

---

## 🌟 Key Features

1. **Exhaustive HTML Tag Encyclopedia (`tags.html`)**:
   - Comprehensive documentation of HTML tags across 10 categories (Root & Metadata, Semantics, Text & Layout, Inline Formatting, Forms & Inputs, Tables, Media & Embedded, Interactive, Scripting, Deprecated).
   - Real-time search filter (searches tag names, categories, descriptions, or attributes).
   - Category filtering pills and Void / Paired / Obsolete tag filters.
   - Rich details modal with full descriptions, key attributes tables, syntax, runnable code, and accessibility tips.

2. **Real-Time Interactive HTML Playground (`playground.html`)**:
   - Split-view code editor with live sandboxed `<iframe>` preview updating as you type.
   - Built-in templates / presets: Starter Boilerplate, Semantic Blog Layout, Responsive Form, Native Dialog Modal, Data Table, Video & Audio.
   - Responsive viewport switcher (Desktop 100%, Tablet 768px, Mobile 375px).
   - 1-click Download `.html` file, Copy Code, Clear Editor, and Tab indentation support.
   - Dynamic deep-linking (`playground.html?tag=<name>`) loads any tag's example directly.

3. **Step-by-Step Complete HTML5 Tutorial (`tutorial.html`)**:
   - 10 structured curriculum modules from document skeleton to forms, tables, media, accessibility (WCAG), and modern native APIs (`<dialog>`, `<details>`).
   - Sticky navigation sidebar and quick copy code snippets.

4. **HTML5 Cheat Sheet & Starter Templates (`cheatsheet.html`)**:
   - Quick reference matrix of standard global attributes (`id`, `class`, `data-*`, `tabindex`, etc.).
   - Production-ready copy-paste templates (SEO OpenGraph starter, accessible contact form).

5. **Interactive Knowledge Assessment Quiz (`quiz.html`)**:
   - 10 comprehensive questions covering void elements, semantics, accessibility, form attributes, and security.
   - Instant visual feedback and detailed technical explanations for every option.
   - Final score report with performance evaluation.

6. **Modern UI/UX**:
   - Dark / Light mode toggle with persistent state saved in `localStorage`.
   - Sleek responsive design utilizing Bootstrap 5.3 grid and custom modern gradients.
   - Mobile-first layout with offcanvas navbar and back-to-top floating button.

---

## 📁 Project Architecture

```
d:\html_website\
├── index.html            # Landing page with search bar, features & semantics showcase
├── tags.html             # Comprehensive HTML Tag Encyclopedia with dynamic filter & modal
├── playground.html       # Real-time live code editor with sandboxed preview & presets
├── tutorial.html         # 10-module structured curriculum from basics to advanced
├── cheatsheet.html       # Global attributes matrix & copy-paste starter templates
├── quiz.html             # Interactive knowledge assessment quiz
├── css\
│   └── styles.css        # Custom modern styling, themes, animations, code containers
├── js\
│   ├── tags-data.js      # Complete dataset of HTML tags, attributes, examples, and tips
│   ├── main.js           # Theme toggle, clipboard copy, scroll utilities
│   ├── tags.js           # Tag encyclopedia rendering, real-time search & modal controller
│   ├── playground.js     # Live code execution, sandboxed iframe renderer, templates
│   └── quiz.js           # Dynamic quiz engine with scoring & explanations
├── .gitignore            # Git exclusion rules
└── README.md             # Project documentation
```

---

## 💻 How to Run Locally

Because this project is built entirely with client-side HTML, CSS, and JavaScript:
1. Open any `.html` file (e.g. `index.html`) directly in any modern browser (Chrome, Edge, Firefox, Safari).
2. Or serve it using any simple local server:
   - **VS Code**: Right click `index.html` -> "Open with Live Server"
   - **Python**: `python -m http.server 8000`
   - **Node.js**: `npx serve`

---

## 🚀 Pushing to GitHub & Hosting on GitHub Pages

1. Create a new repository on your GitHub account (e.g., `htmlverse` or `html-learning-website`).
2. Link your remote and push the `main` branch:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
3. To enable free live hosting on **GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages**.
   - Under **Build and deployment** -> **Source**, select `Deploy from a branch`.
   - Select branch `main` and folder `/ (root)`.
   - Click **Save**. Your website will be live at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`!
