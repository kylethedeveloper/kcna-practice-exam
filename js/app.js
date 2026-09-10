/* ========================================
   KCNA Mock Exam — Application Logic
   ======================================== */

(function () {
  'use strict';

  // ---- State ----
  let examQuestions = [];      // selected questions for this exam
  let answers = {};            // { questionIndex: selectedOptionIndex }
  let flagged = new Set();     // set of question indices that are flagged
  let currentIndex = 0;
  let examEndTime = null;
  let timerInterval = null;

  // ---- DOM refs ----
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const themeToggleBtn = $('#theme-toggle');

  // Theme Management
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', newTheme);
  });

  const setupScreen = $('#setup-screen');
  const examScreen = $('#exam-screen');
  const resultsScreen = $('#results-screen');
  const slider = $('#question-count-slider');
  const countInput = $('#question-count');
  const startBtn = $('#start-exam-btn');
  const prevBtn = $('#prev-btn');
  const nextBtn = $('#next-btn');
  const flagBtn = $('#flag-btn');
  const flagText = $('#flag-text');
  const finishBtn = $('#finish-exam-btn');
  const retakeBtn = $('#retake-btn');
  const confirmModal = $('#confirm-modal');
  const confirmCancel = $('#confirm-cancel');
  const confirmFinish = $('#confirm-finish');
  const confirmMsg = $('#confirm-msg');
  const questionNav = $('#question-nav');
  const questionText = $('#question-text');
  const optionsContainer = $('#options-container');
  const currentQuestionNum = $('#current-question-num');
  const totalQuestions = $('#total-questions');
  const answeredCount = $('#answered-count');
  const totalCount = $('#total-count');
  const questionDomain = $('#question-domain');

  // ---- Setup ----
  slider.addEventListener('input', () => {
    countInput.value = slider.value;
  });
  countInput.addEventListener('input', () => {
    let v = parseInt(countInput.value) || 10;
    v = Math.max(1, Math.min(258, v));
    slider.value = v;
  });

  startBtn.addEventListener('click', startExam);
  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));
  flagBtn.addEventListener('click', toggleFlag);
  finishBtn.addEventListener('click', showFinishConfirm);
  confirmCancel.addEventListener('click', () => confirmModal.classList.remove('active'));
  confirmFinish.addEventListener('click', finishExam);
  const STORAGE_KEY = 'kcna_active_exam_state';

  // Prevent accidental page close / refresh warning when exam is active
  window.addEventListener('beforeunload', (e) => {
    if (examScreen.classList.contains('active')) {
      e.preventDefault();
      e.returnValue = '';
    }
  });

  $$('.retake-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      clearExamState();
      showScreen('setup');
    });
  });

  // Filter buttons
  $$('.btn-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.btn-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderReviewQuestions(btn.dataset.filter);
    });
  });

  // ---- Timer Management ----

  function startTimer(secondsRemaining) {
    stopTimer();
    if (secondsRemaining !== undefined) {
      examEndTime = Date.now() + secondsRemaining * 1000;
    } else if (!examEndTime) {
      examEndTime = Date.now() + 90 * 60 * 1000; // 90 minutes
    }

    updateTimerDisplay();
    timerInterval = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((examEndTime - now) / 1000));
      updateTimerDisplay(remaining);

      if (remaining <= 0) {
        stopTimer();
        alert('⏰ Time is up! Your exam has been submitted.');
        finishExam();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function updateTimerDisplay(remainingSec) {
    if (remainingSec === undefined) {
      const now = Date.now();
      remainingSec = Math.max(0, Math.floor(((examEndTime || Date.now()) - now) / 1000));
    }
    const mins = Math.floor(remainingSec / 60);
    const secs = remainingSec % 60;
    const clockText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const clockEl = $('#timer-clock');
    const timerEl = $('#exam-timer');
    if (clockEl) clockEl.textContent = clockText;

    if (timerEl) {
      if (remainingSec <= 300) { // Under 5 minutes
        timerEl.classList.add('warning');
      } else {
        timerEl.classList.remove('warning');
      }
    }
  }

  // ---- State Persistence ----

  function saveExamState() {
    if (!examQuestions || examQuestions.length === 0) return;
    const state = {
      examQuestions: examQuestions.map(q => q.id),
      answers: answers,
      flagged: Array.from(flagged),
      currentIndex: currentIndex,
      examEndTime: examEndTime
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function clearExamState() {
    stopTimer();
    examEndTime = null;
    localStorage.removeItem(STORAGE_KEY);
  }

  function restoreExamState() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    try {
      const state = JSON.parse(raw);
      if (!state.examQuestions || !Array.isArray(state.examQuestions) || state.examQuestions.length === 0) return false;

      const questionMap = new Map(questions.map(q => [q.id, q]));
      const restoredQuestions = state.examQuestions.map(id => questionMap.get(id)).filter(Boolean);

      if (restoredQuestions.length !== state.examQuestions.length) return false;

      examQuestions = restoredQuestions;
      answers = state.answers || {};
      flagged = new Set(state.flagged || []);
      currentIndex = state.currentIndex || 0;
      examEndTime = state.examEndTime || null;

      if (examEndTime) {
        const remaining = Math.max(0, Math.floor((examEndTime - Date.now()) / 1000));
        if (remaining > 0) {
          startTimer(remaining);
        } else {
          // Expired while tab was closed
          clearExamState();
          return false;
        }
      }

      totalQuestions.textContent = examQuestions.length;
      totalCount.textContent = examQuestions.length;

      buildQuestionNav();
      renderQuestion();
      showScreen('exam');
      return true;
    } catch (e) {
      console.error('Failed to restore exam state:', e);
      clearExamState();
      return false;
    }
  }

  // ---- Core Functions ----

  function showScreen(name) {
    [setupScreen, examScreen, resultsScreen].forEach(s => s.classList.remove('active'));
    if (name === 'setup') setupScreen.classList.add('active');
    else if (name === 'exam') examScreen.classList.add('active');
    else if (name === 'results') resultsScreen.classList.add('active');
    window.scrollTo(0, 0);
  }

  function startExam() {
    const count = parseInt(countInput.value) || 60;
    examQuestions = selectQuestions(count);
    answers = {};
    flagged = new Set();
    currentIndex = 0;
    examEndTime = Date.now() + 90 * 60 * 1000; // 90 minutes

    totalQuestions.textContent = examQuestions.length;
    totalCount.textContent = examQuestions.length;

    buildQuestionNav();
    renderQuestion();
    startTimer();
    saveExamState();
    showScreen('exam');
  }

  function selectQuestions(count) {
    // Domain weights from the KCNA exam
    const domainWeights = {
      'Kubernetes Fundamentals': 0.44,
      'Container Orchestration': 0.28,
      'Cloud Native Application Delivery': 0.16,
      'Cloud Native Architecture': 0.12
    };

    // Group all questions by domain
    const byDomain = {};
    questions.forEach(q => {
      if (!byDomain[q.domain]) byDomain[q.domain] = [];
      byDomain[q.domain].push(q);
    });

    // Calculate how many to pick per domain
    const selected = [];
    const domainCounts = {};
    let remaining = count;

    const domains = Object.keys(domainWeights);
    domains.forEach((domain, i) => {
      if (i === domains.length - 1) {
        domainCounts[domain] = remaining;
      } else {
        const n = Math.round(count * domainWeights[domain]);
        domainCounts[domain] = n;
        remaining -= n;
      }
    });

    // Pick random questions from each domain
    for (const domain of domains) {
      const pool = byDomain[domain] || [];
      const shuffled = shuffleArray([...pool]);
      const n = Math.min(domainCounts[domain], shuffled.length);
      selected.push(...shuffled.slice(0, n));
    }

    // Shuffle the final selection
    return shuffleArray(selected);
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function buildQuestionNav() {
    questionNav.innerHTML = '';
    examQuestions.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'nav-btn';
      btn.textContent = i + 1;
      btn.addEventListener('click', () => {
        currentIndex = i;
        renderQuestion();
        saveExamState();
      });
      questionNav.appendChild(btn);
    });
  }

  function renderQuestion() {
    const q = examQuestions[currentIndex];

    // Update header
    currentQuestionNum.textContent = currentIndex + 1;
    questionDomain.textContent = q.domain;
    questionDomain.setAttribute('data-domain', q.domain);

    // Question text
    questionText.textContent = q.question;

    // Options
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      if (answers[currentIndex] === i) btn.classList.add('selected');

      // Strip leading letter prefix if present (e.g., "A) ")
      let optText = opt.replace(/^[A-D]\)\s*/, '');

      btn.innerHTML = `
        <span class="option-letter">${letters[i]}</span>
        <span class="option-content">${optText}</span>
      `;
      btn.addEventListener('click', () => selectOption(i));
      optionsContainer.appendChild(btn);
    });

    // Flag button state
    updateFlagButton();

    // Nav buttons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === examQuestions.length - 1;

    // Update sidebar
    updateNavButtons();
    updateAnsweredCount();
  }

  function selectOption(optionIndex) {
    answers[currentIndex] = optionIndex;
    renderQuestion();
    saveExamState();
  }

  function navigate(direction) {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < examQuestions.length) {
      currentIndex = newIndex;
      renderQuestion();
      saveExamState();
    }
  }

  function toggleFlag() {
    if (flagged.has(currentIndex)) {
      flagged.delete(currentIndex);
    } else {
      flagged.add(currentIndex);
    }
    updateFlagButton();
    updateNavButtons();
    saveExamState();
  }

  function updateFlagButton() {
    if (flagged.has(currentIndex)) {
      flagBtn.classList.add('active');
      flagText.textContent = 'Flagged';
    } else {
      flagBtn.classList.remove('active');
      flagText.textContent = 'Flag';
    }
  }

  function updateNavButtons() {
    const btns = questionNav.querySelectorAll('.nav-btn');
    btns.forEach((btn, i) => {
      btn.classList.remove('current', 'answered', 'flagged');
      if (i === currentIndex) btn.classList.add('current');
      if (answers[i] !== undefined) btn.classList.add('answered');
      if (flagged.has(i)) btn.classList.add('flagged');
    });
  }

  function updateAnsweredCount() {
    answeredCount.textContent = Object.keys(answers).length;
  }

  // ---- Finish Exam ----
  function showFinishConfirm() {
    const unanswered = examQuestions.length - Object.keys(answers).length;
    const flaggedCount = flagged.size;

    let msg = '';
    if (unanswered > 0 && flaggedCount > 0) {
      msg = `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''} and ${flaggedCount} flagged question${flaggedCount > 1 ? 's' : ''}. Are you sure you want to finish?`;
    } else if (unanswered > 0) {
      msg = `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Are you sure you want to finish?`;
    } else if (flaggedCount > 0) {
      msg = `You have ${flaggedCount} flagged question${flaggedCount > 1 ? 's' : ''} for review. Are you sure you want to finish?`;
    } else {
      msg = 'Are you sure you want to submit your exam?';
    }
    confirmMsg.textContent = msg;
    confirmModal.classList.add('active');
  }

  function finishExam() {
    confirmModal.classList.remove('active');
    clearExamState();
    calculateResults();
    showScreen('results');
  }

  function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    const domainStats = {};

    examQuestions.forEach((q, i) => {
      // Init domain stats
      if (!domainStats[q.domain]) {
        domainStats[q.domain] = { correct: 0, total: 0 };
      }
      domainStats[q.domain].total++;

      if (answers[i] === undefined) {
        unanswered++;
      } else if (answers[i] === q.correctAnswer) {
        correct++;
        domainStats[q.domain].correct++;
      } else {
        incorrect++;
      }
    });

    const total = examQuestions.length;
    const scorePercent = Math.round((correct / total) * 100);
    const passed = scorePercent >= 75; // KCNA passing score is ~75%

    // Update score display
    const scoreCircle = $('#score-circle');
    scoreCircle.className = 'score-circle ' + (passed ? 'pass' : 'fail');
    $('#score-value').textContent = scorePercent + '%';
    $('#correct-count').textContent = correct;
    $('#incorrect-count').textContent = incorrect;
    $('#unanswered-count').textContent = unanswered;

    const passFailMsg = $('#pass-fail-msg');
    if (passed) {
      passFailMsg.textContent = '✅ PASSED — Congratulations!';
      passFailMsg.className = 'pass-fail-msg pass';
    } else {
      passFailMsg.textContent = '❌ NOT PASSED — Keep studying!';
      passFailMsg.className = 'pass-fail-msg fail';
    }

    // Domain results
    const domainResultsEl = $('#domain-results');
    domainResultsEl.innerHTML = '';
    for (const [domain, stats] of Object.entries(domainStats)) {
      const pct = Math.round((stats.correct / stats.total) * 100);
      const card = document.createElement('div');
      card.className = 'domain-result-card';
      card.innerHTML = `
        <h4>${domain}</h4>
        <div class="domain-score-bar">
          <div class="domain-score-fill ${pct >= 75 ? 'pass' : 'fail'}" style="width: ${pct}%"></div>
        </div>
        <div class="domain-score-text">${stats.correct}/${stats.total} (${pct}%)</div>
      `;
      domainResultsEl.appendChild(card);
    }

    // Render review questions (default: all)
    renderReviewQuestions('all');
  }

  function renderReviewQuestions(filter) {
    const container = $('#review-questions');
    container.innerHTML = '';

    examQuestions.forEach((q, i) => {
      const userAnswer = answers[i];
      const isCorrect = userAnswer === q.correctAnswer;
      const isUnanswered = userAnswer === undefined;
      const isFlagged = flagged.has(i);

      // Apply filter
      if (filter === 'correct' && !isCorrect) return;
      if (filter === 'incorrect' && (isCorrect || isUnanswered)) return;
      if (filter === 'unanswered' && !isUnanswered) return;
      if (filter === 'flagged' && !isFlagged) return;

      let status = isUnanswered ? 'unanswered' : (isCorrect ? 'correct' : 'incorrect');

      const card = document.createElement('div');
      card.className = `review-card ${status}`;

      // Badges
      let badges = '';
      if (isCorrect) badges += '<span class="badge badge-correct">✓ Correct</span>';
      else if (isUnanswered) badges += '<span class="badge badge-unanswered">— Unanswered</span>';
      else badges += '<span class="badge badge-incorrect">✗ Incorrect</span>';
      if (isFlagged) badges += '<span class="badge badge-flagged">⚑ Flagged</span>';
      badges += `<span class="badge badge-domain">${q.domain}</span>`;

      // Options
      const letters = ['A', 'B', 'C', 'D'];
      let optionsHTML = '';
      q.options.forEach((opt, oi) => {
        let cls = 'review-option';
        if (oi === q.correctAnswer) cls += ' correct-answer';
        if (!isUnanswered && oi === userAnswer && oi !== q.correctAnswer) cls += ' wrong-answer';
        const optText = opt.replace(/^[A-D]\)\s*/, '');
        optionsHTML += `<div class="${cls}">${letters[oi]}) ${optText}</div>`;
      });

      card.innerHTML = `
        <div class="review-card-header">
          <span class="review-question-num">Question ${i + 1}</span>
          <div class="review-badges">${badges}</div>
        </div>
        <p class="review-question-text">${q.question}</p>
        <div class="review-options">${optionsHTML}</div>
        <div class="review-explanation"><strong>Explanation:</strong> ${q.explanation}</div>
      `;

      container.appendChild(card);
    });

    if (container.children.length === 0) {
      container.innerHTML = '<p style="text-align:center; color: #6c757d; padding: 20px;">No questions match this filter.</p>';
    }
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!examScreen.classList.contains('active')) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      navigate(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      navigate(-1);
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFlag();
    } else if (e.key >= '1' && e.key <= '4') {
      selectOption(parseInt(e.key) - 1);
    }
  });

  // Automatically restore ongoing exam session if page was refreshed
  restoreExamState();

})();
