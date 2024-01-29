/*
  準備兩個 stack - inStack, outStack

  outStack 用於將元素反向，讓我們可以用 stack.pop() 的方式實作 dequeue

  push: 直接將元素推入 inStack
  pop & peek: outStack 已經將元素反向，所以 queue 的頭就會是 outStack 的頂部，直接對頂部元素作操作即可
              但如果 outStack 為空，我們需要先將 inStack 的元素倒進去
  empty: 當兩個 stack 都沒有元素時表示目前 queue 為空
*/

class MyQueue {
  private inStack: number[];
  private outStack: number[];

  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
    return this.outStack.pop()!;
  }

  peek(): number {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}

export { MyQueue };
