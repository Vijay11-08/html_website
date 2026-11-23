/**
 * Comprehensive HTML Tags Database
 * Over 110+ HTML5 standard tags, categories, syntax, attributes, examples, and tips.
 */

const HTML_TAGS_DATA = [
  // ==========================================
  // 1. ROOT & METADATA
  // ==========================================
  {
    name: "!DOCTYPE",
    tag: "<!DOCTYPE>",
    category: "Root & Metadata",
    syntax: "<!DOCTYPE html>",
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Declares the document type and tells the browser to render in standard HTML5 mode.",
    fullDesc: "The <!DOCTYPE html> declaration is not technically an HTML tag, but an instruction to the web browser about what version of HTML the page is written in. In HTML5, it is case-insensitive, extremely minimal, and must appear at the very first line of any HTML document before the <html> tag.",
    attributes: [],
    example: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First HTML5 Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`,
    tip: "Always include <!DOCTYPE html> as the very first line. Without it, browsers trigger Quirks Mode, leading to erratic CSS rendering."
  },
  {
    name: "html",
    tag: "<html>",
    category: "Root & Metadata",
    syntax: '<html lang="en"> ... </html>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "The root element that wraps all other HTML elements on a web page.",
    fullDesc: "The <html> tag represents the root of an HTML document. All other elements must be descendants of this element (except <!DOCTYPE>). It is good practice to always specify the 'lang' attribute to aid screen readers and search engines.",
    attributes: [
      { name: "lang", desc: "Specifies the primary human language of the page content (e.g., 'en', 'es', 'fr', 'hi')." },
      { name: "dir", desc: "Sets text direction: 'ltr' (left-to-right) or 'rtl' (right-to-left)." }
    ],
    example: `<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <title>Root Element Demo</title>
  </head>
  <body>
    <p>This page uses English text direction left-to-right.</p>
  </body>
</html>`,
    tip: "Never omit the 'lang' attribute. Screen readers rely on it to pronounce words with the correct dialect."
  },
  {
    name: "head",
    tag: "<head>",
    category: "Root & Metadata",
    syntax: "<head> ... </head>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Container for metadata, scripts, stylesheets, and document title not rendered directly on screen.",
    fullDesc: "The <head> element contains machine-readable information (metadata) about the document, like its title, scripts, stylesheets, and SEO meta tags. The contents are not directly rendered on the main body of the webpage.",
    attributes: [],
    example: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
  <link rel="stylesheet" href="style.css">
</head>`,
    tip: "Place charset and responsive viewport meta tags near the top of <head> for fast parser optimization."
  },
  {
    name: "title",
    tag: "<title>",
    category: "Root & Metadata",
    syntax: "<title>Page Title</title>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines the title of the document shown in the browser tab and search engine results.",
    fullDesc: "The <title> element specifies a title for the document. This title is displayed on the browser tab, in bookmarks/favorites, and as the headline in search engine result pages (SERPs).",
    attributes: [],
    example: `<head>
  <title>Learn HTML5 Mastery | Interactive Guide</title>
</head>`,
    tip: "Keep titles under 60 characters for optimal display in Google search results and include primary keywords."
  },
  {
    name: "meta",
    tag: "<meta>",
    category: "Root & Metadata",
    syntax: '<meta name="..." content="...">',
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Specifies metadata such as character encoding, page description, keywords, author, and viewport.",
    fullDesc: "The <meta> tag defines metadata about the HTML document. Metadata is not displayed on the page, but is machine parsable. Common uses include setting character set (UTF-8), responsive viewport settings, SEO descriptions, and OpenGraph social cards.",
    attributes: [
      { name: "charset", desc: "Defines the character encoding for the document (typically 'UTF-8')." },
      { name: "name", desc: "Name of the metadata property (e.g., 'description', 'viewport', 'author', 'robots')." },
      { name: "content", desc: "The value associated with the 'name' or 'http-equiv' attribute." },
      { name: "http-equiv", desc: "Simulates an HTTP response header (e.g., 'refresh', 'X-UA-Compatible')." }
    ],
    example: `<!-- Character Set -->
<meta charset="UTF-8">

<!-- Mobile Responsive Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- SEO Description -->
<meta name="description" content="Free interactive HTML reference guide and coding playground.">`,
    tip: "Always include <meta name='viewport' content='width=device-width, initial-scale=1.0'> for modern mobile responsiveness."
  },
  {
    name: "link",
    tag: "<link>",
    category: "Root & Metadata",
    syntax: '<link rel="stylesheet" href="style.css">',
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Links the document to external resources like CSS stylesheets, favicons, and preconnect fonts.",
    fullDesc: "The <link> tag specifies relationships between the current document and an external resource. Most frequently used to link external stylesheets, it is also essential for favicons, canonical URLs, and preloading assets.",
    attributes: [
      { name: "rel", desc: "Specifies the relationship (e.g., 'stylesheet', 'icon', 'canonical', 'preload')." },
      { name: "href", desc: "URL of the linked resource." },
      { name: "type", desc: "MIME type of the resource (e.g., 'text/css', 'image/x-icon')." },
      { name: "media", desc: "Media query condition when the stylesheet should apply (e.g., 'print', '(min-width: 768px)')." }
    ],
    example: `<!-- External CSS -->
<link rel="stylesheet" href="styles.css">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">

<!-- Font Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">`,
    tip: "Use 'rel=preload' for critical fonts and hero images to dramatically speed up Largest Contentful Paint (LCP)."
  },
  {
    name: "style",
    tag: "<style>",
    category: "Root & Metadata",
    syntax: "<style> ... </style>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Embeds internal CSS stylesheets directly within an HTML document.",
    fullDesc: "The <style> tag contains style information (CSS) for a document. It should typically reside inside the <head> section, though HTML5 permits it in the body with scoped styling.",
    attributes: [
      { name: "media", desc: "Specifies what media/device the styles are designed for (e.g., 'screen', 'print')." }
    ],
    example: `<style>
  body {
    font-family: system-ui, sans-serif;
    line-height: 1.6;
    color: #212529;
  }
  .highlight {
    background-color: #fff3cd;
    padding: 2px 6px;
    border-radius: 4px;
  }
</style>`,
    tip: "Prefer external stylesheets via <link> for multi-page sites, but use internal <style> for single files or critical above-the-fold CSS."
  },
  {
    name: "base",
    tag: "<base>",
    category: "Root & Metadata",
    syntax: '<base href="https://example.com/blog/" target="_blank">',
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Specifies the base URL and target for all relative URLs in a document.",
    fullDesc: "The <base> tag specifies the default URL and/or target for all relative URLs contained within a document. There can be at most one <base> element in a document, and it must be inside the <head> element.",
    attributes: [
      { name: "href", desc: "Base URL prefix for all relative hyperlinks and asset references." },
      { name: "target", desc: "Default browsing context (_blank, _self, _parent, _top)." }
    ],
    example: `<head>
  <base href="https://images.example.com/gallery/" target="_blank">
</head>
<body>
  <!-- Resolves to https://images.example.com/gallery/photo.jpg -->
  <img src="photo.jpg" alt="Gallery Photo">
</body>`,
    tip: "Use with caution: <base> affects every relative link, script, and image on your entire page."
  },

  // ==========================================
  // 2. SECTIONING & SEMANTICS
  // ==========================================
  {
    name: "body",
    tag: "<body>",
    category: "Sectioning & Semantics",
    syntax: "<body> ... </body>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Contains all the visible contents of an HTML document.",
    fullDesc: "The <body> element represents the entire content of an HTML document, such as headings, paragraphs, images, tables, hyperlinks, and audio/video players. There can be only one <body> element in a document.",
    attributes: [],
    example: `<body>
  <header>
    <h1>Welcome to My Website</h1>
  </header>
  <main>
    <p>Everything inside the body tag is rendered in the viewport.</p>
  </main>
</body>`,
    tip: "Keep scripts placed right before the closing </body> tag or use defer/async in <head> for fast page loading."
  },
  {
    name: "header",
    tag: "<header>",
    category: "Sectioning & Semantics",
    syntax: "<header> ... </header>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents introductory content or a set of navigational links for a page or article.",
    fullDesc: "The <header> element represents a container for introductory content or navigational links. It usually contains one or more heading elements, a logo, search bar, and author metadata. A page can have multiple <header> tags (e.g. site header and article header).",
    attributes: [],
    example: `<header class="site-header">
  <div class="logo">🚀 DevSpace</div>
  <nav>
    <a href="#home">Home</a> |
    <a href="#features">Features</a> |
    <a href="#contact">Contact</a>
  </nav>
</header>`,
    tip: "A <header> cannot be placed inside an <address>, <footers>, or another <header> element."
  },
  {
    name: "nav",
    tag: "<nav>",
    category: "Sectioning & Semantics",
    syntax: "<nav> ... </nav>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines a section of navigation links intended for primary site navigation.",
    fullDesc: "The <nav> element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples are menus, tables of contents, and pagination.",
    attributes: [
      { name: "aria-label", desc: "Provides an accessible label if multiple nav sections exist (e.g. 'Main Navigation', 'Footer Navigation')." }
    ],
    example: `<nav aria-label="Main Navigation">
  <ul class="nav-list">
    <li><a href="/">Home</a></li>
    <li><a href="/tutorials">Tutorials</a></li>
    <li><a href="/tags">Tags Reference</a></li>
  </ul>
</nav>`,
    tip: "Not all links belong inside <nav>; reserve it for major navigational blocks to help screen reader users jump directly to navigation."
  },
  {
    name: "main",
    tag: "<main>",
    category: "Sectioning & Semantics",
    syntax: "<main> ... </main>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Specifies the dominant, unique content of the body of a document.",
    fullDesc: "The <main> tag represents the dominant content of the <body> of a document. The content inside the <main> element should be unique to the document and exclude repetitive header, footer, or sidebar elements.",
    attributes: [],
    example: `<main id="main-content">
  <article>
    <h2>Introduction to Semantic HTML</h2>
    <p>Semantic tags give meaning to structure rather than just visual appearance.</p>
  </article>
</main>`,
    tip: "Only one visible <main> tag should exist per page. It creates a landmark that helps assistive technology users jump right to content."
  },
  {
    name: "section",
    tag: "<section>",
    category: "Sectioning & Semantics",
    syntax: "<section> ... </section>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a standalone generic section of a document, typically with its own heading.",
    fullDesc: "The <section> tag defines sections in a document, such as chapters, headers, footers, or any other sections. A section should generally have a heading (h1-h6) describing its purpose.",
    attributes: [],
    example: `<section id="services">
  <h2>Our Core Services</h2>
  <p>We provide full-stack web engineering, UI/UX design, and cloud hosting.</p>
</section>`,
    tip: "Do not use <section> simply as a styling container; use a <div> instead when there is no semantic meaning or heading."
  },
  {
    name: "article",
    tag: "<article>",
    category: "Sectioning & Semantics",
    syntax: "<article> ... </article>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines independent, self-contained content that makes sense on its own (e.g. blog post, news story).",
    fullDesc: "The <article> tag specifies independent, self-contained content. An article should make sense on its own and it should be possible to distribute it independently from the rest of the site (e.g. via RSS or syndication).",
    attributes: [],
    example: `<article class="blog-card">
  <h2>Understanding Flexbox vs Grid</h2>
  <p class="meta">Published on Nov 20, 2026 by Alex Code</p>
  <p>CSS Grid is two-dimensional while Flexbox excels at one-dimensional alignment.</p>
  <a href="/read-more">Read full guide &rarr;</a>
</article>`,
    tip: "If the content could be syndicated in a feed (like a tweet, forum post, or news card), use <article>."
  },
  {
    name: "aside",
    tag: "<aside>",
    category: "Sectioning & Semantics",
    syntax: "<aside> ... </aside>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines content tangentially related to the content around it (sidebars, callouts, pull quotes).",
    fullDesc: "The <aside> element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars, callout quote boxes, or related link lists.",
    attributes: [],
    example: `<div class="content-wrapper">
  <main>
    <h2>Understanding HTML5</h2>
    <p>HTML5 brought semantic elements that transformed web markup.</p>
  </main>
  <aside>
    <h3>Related Topics</h3>
    <ul>
      <li><a href="#css3">CSS3 Basics</a></li>
      <li><a href="#js-dom">JavaScript DOM</a></li>
    </ul>
  </aside>
</div>`,
    tip: "Aside content must make sense even if removed without breaking the core narrative of the article."
  },
  {
    name: "footer",
    tag: "<footer>",
    category: "Sectioning & Semantics",
    syntax: "<footer> ... </footer>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines a footer for a document or section, typically containing copyright, links, and contact info.",
    fullDesc: "The <footer> tag defines a footer for a document or section. A <footer> typically contains information about the author of the section, copyright data, terms of service links, or contact details.",
    attributes: [],
    example: `<footer class="site-footer">
  <p>&copy; 2026 HTMLVerse Academy. All rights reserved.</p>
  <nav>
    <a href="/privacy">Privacy Policy</a> |
    <a href="/terms">Terms</a> |
    <a href="/contact">Contact</a>
  </nav>
</footer>`,
    tip: "You can have multiple <footer> tags in a page — one for the entire site, and one inside each <article>."
  },
  {
    name: "address",
    tag: "<address>",
    category: "Sectioning & Semantics",
    syntax: "<address> ... </address>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Supplies contact information for the author/owner of a document or an article.",
    fullDesc: "The <address> element indicates that the enclosed HTML provides contact information for a person or people, or for an organization. This can include physical addresses, email links, phone numbers, or social media handles.",
    attributes: [],
    example: `<address>
  Written by <a href="mailto:support@example.com">Dev Team</a><br>
  Visit us at:<br>
  100 Tech Blvd, Silicon Valley, CA<br>
  USA
</address>`,
    tip: "Only use <address> for contact details of the author/owner; do not use it for arbitrary postal addresses in an invoice."
  },
  {
    name: "h1-h6",
    tag: "<h1> to <h6>",
    category: "Sectioning & Semantics",
    syntax: "<h1>Level 1</h1> ... <h6>Level 6</h6>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Six levels of section headings, where <h1> is the highest rank and <h6> is the lowest.",
    fullDesc: "Heading elements implement six levels of document headings. <h1> is the most important heading on the page, while <h6> is the least. Headings construct the document outline relied upon by search engines and screen readers.",
    attributes: [],
    example: `<h1>Main Page Headline (h1)</h1>
<p>Introductory paragraph.</p>

<h2>Major Section (h2)</h2>
<p>Details about the section.</p>

<h3>Subsection (h3)</h3>
<p>Deep dive details.</p>`,
    tip: "Never skip heading ranks (e.g. jumping from <h1> directly to <h3>). Reserve exactly one <h1> per page for optimal SEO."
  },
  {
    name: "hgroup",
    tag: "<hgroup>",
    category: "Sectioning & Semantics",
    syntax: "<hgroup> <h1>Title</h1> <p>Subtitle</p> </hgroup>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Groups a heading with any secondary content, such as subheadings, an alternative title, or a tagline.",
    fullDesc: "The <hgroup> tag is used to group an <h1>–<h6> element with other content, such as one or more paragraphs representing a subheading or tagline.",
    attributes: [],
    example: `<hgroup>
  <h1>HTMLVerse</h1>
  <p>The definitive interactive learning guide for modern web developers</p>
</hgroup>`,
    tip: "Use <hgroup> to bind titles and taglines together so search engines correctly interpret the relationship."
  },

  // ==========================================
  // 3. TEXT & CONTENT LAYOUT
  // ==========================================
  {
    name: "p",
    tag: "<p>",
    category: "Text Content",
    syntax: "<p>Paragraph text goes here...</p>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines a paragraph of text, automatically adding vertical whitespace above and below.",
    fullDesc: "The <p> element represents a paragraph. Paragraphs are block-level elements that automatically group text into readable segments with margin spacing. Browsers automatically insert a line break before and after each paragraph.",
    attributes: [],
    example: `<p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.</p>
<p>Combined with CSS and JavaScript, HTML forms the foundation of modern front-end web development.</p>`,
    tip: "Never put block-level elements like <div>, <table>, or <ul> inside a <p> tag; browsers will forcefully auto-close the paragraph."
  },
  {
    name: "hr",
    tag: "<hr>",
    category: "Text Content",
    syntax: "<hr>",
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Represents a thematic break or transition between paragraph-level topics in an HTML page.",
    fullDesc: "The <hr> element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section. Visually, it is rendered as a horizontal divider line.",
    attributes: [],
    example: `<h3>Chapter 1: The Beginning</h3>
<p>Our journey starts with raw text files and basic tags.</p>

<hr>

<h3>Chapter 2: Modern Web Architecture</h3>
<p>Next we explore semantic HTML5 and responsive frameworks.</p>`,
    tip: "Use <hr> for semantic topical shifts, not purely for decoration; style dividers via CSS borders when purely decorative."
  },
  {
    name: "pre",
    tag: "<pre>",
    category: "Text Content",
    syntax: "<pre> ... </pre>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines preformatted text, preserving both spaces, tabs, and line breaks in monospace font.",
    fullDesc: "The <pre> element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered in a non-proportional ('monospace') font. Spaces, tabs, and line breaks are fully preserved.",
    attributes: [],
    example: `<pre>
  Line 1: Indented two spaces
  Line 2: Indented two spaces
    Line 3: Indented four spaces
</pre>`,
    tip: "Pair <pre> with <code> to display syntax-highlighted code blocks: <pre><code>const x = 10;</code></pre>."
  },
  {
    name: "blockquote",
    tag: "<blockquote>",
    category: "Text Content",
    syntax: '<blockquote cite="https://quote-source.com"> ... </blockquote>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Indicates that the enclosed text is an extended quotation from another source.",
    fullDesc: "The <blockquote> element indicates that the enclosed text is an extended quotation from outside sources. It is rendered with an indented margin by default. You can specify the source URL using the 'cite' attribute.",
    attributes: [
      { name: "cite", desc: "A URL pointing to the source document or message for the quotation." }
    ],
    example: `<blockquote cite="https://en.wikipedia.org/wiki/Tim_Berners-Lee">
  <p>The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.</p>
  <footer>— Tim Berners-Lee, <cite>Inventor of the World Wide Web</cite></footer>
</blockquote>`,
    tip: "Use <blockquote> for long quotations, and <q> for short inline quotes."
  },
  {
    name: "ol",
    tag: "<ol>",
    category: "Text Content",
    syntax: "<ol> <li>First</li> <li>Second</li> </ol>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Creates an ordered (numbered) list of items.",
    fullDesc: "The <ol> element represents an ordered list of items, rendered with ascending numerical or alphabetical markers. Items are defined using child <li> (list item) elements.",
    attributes: [
      { name: "type", desc: "Kind of marker: '1' (decimal), 'a' (lowercase alpha), 'A' (uppercase alpha), 'i' (lowercase roman), 'I' (uppercase roman)." },
      { name: "start", desc: "Starting integer value for the numbering (e.g. start='5')." },
      { name: "reversed", desc: "Boolean attribute to number items in descending order (e.g. top 10 countdown)." }
    ],
    example: `<ol type="1" start="1">
  <li>Install VS Code</li>
  <li>Create an index.html file</li>
  <li>Open the file in Google Chrome</li>
</ol>`,
    tip: "Use <ol> whenever the sequence or step-by-step order matters (e.g., cooking recipes, installation steps)."
  },
  {
    name: "ul",
    tag: "<ul>",
    category: "Text Content",
    syntax: "<ul> <li>Item A</li> <li>Item B</li> </ul>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Creates an unordered (bulleted) list of items.",
    fullDesc: "The <ul> element represents an unordered list of items, typically rendered as a bulleted list. The order of items in this list does not change the core meaning of the document.",
    attributes: [],
    example: `<ul>
  <li>HTML5 (Markup)</li>
  <li>CSS3 (Presentation)</li>
  <li>JavaScript (Behavior)</li>
</ul>`,
    tip: "Combine <ul> with CSS 'list-style: none' and flexbox to construct accessible navigation menus."
  },
  {
    name: "li",
    tag: "<li>",
    category: "Text Content",
    syntax: "<li>Item description</li>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines an individual item within an ordered (<ol>), unordered (<ul>), or menu (<menu>) list.",
    fullDesc: "The <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points.",
    attributes: [
      { name: "value", desc: "An integer indicating the current ordinal value of the list item inside an <ol>." }
    ],
    example: `<ol>
  <li>Step One</li>
  <li value="10">Jumped to Step Ten</li>
  <li>Step Eleven</li>
</ol>`,
    tip: "Never place an <li> outside of a <ul>, <ol>, or <menu> parent container."
  },
  {
    name: "dl",
    tag: "<dl>",
    category: "Text Content",
    syntax: "<dl> <dt>Term</dt> <dd>Definition</dd> </dl>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a description or definition list consisting of term and description pairs.",
    fullDesc: "The <dl> tag represents a description list. The tag is used in conjunction with <dt> (defines terms/names) and <dd> (describes each term/name). Perfect for glossaries, key-value metadata, or FAQ sections.",
    attributes: [],
    example: `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language - defines web content structure.</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets - defines layout and visual aesthetics.</dd>
  <dt>DOM</dt>
  <dd>Document Object Model - the tree API for scripting pages.</dd>
</dl>`,
    tip: "A single <dt> can have multiple <dd> elements if a term has multiple meanings or descriptions."
  },
  {
    name: "dt",
    tag: "<dt>",
    category: "Text Content",
    syntax: "<dt>Term or Label</dt>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Specifies a term or name in a description/definition list (<dl>).",
    fullDesc: "The <dt> element identifies a term in a description list (<dl>). This element can only appear as a child of a <dl>. It is usually followed by a <dd> element.",
    attributes: [],
    example: `<dt>API</dt>
<dd>Application Programming Interface: A set of protocols for building applications.</dd>`,
    tip: "You can group dt/dd pairs inside <div> wrappers inside <dl> for cleaner flex/grid CSS styling."
  },
  {
    name: "dd",
    tag: "<dd>",
    category: "Text Content",
    syntax: "<dd>Description text</dd>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Provides the description, definition, or value for the preceding term (<dt>) in a description list.",
    fullDesc: "The <dd> element provides the definition, value, or explanation for the preceding term (<dt>) in a description list (<dl>).",
    attributes: [],
    example: `<dt>Semantic Web</dt>
<dd>An extension of the World Wide Web through standards set by the W3C to make data machine-readable.</dd>`,
    tip: "Browsers indent <dd> by default with a left margin of 40px."
  },
  {
    name: "figure",
    tag: "<figure>",
    category: "Text Content",
    syntax: "<figure> <img ...> <figcaption>Caption</figcaption> </figure>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents self-contained visual or code content, optionally with a caption (<figcaption>).",
    fullDesc: "The <figure> element represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element. The figure, its caption, and its contents are referenced as a single unit from the main text flow.",
    attributes: [],
    example: `<figure>
  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500" alt="Microprocessor chip" class="img-fluid rounded">
  <figcaption>Fig. 1 - Silicon wafer microarchitecture under microscope.</figcaption>
</figure>`,
    tip: "Can wrap code snippets, diagrams, illustrations, charts, or quotes — not just images!"
  },
  {
    name: "figcaption",
    tag: "<figcaption>",
    category: "Text Content",
    syntax: "<figcaption>Caption text</figcaption>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Provides a caption or legend for its parent <figure> element.",
    fullDesc: "The <figcaption> tag defines a caption for a <figure> element. The <figcaption> element can be placed as the first or last child of the <figure> element.",
    attributes: [],
    example: `<figure>
  <img src="chart.png" alt="Quarterly Revenue Growth">
  <figcaption>Quarterly financial results showing 35% YoY increase.</figcaption>
</figure>`,
    tip: "Only one <figcaption> is permitted per <figure> block."
  },
  {
    name: "div",
    tag: "<div>",
    category: "Text Content",
    syntax: '<div class="container"> ... </div>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "A generic block-level container with no semantic meaning, used for CSS styling and layout.",
    fullDesc: "The <div> element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. flexbox, grid, padding). Use it only when no semantic alternative (<main>, <article>, <section>, <header>, etc.) is suitable.",
    attributes: [],
    example: `<div class="card p-3 shadow-sm">
  <h3>Card Title</h3>
  <p>General container for styling cards, grids, or layouts.</p>
</div>`,
    tip: "Avoid 'div soup' (excessive nested divs). Strive to use semantic tags like <article>, <section>, or <nav> first."
  },
  {
    name: "span",
    tag: "<span>",
    category: "Text Content",
    syntax: '<span class="badge">Text</span>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "A generic inline-level container with no semantic meaning, used for styling parts of text.",
    fullDesc: "The <span> tag is an inline container used to mark up a part of a text, or a part of a document. It is easily styled by CSS or manipulated with JavaScript using the class or id attribute.",
    attributes: [],
    example: `<p>Please note that prices are in <span class="text-primary fw-bold">USD ($)</span> only.</p>`,
    tip: "Use <span> for inline visual styling or hooks for JavaScript without breaking text flow."
  },

  // ==========================================
  // 4. INLINE & FORMATTING
  // ==========================================
  {
    name: "a",
    tag: "<a>",
    category: "Inline Formatting",
    syntax: '<a href="https://example.com" target="_blank">Visit Site</a>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Creates hyperlinks to web pages, files, email addresses, phone numbers, or section anchors.",
    fullDesc: "The <a> (anchor) tag defines a hyperlink, which is used to link from one page to another. The most important attribute of the <a> element is the href attribute, which indicates the link's destination.",
    attributes: [
      { name: "href", desc: "The URL that the hyperlink points to, e.g., 'https://...', '#section', 'mailto:..', 'tel:..'." },
      { name: "target", desc: "Specifies where to open the linked document ('_blank' for new tab, '_self' for current window)." },
      { name: "rel", desc: "Relationship of the target resource ('noopener', 'noreferrer', 'nofollow')." },
      { name: "download", desc: "Prompts the user to save the linked URL instead of navigating to it." }
    ],
    example: `<!-- External link opening in new tab -->
<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>

<!-- Email Link -->
<a href="mailto:support@example.com">Email Us</a>

<!-- Phone Link -->
<a href="tel:+18005550199">Call Support</a>`,
    tip: "Always add rel='noopener noreferrer' when using target='_blank' to protect against reverse tabnabbing security exploits."
  },
  {
    name: "strong",
    tag: "<strong>",
    category: "Inline Formatting",
    syntax: "<strong>Strong importance</strong>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Indicates strong importance, seriousness, or urgency; renders bold by default.",
    fullDesc: "The <strong> element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type, and screen readers alter tone to convey importance.",
    attributes: [],
    example: `<p><strong>Warning:</strong> Always backup your database before running migrations.</p>`,
    tip: "Use <strong> for semantic importance and <b> when you only want visual boldness without extra importance."
  },
  {
    name: "em",
    tag: "<em>",
    category: "Inline Formatting",
    syntax: "<em>Emphasized text</em>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Marks text that has stress emphasis, altering the sentence meaning; renders italic.",
    fullDesc: "The <em> element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis. Screen readers emphasize the word verbally.",
    attributes: [],
    example: `<p>I <em>love</em> web development. (Emphasizes affection)</p>
<p><em>I</em> love web development. (Emphasizes who)</p>`,
    tip: "Use <em> for verbal stress emphasis, and <i> for stylistic italics (e.g. Latin terms, vessel names)."
  },
  {
    name: "b",
    tag: "<b>",
    category: "Inline Formatting",
    syntax: "<b>Bold text</b>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Draws attention to text without conveying extra importance (purely stylistic bolding).",
    fullDesc: "The <b> element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance (keywords in a summary, product names in a review).",
    attributes: [],
    example: `<p>The two main ingredients are <b>flour</b> and <b>yeast</b>.</p>`,
    tip: "Use <strong> if the text has semantic priority or warning significance, otherwise use <b>."
  },
  {
    name: "i",
    tag: "<i>",
    category: "Inline Formatting",
    syntax: "<i>Italic text</i>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a range of text in an alternate voice or mood (idioms, technical terms, taxonomic names).",
    fullDesc: "The <i> element represents a range of text with an alternate voice or mood, or otherwise offset from the normal prose, such as a taxonomic designation, technical term, idiomatic phrase, or thought.",
    attributes: [],
    example: `<p>The Latin name for the red fox is <i>Vulpes vulpes</i>.</p>`,
    tip: "Font icon libraries (like FontAwesome or Bootstrap Icons) often use <i> for icon markup (e.g. <i class='bi bi-heart'></i>)."
  },
  {
    name: "u",
    tag: "<u>",
    category: "Inline Formatting",
    syntax: "<u>Underlined text</u>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Renders text with an unarticulated underline annotation (e.g. spelling error, proper names in Chinese).",
    fullDesc: "The <u> element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation, such as labeling the text as being a misspelling or proper name in Chinese.",
    attributes: [],
    example: `<p>This sentance has an <u class="text-danger">unspelled</u> word.</p>`,
    tip: "Avoid using <u> casually because users will easily confuse underlined text with clickable hyperlinks."
  },
  {
    name: "small",
    tag: "<small>",
    category: "Inline Formatting",
    syntax: "<small>Fine print text</small>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents side-comments, disclaimers, copyrights, and legal fine print.",
    fullDesc: "The <small> element represents small print and other side comments, such as copyright and legal text, or disclaimers, typically rendered one font-size smaller than surrounding text.",
    attributes: [],
    example: `<p>&copy; 2026 Company Inc. <small>Terms and conditions apply. Void where prohibited.</small></p>`,
    tip: "Only use <small> for short legal annotations or disclaimers, not for entire paragraphs of general text."
  },
  {
    name: "s",
    tag: "<s>",
    category: "Inline Formatting",
    syntax: "<s>Strikethrough text</s>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Renders text with a strikethrough line to indicate things that are no longer accurate or relevant.",
    fullDesc: "The <s> element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate (e.g. discounted previous prices).",
    attributes: [],
    example: `<p>Special Offer: <s>$99.00</s> <strong class="text-success">$49.00</strong>!</p>`,
    tip: "To indicate document editing / deletions, use <del> and <ins> instead of <s>."
  },
  {
    name: "mark",
    tag: "<mark>",
    category: "Inline Formatting",
    syntax: "<mark>Highlighted text</mark>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents text highlighted or marked for reference purposes, like search result matches.",
    fullDesc: "The <mark> element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context (default yellow highlight).",
    attributes: [],
    example: `<p>Search results for 'JavaScript': We found modern <mark>JavaScript</mark> tutorials and tips.</p>`,
    tip: "Ideal for highlighting active search keywords in result listings."
  },
  {
    name: "code",
    tag: "<code>",
    category: "Inline Formatting",
    syntax: "<code>let x = 42;</code>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Displays inline code fragments, variable names, or computer syntax in monospace font.",
    fullDesc: "The <code> tag displays a short fragment of computer code. By default, it is displayed in the browser's default monospace font.",
    attributes: [],
    example: `<p>Use the <code>document.getElementById()</code> method to query DOM nodes.</p>`,
    tip: "For multi-line blocks of code, always wrap <code> inside a <pre> element."
  },
  {
    name: "kbd",
    tag: "<kbd>",
    category: "Inline Formatting",
    syntax: "<kbd>Ctrl</kbd> + <kbd>C</kbd>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents user keyboard input, voice commands, or shortcut key combinations.",
    fullDesc: "The <kbd> element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.",
    attributes: [],
    example: `<p>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> to open Developer Tools.</p>`,
    tip: "Style <kbd> with borders and box-shadow to make it visually look like realistic physical keycaps."
  },
  {
    name: "sub",
    tag: "<sub>",
    category: "Inline Formatting",
    syntax: "H<sub>2</sub>O",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines subscript text, displayed half a character below the baseline (e.g. chemical formulas).",
    fullDesc: "The <sub> element defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main body of text (subscript).",
    attributes: [],
    example: `<p>Chemical formula of water: H<sub>2</sub>O, Glucose: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></p>`,
    tip: "Keep subscript text short so it doesn't distort line height in surrounding paragraphs."
  },
  {
    name: "sup",
    tag: "<sup>",
    category: "Inline Formatting",
    syntax: "E = mc<sup>2</sup>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines superscript text, displayed half a character above the baseline (e.g. mathematical exponents).",
    fullDesc: "The <sup> element defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main body of text (superscript, exponents, ordinal numbers like 1st).",
    attributes: [],
    example: `<p>Einstein's equation: E = mc<sup>2</sup> | He finished in 1<sup>st</sup> place!</p>`,
    tip: "Frequently used for footnote markers: <p>Important claim<sup>[1]</sup></p>."
  },
  {
    name: "time",
    tag: "<time>",
    category: "Inline Formatting",
    syntax: '<time datetime="2026-11-23">Nov 23, 2026</time>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a specific period in time or date in machine-readable format.",
    fullDesc: "The <time> element represents either a time on a 24-hour clock or a precise date in the Gregorian calendar (with optional time and timezone offset). The datetime attribute provides the machine-readable ISO 8601 value.",
    attributes: [
      { name: "datetime", desc: "Machine-readable date/time string formatted as ISO 8601 (e.g. '2026-11-23T18:00:00Z')." }
    ],
    example: `<p>Published on <time datetime="2026-11-23">November 23, 2026</time>.</p>
<p>Class starts at <time datetime="09:00">9:00 AM</time>.</p>`,
    tip: "Search engines and calendar apps use <time datetime='...'> to extract event schedules and article dates."
  },
  {
    name: "abbr",
    tag: "<abbr>",
    category: "Inline Formatting",
    syntax: '<abbr title="Hypertext Markup Language">HTML</abbr>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents an abbreviation or acronym; provides the expansion in the title attribute.",
    fullDesc: "The <abbr> element represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation. When hovered, browsers display a tooltip with the expanded text.",
    attributes: [
      { name: "title", desc: "The full expansion or description of the abbreviation." }
    ],
    example: `<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>`,
    tip: "Expand the acronym in plain text the first time it appears on a page for highest accessibility."
  },
  {
    name: "q",
    tag: "<q>",
    category: "Inline Formatting",
    syntax: '<q cite="...">Short quote</q>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Indicates that the enclosed text is a short inline quotation.",
    fullDesc: "The <q> tag indicates that the enclosed text is a short inline quotation. Most modern browsers automatically insert localized quotation marks around the text enclosed in the <q> tag.",
    attributes: [
      { name: "cite", desc: "URL that designates a source document or message for the information quoted." }
    ],
    example: `<p>Steve Jobs once said, <q>Stay hungry, stay foolish.</q></p>`,
    tip: "Do not manually type quote marks ('\"') inside a <q> tag; browsers insert them automatically based on the page language."
  },
  {
    name: "cite",
    tag: "<cite>",
    category: "Inline Formatting",
    syntax: "<cite>Title of Work</cite>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Marks the title of a creative work (a book, film, poem, song, painting, or report).",
    fullDesc: "The <cite> element is used to describe a reference to a cited creative work, and must include the title of that work. The reference may be in an abbreviated form according to standard citation conventions.",
    attributes: [],
    example: `<p>My favorite book is <cite>The Pragmatic Programmer</cite> by Andy Hunt and Dave Thomas.</p>`,
    tip: "Do not use <cite> to reference the author's name alone; it is meant strictly for the title of the creative work."
  },
  {
    name: "br",
    tag: "<br>",
    category: "Inline Formatting",
    syntax: "<br>",
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Produces a line break in text (carriage-return).",
    fullDesc: "The <br> element produces a line break in text (carriage-return). It is useful for writing addresses, poems, or song lyrics where the division of lines is significant.",
    attributes: [],
    example: `<p>742 Evergreen Terrace<br>Springfield, OR 97477<br>USA</p>`,
    tip: "Do not use <br> to create vertical spacing between paragraphs; use CSS margins or padding instead."
  },
  {
    name: "wbr",
    tag: "<wbr>",
    category: "Inline Formatting",
    syntax: "Super<wbr>cali<wbr>fragilistic",
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Represents a word break opportunity where the browser may break a long word if necessary.",
    fullDesc: "The <wbr> (Word Break Opportunity) element specifies where in a text it would be acceptable to add a line break if the container width is too narrow, preventing long URLs or unbroken strings from overflowing.",
    attributes: [],
    example: `<p>https://example.com/<wbr>very/<wbr>long/<wbr>subfolder/<wbr>path/<wbr>file.html</p>`,
    tip: "Great for preventing long unbroken URLs from overflowing mobile viewports."
  },

  // ==========================================
  // 5. FORMS & INPUTS
  // ==========================================
  {
    name: "form",
    tag: "<form>",
    category: "Forms & Inputs",
    syntax: '<form action="/submit" method="POST"> ... </form>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents an interactive document section containing controls for submitting user data.",
    fullDesc: "The <form> element represents a document section containing interactive controls for submitting information to a web server. It manages fields, labels, submit actions, validation, and data encoding.",
    attributes: [
      { name: "action", desc: "URL of the program/server that processes the submitted form data." },
      { name: "method", desc: "HTTP method used to send data: 'GET' (URL query parameters) or 'POST' (request body)." },
      { name: "enctype", desc: "Encoding type, required as 'multipart/form-data' when uploading files." },
      { name: "novalidate", desc: "Boolean attribute that disables native browser HTML5 validation." },
      { name: "autocomplete", desc: "Enables or disables auto-completion ('on' or 'off')." }
    ],
    example: `<form action="/api/login" method="POST">
  <div class="mb-3">
    <label for="email" class="form-label">Email address:</label>
    <input type="email" id="email" name="user_email" class="form-control" required>
  </div>
  <button type="submit" class="btn btn-primary">Sign In</button>
</form>`,
    tip: "Always match input id with label 'for' attribute so clicking the label focuses the input field."
  },
  {
    name: "input",
    tag: "<input>",
    category: "Forms & Inputs",
    syntax: '<input type="text" name="username">',
    isVoid: true,
    isDeprecated: false,
    shortDesc: "The most versatile form element, accepting user input across over 20 distinct data types.",
    fullDesc: "The <input> element is used to create interactive controls for web-based forms to accept data from the user. A wide variety of types of input data and control widgets are available via the 'type' attribute (e.g. text, password, checkbox, radio, date, color, range, file).",
    attributes: [
      { name: "type", desc: "Type of input control (text, password, email, number, checkbox, radio, date, file, range, color, submit, hidden, etc.)." },
      { name: "name", desc: "Name submitted as key in form data." },
      { name: "value", desc: "Initial or current value of the control." },
      { name: "placeholder", desc: "Hint text displayed when input is empty." },
      { name: "required", desc: "Specifies that the field must be filled out before submitting." },
      { name: "disabled", desc: "Disables interaction and omits field from form submission." },
      { name: "readonly", desc: "Prevents editing but submits value." }
    ],
    example: `<!-- Text Input -->
<input type="text" placeholder="Full Name" required>

<!-- Checkbox -->
<input type="checkbox" id="terms" name="agree">
<label for="terms">I agree to the terms</label>

<!-- Range Slider -->
<input type="range" min="0" max="100" value="50">

<!-- Color Picker -->
<input type="color" value="#0d6efd">`,
    tip: "Use specific types like 'email', 'tel', and 'number' on mobile devices to trigger specialized keyboards."
  },
  {
    name: "label",
    tag: "<label>",
    category: "Forms & Inputs",
    syntax: '<label for="user-age">Age:</label>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a caption for an item in a user interface, dramatically enhancing accessibility.",
    fullDesc: "The <label> element represents a caption for an item in a user interface. Associating a <label> with an <input> via the 'for' attribute and 'id' provides major usability: clicking the label toggles checkboxes or focuses text inputs.",
    attributes: [
      { name: "for", desc: "The id of the form-related element in the same document." }
    ],
    example: `<label for="username">Username:</label>
<input type="text" id="username" name="username" class="form-control">`,
    tip: "Never omit labels! If visual labels conflict with design, use an '.sr-only' or '.visually-hidden' class."
  },
  {
    name: "button",
    tag: "<button>",
    category: "Forms & Inputs",
    syntax: '<button type="button">Click Me</button>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "An interactive clickable button that can submit forms, reset fields, or trigger scripts.",
    fullDesc: "The <button> element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality. Inside forms, <button> defaults to type='submit' unless specified.",
    attributes: [
      { name: "type", desc: "Behavior type: 'submit' (submits form), 'reset' (clears form), or 'button' (no default action, triggers JS)." },
      { name: "disabled", desc: "Prevents user interaction." },
      { name: "name", desc: "Name submitted in form data." },
      { name: "value", desc: "Value sent with form submission when button is clicked." }
    ],
    example: `<button type="submit" class="btn btn-primary">Submit Form</button>
<button type="button" class="btn btn-secondary" onclick="alert('Hello')">Trigger JS</button>
<button type="reset" class="btn btn-outline-danger">Reset Fields</button>`,
    tip: "Always explicitly declare type='button' for non-submitting buttons, otherwise clicking them inside a form will inadvertently reload the page."
  },
  {
    name: "select",
    tag: "<select>",
    category: "Forms & Inputs",
    syntax: '<select name="country"> <option ...> ... </select>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a control that provides a dropdown menu of selectable options.",
    fullDesc: "The <select> element represents a control that provides a menu of options. Items inside are defined with <option> tags and can be organized with <optgroup> headers.",
    attributes: [
      { name: "name", desc: "Name of the input submitted with the form." },
      { name: "multiple", desc: "Allows selection of more than one option." },
      { name: "size", desc: "Number of visible choices in the scrolling list box." },
      { name: "required", desc: "Requires a non-empty option to be selected." }
    ],
    example: `<label for="fruit-select">Choose a fruit:</label>
<select id="fruit-select" name="fruit" class="form-select">
  <option value="">--Please choose an option--</option>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange" selected>Orange</option>
</select>`,
    tip: "Set an initial empty option like <option value=''>Choose...</option> when using the required attribute."
  },
  {
    name: "option",
    tag: "<option>",
    category: "Forms & Inputs",
    syntax: '<option value="val">Display Text</option>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines an item contained in a <select>, an <optgroup>, or a <datalist> element.",
    fullDesc: "The <option> element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.",
    attributes: [
      { name: "value", desc: "The value sent to the server on form submission." },
      { name: "selected", desc: "Specifies that this option should be pre-selected on page load." },
      { name: "disabled", desc: "Specifies that this option should be disabled and unselectable." }
    ],
    example: `<select name="role">
  <option value="user">Standard User</option>
  <option value="admin" selected>Administrator</option>
  <option value="guest" disabled>Guest (Inactive)</option>
</select>`,
    tip: "If no value attribute is specified, the plain text content inside the tag is submitted instead."
  },
  {
    name: "optgroup",
    tag: "<optgroup>",
    category: "Forms & Inputs",
    syntax: '<optgroup label="Group Name"> ... </optgroup>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Creates a grouped heading category within a <select> dropdown list.",
    fullDesc: "The <optgroup> element creates a grouping of options within a <select> element. This is useful when you have long lists of options that can be logically organized into categories.",
    attributes: [
      { name: "label", desc: "Required text heading displayed for the group." },
      { name: "disabled", desc: "Disables all child options within this entire group." }
    ],
    example: `<select name="cars" class="form-select">
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>`,
    tip: "Optgroups are unselectable category titles; users can only click the actual <option> children."
  },
  {
    name: "datalist",
    tag: "<datalist>",
    category: "Forms & Inputs",
    syntax: '<input list="browsers"> <datalist id="browsers"> ... </datalist>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Contains a set of predefined <option> elements to provide an autocomplete dropdown for an <input>.",
    fullDesc: "The <datalist> element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls (such as an <input list='...'>). Users can pick from suggestions or type any custom text.",
    attributes: [
      { name: "id", desc: "Unique identifier referenced by the input's 'list' attribute." }
    ],
    example: `<label for="browser-choice">Choose or type a browser:</label>
<input list="browsers" id="browser-choice" name="browser" class="form-control">

<datalist id="browsers">
  <option value="Google Chrome">
  <option value="Mozilla Firefox">
  <option value="Apple Safari">
  <option value="Microsoft Edge">
  <option value="Brave">
</datalist>`,
    tip: "Unlike <select>, <datalist> allows users to type whatever they want while still providing helpful autocomplete suggestions."
  },
  {
    name: "textarea",
    tag: "<textarea>",
    category: "Forms & Inputs",
    syntax: '<textarea rows="4" cols="50">Default text</textarea>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a multi-line plain-text editing control.",
    fullDesc: "The <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizable amount of free-form text, for example a comment or feedback form.",
    attributes: [
      { name: "rows", desc: "The number of visible text lines." },
      { name: "cols", desc: "The visible width of the text control in average character widths." },
      { name: "maxlength", desc: "The maximum number of characters allowed." },
      { name: "placeholder", desc: "A short hint that describes the expected value." }
    ],
    example: `<label for="bio">Biography:</label>
<textarea id="bio" name="user_bio" rows="4" class="form-control" placeholder="Write something about yourself..."></textarea>`,
    tip: "Textarea does not have a value attribute; initial text goes directly between <textarea> and </textarea>."
  },
  {
    name: "fieldset",
    tag: "<fieldset>",
    category: "Forms & Inputs",
    syntax: "<fieldset> <legend>Legend</legend> ... </fieldset>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Used to group several controls as well as labels (<label>) within a web form.",
    fullDesc: "The <fieldset> element is used to group several controls as well as labels (<label>) within a web form. It provides both visual grouping (default border) and accessibility grouping for screen readers.",
    attributes: [
      { name: "disabled", desc: "Disables all form controls contained inside this fieldset at once." },
      { name: "name", desc: "Name of the fieldset for form submission." }
    ],
    example: `<fieldset class="border p-3 rounded">
  <legend class="w-auto px-2 fw-bold">Shipping Address</legend>
  <div class="mb-2">
    <label for="street">Street:</label>
    <input type="text" id="street" class="form-control">
  </div>
  <div class="mb-2">
    <label for="city">City:</label>
    <input type="text" id="city" class="form-control">
  </div>
</fieldset>`,
    tip: "You can easily disable 20 form inputs at once simply by setting disabled on their parent <fieldset>."
  },
  {
    name: "legend",
    tag: "<legend>",
    category: "Forms & Inputs",
    syntax: "<legend>Title of Fieldset</legend>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a caption or heading for the content of its parent <fieldset>.",
    fullDesc: "The <legend> element represents a caption for the content of its parent <fieldset>. It must be the very first child element inside the <fieldset>.",
    attributes: [],
    example: `<fieldset>
  <legend>Notification Preferences</legend>
  <label><input type="checkbox" name="email_notif"> Email alerts</label>
  <label><input type="checkbox" name="sms_notif"> SMS alerts</label>
</fieldset>`,
    tip: "Screen readers announce the <legend> text whenever focus shifts to any input within that fieldset."
  },
  {
    name: "progress",
    tag: "<progress>",
    category: "Forms & Inputs",
    syntax: '<progress value="70" max="100">70%</progress>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Displays an indicator showing the completion progress of a task (e.g. file upload).",
    fullDesc: "The <progress> element displays an indicator showing the completion progress of a task, typically displayed as a progress bar. If 'value' is omitted, it renders an indeterminate animated progress bar.",
    attributes: [
      { name: "value", desc: "Current numeric value of completion." },
      { name: "max", desc: "Maximum numeric value (default 1.0)." }
    ],
    example: `<label for="file-upload">Uploading file:</label>
<progress id="file-upload" value="65" max="100" class="w-100">65%</progress>`,
    tip: "Do not use <progress> for gauge values like disk storage; use the <meter> tag instead."
  },
  {
    name: "meter",
    tag: "<meter>",
    category: "Forms & Inputs",
    syntax: '<meter value="0.6" min="0" max="1" optimum="0.8">60%</meter>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents either a scalar value within a known range or a fractional value (e.g. disk usage, temperature).",
    fullDesc: "The <meter> element represents either a scalar value within a known range or a fractional value. Examples include disk usage, relevance of a query result, or battery percentage.",
    attributes: [
      { name: "value", desc: "Current value of the measurement." },
      { name: "min", desc: "Lower bound of the range (default 0)." },
      { name: "max", desc: "Upper bound of the range (default 1)." },
      { name: "low", desc: "Upper bound of the low range." },
      { name: "high", desc: "Lower bound of the high range." },
      { name: "optimum", desc: "Indicates the ideal numeric value." }
    ],
    example: `<label for="disk">Disk Usage:</label>
<meter id="disk" value="85" min="0" max="100" low="30" high="80" optimum="20">85%</meter>`,
    tip: "Browsers automatically tint the meter bar green, yellow, or red based on the low, high, and optimum attributes."
  },
  {
    name: "output",
    tag: "<output>",
    category: "Forms & Inputs",
    syntax: '<output name="result" for="a b">0</output>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "A container element into which a site or app can inject the calculated results of a calculation.",
    fullDesc: "The <output> element is a container element into which a site or app can inject the results of a calculation or user action.",
    attributes: [
      { name: "for", desc: "Space-separated list of IDs of other elements that contributed to the calculation." },
      { name: "name", desc: "Name of the output element." }
    ],
    example: `<form oninput="total.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a" value="10"> +
  <input type="number" id="b" value="20"> =
  <output name="total" for="a b">30</output>
</form>`,
    tip: "Assistive technologies announce live updates inside <output> as ARIA live regions automatically."
  },

  // ==========================================
  // 6. TABLES
  // ==========================================
  {
    name: "table",
    tag: "<table>",
    category: "Tables",
    syntax: "<table> ... </table>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents tabular data presented in rows and columns.",
    fullDesc: "The <table> tag defines an HTML table. An HTML table consists of one <table> element and one or more <tr>, <th>, and <td> elements, often organized within <thead>, <tbody>, and <tfoot> sections.",
    attributes: [],
    example: `<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>&lt;div&gt;</td>
      <td>Block</td>
      <td>Generic container</td>
    </tr>
    <tr>
      <td>&lt;span&gt;</td>
      <td>Inline</td>
      <td>Inline styling hook</td>
    </tr>
  </tbody>
</table>`,
    tip: "Never use HTML tables for page layouts! Use CSS Flexbox or Grid instead, reserving tables strictly for tabular data."
  },
  {
    name: "caption",
    tag: "<caption>",
    category: "Tables",
    syntax: "<caption>Table Title</caption>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Specifies the caption (or title) of a table, placed immediately after <table>.",
    fullDesc: "The <caption> element specifies the caption (or title) of a table. If used, it must be inserted immediately after the opening <table> tag. Only one caption can be specified per table.",
    attributes: [],
    example: `<table>
  <caption>Quarterly Sales Revenue by Region (2026)</caption>
  <tr><th>Region</th><th>Revenue</th></tr>
  <tr><td>North America</td><td>$1.2M</td></tr>
</table>`,
    tip: "Captions act as accessible titles for screen readers when discovering tables on a page."
  },
  {
    name: "thead",
    tag: "<thead>",
    category: "Tables",
    syntax: "<thead> <tr> <th>...</th> </tr> </thead>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Groups the header content in an HTML table.",
    fullDesc: "The <thead> element is used to group header content in an HTML table. It works in conjunction with <tbody> and <tfoot> to define the semantic structure of tables and repeat headers on multi-page printouts.",
    attributes: [],
    example: `<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Product</th>
    <th scope="col">Price</th>
  </tr>
</thead>`,
    tip: "When printing tables that span multiple pages, browsers often repeat the <thead> at the top of each page."
  },
  {
    name: "tbody",
    tag: "<tbody>",
    category: "Tables",
    syntax: "<tbody> <tr> <td>...</td> </tr> </tbody>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Groups the body data content in an HTML table.",
    fullDesc: "The <tbody> element is used to group the body content in an HTML table. The <tbody> element is used along with the <thead> and <tfoot> elements to specify each part of a table.",
    attributes: [],
    example: `<tbody>
  <tr>
    <td>#101</td>
    <td>Wireless Keyboard</td>
    <td>$49.99</td>
  </tr>
</tbody>`,
    tip: "Even if you omit <tbody> in your HTML, modern browsers will inject it into the DOM automatically."
  },
  {
    name: "tfoot",
    tag: "<tfoot>",
    category: "Tables",
    syntax: "<tfoot> <tr> <td>...</td> </tr> </tfoot>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Groups the footer / summary content in an HTML table (totals, averages).",
    fullDesc: "The <tfoot> element defines a set of rows summarizing the columns of the table, such as calculating sums, totals, or averages.",
    attributes: [],
    example: `<tfoot>
  <tr>
    <th colspan="2">Total Amount</th>
    <td>$1,450.00</td>
  </tr>
</tfoot>`,
    tip: "In modern HTML5, <tfoot> can be placed either before or after <tbody> in the source markup."
  },
  {
    name: "tr",
    tag: "<tr>",
    category: "Tables",
    syntax: "<tr> <td>Cell 1</td> <td>Cell 2</td> </tr>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines a row of cells in an HTML table.",
    fullDesc: "The <tr> element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements.",
    attributes: [],
    example: `<tr>
  <td>Row 1, Column 1</td>
  <td>Row 1, Column 2</td>
</tr>`,
    tip: "Apply CSS hover effects to <tr> tags (tr:hover) to help users scan wide tables with ease."
  },
  {
    name: "th",
    tag: "<th>",
    category: "Tables",
    syntax: '<th scope="col">Column Header</th>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines a header cell in an HTML table, rendered bold and centered by default.",
    fullDesc: "The <th> element defines a header cell in an HTML table. HTML tables have two kinds of cells: Header cells (contains header information, defined with <th>) and Standard data cells (defined with <td>).",
    attributes: [
      { name: "scope", desc: "Associates the header with a 'col', 'row', 'colgroup', or 'rowgroup'." },
      { name: "colspan", desc: "Specifies the number of columns a cell should span." },
      { name: "rowspan", desc: "Specifies the number of rows a cell should span." }
    ],
    example: `<tr>
  <th scope="col">Name</th>
  <th scope="col">Role</th>
</tr>`,
    tip: "Always specify scope='col' or scope='row' on <th> tags for bulletproof screen reader navigation."
  },
  {
    name: "td",
    tag: "<td>",
    category: "Tables",
    syntax: "<td>Data cell content</td>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines a standard data cell in an HTML table.",
    fullDesc: "The <td> element defines a standard data cell in an HTML table that contains data. Standard cells are rendered left-aligned and normal weight by default.",
    attributes: [
      { name: "colspan", desc: "Number of columns the cell spans." },
      { name: "rowspan", desc: "Number of rows the cell spans." }
    ],
    example: `<tr>
  <td colspan="2">This single cell spans across two columns.</td>
</tr>`,
    tip: "Ensure that colspan and rowspan totals match across all rows to avoid broken table grids."
  },
  {
    name: "colgroup",
    tag: "<colgroup>",
    category: "Tables",
    syntax: "<colgroup> <col ...> </colgroup>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Specifies a group of one or more columns in a table for formatting.",
    fullDesc: "The <colgroup> element specifies a group of one or more columns in a table for formatting. By using <colgroup>, you can apply styles to entire columns rather than repeating styles for each cell.",
    attributes: [
      { name: "span", desc: "Specifies the number of columns the <colgroup> spans." }
    ],
    example: `<table>
  <colgroup>
    <col span="1" style="background-color: #f1f5f9;">
    <col span="2" style="background-color: #ffffff;">
  </colgroup>
  <tr><th>A</th><th>B</th><th>C</th></tr>
</table>`,
    tip: "Column styling in CSS is restricted mostly to width, background, border, and visibility."
  },
  {
    name: "col",
    tag: "<col>",
    category: "Tables",
    syntax: '<col span="2" class="highlight-col">',
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Specifies column properties for each column within a <colgroup> element.",
    fullDesc: "The <col> element specifies column properties for each column within a <colgroup> element. The <col> tag is useful for applying styles to entire columns, rather than repeating the styles for each cell.",
    attributes: [
      { name: "span", desc: "Number of columns this <col> applies to." }
    ],
    example: `<colgroup>
  <col class="col-id">
  <col class="col-name">
  <col class="col-price">
</colgroup>`,
    tip: "<col> is a void element and must not have a closing tag."
  },

  // ==========================================
  // 7. MEDIA & EMBEDDED CONTENT
  // ==========================================
  {
    name: "img",
    tag: "<img>",
    category: "Media & Embedded",
    syntax: '<img src="photo.jpg" alt="Description" width="600" height="400">',
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Embeds an image into the document with responsive srcset and lazy loading support.",
    fullDesc: "The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into an HTML page, images are linked to HTML pages. The <img> tag creates a holding space for the referenced image.",
    attributes: [
      { name: "src", desc: "The URL of the image file (required)." },
      { name: "alt", desc: "Alternative text description for accessibility and when image fails to load (essential!)." },
      { name: "width / height", desc: "Explicit dimensions in pixels to prevent Cumulative Layout Shift (CLS)." },
      { name: "loading", desc: "Set to 'lazy' to defer image loading until it nears the viewport." },
      { name: "srcset", desc: "Comma-separated list of image URLs and width descriptors for high-DPI responsive images." }
    ],
    example: `<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600" 
     alt="Laptop showing web code" 
     width="600" 
     height="400" 
     loading="lazy" 
     class="img-fluid rounded shadow">`,
    tip: "Always provide explicit width & height and loading='lazy' to achieve a 100/100 Google Lighthouse score."
  },
  {
    name: "picture",
    tag: "<picture>",
    category: "Media & Embedded",
    syntax: "<picture> <source ...> <img ...> </picture>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Contains zero or more <source> elements and one <img> to provide responsive art direction and next-gen formats.",
    fullDesc: "The <picture> element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios (such as AVIF/WebP formats or different aspect ratios).",
    attributes: [],
    example: `<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Scenic mountain view" class="img-fluid">
</picture>`,
    tip: "Browsers pick the first matching <source>; if none match, it falls back gracefully to the <img> tag."
  },
  {
    name: "video",
    tag: "<video>",
    category: "Media & Embedded",
    syntax: '<video controls width="640"> <source src="vid.mp4" type="video/mp4"> </video>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Embeds video content in a document with playback controls, subtitles, and autoplay.",
    fullDesc: "The <video> element is used to embed video content in an HTML document, without requiring third-party plugins. It supports multiple formats (MP4, WebM, OGG), subtitles via <track>, and customizable controls.",
    attributes: [
      { name: "src", desc: "URL of video file (or use child <source> elements)." },
      { name: "controls", desc: "Shows native browser playback controls (play, pause, volume, fullscreen)." },
      { name: "autoplay", desc: "Automatically starts video playback (usually requires muted attribute)." },
      { name: "muted", desc: "Silences the audio track by default." },
      { name: "loop", desc: "Repeats playback automatically upon reaching the end." },
      { name: "poster", desc: "URL of an image displayed before the video starts playing." }
    ],
    example: `<video controls width="100%" poster="poster.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <p>Your browser does not support the video tag.</p>
</video>`,
    tip: "Modern browsers will only autoplay video if it is explicitly marked with the muted attribute."
  },
  {
    name: "audio",
    tag: "<audio>",
    category: "Media & Embedded",
    syntax: '<audio controls> <source src="song.mp3" type="audio/mpeg"> </audio>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Embeds sound content such as music or audio streams in a document.",
    fullDesc: "The <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one.",
    attributes: [
      { name: "controls", desc: "Displays native audio controls (play/pause button, scrubber, volume slider)." },
      { name: "autoplay", desc: "Plays audio automatically when ready." },
      { name: "loop", desc: "Repeats audio indefinitely." },
      { name: "preload", desc: "Hints browser how to preload audio ('auto', 'metadata', 'none')." }
    ],
    example: `<audio controls>
  <source src="podcast-ep1.mp3" type="audio/mpeg">
  <source src="podcast-ep1.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`,
    tip: "Always provide fallback text inside <audio> for older legacy clients."
  },
  {
    name: "source",
    tag: "<source>",
    category: "Media & Embedded",
    syntax: '<source src="clip.webm" type="video/webm">',
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Specifies multiple media resources for <picture>, <audio>, or <video> elements.",
    fullDesc: "The <source> element specifies multiple media resources for the <picture>, <audio>, and <video> elements. It allows you to specify alternative video/audio files or image formats that the browser can choose from based on media queries or codec support.",
    attributes: [
      { name: "src", desc: "Address of the media resource (for video/audio)." },
      { name: "srcset", desc: "Image source set (for picture)." },
      { name: "type", desc: "MIME type (e.g. 'video/mp4', 'image/webp')." },
      { name: "media", desc: "Media query condition (e.g. '(min-width: 800px)')." }
    ],
    example: `<picture>
  <source media="(min-width: 768px)" srcset="desktop-banner.jpg">
  <img src="mobile-banner.jpg" alt="Seasonal Promotion">
</picture>`,
    tip: "Place newest, highest compression formats (like AVIF or WebM) first in the source list."
  },
  {
    name: "track",
    tag: "<track>",
    category: "Media & Embedded",
    syntax: '<track kind="subtitles" src="sub_en.vtt" srclang="en" label="English">',
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Specifies timed text tracks (subtitles, captions) for <audio> or <video> elements.",
    fullDesc: "The <track> element is used as a child of the media elements, <audio> and <video>. It lets you specify timed text tracks (such as subtitles, captions, or descriptions), for example to automatically handle closed captions.",
    attributes: [
      { name: "kind", desc: "Type of text track: 'subtitles', 'captions', 'descriptions', 'chapters', 'metadata'." },
      { name: "src", desc: "URL of the .vtt track file (WebVTT format)." },
      { name: "srclang", desc: "Language of the track text (e.g. 'en', 'es')." },
      { name: "label", desc: "User-readable title displayed in the captions selection menu." },
      { name: "default", desc: "Enables this track by default." }
    ],
    example: `<video controls>
  <source src="lecture.mp4" type="video/mp4">
  <track kind="captions" src="lecture-en.vtt" srclang="en" label="English Captions" default>
</video>`,
    tip: "WebVTT caption files require proper CORS headers when hosted on a different domain or CDN."
  },
  {
    name: "iframe",
    tag: "<iframe>",
    category: "Media & Embedded",
    syntax: '<iframe src="https://example.com" title="Inline Frame" width="600" height="400"></iframe>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Embeds another independent HTML document within the current document.",
    fullDesc: "The <iframe> (Inline Frame) element represents an embedded browsing context, effectively embedding another HTML page into the current one (e.g. YouTube videos, Google Maps, sandboxed widgets).",
    attributes: [
      { name: "src", desc: "The URL of the page to embed." },
      { name: "title", desc: "Accessible description of frame content (required for a11y)." },
      { name: "sandbox", desc: "Applies security restrictions to the iframe content ('allow-scripts', 'allow-same-origin', etc.)." },
      { name: "loading", desc: "Set to 'lazy' to defer loading until near viewport." },
      { name: "allowfullscreen", desc: "Allows iframe to activate fullscreen mode." }
    ],
    example: `<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>`,
    tip: "Always include the 'title' attribute on every <iframe> for screen reader accessibility compliance."
  },
  {
    name: "canvas",
    tag: "<canvas>",
    category: "Media & Embedded",
    syntax: '<canvas id="myCanvas" width="400" height="200"></canvas>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Provides a drawable bitmap region scriptable via JavaScript (2D and WebGL 3D graphics).",
    fullDesc: "The <canvas> element is used to draw graphics on the fly via scripting (usually JavaScript). It can be used for rendering graphs, game graphics, animations, data visualizations, or photo filters.",
    attributes: [
      { name: "width", desc: "The width of the coordinate space in CSS pixels (default 300)." },
      { name: "height", desc: "The height of the coordinate space in CSS pixels (default 150)." }
    ],
    example: `<canvas id="demoCanvas" width="300" height="150" class="border"></canvas>
<script>
  const canvas = document.getElementById('demoCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0d6efd';
  ctx.fillRect(20, 20, 100, 80);
</script>`,
    tip: "Always set width and height via HTML attributes, not CSS; CSS stretches the internal bitmap."
  },
  {
    name: "svg",
    tag: "<svg>",
    category: "Media & Embedded",
    syntax: '<svg viewBox="0 0 100 100" width="100" height="100"> ... </svg>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines scalable vector graphics directly in the HTML document.",
    fullDesc: "The <svg> element is a container that defines a new coordinate system and viewport for Scalable Vector Graphics. Unlike raster images, SVG graphics scale infinitely without any loss of quality.",
    attributes: [
      { name: "viewBox", desc: "Specifies bounds of SVG coordinate system (min-x min-y width height)." },
      { name: "xmlns", desc: "XML namespace URL (http://www.w3.org/2000/svg)." }
    ],
    example: `<svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke="#0d6efd" stroke-width="4" fill="#cfe2ff" />
</svg>`,
    tip: "Inline SVGs can be styled with CSS and manipulated with JavaScript DOM methods."
  },

  // ==========================================
  // 8. INTERACTIVE & DIALOGS
  // ==========================================
  {
    name: "details",
    tag: "<details>",
    category: "Interactive Elements",
    syntax: "<details> <summary>Click to view</summary> <p>Hidden content</p> </details>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Creates an interactive disclosure widget that reveals or hides content without requiring JavaScript.",
    fullDesc: "The <details> element creates a disclosure widget in which information is visible only when the widget is toggled into an 'open' state. A summary or label must be provided using the <summary> element.",
    attributes: [
      { name: "open", desc: "Boolean attribute indicating that the details are currently visible." }
    ],
    example: `<details class="card p-3 mb-2">
  <summary class="fw-bold cursor-pointer">What is Semantic HTML?</summary>
  <p class="mt-2 text-muted">Semantic HTML tags describe their meaning to both the browser and the developer (e.g. &lt;article&gt;, &lt;footer&gt;).</p>
</details>`,
    tip: "Perfect for building zero-JavaScript Accordions and FAQ collapse sections!"
  },
  {
    name: "summary",
    tag: "<summary>",
    category: "Interactive Elements",
    syntax: "<summary>Toggle Header</summary>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Specifies the summary, caption, or legend for a <details> disclosure box.",
    fullDesc: "The <summary> element specifies a summary, caption, or legend for a <details> element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element.",
    attributes: [],
    example: `<details>
  <summary>Click to expand technical specifications</summary>
  <ul>
    <li>RAM: 16GB LPDDR5</li>
    <li>Processor: 8-core CPU</li>
  </ul>
</details>`,
    tip: "Style summary with cursor: pointer to give desktop users clear affordance that it is clickable."
  },
  {
    name: "dialog",
    tag: "<dialog>",
    category: "Interactive Elements",
    syntax: '<dialog id="myModal"> <p>Modal body</p> <button ...>Close</button> </dialog>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a native modal dialog box or popup window with backdrop support.",
    fullDesc: "The <dialog> element represents a modal or non-modal dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow. Native JS methods include .showModal() and .close().",
    attributes: [
      { name: "open", desc: "Indicates that the dialog is active and can be interacted with." }
    ],
    example: `<dialog id="favDialog" class="p-4 rounded border shadow">
  <h3>Native Modal Dialog</h3>
  <p>Opened using modern HTML5 dialog API!</p>
  <button class="btn btn-secondary" onclick="this.closest('dialog').close()">Close</button>
</dialog>
<button class="btn btn-primary" onclick="document.getElementById('favDialog').showModal()">Open Modal</button>`,
    tip: "Using .showModal() automatically traps keyboard focus and dims background with the ::backdrop pseudo-element."
  },

  // ==========================================
  // 9. SCRIPTING & WEB COMPONENTS
  // ==========================================
  {
    name: "script",
    tag: "<script>",
    category: "Scripting",
    syntax: '<script src="app.js" defer></script>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Embeds or references executable client-side JavaScript code.",
    fullDesc: "The <script> element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. Modern scripts can be deferred or loaded asynchronously to eliminate render-blocking behavior.",
    attributes: [
      { name: "src", desc: "URL of the external script file." },
      { name: "type", desc: "Type of script ('module' for ES Modules, or omitted for standard JS)." },
      { name: "async", desc: "Executes script asynchronously as soon as it is downloaded." },
      { name: "defer", desc: "Defers execution until HTML parsing has finished completely." }
    ],
    example: `<!-- External Deferred Script -->
<script src="main.js" defer></script>

<!-- ES Module -->
<script type="module">
  import { initApp } from './app.js';
  initApp();
</script>`,
    tip: "Always use 'defer' for scripts that manipulate the DOM to prevent blocking initial HTML rendering."
  },
  {
    name: "noscript",
    tag: "<noscript>",
    category: "Scripting",
    syntax: "<noscript> <p>Please enable JavaScript.</p> </noscript>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines alternative HTML content to be displayed when JavaScript is disabled in the browser.",
    fullDesc: "The <noscript> element defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support script.",
    attributes: [],
    example: `<noscript>
  <div class="alert alert-warning">
    JavaScript is required to run the interactive HTML playground. Please enable it in your browser settings.
  </div>
</noscript>`,
    tip: "Useful for presenting basic fallback messages or critical contact links when scripts fail."
  },
  {
    name: "template",
    tag: "<template>",
    category: "Scripting",
    syntax: '<template id="card-template"> <div class="card">...</div> </template>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Holds client-side HTML that is not rendered on page load, but cloned later via JavaScript.",
    fullDesc: "The <template> tag is used as a container to hold some HTML content hidden from the user when the page loads. The content inside <template> can be rendered later with JavaScript by cloning its content document fragment.",
    attributes: [],
    example: `<template id="user-row">
  <tr>
    <td class="user-id"></td>
    <td class="user-name"></td>
  </tr>
</template>`,
    tip: "Images and scripts inside <template> are inert: scripts do not execute and images do not download until cloned!"
  },

  // ==========================================
  // 10. ADVANCED TEXT FORMATTING & SEMANTICS
  // ==========================================
  {
    name: "del",
    tag: "<del>",
    category: "Inline Formatting",
    syntax: '<del datetime="2026-11-23">Old text</del>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a range of text that has been deleted from a document (e.g. edit tracking).",
    fullDesc: "The <del> element represents a range of text that has been deleted from a document. This can be used when rendering 'track changes' or source code diffs. Often paired with <ins>.",
    attributes: [
      { name: "cite", desc: "A URL pointing to a document explaining why the text was deleted." },
      { name: "datetime", desc: "Machine-readable timestamp of when the deletion occurred." }
    ],
    example: `<p>We will meet on <del>Tuesday</del> <ins>Thursday</ins> at 4 PM.</p>`,
    tip: "Use <del> for document revisions; use <s> when stating a previous price or expired status."
  },
  {
    name: "ins",
    tag: "<ins>",
    category: "Inline Formatting",
    syntax: '<ins datetime="2026-11-23">New added text</ins>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a range of text that has been added to a document; rendered underlined by default.",
    fullDesc: "The <ins> element represents a range of text that has been added to a document. It is conventionally rendered underlined to denote added editorial copy.",
    attributes: [
      { name: "cite", desc: "A URL explaining the reason for the editorial insertion." },
      { name: "datetime", desc: "Machine-readable timestamp of when insertion took place." }
    ],
    example: `<p>Release date: <del>Q1 2026</del> <ins>Q3 2026</ins>.</p>`,
    tip: "Provide datetime attribute so change history can be parsed programmatically."
  },
  {
    name: "dfn",
    tag: "<dfn>",
    category: "Inline Formatting",
    syntax: "<dfn>Term being defined</dfn>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Indicates the defining instance of a term within a document.",
    fullDesc: "The <dfn> element is used to indicate the term being defined within the context of a definition phrase or sentence. The nearest parent paragraph or section must contain the definition itself.",
    attributes: [
      { name: "title", desc: "The exact canonical term being defined." }
    ],
    example: `<p>The <dfn id="html-def">HTML</dfn> is the standard markup language for documents designed to be displayed in a web browser.</p>`,
    tip: "Wrap terms in <dfn> the first time they appear and are explained in documentation."
  },
  {
    name: "var",
    tag: "<var>",
    category: "Inline Formatting",
    syntax: "<var>x</var>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents a variable in a mathematical expression or programming context; rendered italic.",
    fullDesc: "The <var> element represents the name of a variable in a mathematical expression or a programming context, or a placeholder token that the reader is to replace with some other value.",
    attributes: [],
    example: `<p>If <var>a</var> + <var>b</var> = <var>c</var>, then calculate <var>x</var>.</p>`,
    tip: "Combine with <code> for computer algorithm explanations: <code>calculate(<var>radius</var>)</code>."
  },
  {
    name: "samp",
    tag: "<samp>",
    category: "Inline Formatting",
    syntax: "<samp>Output message</samp>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents sample (or quoted) output from a computer program, script, or system.",
    fullDesc: "The <samp> element is used to enclose inline text which represents sample (or quoted) output from a computer program or system, rendered in monospace font.",
    attributes: [],
    example: `<p>When the query executes, the terminal prints: <samp>Connected to db (200 OK)</samp>.</p>`,
    tip: "Use <code> for user input or script commands, and <samp> for system responses or error logs."
  },
  {
    name: "bdi",
    tag: "<bdi>",
    category: "Inline Formatting",
    syntax: "<bdi>User generated text</bdi>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Bi-Directional Isolation: isolates text from surrounding text direction for multilingual content.",
    fullDesc: "The <bdi> (Bi-Directional Isolation) element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surroundings. Very important when embedding user-generated names that may mix Arabic/Hebrew (RTL) with English (LTR).",
    attributes: [],
    example: `<ul>
  <li>User <bdi>إيان</bdi>: 15 points</li>
  <li>User <bdi>Sarah</bdi>: 24 points</li>
</ul>`,
    tip: "Essential for social networks, comment sections, and marketplaces with international usernames."
  },
  {
    name: "bdo",
    tag: "<bdo>",
    category: "Inline Formatting",
    syntax: '<bdo dir="rtl">Override text</bdo>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Bi-Directional Override: forcefully overrides the current directionality of text.",
    fullDesc: "The <bdo> (Bi-Directional Override) element overrides the current directionality of text, so that the text within is rendered in a different direction specified by the 'dir' attribute ('ltr' or 'rtl').",
    attributes: [
      { name: "dir", desc: "Required attribute: 'ltr' (left-to-right) or 'rtl' (right-to-left)." }
    ],
    example: `<p>This English sentence will display backwards: <bdo dir="rtl">Hello World!</bdo></p>`,
    tip: "Unlike <bdi>, <bdo> forcefully overrides natural glyph order."
  },
  {
    name: "ruby",
    tag: "<ruby>",
    category: "Inline Formatting",
    syntax: "<ruby> 漢 <rt>かん</rt> </ruby>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents small annotations rendered above or adjacent to base text (East Asian typography).",
    fullDesc: "The <ruby> element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters (such as Japanese Furigana).",
    attributes: [],
    example: `<ruby>
  漢 <rp>(</rp><rt>かん</rt><rp>)</rp>
  字 <rp>(</rp><rt>じ</rt><rp>)</rp>
</ruby>`,
    tip: "Always include <rp> (ruby parentheses) as fallbacks for legacy browsers that don't support ruby."
  },
  {
    name: "rt",
    tag: "<rt>",
    category: "Inline Formatting",
    syntax: "<rt>Pronunciation text</rt>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Specifies the ruby text component of a ruby annotation, positioned above the base text.",
    fullDesc: "The <rt> element marks the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography.",
    attributes: [],
    example: `<ruby>東京 <rt>Tokyo</rt></ruby>`,
    tip: "Rendered in a smaller font directly on top of the base characters."
  },
  {
    name: "rp",
    tag: "<rp>",
    category: "Inline Formatting",
    syntax: "<rp>(</rp><rt>guide</rt><rp>)</rp>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Provides fallback parentheses for browsers that do not support ruby annotations.",
    fullDesc: "The <rp> element is used to provide parentheses or other delimiters around ruby text inside an <rt> tag for user agents that don't support ruby annotations.",
    attributes: [],
    example: `<ruby>猫 <rp>(</rp><rt>neko</rt><rp>)</rp></ruby>`,
    tip: "Browsers that do support <ruby> automatically hide the content of <rp>."
  },
  {
    name: "search",
    tag: "<search>",
    category: "Sectioning & Semantics",
    syntax: "<search> <form ...> ... </form> </search>",
    isVoid: false,
    isDeprecated: false,
    shortDesc: "New HTML5 semantic element representing a search or filtering interface.",
    fullDesc: "The <search> element is a modern semantic container representing a section designed specifically for search, filtering, or lookup functionality. It communicates the landmark role='search' natively without ARIA attributes.",
    attributes: [],
    example: `<search>
  <form action="/search" method="GET">
    <label for="q">Search Documentation:</label>
    <input type="search" id="q" name="q" placeholder="Type tag name...">
    <button type="submit">Search</button>
  </form>
</search>`,
    tip: "Introduced to supersede role='search'. Use it for search bars and filter forms."
  },
  {
    name: "map",
    tag: "<map>",
    category: "Media & Embedded",
    syntax: '<map name="image-map"> <area ...> </map>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Defines an image map with clickable link areas mapped onto an image.",
    fullDesc: "The <map> element is used with <area> elements to define an image map (a clickable link area). The image references the map using the usemap='#mapname' attribute.",
    attributes: [
      { name: "name", desc: "Required identifier of the map referenced by the img usemap attribute." }
    ],
    example: `<img src="workplace.jpg" alt="Workplace diagram" usemap="#workmap">
<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.html">
  <area shape="circle" coords="337,300,44" alt="Coffee Cup" href="coffee.html">
</map>`,
    tip: "Modern designs prefer SVG overlays over raster image maps for crisp scalability on high-DPI screens."
  },
  {
    name: "area",
    tag: "<area>",
    category: "Media & Embedded",
    syntax: '<area shape="rect" coords="0,0,100,100" href="..." alt="...">',
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Defines an individual clickable hotspot region within an image map (<map>).",
    fullDesc: "The <area> tag defines a specific clickable hotspot area inside an image map (created with <map>). Can define rectangular, circular, or polygonal clickable hotspots.",
    attributes: [
      { name: "shape", desc: "Geometric shape of hotspot: 'rect', 'circle', 'poly', or 'default'." },
      { name: "coords", desc: "Coordinates of the shape boundaries (comma-separated pixel values)." },
      { name: "href", desc: "Target hyperlink destination when clicked." },
      { name: "alt", desc: "Alternative text describing the area (required for accessibility)." }
    ],
    example: `<area shape="circle" coords="100,100,50" href="profile.html" alt="Profile Avatar">`,
    tip: "Always provide the alt attribute for screen reader users."
  },
  {
    name: "slot",
    tag: "<slot>",
    category: "Scripting",
    syntax: '<slot name="card-title">Default Title</slot>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Web Components placeholder inside a shadow DOM where custom content can be injected.",
    fullDesc: "The <slot> element is part of the Web Components technology suite. It acts as a placeholder inside a web component's shadow DOM that you can fill with your own markup.",
    attributes: [
      { name: "name", desc: "Name of the named slot for targeted element distribution." }
    ],
    example: `<template id="custom-card">
  <div class="card">
    <slot name="title">Default Title</slot>
    <slot name="content">Default Body Text</slot>
  </div>
</template>`,
    tip: "Core building block for Web Components and Shadow DOM component composition."
  },
  {
    name: "object",
    tag: "<object>",
    category: "Media & Embedded",
    syntax: '<object data="document.pdf" type="application/pdf"> <p>Fallback</p> </object>',
    isVoid: false,
    isDeprecated: false,
    shortDesc: "Represents an external resource (PDF, SVG, image, or media player plugin).",
    fullDesc: "The <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin (such as an embedded PDF reader).",
    attributes: [
      { name: "data", desc: "The URL of the external resource." },
      { name: "type", desc: "MIME type of the resource (e.g. 'application/pdf')." }
    ],
    example: `<object data="manual.pdf" type="application/pdf" width="100%" height="500px">
  <p>Your browser does not support inline PDFs. <a href="manual.pdf">Download PDF</a>.</p>
</object>`,
    tip: "Always put fallback markup inside <object> for devices that cannot render the MIME type."
  },
  {
    name: "embed",
    tag: "<embed>",
    category: "Media & Embedded",
    syntax: '<embed type="video/quicktime" src="movie.mov" width="400" height="300">',
    isVoid: true,
    isDeprecated: false,
    shortDesc: "Embeds external content or plugin-based resources at the specified point in the document.",
    fullDesc: "The <embed> element provides an integration point for an external resource, typically a non-HTML application or interactive content (such as legacy Flash or third-party plug-ins). Most modern applications prefer <iframe>, <video>, or <audio>.",
    attributes: [
      { name: "src", desc: "URL of resource being embedded." },
      { name: "type", desc: "MIME type to determine the plugin or viewer." }
    ],
    example: `<embed type="application/pdf" src="report.pdf" width="100%" height="400">`,
    tip: "Prefer <iframe> or <video> over <embed> in modern responsive projects."
  },

  // ==========================================
  // 11. OBSOLETE / DEPRECATED TAGS
  // ==========================================
  {
    name: "marquee",
    tag: "<marquee>",
    category: "Deprecated & Obsolete",
    syntax: "<marquee>Scrolling text</marquee>",
    isVoid: false,
    isDeprecated: true,
    shortDesc: "[DEPRECATED] Creates scrolling text across the screen. Obsolete; use CSS animations instead.",
    fullDesc: "The <marquee> element was used to insert a scrolling area of text. It has been completely deprecated in modern web standards because it causes severe accessibility and distraction problems. Use CSS @keyframes animations instead.",
    attributes: [],
    example: `<!-- ⚠️ DO NOT USE IN PRODUCTION -->
<marquee behavior="scroll" direction="left">Scrolling marquee demo (Deprecated)</marquee>

<!-- Modern CSS Alternative: -->
<!-- Use CSS animation: translateX(...) for smooth, accessible ticker motion. -->`,
    tip: "Never use in modern projects! Screen readers and users with motion sensitivities struggle with moving text."
  },
  {
    name: "font",
    tag: "<font>",
    category: "Deprecated & Obsolete",
    syntax: '<font color="red" size="4">Text</font>',
    isVoid: false,
    isDeprecated: true,
    shortDesc: "[DEPRECATED] Set font face, size, and color. Obsolete; use modern CSS styles instead.",
    fullDesc: "The <font> tag was used in HTML 4 to specify the font face, font size, and color of text. It is obsolete in HTML5. Use CSS font-family, font-size, and color properties instead.",
    attributes: [],
    example: `<!-- ⚠️ Obsolete HTML4: -->
<!-- <font color="blue" size="5">Obsolete text</font> -->

<!-- Modern CSS: -->
<span style="color: blue; font-size: 1.25rem;">Modern styled text</span>`,
    tip: "Separate presentation from structure by keeping fonts and colors inside CSS rules."
  },
  {
    name: "center",
    tag: "<center>",
    category: "Deprecated & Obsolete",
    syntax: "<center>Centered content</center>",
    isVoid: false,
    isDeprecated: true,
    shortDesc: "[DEPRECATED] Centers enclosed text or elements. Obsolete; use CSS text-align or flexbox.",
    fullDesc: "The <center> element was used to center text and block elements horizontally. It was deprecated in HTML 4.01 and obsolete in HTML5. Use CSS 'text-align: center' or Flexbox ('justify-content: center') instead.",
    attributes: [],
    example: `<!-- Modern CSS Alternative: -->
<div class="text-center">
  <p>Clean centered text using Bootstrap or CSS text-align: center.</p>
</div>`,
    tip: "Use Bootstrap utility class .text-center or CSS display: flex; justify-content: center."
  },
  {
    name: "blink",
    tag: "<blink>",
    category: "Deprecated & Obsolete",
    syntax: "<blink>Blinking text</blink>",
    isVoid: false,
    isDeprecated: true,
    shortDesc: "[DEPRECATED] Caused enclosed text to blink on and off. Removed in modern browsers.",
    fullDesc: "The non-standard <blink> tag enclosed text that flashed on and off at regular intervals. It is completely obsolete and blocked by modern browsers due to seizure triggers and accessibility violations.",
    attributes: [],
    example: `<!-- ⚠️ Obsolete: -->
<!-- <blink>Flashy text</blink> -->
<!-- Never create blinking or flashing text that violates WCAG guidelines! -->`,
    tip: "WCAG accessibility guidelines strictly prohibit content blinking faster than 3 times per second."
  },
  {
    name: "strike",
    tag: "<strike>",
    category: "Deprecated & Obsolete",
    syntax: "<strike>Old text</strike>",
    isVoid: false,
    isDeprecated: true,
    shortDesc: "[DEPRECATED] Rendered strikethrough text. Deprecated in favor of <s> or <del>.",
    fullDesc: "The <strike> tag rendered text with a line drawn through it. Deprecated in HTML4 and removed in HTML5. Replaced with <s> (for expired info) or <del> (for deleted text in revisions).",
    attributes: [],
    example: `<!-- Modern alternatives: -->
<s>Old Price: $50</s> <strong class="text-success">New: $25</strong>`,
    tip: "Replace <strike> with <s> or CSS 'text-decoration: line-through'."
  },
  {
    name: "frameset",
    tag: "<frameset>",
    category: "Deprecated & Obsolete",
    syntax: '<frameset cols="25%,75%"> ... </frameset>',
    isVoid: false,
    isDeprecated: true,
    shortDesc: "[DEPRECATED] Contained multiple <frame> tags to split browser viewport. Completely obsolete.",
    fullDesc: "The <frameset> tag was used in HTML 4 to divide the browser window into multiple rectangular sub-windows, each showing a separate HTML page. Obsolete in HTML5; use <iframe> or CSS Grid/Flexbox layouts.",
    attributes: [],
    example: `<!-- Obsolete HTML4: -->
<!-- <frameset cols="200,*"><frame src="menu.html"><frame src="main.html"></frameset> -->
<!-- Modern layout: Use CSS Grid or Bootstrap 12-column layout! -->`,
    tip: "Frames broke bookmarking, back button navigation, printing, and SEO."
  }
];

// Helper to retrieve tag count
const TOTAL_TAGS_COUNT = HTML_TAGS_DATA.length;
