export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = n;
  }

  get name() {
    return this._name;
  }

  set length(l) {
    if (typeof l !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = l;
  }

  get length() {
    return this._length;
  }

  set students(s) {
    if (!(s instanceof Array) || !(s.every((st) => typeof st === 'string'))) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = s;
  }

  get students() {
    return this._students;
  }
}
