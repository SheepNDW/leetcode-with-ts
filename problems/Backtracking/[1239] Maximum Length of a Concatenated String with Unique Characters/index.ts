// dfs 爆搜
function maxLength(arr: string[]): number {
  let maxLen = 0;

  function backtrack(index: number, currStr: string) {
    if (index === arr.length) {
      maxLen = Math.max(maxLen, currStr.length);
      return;
    }

    const newStr = currStr + arr[index];

    if (isUnique(newStr)) {
      backtrack(index + 1, newStr);
    }

    backtrack(index + 1, currStr);
  }

  backtrack(0, '');
  return maxLen;
}

function isUnique(str: string): boolean {
  return str.length === new Set(str).size;
}

export { maxLength };
