import { createElement } from "./htmlRender.js";
import { quizInit /*, answer, answerStr, hiddenWordString*/ } from "./compareAnswer.js";
import { fillHtml } from "./htmlFill.js";


function initEndOfGame(answer, messageLooseOrWin) {
  let counterDom = Array.from(document.querySelector('.counter').textContent);
  // console.log(counterDom);

  function createModal() {
    const modal = createElement({ tagname: 'div', classnames: 'modal' });
    const modalWrap = createElement({ tagname: 'div', classnames: 'modal_inner_wrap' });
    const winOrLooseMsg = createElement({ tagname: 'h3', classnames: 'modal_h3' });
    const secretWord = createElement({ tagname: 'h2', classnames: 'modal_h2' });
    const playAgainBtn = createElement({ tagname: 'button', classnames: 'modal_button' });
    const overlay = createElement({ tagname: 'div', classnames: 'overlay' })
    modalWrap.append(winOrLooseMsg);
    modalWrap.append(secretWord);
    modalWrap.append(playAgainBtn)
    modal.append(modalWrap)
    document.querySelector('.main').append(modal)
    document.querySelector('.main').append(overlay)
  }
  createModal()
  let h3 = document.querySelector('.modal_h3');
  let h2 = document.querySelector('.modal_h2');
  let btn = document.querySelector('.modal_button');
  let modal = document.querySelector('.modal')
  let overlay = document.querySelector('.overlay')


  function fillModal() {
    // h3.textContent = "YOU WIN!"
    h3.textContent = messageLooseOrWin;
    h2.textContent = `Secret word is: ${answer}`
    btn.textContent = "PLAY AGAIN"
  }
  fillModal()

  function showModal() {
    modal.classList.add('open');
    overlay.classList.add('open')

  }
  showModal()
  // console.log(answerStr, hiddenWordString);
  // function showModalWin() {
  //   if (answerStr === hiddenWordString) {
  //     console.log('FINALLY WIN');
  //     // showModal()
  //   }
  // }
  // showModalWin()


  function restartGame() {
    const manOnGallow = document.querySelector('.man').children
    let keys = document.querySelectorAll('.key')
    keys.forEach(k => k.classList.remove('wrong'))
    for (let i = 0; i < manOnGallow.length; i++) {
      manOnGallow[i].classList.remove('wrong')
    }
    modal.classList.remove('open')
    overlay.classList.remove('open')
    quizInit()
  }

  btn.addEventListener('click', restartGame)
  // console.log(answer, answerStr, hiddenWord);
}
export { initEndOfGame }