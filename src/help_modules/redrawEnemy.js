/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/*
*This function collect enemy from parts*
*It takes images : images nodes, context: where we draw our hero,*
* startPosX, Y: position where our hero is*
*breathAmt: it is a fucntion which makes breath of hero*
*canvas: it is a node element
*/
export default function redrawEnemy(images, context, startPosX, startPosY, breathAmt, canvas) {
  if (images === false) {
    return console.log("Pictures hadn't loaded yet.");
  }
  const x = startPosX;
  const y = startPosY;

  canvas.width = canvas.width; // clear canvas
  context.drawImage(images.rightArm, x + 3, y + 80 - breathAmt);
  context.drawImage(images.rightLeg, x + 80, y + 198);
  context.drawImage(images.leftLeg, x + 120, y + 198);
  context.drawImage(images.body, x + 50, y + 50);
  context.drawImage(images.leftArm, x + 160, y + 72 - breathAmt);
  context.drawImage(images.weapon, x + -110, y + 121 - breathAmt);
  context.drawImage(images.head, x + 15, y + -20 - breathAmt);
}
