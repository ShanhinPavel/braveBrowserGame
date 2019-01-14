/* eslint-disable prefer-destructuring */
/*
*This function chooses random element from collection*
*It returns array with key and value*
 */
export default function conditionOfTask(randomFunction, collection) {
  const arrayOfKeys = Object.keys(collection);
  const length = arrayOfKeys.length;
  const random = randomFunction(length);
  const key = arrayOfKeys[random];
  return [key, collection[key]];
}
