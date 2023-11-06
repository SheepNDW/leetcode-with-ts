import { describe, expect, it } from 'vitest';
import { SeatManager } from '.';

describe.skip('SeatManager', () => {
  it('should reserve the smallest number seat correctly', () => {
    const seatManager = new SeatManager(5);

    const firstReservedSeat = seatManager.reserve();
    const secondReservedSeat = seatManager.reserve();

    expect(firstReservedSeat).toBe(1);
    expect(secondReservedSeat).toBe(2);
  });

  it('should make the seat available again after unreserve', () => {
    const seatManager = new SeatManager(5);
    seatManager.reserve(); // Seat 1 reserved
    seatManager.reserve(); // Seat 2 reserved

    seatManager.unreserve(2); // Seat 2 unreserved
    const nextAvailableSeat = seatManager.reserve(); // Should be seat 2 again

    expect(nextAvailableSeat).toBe(2);
  });

  it('reserve & unreserve', () => {
    const seatManager = new SeatManager(3);

    seatManager.reserve();
    seatManager.reserve();

    seatManager.unreserve(1);
    seatManager.unreserve(2);

    const firstReservedSeat = seatManager.reserve();
    expect(firstReservedSeat).toBe(1);

    seatManager.unreserve(1);
    expect(seatManager.reserve()).toBe(1);
    expect(seatManager.reserve()).toBe(2);
    expect(seatManager.reserve()).toBe(3);
  });
});
