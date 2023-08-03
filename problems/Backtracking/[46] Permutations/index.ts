function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const candidate: number[] = [];
  const end = nums.length;
  const used: Record<number, number> = {};

  const backtrack = (start: number) => {
    if (start === end) {
      result.push([...candidate]);
    } else {
      for (let i = 0; i < end; i++) {
        if (!used[i]) {
          used[i] = 1;
          candidate.push(nums[i]);
          backtrack(start + 1);
          candidate.pop();
          used[i] = 0;
        }
      }
    }
  };

  backtrack(0);
  return result;
}

// ==== Alternatives ====

// Johnson-Trotter algorithm
function permute1(nums: number[]): number[][] {
  const n = nums.length;
  const result: number[][] = [];

  // 初始化方向，-1 表示往左，1 表示往右
  const directions = new Array(n).fill(-1);
  // 目前排列
  const permutation = [...nums];
  permutation.sort((a, b) => a - b);

  // 檢查元素是否可以移動
  const canMove = (index: number) => {
    const nextIdx = index + directions[index];
    return nextIdx >= 0 && nextIdx < n && permutation[index] > permutation[nextIdx];
  };

  // 移動元素
  const move = (index: number) => {
    const nextIdx = index + directions[index];
    [permutation[index], permutation[nextIdx]] = [permutation[nextIdx], permutation[index]];
    [directions[index], directions[nextIdx]] = [directions[nextIdx], directions[index]];
  };

  // 主要迴圈
  while (true) {
    result.push([...permutation]);

    let largestMovable = -1;
    for (let i = 0; i < n; i++) {
      if (canMove(i) && (largestMovable === -1 || permutation[i] > permutation[largestMovable])) {
        largestMovable = i;
      }
    }

    if (largestMovable === -1) break;

    const valueMoved = permutation[largestMovable];
    move(largestMovable);

    // 翻轉方向
    for (let i = 0; i < n; i++) {
      if (permutation[i] > valueMoved) {
        directions[i] = -directions[i];
      }
    }
  }

  return result;
}

export { permute };
