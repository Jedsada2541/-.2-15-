'use strict';

// ===============================
// ตั้งค่าหลักของข้อสอบ
// ===============================
const TEACHER_PASSWORD = '1234';
const PASS_SCORE = 15; // เกณฑ์ผ่าน 15 จาก 25 คะแนน สามารถแก้ได้ตรงนี้
const EXAM_DURATION_MINUTES = 60; // เวลาทำข้อสอบ หน่วยเป็นนาที สามารถแก้ได้ตรงนี้
const EXAM_DURATION_SECONDS = EXAM_DURATION_MINUTES * 60;

const questions = [
  {
    text: 'เทคโนโลยีส่วนใหญ่เกิดขึ้นจากสิ่งใด',
    choices: ['ความสวยงามของสินค้า', 'ปัญหาและความต้องการของมนุษย์', 'การเลียนแบบธรรมชาติเท่านั้น', 'การใช้เครื่องมือราคาแพง'],
    answer: 1
  },
  {
    text: 'ข้อใดเป็นตัวอย่างของการเปลี่ยนแปลงเทคโนโลยีจากปัญหาที่เกิดขึ้น',
    choices: ['ใช้พัดลมเพราะอากาศร้อน', 'ซื้อรองเท้าเพราะสีสวย', 'อ่านหนังสือเพราะชอบภาพประกอบ', 'วาดรูปเพราะมีเวลาว่าง'],
    answer: 0
  },
  {
    text: 'ข้อใดคือผลกระทบด้านบวกของเทคโนโลยี',
    choices: ['ทำให้เกิดขยะอิเล็กทรอนิกส์', 'ทำให้ใช้พลังงานมากขึ้น', 'ช่วยให้ทำงานได้สะดวกและรวดเร็วขึ้น', 'ทำให้คนใช้โทรศัพท์มากเกินไป'],
    answer: 2
  },
  {
    text: 'ก่อนแก้ปัญหาควรทำสิ่งใดเป็นอันดับแรก',
    choices: ['ลงมือสร้างชิ้นงานทันที', 'ซื้ออุปกรณ์ให้ครบก่อน', 'ระบุและวิเคราะห์ปัญหา', 'นำเสนอผลงาน'],
    answer: 2
  },
  {
    text: 'การรวบรวมข้อมูลเพื่อแก้ปัญหามีประโยชน์อย่างไร',
    choices: ['ทำให้แก้ปัญหาได้อย่างมีเหตุผล', 'ทำให้ไม่ต้องออกแบบชิ้นงาน', 'ทำให้ข้ามขั้นตอนการทดสอบได้', 'ทำให้ไม่ต้องวิเคราะห์ปัญหา'],
    answer: 0
  },
  {
    text: 'กระบวนการออกแบบเชิงวิศวกรรมเริ่มต้นจากขั้นตอนใด',
    choices: ['นำเสนอผลงาน', 'ระบุปัญหา', 'ทดสอบชิ้นงาน', 'ปรับปรุงผลงาน'],
    answer: 1
  },
  {
    text: 'ข้อใดเป็นแหล่งข้อมูลที่น่าเชื่อถือในการแก้ปัญหา',
    choices: ['ข่าวลือจากเพื่อน', 'เว็บไซต์ที่ไม่มีแหล่งอ้างอิง', 'หนังสือเรียนหรือเว็บไซต์ของหน่วยงานที่เชื่อถือได้', 'ความคิดเห็นส่วนตัวอย่างเดียว'],
    answer: 2
  },
  {
    text: 'การออกแบบวิธีการแก้ปัญหาหมายถึงข้อใด',
    choices: ['การวางแนวทางหรือรูปแบบก่อนลงมือทำ', 'การขายผลงานให้ได้ราคาสูง', 'การตกแต่งผลงานให้สวยเท่านั้น', 'การคัดลอกผลงานของผู้อื่น'],
    answer: 0
  },
  {
    text: 'เพราะเหตุใดจึงต้องวางแผนก่อนสร้างชิ้นงาน',
    choices: ['เพื่อให้รู้ขั้นตอน เวลา วัสดุ และเครื่องมือที่ต้องใช้', 'เพื่อให้ไม่ต้องทดสอบชิ้นงาน', 'เพื่อให้ชิ้นงานมีขนาดใหญ่เสมอ', 'เพื่อให้ทำงานคนเดียวได้ง่ายขึ้น'],
    answer: 0
  },
  {
    text: 'สิ่งใดควรรู้ก่อนทำชิ้นงาน',
    choices: ['วิธีเลือกวัสดุ อุปกรณ์ เครื่องมือ และความปลอดภัย', 'ราคาขายของชิ้นงานเท่านั้น', 'สีที่ครูชอบเท่านั้น', 'จำนวนเพื่อนในห้อง'],
    answer: 0
  },
  {
    text: 'การทดสอบชิ้นงานมีจุดประสงค์เพื่ออะไร',
    choices: ['ตรวจสอบว่าชิ้นงานแก้ปัญหาได้ตามเป้าหมายหรือไม่', 'ทำให้ชิ้นงานมีราคาแพงขึ้น', 'ทำให้ไม่ต้องปรับปรุงชิ้นงาน', 'ทำให้ใช้เวลาน้อยลงเสมอ'],
    answer: 0
  },
  {
    text: 'หากทดสอบชิ้นงานแล้วพบว่ายังใช้งานไม่ได้ดี ควรทำอย่างไร',
    choices: ['ทิ้งชิ้นงานทันที', 'หยุดทำงาน', 'ปรับปรุงแก้ไขแล้วทดสอบใหม่', 'นำเสนอทันทีโดยไม่แก้ไข'],
    answer: 2
  },
  {
    text: 'การนำเสนอผลงานควรมีข้อมูลใด',
    choices: ['ปัญหา วิธีแก้ปัญหา ขั้นตอน ผลการทดสอบ และข้อเสนอแนะ', 'เฉพาะชื่อผู้จัดทำเท่านั้น', 'เฉพาะราคาวัสดุเท่านั้น', 'เฉพาะภาพตกแต่ง'],
    answer: 0
  },
  {
    text: 'ข้อใดเป็นตัวอย่างของกลไกในชีวิตประจำวัน',
    choices: ['คาน เฟือง รอก', 'กระดาษ ดินสอ ยางลบ', 'น้ำ อากาศ แสงแดด', 'หนังสือ สมุด กระเป๋า'],
    answer: 0
  },
  {
    text: 'อุปกรณ์ใดเกี่ยวข้องกับไฟฟ้าและอิเล็กทรอนิกส์เบื้องต้น',
    choices: ['หลอดไฟ สวิตช์ ถ่านไฟฉาย', 'ไม้บรรทัด ยางลบ กระดาษ', 'ดินน้ำมัน สีเทียน พู่กัน', 'เชือก ถุงผ้า กระดาษแข็ง'],
    answer: 0
  },
  {
    text: 'นวัตกรรมหมายถึงข้อใด',
    choices: ['สิ่งใหม่หรือวิธีการใหม่ที่ช่วยแก้ปัญหาหรือเพิ่มประโยชน์', 'สิ่งของที่มีราคาแพงเท่านั้น', 'สิ่งของที่ใช้แล้วทิ้งเท่านั้น', 'สิ่งที่ไม่เกี่ยวข้องกับเทคโนโลยี'],
    answer: 0
  },
  {
    text: 'ข้อใดเป็นการวิเคราะห์สถานการณ์ของปัญหาอย่างเหมาะสม',
    choices: ['ดูสาเหตุ ผลกระทบ ผู้เกี่ยวข้อง และข้อจำกัดของปัญหา', 'รีบตัดสินใจโดยไม่หาข้อมูล', 'ใช้ความรู้สึกส่วนตัวอย่างเดียว', 'เลือกวิธีที่ง่ายที่สุดเสมอ'],
    answer: 0
  },
  {
    text: 'ข้อใดเป็นข้อจำกัดในการแก้ปัญหา',
    choices: ['เวลา งบประมาณ วัสดุ และความปลอดภัย', 'สีของปากกา', 'ชื่อเล่นของผู้ทำงาน', 'จำนวนโต๊ะในห้องเรียนเท่านั้น'],
    answer: 0
  },
  {
    text: 'ขั้นตอนใดเกิดขึ้นหลังจากออกแบบวิธีการแก้ปัญหา',
    choices: ['วางแผนและดำเนินการสร้างชิ้นงาน', 'ลบข้อมูลทั้งหมด', 'หยุดทำงาน', 'เปลี่ยนปัญหาใหม่ทันที'],
    answer: 0
  },
  {
    text: 'ข้อใดเป็นพฤติกรรมที่เหมาะสมในการทำงานกลุ่มเพื่อแก้ปัญหา',
    choices: ['แบ่งหน้าที่ รับฟังความคิดเห็น และช่วยกันตรวจสอบงาน', 'ให้เพื่อนทำงานคนเดียว', 'ไม่รับฟังความเห็นของผู้อื่น', 'ทำเฉพาะส่วนที่ตนเองชอบ'],
    answer: 0
  },
  {
    text: 'เทคโนโลยีมีทั้งผลกระทบด้านบวกและด้านลบ',
    choices: ['ถูก', 'ผิด'],
    answer: 0
  },
  {
    text: 'การแก้ปัญหาที่ดีไม่จำเป็นต้องรวบรวมข้อมูล',
    choices: ['ถูก', 'ผิด'],
    answer: 1
  },
  {
    text: 'การทดสอบชิ้นงานช่วยให้รู้ข้อบกพร่องและนำไปปรับปรุงได้',
    choices: ['ถูก', 'ผิด'],
    answer: 0
  },
  {
    text: 'การนำเสนอผลงานควรบอกเฉพาะชื่อชิ้นงาน ไม่ต้องอธิบายวิธีทำ',
    choices: ['ถูก', 'ผิด'],
    answer: 1
  },
  {
    text: 'กลไก ไฟฟ้า และอิเล็กทรอนิกส์ เป็นพื้นฐานที่สามารถนำไปพัฒนาเทคโนโลยีและนวัตกรรมได้',
    choices: ['ถูก', 'ผิด'],
    answer: 0
  }
];

