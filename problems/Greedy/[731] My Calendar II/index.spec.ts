import { describe, expect, it } from 'vitest';
import { MyCalendarTwo } from '.';

describe.skip('MyCalendarTwo', () => {
  it('should work', () => {
    const myCalendarTwo = new MyCalendarTwo();

    expect(myCalendarTwo.book(10, 20)).toBe(true);
    expect(myCalendarTwo.book(50, 60)).toBe(true);
    expect(myCalendarTwo.book(10, 40)).toBe(true);
    expect(myCalendarTwo.book(5, 15)).toBe(false);
    expect(myCalendarTwo.book(5, 10)).toBe(true);
    expect(myCalendarTwo.book(25, 55)).toBe(true);
  });
});