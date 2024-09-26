class MyCalendar0 {
  private bookings: [number, number][] = [];

  book(start: number, end: number): boolean {
    for (const [s, e] of this.bookings) {
      if (start < e && end > s) {
        return false;
      }
    }

    this.bookings.push([start, end]);
    return true;
  }
}

/*
  binary search
*/
class MyCalendar {
  private bookings: [number, number][] = [];

  private findInsertIndex(start: number): number {
    let left = 0;
    let right = this.bookings.length;

    while (left < right) {
      const mid = (left + right) >> 1;

      if (this.bookings[mid][0] < start) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }

  book(start: number, end: number): boolean {
    const index = this.findInsertIndex(start);

    if (
      (index > 0 && this.bookings[index - 1][1] > start) ||
      (index < this.bookings.length && this.bookings[index][0] < end)
    ) {
      return false;
    }

    this.bookings.splice(index, 0, [start, end]);
    return true;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

export { MyCalendar };
