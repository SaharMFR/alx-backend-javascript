export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set name(n) {
    this._name = n;
  }

  get name() {
    return this._name;
  }

  set code(c) {
    this._code = c;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
