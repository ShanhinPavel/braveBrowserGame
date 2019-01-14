/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import getRandomNumber from '../../help_modules/getRandomNumber';
import { updateBreath, breathAmt } from '../../help_modules/updateBreath';
import Enemy from './Enemy';
import Hero from './Hero';
import * as dataOfCharacters from './dataOfCharacters/dataOfCharacters';
import loadImagesCommon from '../../help_modules/loadImagesCommon';
import getCanvasContext from '../../help_modules/getCanvasContext';
import { modalWindow } from '../modal-dialog/index';
import { nameOfTasks } from '../tasks/dataOfTasks/dataOfTasks';
import { gameOverMenu } from '../gameOverMenu';
import addObjectToStorage from '../../help_modules/addObjectToStorage';
import setPathAndPlaySound from '../../help_modules/setPathAndPlaySound';

const game = {
  gameStatus: 'start',
  round: 1,
  hero: null,
  enemy: null,
  // Create instances of hero and enemy and start game loop.
  startGame(userName) {
    // Get context of canvas elements
    const [contextHero, canvasHero] = getCanvasContext('battle__hero-context');
    const [contextEnemy, canvasEnemy] = getCanvasContext('battle__enemy-context');
    const [contextHeroStatus, canvasHeroStatus] = getCanvasContext('battle__hero-status-context');
    const [contextEnemyStatus, canvasEnemyStatus] = getCanvasContext('battle__enemy-status-context');

    // Create instances of enemy and hero and sets properties
    game.hero = new Hero(
      userName, dataOfCharacters.partsOfHero, dataOfCharacters.healthImages, contextHero,
      canvasHero, contextHeroStatus, canvasHeroStatus, 140, 90,
    );
    /*
    *Load links to images of hero and enemy.*
    *Load links to imagea of health*
    */
    game.hero.setpartsOfCharacter(loadImagesCommon, dataOfCharacters.paths.hero);
    game.hero.setimagesHealthNodes(loadImagesCommon, dataOfCharacters.paths.heroHealthImages);

    game.enemy = new Enemy(
      dataOfCharacters.namesOfEnemy, dataOfCharacters.partsOfEnemy, dataOfCharacters.healthImages, contextEnemy, canvasEnemy,
      contextEnemyStatus, canvasEnemyStatus, 120, 70,
    );
    // Name and parts of enemy's body set randomly.
    game.enemy.setname(getRandomNumber);
    game.enemy.setpartsOfCharacter(getRandomNumber, loadImagesCommon, dataOfCharacters.paths.enemy);
    game.enemy.setimagesHealthNodes(loadImagesCommon, dataOfCharacters.paths.enemyHealthImages);

    // Add event listener to attack button
    const attackButton = document.getElementsByClassName('battle__attack-button')[0];
    attackButton.addEventListener('click', () => {
      modalWindow.open(nameOfTasks, game);
    });

    // Begin render graphics
    game.gameStatus = 'continue';
    game.gameLoop();
  },

  gameLoop() {
    updateBreath();

    switch (game.gameStatus) {
      case 'heroAttack':
        game.hero.redrawAttack();
        game.enemy.redrawDamage();
        break;
      case 'enemyAttack':
        game.enemy.redrawAttack();
        if (game.hero.gethealth() > 0) {
          game.hero.redrawDamage();
        } else game.hero.redrawDeath();
        break;
      case 'continue':
        game.hero.redrawWaiting(breathAmt);
        game.enemy.redrawWaiting(breathAmt);
        break;
      default:
        break;
    }
    game.hero.redrawStatus();
    game.enemy.redrawStatus();

    // When attack animation is rendered we change status of game to 'continue'.
    if (game.hero.executed && game.enemy.executed) {
      game.gameStatus = 'continue';
      game.hero.executed = false;
      game.hero.executed = false;
    }

    requestAnimationFrame(game.gameLoop);
  },
  // Fight between hero and enemy
  fight(answer) {
    // If user's answer is right hero attacks and enemy healt is changed
    if (answer) {
      game.gameStatus = 'heroAttack';
      game.hero.attack();
      setPathAndPlaySound(dataOfCharacters.audioLinks, 'makeHit');
      game.enemy.getDamage();
      setPathAndPlaySound(dataOfCharacters.audioLinks, 'getHurt');
      game.enemy.sethealthImage();

      if (game.enemy.gethealth() === 0) {
        game.round += 1;
        addObjectToStorage(game.hero.getname(), 'gameScore', game.round);
        game.enemy.setname(getRandomNumber);
        game.enemy.setpartsOfCharacter(getRandomNumber, loadImagesCommon, dataOfCharacters.paths.enemy);
        game.enemy.sethealth(100);
        game.enemy.sethealthImage();
      }
    } else {
      game.gameStatus = 'enemyAttack';
      setPathAndPlaySound(dataOfCharacters.audioLinks, 'makeHit');
      game.enemy.attack();

      if (game.hero.gethealth() > 25) {
        game.hero.getDamage();
        setPathAndPlaySound(dataOfCharacters.audioLinks, 'getHurt');
      } else game.hero.getDeath();

      game.hero.sethealthImage();

      if (game.hero.gethealth() === 0) {
        addObjectToStorage(game.hero.getname(), 'gameScore', game.round);
        gameOverMenu.open(game.hero.getname());
      }
    }
  },
};

export { game };
