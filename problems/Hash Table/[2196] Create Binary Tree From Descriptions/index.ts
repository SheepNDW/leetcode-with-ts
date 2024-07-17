import { TreeNode } from '../../utils/tree';

function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const nodes = new Map<number, TreeNode>();
  const children = new Set<number>();

  for (const [parent, child, isLeft] of descriptions) {
    children.add(child);

    if (!nodes.has(parent)) {
      nodes.set(parent, new TreeNode(parent));
    }
    if (!nodes.has(child)) {
      nodes.set(child, new TreeNode(child));
    }

    if (isLeft) {
      nodes.get(parent)!.left = nodes.get(child)!;
    } else {
      nodes.get(parent)!.right = nodes.get(child)!;
    }
  }

  let root: TreeNode | null = null;

  for (const desc of descriptions) {
    if (!children.has(desc[0])) {
      root = nodes.get(desc[0])!;
      break;
    }
  }

  return root;
}

export { createBinaryTree };
