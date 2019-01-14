/* eslint-disable no-undef */
/*
*This function takes collection of button's names and return array of button's nodes.*
*/
export default function createButtons(tasksCollection, titleOfRootElement) {
  const collectionTitles = Object.keys(tasksCollection);
  const collectionOfButtons = Object.create(null);

  collectionTitles.forEach((element) => {
    const button = document.createElement('button');
    button.className = `${titleOfRootElement}__button-${element}`;
    button.textContent = tasksCollection[element];
    collectionOfButtons[element] = button;
  });
  return collectionOfButtons;
}
