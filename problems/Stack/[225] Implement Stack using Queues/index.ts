import { Queue } from '../../utils/queue';

// array 模擬 queue
class MyStack0 {
  private queue: number[];

  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
    const n = this.queue.length;
    for (let i = 0; i < n - 1; i++) {
      const popEl = this.queue.shift()!;
      this.queue.push(popEl);
    }
  }

  pop(): number | undefined {
    return this.queue.shift();
  }

  top(): number | undefined {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

// Queue
class MyStack {
  private queue = new Queue<number>();

  push(x: number): void {
    this.queue.enqueue(x);
    const n = this.queue.size();
    for (let i = 0; i < n - 1; i++) {
      this.queue.enqueue(this.queue.dequeue()!);
    }
  }

  pop(): number | undefined {
    return this.queue.dequeue();
  }

  top(): number | undefined {
    return this.queue.front();
  }

  empty(): boolean {
    return this.queue.isEmpty();
  }
}

export { MyStack };
