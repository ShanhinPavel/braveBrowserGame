/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import './index.css';
import createElement from '../../help_modules/createElement';
import getObjectFromStorage from '../../help_modules/getObjectFromStorage';
import createTableOfScore from '../../help_modules/createTableOfScore';

const gameOverMenu = {
  gameOverMenuNode: null,
  block: null,

  render(userName) {
    const gameOverContainer = createElement('div', { class: 'gameOver' });
    const title = createElement('h1', { class: 'gameOver__title' });
    title.textContent = 'GAME OVER';

    const scoreCollection = getObjectFromStorage('gameScore');
    const tableOfScore = createTableOfScore(userName, 'gameOver', scoreCollection, 'Score');
    gameOverContainer.append(title, tableOfScore);
    document.body.appendChild(gameOverContainer);
  },

  initBlockScreen() {
    const parent = document.getElementsByTagName('body')[0];
    const firstElement = parent.firstChild;
    gameOverMenu.block = createElement('div', { class: 'gameOver__blockscreen' });
    parent.insertBefore(gameOverMenu.block, firstElement);
  },

  open(userName) {
    gameOverMenu.initBlockScreen();
    gameOverMenu.render(userName);
  },
};

export { gameOverMenu };
