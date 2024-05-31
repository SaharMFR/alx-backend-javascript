export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(b) {
    this._brand = b;
  }

  get brand() {
    return this._brand;
  }

  set motor(m) {
    this._motor = m;
  }

  get motor() {
    return this._motor;
  }

  set color(c) {
    this._color = c;
  }

  get color() {
    return this._color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
