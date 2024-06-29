
function createElement({ tagname, classnames, textcontent, attributes = {} } = {}) {
  const element = document.createElement(tagname);
  element.className = classnames;
  element.textcontent = textcontent;
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
  return element
}



function initHtml() {

  const mainWrap = createElement({ tagname: 'main', classnames: 'main' })

  const questionAnswerObj = [{
    question: 'what is london',
    answer: 'a smoothie'
  },
  {
    question: 'Hint: a human-powered vehicle with two wheels',
    answer: 'address'
  }
  ]

  const imagesGallow = [
    {
      src: 'assets/images/Rectangle 1.png',
      class: "img-1"
    },
    {
      src: "assets/images/Rectangle 2.png",
      class: "img-2"
    },
    {
      src: "assets/images/Rectangle 3.png",
      class: "img-3"
    },
    {
      src: "assets/images/Rectangle 4.png",
      class: "img-4"
    }
  ]

  const imagesMan = [
    {
      src: "assets/images/man/head.png",
      class: "img-head"
    },
    {
      src: "assets/images/man/body.png",
      class: "img-body"
    },
    {
      src: "assets/images/man/hand-one.png",
      class: "img-hand-one"
    },
    {
      src: "assets/images/man/hand-two.png",
      class: "img-hand-two"
    },
    {
      src: "assets/images/man/leg-one.png",
      class: "img-leg-one"
    },
    {
      src: "assets/images/man/leg-two.png",
      class: "img-leg-two"
    }
  ]

  const htmlElements = [
    {
      tagname: 'main',
      class: 'main'
    },
    {
      tagname: 'section',
      class: 'gallow',
    },
    {
      tagname: 'img',
      attributes: 'src="assets/images/Rectangle 1.png"'
    }
  ]

  function gallowImgAppend() {
    let img;
    const gallowWrap = createElement({ tagname: 'section', classnames: "gallow" })
    Object.entries(imagesGallow).forEach(([key, value]) => {
      img = createElement({ tagname: "img", attributes: value })
      gallowWrap.append(img)
    })
    const hangmanImg = createElement({ tagname: 'div', classnames: 'man' })
    Object.entries(imagesMan).forEach(([key, value]) => {
      img = createElement({ tagname: 'img', attributes: value })
      hangmanImg.append(img)
      gallowWrap.append(hangmanImg)
    })
    mainWrap.append(gallowWrap)
  }

  function quizSectionAppend() {
    const quizWrap = createElement({ tagname: 'section', classnames: 'quiz' });
    const hiddenWordPlace = createElement({ tagname: 'p', classnames: 'hidden-word' });
    const questionPlace = createElement({ tagname: 'h3', classnames: 'question' });
    const incorrectGuess = createElement({ tagname: 'h3', classnames: 'guess' });
    const counter = createElement({ tagname: 'span', classnames: 'counter' });
    const keyboardWrap = createElement({ tagname: 'div', classnames: 'keyboard' });

    incorrectGuess.append(counter);
    quizWrap.append(hiddenWordPlace, questionPlace, incorrectGuess, keyboardWrap)
    mainWrap.append(quizWrap)
  }

  function initScreen() {
    gallowImgAppend();
    quizSectionAppend()
  }
  initScreen()

  document.body.append(mainWrap);
}
export { initHtml }
export { createElement }