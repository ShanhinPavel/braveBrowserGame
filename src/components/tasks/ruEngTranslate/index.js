/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import './index.css';
import checkAnswer from '../task_util_functions/checkAnswer';
import createElement from '../../../help_modules/createElement';
import getRandomNumber from '../../../help_modules/getRandomNumber';

const ruEngTranslate = {
  render(button, modalWindow, game) {
    const parent = document.getElementsByClassName('modal__modal-content')[0];

    while (parent.firstChild) {
      parent.firstChild.remove();
    }

    const ruToEngContainer = createElement('div', { class: 'ruEngTranslate' });

    const title = createElement('p', { class: 'ruEngTranslate__title' });
    title.textContent = 'Translate russian word into english:';

    const task = createElement('p', { class: 'ruEngTranslate__expression' });

    const form = createElement('form', { class: 'ruEngTranslate__form' });

    const inputText = createElement('input', { class: 'ruEngTranslate__input-text', type: 'text' });
    const submitButton = createElement('input', { class: 'ruEngTranslate__input-button', type: 'submit' });

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const answer = checkAnswer(event, button);
      modalWindow.close();
      game.fight(answer);
    });

    form.append(inputText, submitButton);

    ruToEngContainer.append(title, task, form);
    parent.appendChild(ruToEngContainer);
  },

  startTask(buttonsName, condition, collection, modalWindow, game) {
    ruEngTranslate.render(buttonsName, modalWindow, game);
    const expressionContainer = document.getElementsByClassName(`${buttonsName}__expression`)[0];
    const expression = condition(getRandomNumber, collection);
    const [content, answer] = expression;
    expressionContainer.textContent = content;
    expressionContainer.setAttribute('data-answer', answer);
  },
};

export { ruEngTranslate };
