/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import './index.css';
import createElement from '../../help_modules/createElement';
import addObjectToStorage from '../../help_modules/addObjectToStorage';
/* *This object define login menu* */
const login = {
  elementLogin: null,

  render(battleWindow) {
    // Create node elements
    const loginContainer = createElement('div', { class: 'login' });
    const buttonContainer = createElement('div', { class: 'login__close-button-container' });
    const closeButton = createElement('button', { class: 'login__close-button' });
    closeButton.textContent = 'x';
    const title = createElement('p', { class: 'login__title' });
    title.textContent = 'Enter your name';
    const formContainer = createElement('form', { class: 'login__form-container' });
    const inputField = createElement('input', { type: 'text', class: 'login__input-name' });
    const submitButton = createElement('input', { class: 'login__submit-button', type: 'submit', value: 'Start' });

    // Add listeners to buttons
    // Add listener to submitButton
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const userName = event.target.previousElementSibling.value;
      addObjectToStorage(userName, 'gameScore', undefined);
      document.body.innerHTML = '';
      battleWindow.render(userName);
    });
    // Add listener to close button
    closeButton.addEventListener('click', login.close);

    // Add nodes element to container
    buttonContainer.appendChild(closeButton);
    formContainer.append(inputField, submitButton);
    loginContainer.append(buttonContainer, title, formContainer);

    document.body.appendChild(loginContainer);
    [this.elementLogin] = document.getElementsByClassName('login');
  },

  openWindow(menu) {
    if (!login.elementLogin) {
      login.render(menu);
    } else if (login.elementLogin
      && login.elementLogin.style.display === 'none') {
      login.elementLogin.style.display = 'flex';
    }
  },

  close() {
    login.elementLogin.style.display = 'none';
  },
};

export { login };
