const quizDB = [
  {
    question: "Q1: Which of the following can read and render HTML web pages",
    a: "Server",
    b: "head Tak",
    c: "Web browser",
    d: "Empty",
    ans: "ans3",
  },
  {
    question: "Q2: Identify the range of byte data types in JavaScript",
    a: "-10 to 9",
    b: "-128 to 127",
    c: "-32768 to 32767",
    d: "NONE",
    ans: "ans2",
  },
  {
    question:
      "Q3: Among the following operators identify the one which is used to allocate memory to array variables in JavaScript",
    a: "new",
    b: "new malloc",
    c: "alloc",
    d: "malloc",
    ans: "ans1",
  },
  {
    question: "Q4: The latest HTML standard is",
    a: "HTML 4.0",
    b: "HTML 5.0",
    c: "XML",
    d: "SGML",
    ans: "ans2",
  },
  {
    question: "Q5: Identify the incorrect HTML tag among the following",
    a: "<input>",
    b: "<select>",
    c: "<list>",
    d: "<textarea>",
    ans: "ans3",
  },
  {
    question:
      "Q6: Which of the following is used to transmit information on the world wide web?",
    a: "HPPT",
    b: "HTTP",
    c: "HTTTP",
    d: "HTPP",
    ans: "ans2",
  },
  {
    question: "Q7: On which model is www based upon ",
    a: "client-server",
    b: "local server",
    c: "3 tier",
    d: "none",
    ans: "ans1",
  },
  {
    question: "Q8: How many sizes of headers are available in HTML by default?",
    a: "5",
    b: "1",
    c: "3",
    d: "6",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckedAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer == quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
    <h3> you scored ${score}/${quizDB.length} </h3>
    <button class="btn" onclick="location.reload()"> Play Again</button>
    `;

    showScore.classList.remove("scoreArea");
  }
});
