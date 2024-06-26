class MinHeap<T> {
  private heap: T[] = [];

  push(el: T): void {
    const array = this.heap;
    array.push(el);
    let child = array.length - 1;
    let parent = (child - 1) >> 1;

    while (array[child] < array[parent]) {
      this.swap(array, child, parent);
      child = parent;
      parent = (child - 1) >> 1;
    }
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const array = this.heap;
    const target = array[0];
    this.swap(array, 0, array.length - 1);
    array.pop();

    let parent = 0;

    while (true) {
      let child = parent * 2 + 1; // left child
      if (child >= array.length) break; // if left child is out of bounds, break

      let rightChild = child + 1;
      if (rightChild < array.length && array[rightChild] < array[child]) {
        child = rightChild; // use the right child if it is smaller
      }

      if (array[parent] <= array[child]) break; // if the heap property is not violated, break

      this.swap(array, parent, child);
      parent = child;
    }

    return target;
  }

  swap(arr: T[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  top() {
    return this.heap[0];
  }
}

export { MinHeap };
