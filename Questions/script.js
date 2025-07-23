const questions = [
  {
    tittle: "test",
    options: [
      {
        tittle: "test",
        isCorrect: true,
      },
      {
        tittle: "test",
        isCorrect: false,
      },
      {
        tittle: "test",
        isCorrect: false,
      },
      {
        tittle: "test",
        isCorrect: false,
      },
    ],
  },
  {
    tittle: "test",
    options: [
      {
        tittle: "test",
        isCorrect: true,
      },
      {
        tittle: "test",
        isCorrect: false,
      },
      {
        tittle: "test",
        isCorrect: false,
      },
      {
        tittle: "test",
        isCorrect: false,
      },
    ],
  },
];

let questionIndex = 0;

function startGame() {
  const prematch = document.querySelector("#prematch");
  console.log(prematch);
  prematch.innerHTML = "";

  const questionContainer = document.createElement("div");
  questionContainer.classList.add("questionContainer");
  prematch.appendChild(questionContainer);

  const qustionTittle = document.createElement("p");

  qustionTittle.textContent = questions[questionIndex].tittle;
  questionContainer.appendChild(qustionTittle);

  const optionContainer = document.createElement("div");
  optionContainer.classList.add("option-container");
  questionContainer.appendChild(optionContainer);

  for (const option of questions[questionIndex].options) {
    const optionBTN = document.createElement("button");
    optionBTN.textContent = option.tittle;
    optionContainer.appendChild(optionBTN);
    optionBTN.addEventListener("click", () => {
      for (
        let counter = 0;
        counter < questions[questionIndex].options.length;
        counter++
      ) {
        if (questions[questionIndex].options[counter].isCorrect) {
          document.querySelectorAll("button")[counter].classList.add("right");
        } else {
          document.querySelectorAll("button")[counter].classList.add("wrong");
        }
      }

      const nextQuestion = document.createElement("button");
      nextQuestion.textContent = "سوال بعدی";
      optionContainer.appendChild(nextQuestion);
      nextQuestion.addEventListener("click", () => {
        questionIndex += 1;
        if (questionIndex < questions.length) {
          startGame();
        } else {
          alert("اتمام بازی");
          window.location.reload();
        }
      });
    });
  }
}
