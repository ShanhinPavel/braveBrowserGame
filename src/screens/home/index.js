/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import './index.css';
import createElement from '../../help_modules/createElement';
import createElements from '../../help_modules/createElements';
import { battle } from '../battle/index';
import createAudio from '../../help_modules/createAudio';
import onOffMusic from '../../help_modules/onOffMusic';
/*
*Init home page*
*/
const homePage = {
  render(loginObject, scoreObject, contactsObject, audioButtonLinks) {
  // Define node elements
  // home container
    const homeContainer = createElement('div', { class: 'home' });
    // header
    const headerElement = createElement('header', { class: 'home__header' });
    headerElement.style.background = 'url("../src/screens/home/images/backgrounds/header_background2.png")';
    // title of game
    const titleOfGame = createElement('h1', { class: 'home__title' });
    const navPanel = createElement('nav', { class: 'home__nav-panel' });
    // screenshots of game
    const section = createElement('section', { class: 'home__game-rules' });
    const sectionsDiv = createElement('div', { class: 'home__section-container' });
    const sectionTitle = createElement('h2', { class: 'home__section-container-title' });
    sectionTitle.textContent = 'Screenshots of the gameplay';
    // screenshot container1 and 2 screenshots
    const screenContainer1 = createElement('div', { class: 'home__screenshots1' });
    const screenshot1 = createElement('img', {
      class: 'home__game-screenshot1',
      width: '585px',
      height: '267px',
      src: '../src/screens/home/images/screenshots/battle.png',
    });
    const screenshot2 = createElement('img', {
      class: 'home__game-screenshot2',
      width: '585px',
      height: '267px',
      src: '../src/screens/home/images/screenshots/battle_menu.png',
    });
    // screenshot container2 and 2 screenshots
    const screenContainer2 = createElement('div', { class: 'home__screenshots2' });
    const screenshot3 = createElement('img', {
      class: 'home__game-screenshot3',
      width: '585px',
      height: '267px',
      src: '../src/screens/home/images/screenshots/task_screen.png',
    });
    const screenshot4 = createElement('img', {
      class: 'home__game-screenshot4',
      width: '585px',
      height: '267px',
      src: '../src/screens/home/images/screenshots/gameOver_screen.png',
    });
    // footer
    const footer = createElement('footer', { class: 'home__footer' });
    const footerDiv = createElement('div', { class: 'home__footer-div' });
    const titleInFooter = createElement('p', { class: 'home__footer-title' });
    titleInFooter.textContent = 'Contacts';
    const email = createElement('p', { class: 'home__footer-div-email' });
    email.textContent = 'Email: shanMail@tut.by';
    const skype = createElement('p', { class: 'home__footer-div-skype' });
    skype.textContent = 'SKYPE: shanhinpavel';
    // Create audio tag and set melody which autoplay
    const audioTag = createAudio();
    audioTag.src = '../src/screens/home/sounds/home_page_music.mp3';
    audioTag.autoplay = 'autoplay';
    audioTag.loop = 'loop';
    // create button which switch on/ off music
    const audioOffOn = createElement('img', {
      class: 'home__button-audioOnOff',
      height: '32px',
      width: '32px',
      src: audioButtonLinks.on,
    });
    audioOffOn.setAttribute('data-music', 'on');
    // Add listener to button
    audioOffOn.addEventListener('click', () => {
      onOffMusic(audioButtonLinks);
    });
    // audioButtonLinks

    titleOfGame.textContent = 'The opposition';
    // Create a collection with elements
    const list = createElements('home', 'button', { start: 'Start game', score: 'Score', contacts: 'Contacts' });
    // Iterate through a collection of node elements list and listeners to each
    list.forEach((element) => {
      if (element.textContent === 'Start game') {
        element.addEventListener('click', () => {
          loginObject.openWindow(battle);
        });
      } else if (element.textContent === 'Score') {
        element.addEventListener('click', () => {
          scoreObject.open();
        });
      } else if (element.textContent === 'Contacts') {
        element.addEventListener('click', () => {
          contactsObject.open();
        });
      }
      // Add buttons nodes ot navigation panel
      navPanel.appendChild(element);
    });

    // Add nodes
    headerElement.append(navPanel, audioOffOn, titleOfGame); // add audioOffOn
    footerDiv.append(titleInFooter, email, skype);
    screenContainer1.append(screenshot1, screenshot2);
    screenContainer2.append(screenshot3, screenshot4);
    sectionsDiv.append(sectionTitle, screenContainer1, screenContainer2);
    section.appendChild(sectionsDiv);
    footer.appendChild(footerDiv);
    homeContainer.append(headerElement, section, footer);

    document.body.append(audioTag, homeContainer);
  },
};

export { homePage };
