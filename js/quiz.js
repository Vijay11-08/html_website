/**
 * HTMLVerse - Interactive HTML Quiz Engine
 * Questions, score calculation, real-time feedback, and explanations.
 */

const QUIZ_QUESTIONS = [
  {
    question: "Which HTML5 element represents the primary, unique content of a document?",
    options: ["<content>", "<main>", "<article>", "<section>"],
    answerIndex: 1,
    explanation: "<main> represents the dominant content of the <body>. There should only be one non-hidden <main> per document, and it excludes repeating headers or footers."
  },
  {
    question: "Which of the following is a void (self-closing) element in HTML?",
    options: ["<p>", "<span>", "<img>", "<textarea>"],
    answerIndex: 2,
    explanation: "<img> is a void element in HTML. It cannot have child nodes and does not have a closing </img> tag."
  },
  {
    question: "What is the primary difference between the <b> tag and the <strong> tag?",
    options: [
      "There is no difference; they are exact aliases",
      "<strong> conveys semantic importance/urgency; <b> is purely stylistic bolding",
      "<b> is an HTML5 element; <strong> is deprecated",
      "<strong> is block-level while <b> is inline"
    ],
    answerIndex: 1,
    explanation: "<strong> imparts semantic importance and alters screen reader inflection, whereas <b> draws visual attention without imparting extra semantic weight."
  },
  {
    question: "Which attribute is REQUIRED on an <img> tag to ensure web accessibility and standard compliance?",
    options: ["title", "loading", "alt", "aria-label"],
    answerIndex: 2,
    explanation: "The 'alt' (alternative text) attribute is required on <img> elements so screen readers and users with broken images can understand what the image represents."
  },
  {
    question: "What is the recommended modern HTML5 way to create a collapsible accordion without JavaScript?",
    options: [
      "<collapse> and <toggle>",
      "<details> and <summary>",
      "<accordion> and <item>",
      "<dialog> and <trigger>"
    ],
    answerIndex: 1,
    explanation: "<details> paired with a <summary> child creates an interactive disclosure widget entirely handled by browser native behavior with zero JavaScript."
  },
  {
    question: "Why should you add 'rel=\"noopener noreferrer\"' when using 'target=\"_blank\"' on an anchor link?",
    options: [
      "To improve CSS animations",
      "To prevent security vulnerabilities like reverse tabnabbing and protect window.opener",
      "To download the link directly to disk",
      "To ensure the link opens in full screen"
    ],
    answerIndex: 1,
    explanation: "Opening links in a new tab without noopener allows the target page to potentially access and manipulate the originating window via the 'window.opener' object."
  },
  {
    question: "Which HTML5 element is designed to display a popup modal window with a native backdrop?",
    options: ["<modal>", "<popup>", "<dialog>", "<window>"],
    answerIndex: 2,
    explanation: "The <dialog> element is the official HTML5 standard for native modal dialogues with built-in backdrop styling (::backdrop) and focus management."
  },
  {
    question: "Which attribute associates a <label> element with an <input> element?",
    options: ["target", "for", "name", "bind"],
    answerIndex: 1,
    explanation: "The 'for' attribute on a <label> must match the 'id' attribute of the related <input> to establish an accessible bond."
  },
  {
    question: "Which tag is completely deprecated / obsolete in modern HTML5 standards?",
    options: ["<time>", "<figure>", "<marquee>", "<wbr>"],
    answerIndex: 2,
    explanation: "<marquee> is obsolete in HTML5 and discouraged due to severe accessibility and motion-sickness issues. Use CSS animations instead."
  },
  {
    question: "What does <!DOCTYPE html> do at the top of an HTML file?",
    options: [
      "It links external CSS stylesheets",
      "It tells the browser to parse the document in HTML5 standard mode rather than quirks mode",
      "It secures the web page with HTTPS",
      "It translates the page into English"
    ],
    answerIndex: 1,
    explanation: "The <!DOCTYPE html> declaration ensures the browser renders the page according to modern HTML5 standards and avoids backward-compatibility quirks mode."
  }
];

let currentQuestionIndex = 0;
let userScore = 0;
let userAnswers = [];

