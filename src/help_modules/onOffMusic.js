/* eslint-disable no-undef */
/*
*This fuction turn on/ off music if user press image with sound and change image*
 */
export default function onOffMusic(linksCollection) {
  const [audioElement] = document.getElementsByClassName('audio');
  const [elementButton] = document.getElementsByClassName('home__button-audioOnOff');
  const state = elementButton.getAttribute('data-music');

  if (state === 'on') {
    elementButton.setAttribute('data-music', 'off');
    audioElement.pause();
    elementButton.src = linksCollection.off;
  } else {
    elementButton.setAttribute('data-music', 'on');
    audioElement.play();
    elementButton.src = linksCollection.on;
  }
}
