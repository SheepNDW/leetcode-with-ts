import { TreeNode } from '../../utils/tree';

function distributeCoins(root: TreeNode | null): number {
  let result = 0;

  const dfs = (node: TreeNode | null): [number, number] => {
    if (!node) return [0, 0]; // [size, coins]

    const [lSize, lCoins] = dfs(node.left);
    const [rSize, rCoins] = dfs(node.right);

    const size = 1 + lSize + rSize;
    const coins = node.val + lCoins + rCoins;
    result += Math.abs(size - coins);

    return [size, coins];
  };

  dfs(root);
  return result;
}

export { distributeCoins };
