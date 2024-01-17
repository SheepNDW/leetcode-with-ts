import { describe, expect, it, beforeEach } from 'vitest';
import { RandomizedSet } from '.';

describe.skip('RandomizedSet', () => {
  let randomizedSet: RandomizedSet;

  beforeEach(() => {
    randomizedSet = new RandomizedSet();
  });

  it('should insert elements correctly', () => {
    expect(randomizedSet.insert(1)).toBe(true); // Inserts 1 to the set.
    expect(randomizedSet.insert(2)).toBe(true); // Inserts 2 to the set.
    expect(randomizedSet.insert(1)).toBe(false); // 1 is already in the set, should return false.
  });

  it('should remove elements correctly', () => {
    randomizedSet.insert(1);
    expect(randomizedSet.remove(2)).toBe(false); // 2 is not in the set, should return false.
    expect(randomizedSet.remove(1)).toBe(true); // Removes 1 from the set.
    expect(randomizedSet.remove(1)).toBe(false); // 1 is already removed, should return false.
  });

  it('should return a random element', () => {
    randomizedSet.insert(1);
    randomizedSet.insert(2);
    let randomElement = randomizedSet.getRandom();
    expect([1, 2]).toContain(randomElement); // getRandom should return either 1 or 2.

    randomizedSet.remove(1);
    randomElement = randomizedSet.getRandom();
    expect(randomElement).toBe(2);
  });
});
