/*
  hash + sorting
*/
function relativeSortArray0(arr1: number[], arr2: number[]): number[] {
  const counts = new Map<number, number>();
  arr1.forEach((num) => counts.set(num, (counts.get(num) || 0) + 1));

  const res: number[] = [];
  const notInArr: number[] = [];

  for (const num of arr2) {
    let c = counts.get(num) || 0;
    if (c !== 0) {
      while (c--) {
        res.push(num);
      }
      counts.delete(num);
    } else {
      notInArr.push(num);
    }
  }

  for (let [num, count] of counts) {
    while (count--) {
      notInArr.push(num);
    }
  }

  notInArr.sort((a, b) => a - b);
  return res.concat(notInArr);
}

/*
  counting sort
*/
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const maxEl = Math.max(...arr1);
  const counts = Array.from({ length: maxEl + 1 }, () => 0);

  for (const num of arr1) {
    counts[num]++;
  }

  const res: number[] = [];

  for (const num of arr2) {
    while (counts[num] > 0) {
      res.push(num);
      counts[num]--;
    }
  }

  for (let num = 0; num <= maxEl; num++) {
    while (counts[num] > 0) {
      res.push(num);
      counts[num]--;
    }
  }

  return res;
}

export { relativeSortArray };