// ===============================
// ตัวแปรสถานะในหน่วยความจำเท่านั้น
// ไม่บันทึกลงฐานข้อมูล / localStorage / sessionStorage
// ===============================
let currentStudent = null;
let isExamRunning = false;
let isRetakeLocked = false;
let timerInterval = null;
let examStartedAt = null;
let remainingSeconds = EXAM_DURATION_SECONDS;

const startScreen = document.getElementById('startScreen');
const examScreen = document.getElementById('examScreen');
const resultScreen = document.getElementById('resultScreen');
const studentForm = document.getElementById('studentForm');
const examForm = document.getElementById('examForm');
const startBtn = document.getElementById('startBtn');
const passScoreText = document.getElementById('passScoreText');
const durationText = document.getElementById('durationText');
const answeredCount = document.getElementById('answeredCount');
const totalCount = document.getElementById('totalCount');
const progressBar = document.getElementById('progressBar');
const unansweredWarning = document.getElementById('unansweredWarning');
const examStudent = document.getElementById('examStudent');
const lockedNotice = document.getElementById('lockedNotice');
const teacherUnlock = document.getElementById('teacherUnlock');
const teacherPassword = document.getElementById('teacherPassword');
const unlockBtn = document.getElementById('unlockBtn');
const unlockMessage = document.getElementById('unlockMessage');
const failUnlock = document.getElementById('failUnlock');
const failTeacherPassword = document.getElementById('failTeacherPassword');
const failUnlockBtn = document.getElementById('failUnlockBtn');
const failUnlockMessage = document.getElementById('failUnlockMessage');
const nextStudentBtn = document.getElementById('nextStudentBtn');
const timeLeft = document.getElementById('timeLeft');
const timerCard = document.getElementById('timerCard');
const timerWarning = document.getElementById('timerWarning');
const submitExamBtn = document.getElementById('submitExamBtn');

