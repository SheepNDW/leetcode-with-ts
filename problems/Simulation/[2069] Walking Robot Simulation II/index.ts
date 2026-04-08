class Robot {
  private dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  private x: number = 0;
  private y: number = 0;
  private d: number = 0;
  private width: number;
  private height: number;
  private total: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.total = 2 * (width + height) - 4;
  }

  step(num: number): void {
    while (num > 0) {
      let remain = 0;

      if (this.d === 0) {
        remain = this.width - 1 - this.x;
      } else if (this.d === 1) {
        remain = this.height - 1 - this.y;
      } else if (this.d === 2) {
        remain = this.x;
      } else {
        remain = this.y;
      }

      if (remain >= num) {
        this.x += this.dirs[this.d][0] * num;
        this.y += this.dirs[this.d][1] * num;
        num = 0;
      } else {
        this.x += this.dirs[this.d][0] * remain;
        this.y += this.dirs[this.d][1] * remain;
        num -= remain;
        this.d = (this.d + 1) % 4;

        num %= this.total;
        if (num === 0 && this.atCorner(this.x, this.y)) {
          this.d = (this.d + 3) % 4;
        }
      }
    }
  }

  private atCorner(x: number, y: number): boolean {
    if (x === 0 && y === 0) return true;
    if (x === 0 && y === this.height - 1) return true;
    if (x === this.width - 1 && y === 0) return true;
    if (x === this.width - 1 && y === this.height - 1) return true;
    return false;
  }

  getPos(): number[] {
    return [this.x, this.y];
  }

  getDir(): string {
    if (this.d === 0) {
      return 'East';
    } else if (this.d === 1) {
      return 'North';
    } else if (this.d === 2) {
      return 'West';
    } else {
      return 'South';
    }
  }
}

export { Robot };
