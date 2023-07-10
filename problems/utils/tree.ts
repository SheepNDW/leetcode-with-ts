class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  build(arr: (number | null)[]): Tree {
    if (!arr.length) return this;

    const rootValue = arr.shift()!;
    this.root = new TreeNode(rootValue);
    const nodeArr: TreeNode[] = [this.root];

    while (arr.length > 0) {
      const current = nodeArr.shift()!;
      if (current && current.val === null) continue;

      const leftValue = arr.shift()!;
      if (leftValue !== null) {
        const leftNode = new TreeNode(leftValue);
        current.left = leftNode;
        nodeArr.push(leftNode);
      }

      if (arr.length === 0) break;

      const rightValue = arr.shift()!;
      if (rightValue !== null) {
        const rightNode = new TreeNode(rightValue);
        current.right = rightNode;
        nodeArr.push(rightNode);
      }
    }

    return this;
  }
}

export { TreeNode, Tree };
