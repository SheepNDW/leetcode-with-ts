function findMatrix0(nums: number[]): number[][] {
  const ans: number[][] = [];

  let tempNums = [...nums];
  while (tempNums.length > 0) {
    let currRow = new Set<number>();
    let nextNums: number[] = [];

    tempNums.forEach((num) => {
      if (!currRow.has(num)) {
        currRow.add(num);
      } else {
        nextNums.push(num);
      }
    });

    ans.push([...currRow]);
    tempNums = nextNums;
  }

  return ans;
}

// ==== Alternatives ====

// Frequency Counter
function findMatrix(nums: number[]): number[][] {
  const freq = Array<number>(nums.length + 1).fill(0);
  const ans: number[][] = [];

  for (const num of nums) {
    freq[num]++;
    const index = freq[num] - 1;

    if (ans[index] === undefined) {
      ans[index] = [num];
    } else {
      ans[index].push(num);
    }
  }

  return ans;
}

export { findMatrix };
