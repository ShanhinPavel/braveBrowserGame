/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
export default function loadImages(collection) {
  let condition = false;
  if (collection.who) {
    condition = delete collection.who;
  }

  const images = {};
  const arrayOfProp = Object.keys(collection);
  let resourceLoaded = 0;

  arrayOfProp.forEach((element) => {
    images[element] = document.createElement('img');

    if (condition) {
      images[element]
        .setAttribute('src', `./components/loading/images/images_of_characters/Hero_parts/${collection[element]}.png`);
    } else {
      images[element]
        .setAttribute('src', `./components/loading/images/images_of_characters/Enemies_parts/${collection[element]}.png`);
    }
    if (images[element]) {
      resourceLoaded += 1;
    }
  });
  // console.log(images);
  return resourceLoaded === arrayOfProp.length ? images : false;
}
