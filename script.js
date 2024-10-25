const questions = [
  {
    question: "How do you say 'How are you?' to a male?",
    options: [
      "كَيْفَ حالُكَ؟",
      "كَيْفَ حالُكِ؟",
      "أَنَا بِخَيْرٍ",
      "مَا اسْمُكَ؟",
    ],
    answer: "كَيْفَ حالُكَ؟",
  },
  {
    question: "How do you say 'How are you?' to a female?",
    options: [
      "كَيْفَ حالُكَ؟",
      "كَيْفَ حالُكِ؟",
      "أَنَا بِخَيْرٍ",
      "مَا اسْمُكِ؟",
    ],
    answer: "كَيْفَ حالُكِ؟",
  },
  {
    question: "How do you say 'What is your name?' to a male?",
    options: [
      "مَا اسْمُكَ؟",
      "مَا اسْمُكِ؟",
      "مِنْ أَيْنَ أَنْتَ؟",
      "مِنْ أَيْنَ أَنْتِ؟",
    ],
    answer: "مَا اسْمُكَ؟",
  },
  {
    question: "How do you say 'What is your name?' to a female?",
    options: [
      "مَا اسْمُكَ؟",
      "مَا اسْمُكِ؟",
      "مِنْ أَيْنَ أَنْتِ؟",
      "كَيْفَ حالُكِ؟",
    ],
    answer: "مَا اسْمُكِ؟",
  },
  {
    question: "How do you say 'I am fine, Alhamdulillah'?",
    options: [
      "أَنَا مِنْ مِصْرَ",
      "أَنَا بِخَيْرٍ، الحَمْدُ للهِ",
      "أَهْلًا وَسَهْلًا",
      "مَعَ السَّلَامَةِ",
    ],
    answer: "أَنَا بِخَيْرٍ، الحَمْدُ للهِ",
  },
  {
    question: "How do you say 'I am a student' (female)?",
    options: [
      "أَنَا طَالِبٌ",
      "أَنَا طَالِبَةٌ",
      "أَنَا طَبِيبَةٌ",
      "أَنَا مُهَنْدِسَةٌ",
    ],
    answer: "أَنَا طَالِبَةٌ",
  },
  {
    question: "How do you say 'I am an engineer' (male)?",
    options: [
      "أَنَا مُهَنْدِسٌ",
      "أَنَا مُهَنْدِسَةٌ",
      "أَنَا طَبِيبٌ",
      "أَنَا طَبِيبَةٌ",
    ],
    answer: "أَنَا مُهَنْدِسٌ",
  },
  {
    question: "How do you say 'I am a doctor' (female)?",
    options: [
      "أَنَا طَبِيبَةٌ",
      "أَنَا طَبِيبٌ",
      "أَنَا مُهَنْدِسَةٌ",
      "أَنَا طَالِبَةٌ",
    ],
    answer: "أَنَا طَبِيبَةٌ",
  },
  {
    question: "How do you say 'Where are you from?' (male)?",
    options: [
      "مِنْ أَيْنَ أَنْتَ؟",
      "مِنْ أَيْنَ أَنْتِ؟",
      "مَا اسْمُكَ؟",
      "كَيْفَ حالُكَ؟",
    ],
    answer: "مِنْ أَيْنَ أَنْتَ؟",
  },
  {
    question: "How do you say 'Where are you from?' (female)?",
    options: [
      "مِنْ أَيْنَ أَنْتِ؟",
      "مِنْ أَيْنَ أَنْتَ؟",
      "كَيْفَ حالُكِ؟",
      "مَا اسْمُكِ؟",
    ],
    answer: "مِنْ أَيْنَ أَنْتِ؟",
  },
  {
    question: "How do you say 'I am from Pakistan'?",
    options: [
      "أَنَا مِنْ تُرْكِيَا",
      "أَنَا مِنْ بَاكِسْتَانَ",
      "أَنَا مِنْ مِصْرَ",
      "أَنَا مِنْ سُورِيَا",
    ],
    answer: "أَنَا مِنْ بَاكِسْتَانَ",
  },
  {
    question: "How do you say 'I am from Turkey'?",
    options: [
      "أَنَا مِنْ تُرْكِيَا",
      "أَنَا مِنْ مِصْرَ",
      "أَنَا مِنْ سُورِيَا",
      "أَنَا مِنْ بَاكِسْتَانَ",
    ],
    answer: "أَنَا مِنْ تُرْكِيَا",
  },
  {
    question: "How do you say 'I am from Egypt'?",
    options: [
      "أَنَا مِنْ تُرْكِيَا",
      "أَنَا مِنْ مِصْرَ",
      "أَنَا مِنْ سُورِيَا",
      "أَنَا مِنْ بَاكِسْتَانَ",
    ],
    answer: "أَنَا مِنْ مِصْرَ",
  },
  {
    question: "How do you say 'I am from Syria'?",
    options: [
      "أَنَا مِنْ تُرْكِيَا",
      "أَنَا مِنْ مِصْرَ",
      "أَنَا مِنْ سُورِيَا",
      "أَنَا مِنْ بَاكِسْتَانَ",
    ],
    answer: "أَنَا مِنْ سُورِيَا",
  },
  {
    question: "How do you say 'My friend' (male)?",
    options: ["صَدِيقَتِي", "أَخِي", "صَدِيقِي", "هُوَ طَبِيبٌ"],
    answer: "صَدِيقِي",
  },
  {
    question: "How do you say 'My friend' (female)?",
    options: ["صَدِيقَتِي", "صَدِيقِي", "هِيَ طَبِيبَةٌ", "طَالِبَةٌ"],
    answer: "صَدِيقَتِي",
  },
  {
    question: "How do you say 'Goodbye'?",
    options: [
      "السَّلَامُ عَلَيْكُم",
      "وَعَلَيْكُمُ السَّلَام",
      "مَعَ السَّلَامَةِ",
      "أَهْلًا وَسَهْلًا",
    ],
    answer: "مَعَ السَّلَامَةِ",
  },
  {
    question: "How do you greet someone (peace be upon you)?",
    options: [
      "وَعَلَيْكُمُ السَّلَام",
      "أَهْلًا وَسَهْلًا",
      "مَعَ السَّلَامَةِ",
      "السَّلَامُ عَلَيْكُم",
    ],
    answer: "السَّلَامُ عَلَيْكُم",
  },
  {
    question: "How do you respond to a greeting (and peace be upon you)?",
    options: [
      "وَعَلَيْكُمُ السَّلَام",
      "السَّلَامُ عَلَيْكُم",
      "أَهْلًا وَسَهْلًا",
      "مَعَ السَّلَامَةِ",
    ],
    answer: "وَعَلَيْكُمُ السَّلَام",
  },
  {
    question: "How do you say 'Welcome'?",
    options: [
      "مَعَ السَّلَامَةِ",
      "وَعَلَيْكُمُ السَّلَام",
      "أَهْلًا وَسَهْلًا",
      "السَّلَامُ عَلَيْكُم",
    ],
    answer: "أَهْلًا وَسَهْلًا",
  },
  {
    question: "What is your nationality if you are from Saudi Arabia?",
    options: ["سَعُودِيٌّ", "مِصْرِيٌّ", "تُرْكِيٌّ", "سُورِيٌّ"],
    answer: "سَعُودِيٌّ",
  },
  {
    question: "What is your nationality if you are from Egypt?",
    options: ["سَعُودِيٌّ", "مِصْرِيٌّ", "تُرْكِيٌّ", "سُورِيٌّ"],
    answer: "مِصْرِيٌّ",
  },
  {
    question: "What is your nationality if you are from Turkey?",
    options: ["سَعُودِيٌّ", "مِصْرِيٌّ", "تُرْكِيٌّ", "سُورِيٌّ"],
    answer: "تُرْكِيٌّ",
  },
  {
    question: "What is your nationality if you are from Syria?",
    options: ["سَعُودِيٌّ", "مِصْرِيٌّ", "تُرْكِيٌّ", "سُورِيٌّ"],
    answer: "سُورِيٌّ",
  },
  {
    question: "How do you say 'I am a teacher' (male)?",
    options: [
      "أَنَا مُعَلِّمٌ",
      "أَنَا مُعَلِّمَةٌ",
      "أَنَا طَالِبٌ",
      "أَنَا طَالِبَةٌ",
    ],
    answer: "أَنَا مُعَلِّمٌ",
  },
  {
    question: "How do you say 'I am a teacher' (female)?",
    options: [
      "أَنَا مُعَلِّمٌ",
      "أَنَا مُعَلِّمَةٌ",
      "أَنَا طَالِبٌ",
      "أَنَا طَالِبَةٌ",
    ],
    answer: "أَنَا مُعَلِّمَةٌ",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  shuffleQuestions();
  showQuestion();
}

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  const options = document.querySelectorAll(".option-button");
  options.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
    button.classList.remove("correct", "wrong"); // Reset button styles
    button.disabled = false; // Enable buttons
    button.onclick = () => selectOption(currentQuestion, button);
  });
  document.getElementById("progress").textContent = `Question ${
    currentQuestionIndex + 1
  } of ${questions.length}`;
}

function selectOption(currentQuestion, button) {
  const selectedAnswer = button.textContent;
  const correctAnswer = currentQuestion.answer;
  if (selectedAnswer === correctAnswer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    document.querySelectorAll(".option-button").forEach((btn) => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }
  document.querySelectorAll(".option-button").forEach((btn) => {
    btn.disabled = true; // Disable all buttons after answering
  });

  // Automatically go to the next question after a short delay
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000); // Adjust the delay as needed
}

function showResult() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
  document.getElementById(
    "score"
  ).textContent = `You scored ${score} out of ${questions.length}!`;
}
