import { TreeNode } from '../../utils/tree';

// hash map
function findMode0(root: TreeNode | null): number[] {
  const hash: Record<string, number> = {};

  const dfs = (node: TreeNode | null) => {
    if (!node) return;
    const val = node.val;

    if (hash[val] !== undefined) {
      hash[val]++;
    } else {
      hash[val] = 1;
    }

    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  const maxFrequency = Math.max(...Object.values(hash));

  const modes: number[] = [];
  for (const key in hash) {
    if (hash[key] === maxFrequency) {
      modes.push(+key);
    }
  }

  return modes;
}

// no hash map
function findMode1(root: TreeNode | null): number[] {
  const inorderTraverse = (node: TreeNode | null, values: number[]) => {
    if (!node) return;

    inorderTraverse(node.left, values);
    values.push(node.val);
    inorderTraverse(node.right, values);
  };

  const sortedValues: number[] = [];
  inorderTraverse(root, sortedValues);

  let modes: number[] = [];
  let maxStreak = 0;
  let currStreak = 0;
  let currNum = 0;

  for (const num of sortedValues) {
    if (num === currNum) {
      currStreak++;
    } else {
      currStreak = 1;
      currNum = num;
    }

    if (currStreak > maxStreak) {
      modes = [];
      maxStreak = currStreak;
    }

    if (currStreak === maxStreak) {
      modes.push(num);
    }
  }

  return modes;
}

// Follow up: no extra space
function findMode(root: TreeNode | null): number[] {
  let maxStreak = 0;
  let currStreak = 0;
  let currNum: number | null = null;
  let modes: number[] = [];

  const inorder = (node: TreeNode | null) => {
    if (!node) return;

    inorder(node.left);

    if (currNum !== node.val) {
      currStreak = 0;
      currNum = node.val;
    }

    currStreak++;

    if (currStreak > maxStreak) {
      modes = [currNum];
      maxStreak = currStreak;
    } else if (currStreak === maxStreak) {
      modes.push(currNum);
    }

    inorder(node.right);
  };

  inorder(root);
  return modes;
}

export { findMode };
