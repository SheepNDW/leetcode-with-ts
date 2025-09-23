class Spreadsheet {
  private sheet: number[][];

  constructor(rows: number) {
    this.sheet = Array.from({ length: rows }, () => Array(26).fill(0));
  }

  private _colToIndex(c: string): number {
    return c.charCodeAt(0) - 'A'.charCodeAt(0);
  }

  private _parseCell(cell: string): [number, number] {
    const col = cell[0];
    const row = Number(cell.slice(1));
    return [row - 1, this._colToIndex(col)];
  }

  setCell(cell: string, value: number): void {
    const [row, col] = this._parseCell(cell);
    this.sheet[row][col] = value;
  }

  resetCell(cell: string): void {
    const [row, col] = this._parseCell(cell);
    this.sheet[row][col] = 0;
  }

  getValue(formula: string): number {
    const [a, b] = formula.slice(1).split('+');

    let x = Number(a);
    let y = Number(b);

    if (isNaN(x)) {
      const [r, c] = this._parseCell(a);
      x = this.sheet[r][c];
    }
    if (isNaN(y)) {
      const [r, c] = this._parseCell(b);
      y = this.sheet[r][c];
    }

    return x + y;
  }
}

export { Spreadsheet };

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */
