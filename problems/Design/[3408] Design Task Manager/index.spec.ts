import { describe, expect, it } from 'vitest';
import { TaskManager } from '.';

describe('TaskManager', () => {
  it('example 1', () => {
    const taskManager = new TaskManager([
      [1, 101, 10],
      [2, 102, 20],
      [3, 103, 15],
    ]);
    taskManager.add(4, 104, 5);
    taskManager.edit(102, 8);
    expect(taskManager.execTop()).toEqual(3);
    taskManager.rmv(101);
    taskManager.add(5, 105, 15);
    expect(taskManager.execTop()).toEqual(5);
  });
});
