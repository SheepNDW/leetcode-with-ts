import { describe, expect, it } from 'vitest';
import { MyCalendar } from '.';

describe.skip('MyCalendar', () => {
  it('should work', () => {
    const myCalendar = new MyCalendar();

    expect(myCalendar.book(10, 20)).toBe(true);
    expect(myCalendar.book(15, 25)).toBe(false);
    expect(myCalendar.book(20, 30)).toBe(true);
  });
});
