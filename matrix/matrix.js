export class Matrix {
  constructor(string) {
    this.string = string;
    this.Row = this.string.split('\n').map(value => value.split(' ').map(value => Number(value)));
    this.Col = this.Row[0].map((_,i) => this.Row.map(row => row[i]));
  }
  get rows() {
    return this.Row
  }
  get columns() {
    return this.Col
  }
}
