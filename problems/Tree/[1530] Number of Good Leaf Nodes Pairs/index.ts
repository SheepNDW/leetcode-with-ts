import { TreeNode } from '../../utils/tree';

/*
  brute force:

  1. collect all leaf nodes
  2. enumerate all pairs - check the distance between two nodes
*/
function countPairs0(root: TreeNode | null, distance: number): number {
  const parents = new Map<TreeNode, TreeNode | null>();
  const leaves: TreeNode[] = [];

  function dfs(node: TreeNode | null, parent: TreeNode | null) {
    if (!node) return;
    parents.set(node, parent);

    dfs(node.left, node);
    dfs(node.right, node);

    if (!node.left && !node.right) {
      leaves.push(node);
    }
  }

  dfs(root, null);

  let pairs = 0;
  const a = new Map<TreeNode, number>();

  for (let i = 0; i < leaves.length; i++) {
    a.clear();
    let n1 = leaves[i];
    let d = 0;
    while (d <= distance && n1) {
      a.set(n1, d);
      d++;
      n1 = parents.get(n1)!;
    }

    for (let j = i + 1; j < leaves.length; j++) {
      pairs += isGood(leaves[j]);
    }
  }

  function isGood(node: TreeNode): number {
    let d = 0;
    let n = node;

    while (d <= distance && n) {
      if (a.has(n) && a.get(n)! + d <= distance) {
        return 1;
      }
      d++;
      n = parents.get(n)!;
    }

    return 0;
  }

  return pairs;
}

/*
  post-order
*/
function countPairs(root: TreeNode | null, distance: number): number {
  let pairs = 0;

  function dfs(node: TreeNode | null): number[] {
    if (!node) return [];
    if (!node.left && !node.right) return [1];

    const lD = dfs(node.left);
    const rD = dfs(node.right);

    for (const left of lD) {
      for (const right of rD) {
        if (left + right <= distance) {
          pairs++;
        }
      }
    }

    const newDistance: number[] = [];
    for (const dist of lD.concat(rD)) {
      if (dist + 1 < distance) {
        newDistance.push(dist + 1);
      }
    }

    return newDistance;
  }

  dfs(root);
  return pairs;
}

export { countPairs };
