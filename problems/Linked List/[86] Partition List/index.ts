import { ListNode, createList } from '../../utils/list';

function partition(head: ListNode | null, x: number): ListNode | null {
  let left = new ListNode();
  let right = new ListNode();
  let leftCurr = left;
  let rightCurr = right;

  let current = head;
  while (current !== null) {
    if (current.val < x) {
      leftCurr.next = current;
      leftCurr = leftCurr.next;
    } else {
      rightCurr.next = current;
      rightCurr = rightCurr.next;
    }
    current = current.next;
  }

  leftCurr.next = right.next;
  rightCurr.next = null;
  return left.next;
}

// function partition(head: ListNode | null, x: number): ListNode | null {
//   const appendNode = (list: ListNode | null, current: ListNode | null, node: ListNode) => {
//     if (list === null) {
//       list = node;
//       current = list;
//     } else {
//       current!.next = node;
//       current = current!.next;
//     }
//     return { list, current };
//   };
//   let left: ListNode | null = null;
//   let leftCurr: ListNode | null = null;
//   let right: ListNode | null = null;
//   let rightCurr: ListNode | null = null;
//   let current: ListNode | null = head;

//   while (current !== null) {
//     const nextNode = current.next; // 儲存下一個節點的引用
//     current.next = null; // 中斷原始鏈接

//     if (current.val >= x) {
//       ({ list: right, current: rightCurr } = appendNode(right, rightCurr, current));
//     } else {
//       ({ list: left, current: leftCurr } = appendNode(left, leftCurr, current));
//     }

//     current = nextNode; // 繼續遍歷原始串列
//   }

//   if (leftCurr) {
//     leftCurr.next = right;
//     return left;
//   }

//   return right;
// }

// ==== Alternatives ====

function partition1(head: ListNode | null, x: number): ListNode | null {
  const left: number[] = [];
  const right: number[] = [];
  let current = head;

  while (current !== null) {
    if (current.val < x) {
      left.push(current.val);
    } else {
      right.push(current.val);
    }
    current = current.next;
  }

  const result = [...left, ...right];
  return createList(result);
}

export { partition };
