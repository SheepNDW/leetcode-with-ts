import { TreeNode } from '../../utils/tree';

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 || !root2) return !root1 && !root2;
  if (root1.val !== root2.val) return false;

  const noFlip = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
  const flip = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

  return noFlip || flip;
}

export { flipEquiv };
