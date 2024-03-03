import { ListNode } from '../../utils/list';

/*
  two pass
*/
function removeNthFromEnd0(head: ListNode | null, n: number): ListNode | null {
  let sz = 0;
  let current = head;

  // 第一次遍歷，計算列表長度
  while (current) {
    sz++;
    current = current.next;
  }

  // 特殊情況：如果要移除的是頭節點
  if (sz - n === 0) return head!.next;

  // 第二次遍歷，找到目標節點的前一個節點
  current = head;
  for (let i = 1; i < sz - n; i++) {
    current = current?.next || null;
  }

  // 移除目標節點
  current!.next = current?.next?.next || null;

  return head;
}

/*
  one pass: two pointer
*/
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 添加一個假頭節點，這樣就可以統一處理要移除的節點是真正的頭節點的情況
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast: ListNode | null = dummy;
  let slow = dummy;

  // 移動 fast 指標 n+1 步，為什麼是 n+1 步呢？因為我們需要 slow 指向要刪除節點的前一個節點
  for (let i = 0; i <= n; i++) {
    fast = fast?.next ?? null;
  }

  // 同時移動 fast 和 slow，直到 fast 指向列表的末尾
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next!;
  }

  // 移除 slow 的下一個節點（即從末尾倒數第 n 個節點）
  slow.next = slow?.next?.next || null;

  // 返回假頭節點的下一個節點，即真正的頭節點
  return dummy.next;
}

export { removeNthFromEnd };
