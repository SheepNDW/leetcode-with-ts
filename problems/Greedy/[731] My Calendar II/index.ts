class MyCalendarTwo {
  private bookings: Array<[number, number]> = [];
  private overlaps: Array<[number, number]> = [];

  book(start: number, end: number): boolean {
    for (const [s, e] of this.overlaps) {
      if (start < e && end > s) {
        return false;
      }
    }

    for (const [s, e] of this.bookings) {
      if (start < e && end > s) {
        const overlapStart = Math.max(start, s);
        const overlapEnd = Math.min(end, e);
        this.overlaps.push([overlapStart, overlapEnd]);
      }
    }

    this.bookings.push([start, end]);
    return true;
  }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

export { MyCalendarTwo };