passScoreText.textContent = PASS_SCORE;
durationText.textContent = `${EXAM_DURATION_MINUTES} นาที`;
totalCount.textContent = questions.length;

function showScreen(screen) {
  [startScreen, examScreen, resultScreen].forEach((item) => item.classList.remove('active'));
  screen.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestions() {
  examForm.innerHTML = questions.map((question, questionIndex) => {
    const choices = question.choices.map((choice, choiceIndex) => {
      const inputId = `q${questionIndex}_choice${choiceIndex}`;
      return `
        <label class="choice" for="${inputId}">
          <input id="${inputId}" type="radio" name="q${questionIndex}" value="${choiceIndex}" />
          <span>${choice}</span>
        </label>
      `;
    }).join('');

    return `
      <article class="question-card" data-question="${questionIndex}">
        <div class="question-title">
          <span class="question-number">${questionIndex + 1}</span>
          <span>${question.text}</span>
        </div>
        <div class="choices">${choices}</div>
      </article>
    `;
  }).join('');
}

function getAnsweredCount() {
  return questions.reduce((count, _, index) => {
    return examForm.querySelector(`input[name="q${index}"]:checked`) ? count + 1 : count;
  }, 0);
}

function updateProgress() {
  const count = getAnsweredCount();
  answeredCount.textContent = count;
  progressBar.style.width = `${(count / questions.length) * 100}%`;
  unansweredWarning.textContent = count < questions.length ? `ยังไม่ได้ตอบ ${questions.length - count} ข้อ` : 'ตอบครบแล้ว พร้อมส่งคำตอบ';
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function updateTimerDisplay() {
  timeLeft.textContent = formatTime(remainingSeconds);
  timerCard.classList.toggle('timer-low', remainingSeconds <= 300 && remainingSeconds > 60);
  timerCard.classList.toggle('timer-danger', remainingSeconds <= 60);

  if (remainingSeconds <= 60) {
    timerWarning.textContent = 'เหลือเวลาไม่ถึง 1 นาที ระบบจะส่งข้อสอบอัตโนมัติเมื่อหมดเวลา';
  } else if (remainingSeconds <= 300) {
    timerWarning.textContent = 'เหลือเวลาไม่ถึง 5 นาที กรุณาตรวจสอบคำตอบก่อนส่ง';
  } else {
    timerWarning.textContent = '';
  }
}

function clearExamTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function startExamTimer() {
  clearExamTimer();
  examStartedAt = Date.now();
  remainingSeconds = EXAM_DURATION_SECONDS;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    const elapsedSeconds = Math.floor((Date.now() - examStartedAt) / 1000);
    remainingSeconds = Math.max(EXAM_DURATION_SECONDS - elapsedSeconds, 0);
    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      submitExamAutomatically();
    }
  }, 1000);
}

