import { TreeNode } from '../../utils/tree';

/*
  BFS
*/
function reverseOddLevels0(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const queue = [root];
  let level = 0;

  while (queue.length) {
    if (level & 1) {
      let l = 0;
      let r = queue.length - 1;

      while (l < r) {
        const temp = queue[l].val;
        queue[l].val = queue[r].val;
        queue[r].val = temp;
        l++;
        r--;
      }
    }

    let len = queue.length;

    while (len--) {
      const node = queue.shift()!;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    level += 1;
  }

  return root;
}

/*
  DFS
*/
function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  dfs(root.left, root.right, 1);

  return root;
}

function dfs(leftChild: TreeNode | null, rightChild: TreeNode | null, level: number) {
  if (!leftChild || !rightChild) return;

  if (level & 1) {
    const temp = leftChild.val;
    leftChild.val = rightChild.val;
    rightChild.val = temp;
  }

  dfs(leftChild.left, rightChild.right, level + 1);
  dfs(leftChild.right, rightChild.left, level + 1);
}

export { reverseOddLevels };
