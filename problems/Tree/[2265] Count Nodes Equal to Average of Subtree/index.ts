import { TreeNode } from '../../utils/tree';

function averageOfSubtree(root: TreeNode | null) {
  let ans = 0;

  const traverse = (node: TreeNode | null): [number, number] => {
    if (!node) return [0, 0]; // 如果節點為 null，回傳 [0, 0]（表示子樹的和和節點數量都是0）

    const [leftSum, leftCount] = traverse(node.left);
    const [rightSum, rightCount] = traverse(node.right);

    const total = node.val + leftSum + rightSum;
    const count = 1 + leftCount + rightCount;

    const average = ~~(total / count);

    if (node.val === average) ans++;

    return [total, count];
  };

  traverse(root);
  return ans;
}

export { averageOfSubtree };
