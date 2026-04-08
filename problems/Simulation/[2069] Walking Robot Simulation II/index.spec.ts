import { describe, expect, it } from 'vitest';
import { Robot } from '.';

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */

describe('Robot', () => {
  it('example 1', () => {
    const robot = new Robot(6, 3);
    robot.step(2);
    robot.step(2);
    expect(robot.getPos()).toEqual([4, 0]);
    expect(robot.getDir()).toEqual('East');
    robot.step(2);
    robot.step(1);
    robot.step(4);
    expect(robot.getPos()).toEqual([1, 2]);
    expect(robot.getDir()).toEqual('West');
  });
});
