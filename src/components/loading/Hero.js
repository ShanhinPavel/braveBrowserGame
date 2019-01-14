import Character from './Character';

export default class Hero extends Character {
  // Render hero when he is waiting
  redrawWaiting(breathAmt) {
    const x = this.coordinateX;
    const y = this.coordinateY;

    this.canvas.width = this.canvas.width; // clear canvas
    this.context.drawImage(this.partsOfCharacter.leftArm, x + 103, y + 113 - breathAmt);
    this.context.drawImage(this.partsOfCharacter.sword, x + 145, y + 53 - breathAmt);
    this.context.drawImage(this.partsOfCharacter.fingers, x + 150, y + 150 - breathAmt);
    this.context.drawImage(this.partsOfCharacter.leftLeg, x + 90, y + 188);
    this.context.drawImage(this.partsOfCharacter.rightLeg, x + 53, y + 190);
    this.context.drawImage(this.partsOfCharacter.body, x + 3, y + 87);
    this.context.drawImage(this.partsOfCharacter.head, x + 10, y + 0 - breathAmt);
    this.context.drawImage(this.partsOfCharacter.rightArm, x + 24, y + 113 - breathAmt);
  }

  // Render hero status
  redrawStatus() {
    const x = 5;
    const y = 5;

    this.statusCanvas.width = this.statusCanvas.width;

    this.statusContext.font = '30px Arial';
    this.statusContext.fillStyle = 'red';
    this.statusContext.fillText(this.name, x + 10, y + 25);
    this.statusContext.drawImage(this.healthImage, x + 10, y + 40);
  }

  getDeath() {
    this.deathAngle = -90 * this.radian;
    this.health -= 25;
  }

  // Render hero's attack
  redrawAttack() {
    const x = this.coordinateX;
    const y = this.coordinateY;
    const dx = x + 113;
    const dy = y + 123;

    this.canvas.width = this.canvas.width; // clear canvas
    this.context.save();
    this.context.translate(dx, dy);
    this.context.rotate(this.attackAngle);
    this.context.translate(-dx, -dy);
    this.context.drawImage(this.partsOfCharacter.leftArm, x + 103, y + 113);
    this.context.drawImage(this.partsOfCharacter.sword, x + 145, y + 53);
    this.context.drawImage(this.partsOfCharacter.fingers, x + 150, y + 150);
    this.context.restore();

    this.context.drawImage(this.partsOfCharacter.leftLeg, x + 90, y + 188);
    this.context.drawImage(this.partsOfCharacter.rightLeg, x + 53, y + 190);
    this.context.drawImage(this.partsOfCharacter.body, x + 3, y + 87);
    this.context.drawImage(this.partsOfCharacter.head, x + 10, y + 0);
    this.context.drawImage(this.partsOfCharacter.rightArm, x + 24, y + 113);

    if (this.attackAngle <= 0 * this.radian) {
      this.attackAngle += 2 * this.radian;
    } else this.executed = true;
  }

  // Render hero gets damage
  redrawDamage() {
    const x = this.coordinateX;
    const y = this.coordinateY;
    const dx = x + 90;
    const dy = y + 230;

    this.canvas.width = this.canvas.width; // clear canvas
    this.context.save();
    this.context.translate(dx, dy);
    this.context.rotate(this.damageAngle);
    this.context.translate(-dx, -dy);
    this.context.drawImage(this.partsOfCharacter.leftArm, x + 103, y + 113);
    this.context.drawImage(this.partsOfCharacter.sword, x + 145, y + 53);
    this.context.drawImage(this.partsOfCharacter.fingers, x + 150, y + 150);
    this.context.drawImage(this.partsOfCharacter.leftLeg, x + 90, y + 188);
    this.context.drawImage(this.partsOfCharacter.rightLeg, x + 53, y + 190);
    this.context.drawImage(this.partsOfCharacter.body, x + 3, y + 87);
    this.context.drawImage(this.partsOfCharacter.head, x + 10, y + 0);
    this.context.drawImage(this.partsOfCharacter.rightArm, x + 24, y + 113);
    this.context.restore();

    if (this.damageAngle <= 0 * this.radian) {
      this.damageAngle += 1 * this.radian;
    } else this.executed = true;
  }

  // Render hero death
  redrawDeath() {
    const x = this.coordinateX;
    const y = this.coordinateY;
    const dx = x + 90;
    const dy = y + 230;

    this.canvas.width = this.canvas.width; // clear canvas
    this.context.save();
    this.context.translate(dx, dy);
    this.context.rotate(this.deathAngle);
    this.context.translate(-dx, -dy);
    this.context.drawImage(this.partsOfCharacter.leftArm, x + 103, y + 113);
    this.context.drawImage(this.partsOfCharacter.sword, x + 145, y + 53);
    this.context.drawImage(this.partsOfCharacter.fingers, x + 150, y + 150);
    this.context.drawImage(this.partsOfCharacter.leftLeg, x + 90, y + 188);
    this.context.drawImage(this.partsOfCharacter.rightLeg, x + 53, y + 190);
    this.context.drawImage(this.partsOfCharacter.body, x + 3, y + 87);
    this.context.drawImage(this.partsOfCharacter.head, x + 10, y + 0);
    this.context.drawImage(this.partsOfCharacter.rightArm, x + 24, y + 113);
    this.context.restore();

    if (this.deathAngle >= -90 * this.radian) {
      this.deathAngle -= 1 * this.radian;
    }
  }
}
