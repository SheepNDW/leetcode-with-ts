import { describe, expect, it } from 'vitest';
import { asteroidCollision } from '.';

describe('asteroidCollision', () => {
  it('returns the state of asteroids after collisions: case 1', () => {
    const asteroids = [5, 10, -5];

    const result = asteroidCollision(asteroids);

    expect(result).toEqual([5, 10]);
  });

  it('returns the state of asteroids after collisions: case 2', () => {
    const asteroids = [8, -8];

    const result = asteroidCollision(asteroids);

    expect(result).toEqual([]);
  });

  it('returns the state of asteroids after collisions: case 3', () => {
    const asteroids = [10, 2, -5];

    const result = asteroidCollision(asteroids);

    expect(result).toEqual([10]);
  });

  it('should handle multiple asteroids moving to the right with one asteroid moving to the left in between', () => {
    const asteroids = [5, 10, -10, 15, 20];

    const result = asteroidCollision(asteroids);

    expect(result).toEqual([5, 15, 20]);
  });
});
