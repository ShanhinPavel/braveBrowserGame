/* eslint-disable no-undef */
/*
*This function takes two parametres, the first one is object with audio links*
*the second is action which we will be do*
*/
export default function setPathAndPlaySound(actionObject, action) {
  const [audioElement] = document.getElementsByClassName('audio');
  audioElement.src = actionObject[action];
  audioElement.play();
}
