import { describe, expect, it } from 'vitest';
import { MyStack } from '.';

describe('MyStack', () => {
  // 測試 push 和 top 方法
  it('should push element and get the top element', () => {
    const stack = new MyStack();

    stack.push(1);
    stack.push(2);

    expect(stack.top()).toBe(2);
  });

  // 測試 pop 方法
  it('should pop the top element', () => {
    const stack = new MyStack();
    stack.push(1);
    stack.push(2);

    const poppedElement = stack.pop();

    expect(poppedElement).toBe(2);
  });

  // 測試 empty 方法
  it('should return whether the stack is empty or not', () => {
    const stack = new MyStack();

    expect(stack.empty()).toBe(true);

    stack.push(1);

    expect(stack.empty()).toBe(false);
  });

  // 綜合測試：push, pop, top 和 empty 方法
  it('should perform multiple operations correctly', () => {
    const stack = new MyStack();

    expect(stack.empty()).toBe(true);

    stack.push(1);
    stack.push(2);

    expect(stack.top()).toBe(2);
    expect(stack.empty()).toBe(false);

    const poppedElement = stack.pop();

    expect(poppedElement).toBe(2);
    expect(stack.top()).toBe(1);
  });
});
