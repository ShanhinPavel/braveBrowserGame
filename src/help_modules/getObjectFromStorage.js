/* eslint-disable no-undef */
/*
*This function returns collection*
*/
export default function getObjectFromStorage(nameOfCollection) {
  const scoreObject = localStorage.getItem(nameOfCollection);
  const objectWithScore = JSON.parse(scoreObject);
  return objectWithScore;
}
