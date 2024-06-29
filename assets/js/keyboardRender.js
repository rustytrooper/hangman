import { createElement } from "./htmlRender.js";

const keyboardKeys = [
  { 'KeyA': 'A' },
  { 'KeyB': 'B' },
  { 'KeyC': 'C' },
  { 'KeyD': 'D' },
  { 'KeyE': 'E' },
  { 'KeyF': 'F' },
  { 'KeyG': 'G' },
  { 'KeyH': 'H' },
  { 'KeyI': 'I' },
  { 'KeyJ': 'J' },
  { 'KeyK': 'K' },
  { 'KeyL': 'L' },
  { 'KeyM': 'M' },
  { 'KeyN': 'N' },
  { 'KeyO': 'O' },
  { 'KeyP': 'P' },
  { 'KeyQ': 'Q' },
  { 'KeyR': 'R' },
  { 'KeyS': 'S' },
  { 'KeyT': 'T' },
  { 'KeyU': 'U' },
  { 'KeyV': 'V' },
  { 'KeyW': 'W' },
  { 'KeyX': 'X' },
  { 'KeyY': 'Y' },
  { 'KeyZ': 'Z' }
]

function boardRender() {
  const keyboard = document.querySelector('.keyboard');
  keyboardKeys.forEach(key => {
    key = createElement({ tagname: 'div', classnames: 'key' });
    keyboard.append(key)
  })

  function renderKeyLetters() {
    const keys = document.querySelectorAll('.key')
    keys.forEach((key, i) => {
      Object.entries(keyboardKeys).forEach((keyInn, value) => {
        let pLetter = createElement({ tagname: 'p', classnames: 'key-p' })
        if (i === value) {
          pLetter.textContent = Object.entries(keyInn[1])[0][1];
          key.append(pLetter)
          keyboard.append(key)
        }
      })
    })
  }
  renderKeyLetters()

}
export { boardRender }