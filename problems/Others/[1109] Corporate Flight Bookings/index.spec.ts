import { describe, expect, it } from 'vitest';
import { corpFlightBookings } from '.';

describe.skip('corpFlightBookings', () => {
  it('should return [10,55,45,25,25] for bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5', () => {
    const bookings = [
      [1, 2, 10],
      [2, 3, 20],
      [2, 5, 25],
    ];
    const n = 5;

    const result = corpFlightBookings(bookings, n);

    expect(result).toEqual([10, 55, 45, 25, 25]);
  });

  it('should return [10,25] for bookings = [[1,2,10],[2,2,15]], n = 2', () => {
    const bookings = [
      [1, 2, 10],
      [2, 2, 15],
    ];
    const n = 2;

    const result = corpFlightBookings(bookings, n);

    expect(result).toEqual([10, 25]);
  });
});