function renderQuestion() {
  const container = document.getElementById('quiz-box');
  const progressBar = document.getElementById('quiz-progress-bar');
  const questionNumberElem = document.getElementById('current-question-num');
  
  if (!container) return;

  if (currentQuestionIndex >= QUIZ_QUESTIONS.length) {
    renderQuizResults();
    return;
  }

  const q = QUIZ_QUESTIONS[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100;
  
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (questionNumberElem) questionNumberElem.innerText = `Question ${currentQuestionIndex + 1} of ${QUIZ_QUESTIONS.length}`;

  container.innerHTML = `
    <div class="card shadow-sm custom-card p-4">
      <h5 class="fw-bold mb-4">${q.question}</h5>
      <div class="options-list">
        ${q.options.map((opt, idx) => `
          <div class="quiz-option-card d-flex align-items-center" onclick="handleOptionSelect(${idx})" id="opt-${idx}">
            <span class="badge bg-secondary-subtle text-secondary border me-3">${String.fromCharCode(65 + idx)}</span>
            <span class="option-text">${escapeHtml(opt)}</span>
          </div>
        `).join('')}
      </div>

      <div id="quiz-feedback-box" class="mt-3" style="display: none;"></div>

      <div class="d-flex justify-content-end mt-4">
        <button id="next-question-btn" class="btn btn-primary" onclick="proceedToNextQuestion()" style="display: none;">
          Next Question <i class="bi bi-arrow-right ms-1"></i>
        </button>
      </div>
    </div>
  `;
}

function handleOptionSelect(selectedIndex) {
  const q = QUIZ_QUESTIONS[currentQuestionIndex];
  const feedbackBox = document.getElementById('quiz-feedback-box');
  const nextBtn = document.getElementById('next-question-btn');
  const allOptionCards = document.querySelectorAll('.quiz-option-card');

  // Disable all options from further clicks
  allOptionCards.forEach(card => card.style.pointerEvents = 'none');

  const isCorrect = selectedIndex === q.answerIndex;
  userAnswers.push({ selectedIndex, isCorrect });

  if (isCorrect) {
    userScore++;
    document.getElementById(`opt-${selectedIndex}`).classList.add('correct');
  } else {
    document.getElementById(`opt-${selectedIndex}`).classList.add('wrong');
    document.getElementById(`opt-${q.answerIndex}`).classList.add('correct');
  }

  feedbackBox.style.display = 'block';
  feedbackBox.innerHTML = `
    <div class="alert ${isCorrect ? 'alert-success' : 'alert-danger'} d-flex align-items-start gap-2 mb-0">
      <i class="bi ${isCorrect ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger'} fs-4"></i>
      <div>
        <strong>${isCorrect ? 'Excellent! Correct Answer.' : 'Incorrect.'}</strong>
        <p class="mb-0 mt-1 small">${q.explanation}</p>
      </div>
    </div>
  `;

  if (nextBtn) nextBtn.style.display = 'inline-block';
}

function proceedToNextQuestion() {
  currentQuestionIndex++;
  renderQuestion();
}

function renderQuizResults() {
  const container = document.getElementById('quiz-box');
  const progressBar = document.getElementById('quiz-progress-bar');
  if (progressBar) progressBar.style.width = '100%';

  const percentage = Math.round((userScore / QUIZ_QUESTIONS.length) * 100);
  let feedbackMessage = '';
  let badgeColor = '';

  if (percentage >= 80) {
    feedbackMessage = 'Outstanding! You have mastered HTML core concepts and modern HTML5 standards.';
    badgeColor = 'text-success';
  } else if (percentage >= 60) {
    feedbackMessage = 'Great job! You have a solid understanding. Review a few tags in our Encyclopedia to reach perfection!';
    badgeColor = 'text-primary';
  } else {
    feedbackMessage = 'Keep practicing! Review our HTML Tutorial and interactive Tag Reference to strengthen your skills.';
    badgeColor = 'text-warning';
  }

  container.innerHTML = `
    <div class="card shadow-sm custom-card p-5 text-center">
      <div class="display-3 mb-3 ${badgeColor}">
        <i class="bi ${percentage >= 60 ? 'bi-trophy-fill' : 'bi-award'}"></i>
      </div>
      <h2 class="fw-bold mb-2">Quiz Completed!</h2>
      <p class="lead text-secondary">Your Final Score:</p>
      <div class="display-4 fw-bold text-primary mb-3">${userScore} / ${QUIZ_QUESTIONS.length} (${percentage}%)</div>
      <p class="text-secondary max-w-500 mx-auto mb-4">${feedbackMessage}</p>

      <div class="d-flex justify-content-center gap-3">
        <button class="btn btn-primary" onclick="restartQuiz()">
          <i class="bi bi-arrow-clockwise me-1"></i> Retake Quiz
        </button>
        <a href="tags.html" class="btn btn-outline-secondary">
          <i class="bi bi-journal-code me-1"></i> Explore Tag Encyclopedia
        </a>
      </div>
    </div>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  userScore = 0;
  userAnswers = [];
  renderQuestion();
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuestion();
});
