/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import './index.css';
import createElement from '../../help_modules/createElement';
/* *This object define login menu* */
const contacts = {
  elementContacts: null,

  initContacts() {
    // Create node elements
    const contactsContainer = createElement('div', { class: 'contacts' });
    const buttonContainer = createElement('div', { class: 'contacts__close-button-container' });
    const closeButton = createElement('button', { class: 'contacts__close-button' });
    closeButton.textContent = 'x';
    const title = createElement('h1', { class: 'contacts__title' });
    title.textContent = 'Contacts';
    const dataContainer = createElement('div', { class: 'contacts__self-data-container' });
    const mail = createElement('p', { class: 'contacts__mail' });
    mail.textContent = 'mail: shanMail@tut.by';
    const skype = createElement('p', { class: 'contacts__skype' });
    skype.textContent = 'Skype: shanhinPavel';

    // Add listeners to button
    closeButton.addEventListener('click', contacts.close);

    // Add node element to container
    buttonContainer.appendChild(closeButton);
    dataContainer.append(mail, skype);
    contactsContainer.append(buttonContainer, title, dataContainer);

    document.body.appendChild(contactsContainer);
    [this.elementContacts] = document.getElementsByClassName('contacts');
  },

  open() {
    // debugger;
    if (!contacts.elementContacts) {
      contacts.initContacts();
    } else if (contacts.elementContacts
        && contacts.elementContacts.style.display === 'none') {
      contacts.elementContacts.style.display = 'flex';
    }
  },

  close() {
    contacts.elementContacts.style.display = 'none';
    // contacts.elementContacts.remove();
  },
};

export { contacts };
