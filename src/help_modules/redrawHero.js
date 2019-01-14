/* eslint-disable no-param-reassign */
/*
*This function collect enemy from parts*
*It takes images : images nodes, context: where we draw our hero,*
* startPosX, Y: position where our hero is*
*breathAmt: it is a fucntion which makes breath of hero*
*canvas: it is a node element
*/

export default function redrawHero(images, context, startPosX, startPosY, breathAmt, canvas) {
  const x = startPosX;
  const y = startPosY;

  canvas.width = canvas.width; // clear canvas
  context.drawImage(images.leftArm, x + 103, y + 113 - breathAmt);
  context.drawImage(images.leftLeg, x + 90, y + 188);
  context.drawImage(images.rightLeg, x + 53, y + 190);
  context.drawImage(images.body, x + 3, y + 87);
  context.drawImage(images.head, x + 10, y + 0 - breathAmt);
  context.drawImage(images.rightArm, x + 24, y + 113 - breathAmt);
  context.drawImage(images.sword, x + 145, y + 53 - breathAmt);
  context.drawImage(images.fingers, x + 150, y + 150 - breathAmt);
}
