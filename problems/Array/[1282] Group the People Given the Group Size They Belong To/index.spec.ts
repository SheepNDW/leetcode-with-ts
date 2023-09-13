import { describe, expect, it } from 'vitest';
import { groupThePeople } from '.';

describe('groupThePeople', () => {
  it('should return valid groups for the first example', () => {
    const input1 = [3, 3, 3, 3, 3, 1, 3];
    validateGroups(input1, groupThePeople(input1));
  });

  it('should return valid groups for the second example', () => {
    const input2 = [2, 1, 3, 3, 3, 2];
    validateGroups(input2, groupThePeople(input2));
  });
});

function validateGroups(input: number[], output: number[][]) {
  const sizes = new Map<number, number>();

  // Initialize sizes map
  input.forEach((size) => {
    sizes.set(size, (sizes.get(size) || 0) + 1);
  });

  // Validate each group
  output.forEach((group) => {
    expect(group.length).toBeGreaterThan(0);
    const size = group.length;
    expect(sizes.has(size)).toBe(true);
    sizes.set(size, (sizes.get(size) || 0) - size);
  });

  // All sizes should be accounted for
  expect(Array.from(sizes.values()).every((val) => val === 0)).toBe(true);
}
