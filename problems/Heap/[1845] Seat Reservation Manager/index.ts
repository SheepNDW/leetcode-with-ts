import { MinHeap } from '../../utils/Heap';

class SeatManager0 {
  private seat: MinHeap<number>;

  constructor(n: number) {
    this.seat = new MinHeap();
    for (let i = 1; i <= n; i++) {
      this.seat.push(i);
    }
  }

  reserve(): number {
    return this.seat.pop() as number;
  }

  unreserve(seatNumber: number): void {
    this.seat.push(seatNumber);
  }
}

// binary search
class SeatManager {
  private seat: number[];

  constructor(n: number) {
    this.seat = Array.from({ length: n }, (_, i) => n - i);
  }

  reserve(): number | null {
    if (this.seat.length > 0) {
      return this.seat.pop() as number;
    }
    return null;
  }

  unreserve(seatNumber: number): void {
    let left = 0;
    let right = this.seat.length - 1;

    while (left < right) {
      const mid = (left + right) >> 1;

      if (this.seat[mid] < seatNumber) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    if (this.seat[left] > seatNumber) {
      this.seat.splice(left + 1, 0, seatNumber);
    } else {
      this.seat.splice(left, 0, seatNumber);
    }
  }
}

export { SeatManager };
