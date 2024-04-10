import { describe, expect, it } from 'vitest';
import { timeRequiredToBuy } from '.';

describe.skip('timeRequiredToBuy', () => {
  it('should return 6 for tickets = [2,3,2], k = 2', () => {
    const tickets = [2, 3, 2];
    const k = 2;

    const result = timeRequiredToBuy(tickets, k);

    expect(result).toBe(6);
  });

  it('should return 8 for tickets = [5,1,1,1], k = 0', () => {
    const tickets = [5, 1, 1, 1];
    const k = 0;

    const result = timeRequiredToBuy(tickets, k);

    expect(result).toBe(8);
  });

  it('should return 154 for tickets = [84,49,5,24,70,77,87,8], k = 3', () => {
    const tickets = [84, 49, 5, 24, 70, 77, 87, 8];
    const k = 3;

    const result = timeRequiredToBuy(tickets, k);

    expect(result).toBe(154);
  });
});
