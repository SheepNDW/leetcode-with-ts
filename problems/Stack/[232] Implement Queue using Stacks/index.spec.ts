import { describe, expect, it } from 'vitest';
import { MyQueue } from '.';

describe.skip('MyQueue', () => {
  it('should perform push, pop, peek, and empty operations correctly', () => {
    const queue = new MyQueue();

    queue.push(1);
    queue.push(2);

    expect(queue.peek()).toBe(1); // 查看佇列前端元素
    expect(queue.pop()).toBe(1); // 移除佇列前端元素並返回它
    expect(queue.empty()).toBe(false); // 佇列不應該為空

    expect(queue.pop()).toBe(2); // 繼續移除並返回佇列前端元素
    expect(queue.empty()).toBe(true); // 佇列應該為空
  });
});
