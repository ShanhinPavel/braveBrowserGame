export default class Character {
  constructor(name, collectionParts, imagesOfHealths, context, canvas, statusContext,
    statusCanvas, coordinateX, coordinateY) {
    this.statusCanvas = statusCanvas;
    this.statusContext = statusContext;
    this.collectionHealthImages = imagesOfHealths;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.canvas = canvas;
    this.context = context;
    this.name = name;
    this.collectionParts = collectionParts;
    this.health = 100;
    this.damage = 25;
    this.attackAngle = 0;
    this.damageAngle = 0;
    this.deathAngle = 0;
    this.radian = Math.PI / 180;
    this.partsOfCharacter = null;
    this.imagesHealthNodes = null;
    this.healthImage = null;
    this.executed = false;
  }

  getname() {
    return this.name;
  }

  setname(name) {
    this.name = name;
  }

  attack() {
    this.attackAngle = -40 * this.radian;
    return this.damage;
  }

  getDamage() {
    this.damageAngle = -5 * this.radian;
    this.health -= 25;
  }

  gethealth() {
    return this.health;
  }

  sethealth(number) {
    if (number === 25) {
      this.health = this.health - 25;
    } else this.health = number;
  }

  getpartsOfCharacter() {
    return this.partsOfCharacter;
  }

  setpartsOfCharacter(loadImages, path) {
    this.partsOfCharacter = loadImages(this.collectionParts, path);
  }

  getcontext() {
    return this.context;
  }

  getstatusContext() {
    return this.statusContext;
  }

  getcanvas() {
    return this.canvas;
  }

  getstatusCanvas() {
    return this.statusCanvas;
  }

  getcoordinateX() {
    return this.coordinateX;
  }

  getcoordinateY() {
    return this.coordinateY;
  }

  gethealthImage() {
    return this.healthImage;
  }

  sethealthImage() {
    this.healthImage = this.imagesHealthNodes[this.health];
  }

  setimagesHealthNodes(loadImages, path) {
    this.imagesHealthNodes = loadImages(this.collectionHealthImages, path);
    this.healthImage = this.imagesHealthNodes[this.health];
  }
}
