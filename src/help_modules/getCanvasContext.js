/* eslint-disable no-undef */
export default function getCanvasContext(className) {
  const canvasElement = document.getElementsByClassName(className)[0];
  const canvasContext = canvasElement.getContext('2d');

  return [canvasContext, canvasElement];
}
