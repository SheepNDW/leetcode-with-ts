class Queue<T> {
  #items: Record<number, T> = {};
  #headCount = 0;
  #count = 0;

  enqueue(data: T) {
    this.#items[this.#count] = data;
    this.#count++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const head = this.#items[this.#headCount];
    delete this.#items[this.#headCount];
    this.#headCount++;
    return head;
  }

  front() {
    return this.#items[this.#headCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#count - this.#headCount;
  }
}

export { Queue };
