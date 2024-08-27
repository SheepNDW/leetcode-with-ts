class _Node {
  val: number;
  children: _Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

/*
  recursive solution
*/
function postorder0(root: _Node | null): number[] {
  const result: number[] = [];

  const helper = (curNode: _Node | null) => {
    if (!curNode) return;

    for (const c of curNode.children) {
      helper(c);
    }

    result.push(curNode.val);
  };

  helper(root);
  return result;
}

/*
  iteratively
*/
function postorder(root: _Node | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const stack: [_Node, boolean][] = [[root, false]];

  while (stack.length) {
    const [node, visited] = stack.pop()!;

    if (visited) {
      result.push(node.val);
    } else {
      stack.push([node, true]);

      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push([node.children[i], false]);
      }
    }
  }

  return result;
}

export { _Node, postorder };
