/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable default-case */
/* eslint-disable no-undef */
import './index.css';
import { simpleMath } from '../tasks/simpleMath/index';
import { listening } from '../tasks/listening/index';
import { ruEngTranslate } from '../tasks/ruEngTranslate/index';
import createButtons from '../../help_modules/createButtons';
import createElement from '../../help_modules/createElement';
import conditionOfTask from '../tasks/task_util_functions/conditionOfTask';
import {
  ruToEngDictionary, audioLinks, engToRuDictionary,
} from '../tasks/dataOfTasks/dataOfTasks';
import { engRuTranslate } from '../tasks/engRuTranslate/index';

const modalWindow = {
  block: null,
  window: null,

  initModalWindow(collectionTasks, game) {
  /*
    *This method initiates modal window*
  */
    const modal = createElement('div', { class: 'modal' });
    const modalContent = createElement('div', { class: 'modal__modal-content' });

    // Get buttons
    const buttons = createButtons(collectionTasks, 'modal');
    // Give listeners to buttons and add button to modal window
    const buttonsTitles = Object.keys(buttons);
    buttonsTitles.forEach((element) => {
      switch (element) {
        case 'math':
          buttons[element].addEventListener('click', () => {
            simpleMath.startTask(element, modalWindow, game);
          });
          break;

        case 'listening':
          buttons[element].addEventListener('click', () => {
            listening.startTask(element, conditionOfTask, audioLinks, modalWindow, game);
          });
          break;

        case 'ruEngTranslate':
          buttons[element].addEventListener('click', () => {
            ruEngTranslate.startTask(element, conditionOfTask, ruToEngDictionary, modalWindow, game);
          });
          break;

        case 'engRuTranslate':
          buttons[element].addEventListener('click', () => {
            engRuTranslate.startTask(element, conditionOfTask, engToRuDictionary, modalWindow, game);
          });
          break;
      }
      modalContent.appendChild(buttons[element]);
    });


    // Add modal and modal-content to body
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    [modalWindow.window] = document.getElementsByClassName('modal');
  },

  initBlockScreen() {
    const parent = document.getElementsByTagName('body')[0];
    const firstElement = parent.firstChild;
    modalWindow.block = createElement('div', { class: 'modal__blockscreen' });
    parent.insertBefore(modalWindow.block, firstElement);
    modalWindow.block.onclick = () => modalWindow.close();
  },

  close() {
    modalWindow.window.remove();
    modalWindow.block.remove();
  },

  open(nameTasks, game) {
    modalWindow.initBlockScreen();
    modalWindow.initModalWindow(nameTasks, game);
  },
};

export { modalWindow };
