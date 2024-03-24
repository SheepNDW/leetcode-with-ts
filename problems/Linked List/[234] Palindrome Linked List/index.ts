import { ListNode } from '../../utils/list';

/*
  array: TC: O(n), SC: O(n)
*/
function isPalindrome0(head: ListNode | null): boolean {
  const values: number[] = [];
  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }

  let i = 0;
  let j = values.length - 1;
  while (i < j) {
    if (values[i] !== values[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

/*
  two pointer
*/
function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next?.next) {
    fast = fast.next.next;
    slow = slow.next!;
  }

  let prev: ListNode | null = null;
  let current = slow.next;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let firstHalf = head;
  let secondHalf = prev;
  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next!;
    secondHalf = secondHalf.next;
  }

  return true;
}

export { isPalindrome };
