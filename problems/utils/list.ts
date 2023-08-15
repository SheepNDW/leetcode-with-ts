class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function createList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let current: ListNode | null = null;

  values.forEach((val) => {
    if (current) {
      current.next = new ListNode(val);
      current = current.next;
    } else {
      head = new ListNode(val);
      current = head;
    }
  });

  return head;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

function compareLists(list1: ListNode | null, list2: ListNode | null): boolean {
  while (list1 && list2) {
    if (list1.val !== list2.val) return false;
    list1 = list1.next;
    list2 = list2.next;
  }

  return list1 === null && list2 === null;
}

export { ListNode, createList, listToArray, compareLists };
