import { TreeNode } from '../../utils/tree';

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  const countDepthAndUpdateDiameter = (node: TreeNode | null): number => {
    if (!node) return 0;
    const leftDepth = countDepthAndUpdateDiameter(node.left);
    const rightDepth = countDepthAndUpdateDiameter(node.right);

    // 更新最大直徑
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

    // 回傳節點的最大深度
    return 1 + Math.max(leftDepth, rightDepth);
  };

  countDepthAndUpdateDiameter(root);
  return maxDiameter;
}

export { diameterOfBinaryTree };
