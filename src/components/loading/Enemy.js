/* eslint-disable prefer-destructuring */
import Character from './Character';

export default class Enemy extends Character {
  constructor(namesOfEnemy, collectionParts, imagesOfHealths, context, canvas, statusContext,
    statusCanvas, coordinateX, coordinateY) {
    super(undefined, collectionParts, imagesOfHealths, context, canvas, statusContext,
      statusCanvas, coordinateX, coordinateY);
    this.namesOfEnemy = namesOfEnemy;
  }

  setpartsOfCharacter(random, loadImages, path) {
    const arrayOfKeys = Object.keys(this.collectionParts);
    const objectParts = {};
    let length = 0;

    arrayOfKeys.forEach((element) => {
      length = this.collectionParts[element].length;
      const randomNumber = random(length);
      const arrayOfChoice = this.collectionParts[element];
      objectParts[element] = arrayOfChoice[randomNumber];
    });
    this.partsOfCharacter = loadImages(objectParts, path);
  }

  setname(random) {
    const names = Object.keys(this.namesOfEnemy);
    let nameString = '';

    names.forEach((element) => {
      const length = this.namesOfEnemy[element].length;
      const randomNumber = random(length);
      nameString += ` ${this.namesOfEnemy[element][randomNumber]}`;
    });
    this.name = nameString;
  }

  attack() {
    this.attackAngle = 60 * this.radian;
    return this.damage;
  }

  getDamage() {
    this.damageAngle = 5 * this.radian;
    this.health -= 25;
  }

  // Render waiting of enemy
  redrawWaiting(breathAmt) {
    const x = this.coordinateX;
    const y = this.coordinateY;

    this.canvas.width = this.canvas.width; // clear canvas
    this.context.drawImage(this.partsOfCharacter.rightArm, x + 3, y + 80 - breathAmt);
    this.context.drawImage(this.partsOfCharacter.rightLeg, x + 80, y + 198);
    this.context.drawImage(this.partsOfCharacter.leftLeg, x + 120, y + 198);
    this.context.drawImage(this.partsOfCharacter.body, x + 50, y + 50);
    this.context.drawImage(this.partsOfCharacter.leftArm, x + 160, y + 72 - breathAmt);
    this.context.drawImage(this.partsOfCharacter.weapon, x + -110, y + 121 - breathAmt);
    this.context.drawImage(this.partsOfCharacter.head, x + 15, y + -20 - breathAmt);
  }

  // Render status of enemy
  redrawStatus() {
    const x = 5;
    const y = 5;

    this.statusCanvas.width = this.statusCanvas.width;

    this.statusContext.font = '30px Arial';
    this.statusContext.fillStyle = 'red';
    this.statusContext.fillText(this.name, x + 10, y + 25);
    this.statusContext.drawImage(this.healthImage, x + 10, y + 40);
  }

  // Render attack of enemy
  redrawAttack() {
    const x = this.coordinateX;
    const y = this.coordinateY;
    const dx = x + 50;
    const dy = y + 90;

    this.canvas.width = this.canvas.width; // clear canvas
    // Rotate hand with weapon and render them
    this.context.save();
    this.context.translate(dx, dy);
    this.context.rotate(this.attackAngle);
    this.context.translate(-dx, -dy);
    this.context.drawImage(this.partsOfCharacter.rightArm, x + 3, y + 80);
    this.context.drawImage(this.partsOfCharacter.weapon, x + -110, y + 121);
    this.context.restore();
    // Render next parts of body
    this.context.drawImage(this.partsOfCharacter.rightLeg, x + 80, y + 198);
    this.context.drawImage(this.partsOfCharacter.leftLeg, x + 120, y + 198);
    this.context.drawImage(this.partsOfCharacter.body, x + 50, y + 50);
    this.context.drawImage(this.partsOfCharacter.leftArm, x + 160, y + 72);
    this.context.drawImage(this.partsOfCharacter.head, x + 15, y + -20);

    if (this.attackAngle >= 0 * this.radian) {
      this.attackAngle -= 1 * this.radian;
    } else this.executed = true;
  }

  // Render damage of enemy
  redrawDamage() {
    const x = this.coordinateX;
    const y = this.coordinateY;
    const dx = x + 140;
    const dy = y + 260;

    this.canvas.width = this.canvas.width; // clear canvas
    this.context.save();
    this.context.translate(dx, dy);
    this.context.rotate(this.damageAngle);
    this.context.translate(-dx, -dy);

    this.context.drawImage(this.partsOfCharacter.rightArm, x + 3, y + 80);
    this.context.drawImage(this.partsOfCharacter.rightLeg, x + 80, y + 198);
    this.context.drawImage(this.partsOfCharacter.leftLeg, x + 120, y + 198);
    this.context.drawImage(this.partsOfCharacter.body, x + 50, y + 50);
    this.context.drawImage(this.partsOfCharacter.leftArm, x + 160, y + 72);
    this.context.drawImage(this.partsOfCharacter.weapon, x + -110, y + 121);
    this.context.drawImage(this.partsOfCharacter.head, x + 15, y + -20);

    this.context.restore();

    if (this.damageAngle >= 0 * this.radian) {
      this.damageAngle -= 1 * this.radian;
    } else this.executed = true;
  }
}
