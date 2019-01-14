/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

import './index.css';
import { game } from '../../components/loading/Game';
import createAudio from '../../help_modules/createAudio';
import randomFromArray from '../../help_modules/getRandomFromArray';
import { arrayOfBackgrounds } from './data_of_battle/dataOfBattle';
import getRandomNumber from '../../help_modules/getRandomNumber';

const battle = {
  battleElement: null,

  init(userName) {
    // Create node elements of battle component
    const battleContainer = document.createElement('div');
    battleContainer.className = 'battle';
    battleContainer.setAttribute('data-userName', userName);
    // Set battle background randomly
    const background = randomFromArray(arrayOfBackgrounds, getRandomNumber);
    battleContainer.style.background = `url('../src/screens/battle/images/${background}.png')`;
    const audioTag = createAudio();

    // Create context for hero
    const heroContext = document.createElement('canvas');
    heroContext.className = 'battle__hero-context';
    heroContext.width = '370';
    heroContext.height = '350';
    // Create context for enemy
    const enemyContext = document.createElement('canvas');
    enemyContext.className = 'battle__enemy-context';
    enemyContext.width = '400';
    enemyContext.height = '350';
    // Create context for stats of hero
    const herosStatsContext = document.createElement('canvas');
    herosStatsContext.className = 'battle__hero-status-context';
    herosStatsContext.width = '430';
    herosStatsContext.height = '100';
    // Create context for stats of enemy
    const enemiesStatsContext = document.createElement('canvas');
    enemiesStatsContext.className = 'battle__enemy-status-context';
    enemiesStatsContext.width = '430';
    enemiesStatsContext.height = '100';

    const attackButton = document.createElement('button');
    attackButton.className = 'battle__attack-button';
    attackButton.textContent = 'Attack';

    battleContainer.append(heroContext, enemyContext, enemiesStatsContext,
      herosStatsContext, attackButton);
    document.body.append(battleContainer, audioTag);

    [this.battleElement] = document.getElementsByClassName('battle');

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        alert('pause');
      }
    });
  },

  render(userName) {
    battle.init(userName);
    game.startGame(userName);
  },
};

export { battle };
