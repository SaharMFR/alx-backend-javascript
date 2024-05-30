export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(c) {
    this._code = c;
  }

  get code() {
    return this._code;
  }

  set name(n) {
    this._name = n;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
