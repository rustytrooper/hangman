import { initHtml } from "./htmlRender.js";

const questionsAndAnswers = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "Who wrote the novel 'Pride and Prejudice'? (last name)",
    answer: "Austen"
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter"
  },
  {
    question: "In which city are the Spanish steps located?",
    answer: "Rome"
  },
  {
    question: "What product was previously considered poisonous?",
    answer: "Tomato"
  },
  {
    question: "Which company sells the biggest amount of toys every year?",
    answer: "Lego"
  },
  {
    question: "What is the tallest mountain in the world?",
    answer: "Everest"
  },
  {
    question: "What is the primary language spoken in Brazil?",
    answer: "Portuguese"
  },
  {
    question: "Who discovered the law of planetary motion? (last name)",
    answer: "Kepler"
  },
  {
    question: "The birthplace of scissors is considered to be",
    answer: "Egypt"
  }
];


let answer;


function fillHtml() {
  let hiddenWord = document.querySelector('.hidden-word');
  let question = document.querySelector('.question');
  let guessMsg = document.querySelector('.guess');
  let counter = document.querySelector('.counter');

  function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function fillAnswerAndShowQuestion() {
    let index = getRandomIndex(1, questionsAndAnswers.length);
    question.textContent = questionsAndAnswers[index].question;
    hiddenWord.textContent = questionsAndAnswers[index].answer;
    guessMsg.textContent = 'Incorrect guesses: ';
    counter.textContent = '0/6'
    guessMsg.append(counter)
    return hiddenWord.textContent
  }

  fillAnswerAndShowQuestion()
  answer = fillAnswerAndShowQuestion()

  function hideAnswer() {
    // const answer = fillAnswerAndShowQuestion() //этот момент интересен, думала будут разные индексы, тк это разные вызовы

    let arrFromLetters = Array.from(answer).map(letter => letter = '_').join('  ')
    hiddenWord.textContent = arrFromLetters;

  }
  hideAnswer()
  return answer
}

export { fillHtml, questionsAndAnswers };