import { fillHtml, questionsAndAnswers } from './htmlFill.js'
import { initEndOfGame } from './endingGame.js'

let counterStr;
let globalAnswer;
let answer;
let answerStr;
let hiddenWord;
let hiddenWordString;

function quizInit() {
  globalAnswer = fillHtml()
  // let answer = Array.from(fillHtml().toUpperCase());
  answer = Array.from(globalAnswer.toUpperCase());
  answerStr = answer.join('');
  let hiddenWordDom = document.querySelector('.hidden-word');
  hiddenWord = Array.from(document.querySelector('.hidden-word').textContent.replaceAll(' ', ''));
  let counter = Array.from(document.querySelector('.counter').textContent);
  let counterDom = document.querySelector('.counter');
  const keyboard = document.querySelector('.keyboard');
  const manOnGallow = [0, '.img-head', '.img-body', '.img-hand-one', '.img-hand-two', '.img-leg-one', '.img-leg-two']
  // let hiddenWordString;
  console.log(`ответ, чтобы  прверить работоспособность: ${answerStr}`);
  console.log(hiddenWord, answer);

  function catchKeyboardClick(e) {
    for (let i = 0; i < answer.length; i++) {
      for (let j = 0; j < hiddenWord.length; j++) {
        if (e.target.textContent === answer[i]) {
          hiddenWord[i] = e.target.textContent;
        }

      }


      if (!answerStr.includes(e.target.textContent)) {

        let keyP = document.querySelectorAll('.key-p')
        let key = document.querySelectorAll('.key')

        // добавит класс вронг на родителя если клик был по букве в p, а не по диву
        for (let i = 0; i < keyP.length; i++) {
          for (let j = 0; j < key.length; j++) {
            if (e.target == keyP[i]) {
              key[i].classList.add('wrong')
            }
          }
        }
        while (+counter[0] < 6) {
          e.target.classList.add('wrong');
          e.target.disabled = true;
          counter[0] = +counter[0];
          counter[0] += 1;
          document.querySelector(`${manOnGallow[counter[0]]}`).classList.add('wrong'); //будет рисовать челика
          counterStr = counter.join('');
          counterDom.innerHTML = '';
          counterDom.append(counterStr)
          break
        }

        if (counter[0] == 6) {
          let msgLoose = "YOU LOOSE!"
          initEndOfGame(answerStr, msgLoose)
        }
        break;
      }
    }

    hiddenWordString = hiddenWord.join(' ')
    // console.log(hiddenWordString);
    hiddenWordDom.innerHTML = ''
    hiddenWordDom.append(hiddenWordString)
    questionsAndAnswers.forEach((obj) => {
      if (hiddenWordString === Array.from(obj.answer.toUpperCase()).join(' ')) {
        console.log('WIN');
        let msgWin = "YOU WIN!"
        initEndOfGame(globalAnswer, msgWin)
      }
    })
  }

  // функция обработки нажатия на физическую клавиатуру
  function catchPhysycalKeyboard(e) {
    for (let i = 0; i < answer.length; i++) {
      for (let j = 0; j < hiddenWord.length; j++) {
        if (e.key.toUpperCase() == answer[i]) {
          hiddenWord[i] = e.key.toUpperCase();
        }
      }

      if (!answerStr.includes(e.key.toUpperCase())) {

        let key = document.querySelectorAll('.key')
        for (let i = 0; i < key.length; i++) {
          if (key[i].children[0].textContent === e.key.toUpperCase()) {
            key[i].classList.add('wrong')
          }
        }
        counter[0] = +counter[0];
        counter[0] += 1;
        document.querySelector(`${manOnGallow[counter[0]]}`).classList.add('wrong'); //будет рисовать челика
        counterStr = counter.join('');
        counterDom.innerHTML = '';
        counterDom.append(counterStr)
        if (counter[0] == 6) {
          let msgLoose = "YOU LOOSE!";
          initEndOfGame(answerStr, msgLoose)
        }
        break;
      }
    }

    hiddenWordString = hiddenWord.join(' ')
    console.log(hiddenWordString);
    hiddenWordDom.innerHTML = ''
    hiddenWordDom.append(hiddenWordString)

    questionsAndAnswers.forEach((obj) => {
      if (hiddenWordString === Array.from(obj.answer.toUpperCase()).join(' ')) {
        let msgWin = "YOU WIN!"
        initEndOfGame(globalAnswer, msgWin)
      }
    })
  }

  keyboard.addEventListener('click', catchKeyboardClick)
  document.addEventListener('keydown', catchPhysycalKeyboard)

}

export { quizInit }
// не хотела писать две отдельные функции для физической и виртуальной клавиатуры - хотела создать условное ветвление,
// где проверяла бы, является ли событие нажатием на физ клаву, но пошло много ошибок - пришлось оставить две функции вместо одной