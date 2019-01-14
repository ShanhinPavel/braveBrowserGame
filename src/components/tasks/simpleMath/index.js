/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import './index.css';
import createElement from '../../../help_modules/createElement';
import checkAnswer from '../task_util_functions/checkAnswer';
import generateMathExpression from '../task_util_functions/generateMathExpression';

const simpleMath = {
  answer: null,

  render(button, modalWindow, game) {
    const parent = document.getElementsByClassName('modal__modal-content')[0];

    while (parent.firstChild) {
      parent.firstChild.remove();
    }

    const mathContainer = createElement('div', { class: 'math' });

    const title = createElement('p', { class: 'math__title' });
    title.textContent = 'Solve math expression :';

    const task = createElement('p', { class: 'math__expression' });

    const form = createElement('form', { class: 'math__form' });

    const inputText = createElement('input', { class: 'math__input-text', type: 'text' });
    const submitButton = createElement('input', { class: 'math__input-button', type: 'submit' });

    submitButton.addEventListener('click', (event) => {
      const answer = checkAnswer(event, button, 'math');
      modalWindow.close();
      game.fight(answer);
    });

    form.append(inputText, submitButton);

    mathContainer.append(title, task, form);
    parent.appendChild(mathContainer);
  },

  startTask(buttonsName, modalWindow, game) { // button,conditionOfTasks,dataOfTasks
    simpleMath.render(buttonsName, modalWindow, game);
    const expressionContainer = document.getElementsByClassName(`${buttonsName}__expression`)[0];
    const expression = generateMathExpression(15);
    const [content, answer] = expression;
    expressionContainer.textContent = content;
    expressionContainer.setAttribute('data-answer', answer);
  },
};

export { simpleMath };