function submitExamAutomatically() {
  if (!isExamRunning) return;
  clearExamTimer();
  submitExamBtn.disabled = true;
  submitExamBtn.textContent = 'หมดเวลา กำลังส่งข้อสอบ...';
  showResult(calculateScore(), 'timeout');
}

function startExam(name, studentId) {
  currentStudent = { name, studentId };
  isExamRunning = true;
  submitExamBtn.disabled = false;
  submitExamBtn.textContent = 'ส่งคำตอบก่อนเวลาและดูคะแนน';
  examStudent.textContent = `ผู้เข้าสอบ: ${name} | เลขประจำตัว: ${studentId}`;
  renderQuestions();
  updateProgress();
  startExamTimer();
  showScreen(examScreen);
}

function calculateScore() {
  let score = 0;
  questions.forEach((question, index) => {
    const selected = examForm.querySelector(`input[name="q${index}"]:checked`);
    if (selected && Number(selected.value) === question.answer) {
      score += 1;
    }
  });
  return score;
}

function showResult(score, submitType = 'manual') {
  clearExamTimer();
  isExamRunning = false;
  const submittedByTimer = submitType === 'timeout';

  const passed = score >= PASS_SCORE;
  document.getElementById('resultName').textContent = currentStudent.name;
  document.getElementById('resultStudentId').textContent = currentStudent.studentId;
  document.getElementById('resultScore').textContent = `${score}/${questions.length}`;

  const resultStatus = document.getElementById('resultStatus');
  const resultAdvice = document.getElementById('resultAdvice');
  resultStatus.className = passed ? 'pass' : 'fail';
  resultStatus.textContent = passed ? 'ผ่าน' : 'ไม่ผ่าน';
  const timerNote = submittedByTimer ? 'หมดเวลา ระบบส่งข้อสอบให้อัตโนมัติ ' : '';
  resultAdvice.textContent = passed
    ? `${timerNote}ยินดีด้วย นักเรียนสอบผ่าน สามารถพิมพ์ผลคะแนนหรือเริ่มสอบนักเรียนคนถัดไปได้`
    : `${timerNote}ยังไม่ผ่านเกณฑ์ ระบบล็อกการสอบซ้ำ ต้องให้ครูกรอกรหัสผ่านก่อนจึงจะสอบใหม่ได้`;

  nextStudentBtn.classList.toggle('hidden', !passed);
  failUnlock.classList.toggle('hidden', passed);

  if (!passed) {
    isRetakeLocked = true;
  }

  showScreen(resultScreen);
}

