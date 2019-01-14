/* eslint-disable no-param-reassign */
/*
*This fucnction draws status bar*
*/
export default function redrawStatus(name, image, context, canvas, startPosX, startPosY) {
  const x = startPosX;
  const y = startPosY;

  canvas.width = canvas.width;

  context.font = '30px Arial';
  context.fillStyle = 'red';
  context.fillText(name, x + 10, y + 25);
  context.drawImage(image, x + 10, y + 40);
}
