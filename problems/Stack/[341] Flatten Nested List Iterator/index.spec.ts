import { describe, expect, it } from 'vitest';
import { NestedIterator, NestedInteger } from '.';

describe('NestedIterator', () => {
  it('should flatten the nested list', () => {
    const item1_1 = new NestedInteger(1);
    const item1_2 = new NestedInteger(1);
    const list1 = new NestedInteger();
    list1.add(item1_1);
    list1.add(item1_2);

    const item2 = new NestedInteger(2);

    const item3_1 = new NestedInteger(1);
    const item3_2 = new NestedInteger(1);
    const list3 = new NestedInteger();
    list3.add(item3_1);
    list3.add(item3_2);

    const nestedList = [list1, item2, list3];
    const iterator = new NestedIterator(nestedList);
    const result: number[] = [];

    while (iterator.hasNext()) {
      result.push(iterator.next());
    }

    expect(result).toEqual([1, 1, 2, 1, 1]);
  });

  it('should handle empty list', () => {
    const nestedList: NestedInteger[] = [];
    const iterator = new NestedIterator(nestedList);
    const result: number[] = [];
    while (iterator.hasNext()) {
      result.push(iterator.next());
    }
    expect(result).toEqual([]);
  });

  it('should handle single integers', () => {
    const item1 = new NestedInteger(1);
    const item2 = new NestedInteger(2);
    const nestedList = [item1, item2];
    const iterator = new NestedIterator(nestedList);
    const result: number[] = [];
    while (iterator.hasNext()) {
      result.push(iterator.next());
    }
    expect(result).toEqual([1, 2]);
  });

  it('should handle multi-level nested lists', () => {
    const item1 = new NestedInteger(1);
    const item2 = new NestedInteger(2);
    const item3 = new NestedInteger(3);
    const item4 = new NestedInteger(4);

    const list2 = new NestedInteger();
    list2.add(item2);

    const list3 = new NestedInteger();
    list3.add(item3);
    list3.add(list2);

    const nestedList = [item1, list3, item4];
    const iterator = new NestedIterator(nestedList);
    const result: number[] = [];
    while (iterator.hasNext()) {
      result.push(iterator.next());
    }
    expect(result).toEqual([1, 3, 2, 4]);
  });

  it('should handle lists with empty lists', () => {
    const item1 = new NestedInteger(1);
    const item2 = new NestedInteger(2);
    const emptyList = new NestedInteger();
    const nestedList = [item1, emptyList, item2];
    const iterator = new NestedIterator(nestedList);
    const result: number[] = [];
    while (iterator.hasNext()) {
      result.push(iterator.next());
    }
    expect(result).toEqual([1, 2]);
  });
});