function setLockedState(locked) {
  isRetakeLocked = locked;
  startBtn.disabled = locked;
  lockedNotice.classList.toggle('hidden', !locked);
  teacherUnlock.classList.toggle('hidden', !locked);
}

function resetToStart(keepStudent = false) {
  clearExamTimer();
  isExamRunning = false;
  examForm.innerHTML = '';
  unansweredWarning.textContent = '';
  timerWarning.textContent = '';
  remainingSeconds = EXAM_DURATION_SECONDS;
  updateTimerDisplay();
  submitExamBtn.disabled = false;
  submitExamBtn.textContent = 'ส่งคำตอบก่อนเวลาและดูคะแนน';
  failUnlock.classList.add('hidden');
  nextStudentBtn.classList.add('hidden');
  failTeacherPassword.value = '';
  failUnlockMessage.textContent = '';
  failUnlockMessage.className = 'small-message';
  unlockMessage.textContent = '';
  unlockMessage.className = 'small-message';

  if (!keepStudent) {
    studentForm.reset();
    currentStudent = null;
  } else if (currentStudent) {
    document.getElementById('studentName').value = currentStudent.name;
    document.getElementById('studentId').value = currentStudent.studentId;
  }

  setLockedState(false);
  showScreen(startScreen);
}

function tryUnlock(passwordInput, messageEl, keepStudent) {
  if (passwordInput.value.trim() === TEACHER_PASSWORD) {
    messageEl.textContent = 'ปลดล็อกสำเร็จ สามารถเริ่มสอบใหม่ได้';
    messageEl.className = 'small-message ok';
    setTimeout(() => resetToStart(keepStudent), 500);
  } else {
    messageEl.textContent = 'รหัสผ่านไม่ถูกต้อง';
    messageEl.className = 'small-message error';
  }
}

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (isRetakeLocked) {
    setLockedState(true);
    return;
  }

  const name = document.getElementById('studentName').value.trim();
  const studentId = document.getElementById('studentId').value.trim();

  if (!name || !studentId) {
    alert('กรุณากรอกชื่อและเลขประจำตัวนักเรียนให้ครบถ้วน');
    return;
  }

  startExam(name, studentId);
});

examForm.addEventListener('change', updateProgress);

submitExamBtn.addEventListener('click', () => {
  const count = getAnsweredCount();
  if (count < questions.length) {
    const confirmSubmit = confirm(`ยังไม่ได้ตอบ ${questions.length - count} ข้อ ต้องการส่งคำตอบเลยหรือไม่`);
    if (!confirmSubmit) return;
  }

  const confirmFinal = confirm('ยืนยันส่งคำตอบใช่หรือไม่ เมื่อส่งแล้วจะแสดงคะแนนทันที');
  if (!confirmFinal) return;

  showResult(calculateScore(), 'manual');
});

unlockBtn.addEventListener('click', () => {
  tryUnlock(teacherPassword, unlockMessage, false);
});

failUnlockBtn.addEventListener('click', () => {
  tryUnlock(failTeacherPassword, failUnlockMessage, true);
});

nextStudentBtn.addEventListener('click', () => {
  resetToStart(false);
});

document.getElementById('printResultBtn').addEventListener('click', () => {
  window.print();
});

window.addEventListener('beforeunload', (event) => {
  if (isExamRunning) {
    event.preventDefault();
    event.returnValue = '';
  }
});
