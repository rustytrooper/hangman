// console.log('pizza');
import { initHtml } from "./htmlRender.js";
import { fillHtml } from "./htmlFill.js";
import { boardRender } from "./keyboardRender.js";
import { quizInit } from "./compareAnswer.js";
// import { initEndOfGame } from "./endingGame.js";

function initGame() {
  initHtml()
  fillHtml()
  boardRender()
  quizInit()
  // initEndOfGame()
}
initGame()