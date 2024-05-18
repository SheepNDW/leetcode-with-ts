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

function treeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return [];

  const queue: (TreeNode | null)[] = [root];
  const result: (number | null)[] = [];

  while (queue.length) {
    const current = queue.shift()!;
    if (current === null) {
      result.push(null);
    } else {
      result.push(current.val);
      // 只有當節點存在時才將其子節點加入 queue
      queue.push(current.left);
      queue.push(current.right);
    }
  }

  // 移除結尾的多餘 null
  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}

export { TreeNode, Tree, treeToArray };
