import { ListNode } from '../../utils/list';

function mergeNodes0(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0);
  let curNode = dummy;
  dummy.next = curNode;

  let sum = 0;
  let cur = head?.next;
  while (cur) {
    if (cur.val === 0) {
      curNode.next = new ListNode(sum);
      curNode = curNode.next;
      sum = 0;
    } else {
      sum += cur.val;
    }
    cur = cur.next;
  }

  return dummy.next;
}

/*
  in-place
*/
function mergeNodes(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }

  let modify = head.next;
  let nextSum: ListNode | null = modify;

  while (nextSum !== null) {
    let sum = 0;
    // 計算所有節點的和，直到遇到 0
    while (nextSum !== null && nextSum.val !== 0) {
      sum += nextSum.val;
      nextSum = nextSum.next;
    }

    // 將和賦值給目前節點
    modify.val = sum;
    // 將 nextSum 移動到下一個塊的第一個非零值
    if (nextSum !== null) {
      nextSum = nextSum.next;
    }
    // 將 modify 也移動到這個節點
    modify.next = nextSum!;
    modify = modify.next;
  }
  return head.next;
}

export { mergeNodes };
