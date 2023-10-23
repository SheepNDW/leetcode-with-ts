class NestedInteger {
  private value: number | null;
  private list: NestedInteger[];

  constructor(value?: number) {
    this.value = value !== undefined ? value : null;
    this.list = [];
  }

  isInteger(): boolean {
    return this.value !== null;
  }

  getInteger(): number | null {
    return this.value;
  }

  setInteger(value: number) {
    this.value = value;
  }

  add(elem: NestedInteger) {
    this.list.push(elem);
  }

  getList(): NestedInteger[] {
    return this.list;
  }
}

class NestedIterator {
  stack: NestedInteger[];

  constructor(nestedList: NestedInteger[]) {
    this.stack = nestedList.reverse();
  }

  hasNext(): boolean {
    while (this.stack.length > 0) {
      const top = this.stack[this.stack.length - 1];
      if (top.isInteger()) {
        return true;
      }
      this.stack.pop();
      for (const el of top.getList().reverse()) {
        this.stack.push(el);
      }
    }
    return false;
  }

  next(): number {
    const top = this.stack.pop() as NestedInteger;
    return top.getInteger()!;
  }
}

export { NestedInteger, NestedIterator };

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
