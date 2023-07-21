class RadianAngle {
  constructor (radianAngle) {
    this.radians = radianAngle;
  }

  get degrees () {
    return this.radians * 180.0 / Math.PI;
  }

  set degrees (degreeAngle) {
    this.radians = degreeAngle * Math.PI / 180.0;
  }
}

let radianAngle = new RadianAngle (Math.PI);
console.log (radianAngle.degrees);
console.log (radianAngle.degrees ()); // degrees is not a function!!!!