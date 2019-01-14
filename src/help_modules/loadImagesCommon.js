/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/*
*This function creates node elements images and set path to image*
*It takes two arguments, collection: collection pictures names, and path for to image*
*/
export default function loadImages(collection, path) {
  const images = {};
  const arrayOfProp = Object.keys(collection);
  let resourceLoaded = 0;

  arrayOfProp.forEach((element) => {
    images[element] = document.createElement('img');
    images[element].setAttribute('src', `${path}${collection[element]}.png`);

    if (images[element]) {
      resourceLoaded += 1;
    }
  });
  return resourceLoaded === arrayOfProp.length ? images : false;
}
