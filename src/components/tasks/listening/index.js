/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import './index.css';
import createElement from '../../../help_modules/createElement';
import getRandomNumber from '../../../help_modules/getRandomNumber';
import checkAnswer from '../task_util_functions/checkAnswer';

const listening = {
  // In this methods we create component and add it to page
  render(button, modalWindow, game) {
    const [parent] = document.getElementsByClassName('modal__modal-content');
    while (parent.firstChild) {
      parent.firstChild.remove();
    }

    const audioContainer = createElement('div', { class: 'listening' });

    const title = createElement('p', { class: 'listening__title' });
    title.textContent = 'Listen word, translate into russian and write it';

    const task = createElement('img', {
      class: 'listening__expression',
      src: '../src/components/tasks/listening/images/speaker.png',
      width: '70px',
      height: '70px',
    });
    // Add listener to audio element. By pushing the button  we take an audio element
    // and play task.
    task.addEventListener('click', () => {
      const [audioElement] = document.getElementsByClassName('audio');
      audioElement.play();
    });

    const form = createElement('form', { class: 'listening__form' });
    const inputText = createElement('input', { class: 'listening__input-text', type: 'text' });
    const submitButton = createElement('input', { class: 'listening__submit-button', type: 'submit' });
    // Add event listener to button which send answer for examine.
    submitButton.addEventListener('click', (event) => {
      const answer = checkAnswer(event, button);
      modalWindow.close();
      game.fight(answer);
    });
    // Add elements to each other and to page
    form.append(inputText, submitButton);
    audioContainer.append(title, task, form);
    parent.appendChild(audioContainer);
  },
  /*
  *This method starts rendering of listening task, randomly defines sound of task*
  *and adds path to audio file to tag audio is placed at the page*
  *button name - this button calls the task. condition - this is the function which*
  *returns random element from collection. modalWindow - this is the object of modal window*
  *game - this is the object which transit to other method for next operations*
   */
  startTask(buttonsName, condition, collection, modalWindow, game) { // button, OfTask
    listening.render(buttonsName, modalWindow, game);
    const [expressionContainer] = document.getElementsByClassName(`${buttonsName}__expression`);
    const expression = condition(getRandomNumber, collection);
    const [content, answer] = expression;
    const [audioElement] = document.getElementsByClassName('audio');
    audioElement.src = `../src/components/tasks/listening/sounds/${content}.mp3`;
    expressionContainer.setAttribute('data-answer', answer);
  },
};

export { listening };
