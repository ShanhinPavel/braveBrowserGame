/* eslint-disable prefer-destructuring */
/*
*This function return random element from array*
*/
export default function randomFromArray(linksCollection, randomFunc) {
  console.log(linksCollection.length);
  const length = linksCollection.length;
  const random = randomFunc(length);
  return linksCollection[random];
}
