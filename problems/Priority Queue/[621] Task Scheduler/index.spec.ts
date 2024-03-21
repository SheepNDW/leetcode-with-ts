import { describe, expect, it } from 'vitest';
import { leastInterval } from '.';

describe.skip('leastInterval', () => {
  it('should return 8 for tasks = ["A","A","A","B","B","B"], n = 2', () => {
    const tasks = ['A', 'A', 'A', 'B', 'B', 'B'];
    const n = 2;

    const result = leastInterval(tasks, n);

    expect(result).toBe(8);
  });

  it('should return 6 for tasks = ["A","C","A","B","D","B"], n = 1', () => {
    const tasks = ['A', 'C', 'A', 'B', 'D', 'B'];
    const n = 1;

    const result = leastInterval(tasks, n);

    expect(result).toBe(6);
  });

  it('should return 10 for tasks = ["A","A","A","B","B","B"], n = 3', () => {
    const tasks = ['A', 'A', 'A', 'B', 'B', 'B'];
    const n = 3;

    const result = leastInterval(tasks, n);

    expect(result).toBe(10);
  });
});
