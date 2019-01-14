/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import './index.css';
import createElement from '../../help_modules/createElement';
import getObjectFromStorage from '../../help_modules/getObjectFromStorage';
import createTableOfScore from '../../help_modules/createTableOfScore';
/* *This object define login menu* */
const score = {
  elementScore: null,

  initScore() {
    // Create node elements
    const scoreContainer = createElement('div', { class: 'score' });
    const buttonContainer = createElement('div', { class: 'score__close-button-container' });
    const closeButton = createElement('button', { class: 'score__close-button' });
    closeButton.textContent = 'x';
    const title = createElement('h1', { class: 'score__title' });
    title.textContent = 'Score';

    // Add listeners to button
    closeButton.addEventListener('click', score.close);

    // Add node element to container
    buttonContainer.appendChild(closeButton);
    scoreContainer.append(buttonContainer, title);

    document.body.appendChild(scoreContainer);
    [score.elementScore] = document.getElementsByClassName('score');
  },

  getScoreTable() {
    const scoreCollection = getObjectFromStorage('gameScore');
    const table = createTableOfScore(undefined, 'score', scoreCollection, 'Score');
    score.elementScore.appendChild(table);
  },

  open() {
    if (!score.elementScore) {
      score.initScore();
      score.getScoreTable();
    } else if (score.elementScore
      && score.elementScore.style.display === 'none') {
      score.elementScore.style.display = 'flex';
    }
  },

  close() {
    score.elementScore.style.display = 'none';
  },
};

export { score };
