import { TreeNode } from '../../utils/tree';

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
  const nums1: number[] = [];
  const nums2: number[] = [];
  const dirs1: string[] = [];
  const dirs2: string[] = [];

  dfs(root, nums1, dirs1, startValue);
  dfs(root, nums2, dirs2, destValue);

  // 找 LCA
  let k = 0;
  while (k < nums1.length && k < nums2.length && nums1[k] === nums2[k]) {
    k++;
  }
  for (let i = k; i < dirs1.length; i++) {
    dirs1[i] = 'U';
  }

  return dirs1.slice(k).join('') + dirs2.slice(k).join('');
}

function dfs(node: TreeNode | null, nums: number[], dirs: string[], target: number): boolean {
  if (!node) return false;
  if (node.val === target) return true;

  if (node.left) {
    nums.push(node.left.val);
    dirs.push('L');
    if (dfs(node.left, nums, dirs, target)) {
      return true;
    }
    nums.pop();
    dirs.pop();
  }
  if (node.right) {
    nums.push(node.right.val);
    dirs.push('R');
    if (dfs(node.right, nums, dirs, target)) {
      return true;
    }
    nums.pop();
    dirs.pop();
  }

  return false;
}

export { getDirections };
