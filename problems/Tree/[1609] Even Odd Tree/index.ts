import { TreeNode } from '../../utils/tree';

/*
  DFS: 直接橫向 build 出每一層, 再檢查每一層是否符合
*/
function isEvenOddTree0(root: TreeNode | null): boolean {
  const helper = (res: number[][], root: TreeNode | null, depth: number) => {
    if (root === null) return;
    if (!res[depth]) res.push([]);

    res[depth].push(root.val);
    helper(res, root.left, depth + 1);
    helper(res, root.right, depth + 1);
  };

  const levelOrder: number[][] = [];
  helper(levelOrder, root, 0);

  for (let i = 0; i < levelOrder.length; i++) {
    const level = levelOrder[i];

    if (i % 2 === 0) {
      if (level[0] % 2 === 0) return false;
      for (let j = 1; j < level.length; j++) {
        if (level[j] % 2 === 0 || level[j] <= level[j - 1]) {
          return false;
        }
      }
    } else {
      if (level[0] % 2 !== 0) return false;
      for (let j = 1; j < level.length; j++) {
        if (level[j] % 2 !== 0 || level[j] >= level[j - 1]) {
          return false;
        }
      }
    }
  }

  return true;
}

/*
  BFS: 用一個 queue 和一個 level 變數來按照層的順序去遍歷檢查
*/
function isEvenOddTree(root: TreeNode | null): boolean {
  if (!root) return false;
  const queue: TreeNode[] = [root];
  let level = 0;

  while (queue.length > 0) {
    const levelSize = queue.length;
    let prev = level % 2 === 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= levelSize; i++) {
      const node = queue.shift()!;

      if (level % 2 === 0 && (node.val % 2 === 0 || node.val <= prev)) {
        return false;
      }

      if (level % 2 !== 0 && (node.val % 2 !== 0 || node.val >= prev)) {
        return false;
      }

      prev = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    level++;
  }

  return true;
}

export { isEvenOddTree };
