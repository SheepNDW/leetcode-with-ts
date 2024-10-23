import { TreeNode } from '../../utils/tree';

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const levelSum: number[] = [];
  const queue = [root];

  while (queue.length > 0) {
    let curSum = 0;
    let n = queue.length;

    while (n--) {
      const node = queue.shift()!;
      curSum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    levelSum.push(curSum);
  }

  const q = [root];
  root.val = 0;
  let level = 0;

  while (q.length > 0) {
    let n = q.length;

    while (n--) {
      const node = q.shift()!;
      let childSum = 0;

      if (node.left) childSum += node.left.val;
      if (node.right) childSum += node.right.val;

      if (node.left) {
        node.left.val = levelSum[level + 1] - childSum;
        q.push(node.left);
      }

      if (node.right) {
        node.right.val = levelSum[level + 1] - childSum;
        q.push(node.right);
      }
    }

    level += 1;
  }

  return root;
}

export { replaceValueInTree };
