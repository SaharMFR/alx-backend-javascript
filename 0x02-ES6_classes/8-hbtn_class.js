export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(s) {
    this._size = s;
  }

  get size() {
    return this._size;
  }

  set location(l) {
    this._location = l;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
