import { describe, expect, it } from 'vitest';
import { robotSim } from '.';

describe.skip('robotSim', () => {
  it('should return 25 for commands = [4, -1, 3], obstacles = []', () => {
    const commands = [4, -1, 3];
    const obstacles: number[][] = [];

    const result = robotSim(commands, obstacles);

    expect(result).toBe(25);
  });

  it('should return 65 for commands = [4, -1, 4, -2, 4], obstacles = [[2, 4]]', () => {
    const commands = [4, -1, 4, -2, 4];
    const obstacles = [[2, 4]];

    const result = robotSim(commands, obstacles);

    expect(result).toBe(65);
  });

  it('should return 36 for commands = [6, -1, -1, 6], obstacles = []', () => {
    const commands = [6, -1, -1, 6];
    const obstacles: number[][] = [];

    const result = robotSim(commands, obstacles);

    expect(result).toBe(36);
  });

  it('should return 324 for commands = [-2,8,3,7,-1], obstacles = [[-4,-1],[1,-1],[1,4],[5,0],[4,5],[-2,-1],[2,-5],[5,1],[-3,-1],[5,-3]]', () => {
    const commands = [-2, 8, 3, 7, -1];
    const obstacles = [
      [-4, -1],
      [1, -1],
      [1, 4],
      [5, 0],
      [4, 5],
      [-2, -1],
      [2, -5],
      [5, 1],
      [-3, -1],
      [5, -3],
    ];

    const result = robotSim(commands, obstacles);

    expect(result).toBe(324);
  });
});
