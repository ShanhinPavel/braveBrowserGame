/* eslint-disable no-undef */
/*
*This function adds new user to score object or creates an empty object and sets object *
*then saves result to localStorage*
*/
export default function addObjectToStorage(userName, nameOfCollection, round) { // gameScore
  let playerScore = round - 1;
  const scoreObject = localStorage.getItem(nameOfCollection);
  let scoresCollection = null;

  if (round === undefined) {
    playerScore = 0;
  }
  if (scoreObject) {
    scoresCollection = JSON.parse(scoreObject);
  } else {
    scoresCollection = {};
  }
  scoresCollection[userName] = playerScore;
  const score = JSON.stringify(scoresCollection);
  localStorage.setItem(nameOfCollection, score);
}
