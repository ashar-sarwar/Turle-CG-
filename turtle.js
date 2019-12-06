class turtle {
  constructor() {
    this.angle = 0;
    this.count = 0;
    this.turnNeg = false;
    this.turnPos = false;
    this.path = "";
  }

  forward(p1, p2) {
    ctx.beginPath();
    console.log(p1, p2);
    ctx.moveTo(p1.x, p1.y);

    ctx.lineTo(p2.x, p2.y);
    ctx.closePath();
    ctx.stroke();

    if (p1.x + 33 < p2.x && this.turnPos === true) {
      this.path += "-F";
      this.turnPos = false;
    } else if (p1.x + 33 < p2.x && this.turnNeg === true) {
      this.path += "+F";
      this.turnNeg = false;
    } else if (p1.y + 33 < p2.y && this.turnNeg === true) {
      this.path += "F";
    } else if (p1.y - 33 > p2.y && this.turnPos === true) {
      this.path += "F";
    } else if (p1.x - 33 > p2.x && this.turnNeg === true) {
      this.path += "-R";
      this.turnNeg = false;
    } else if (p1.x - 33 > p2.x && this.turnPos === true) {
      this.path += "+R";
      this.turnPos = false;
    } else if (p1.x - 33 > p2.x) {
      this.path += "R";
    } else if (p1.x + 33 < p2.x) {
      this.path += "F";
    } else if (p1.y - 33 > p2.y) {
      this.path += "+F";
      this.turnNeg = false;
      this.turnPos = true;
    } else if (p1.y + 33 < p2.y) {
      this.path += "-F";
      this.turnNeg = true;
      this.turnPos = false;
    }
  }

  printString() {
    console.log(`The path is: ${this.path}`);
  }
}
