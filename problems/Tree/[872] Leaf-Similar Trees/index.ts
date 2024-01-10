import type { TreeNode } from '../../utils/tree';

function leafSimilar0(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null, leafs: number[]) => {
    if (node === null) return;

    if (node.left === null && node.right === null) {
      leafs.push(node.val);
    } else {
      dfs(node.left, leafs);
      dfs(node.right, leafs);
    }
  };

  const leafsub1: number[] = [];
  const leafsub2: number[] = [];
  dfs(root1, leafsub1);
  dfs(root2, leafsub2);

  if (leafsub1.length !== leafsub2.length) return false;

  for (let i = 0; i < leafsub1.length; i++) {
    if (leafsub1[i] !== leafsub2[i]) return false;
  }

  return true;
}

// ==== alternatives ====

// 使用 generator function 即時比較葉子節點值
function* getLeafValues(node: TreeNode | null): Generator<number> {
  if (node === null) return;
  if (node.left === null && node.right === null) {
    yield node.val;
  } else {
    yield* getLeafValues(node.left);
    yield* getLeafValues(node.right);
  }
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leafValues1 = getLeafValues(root1);
  const leafValues2 = getLeafValues(root2);

  let next1 = leafValues1.next();
  let next2 = leafValues2.next();

  while (!next1.done && !next2.done) {
    if (next1.value !== next2.value) return false;
    next1 = leafValues1.next();
    next2 = leafValues2.next();
  }

  return next1.done === true && next2.done === true;
}

export { leafSimilar };
