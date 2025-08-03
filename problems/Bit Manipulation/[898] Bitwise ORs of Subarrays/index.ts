function subarrayBitwiseORs(arr: number[]): number {
  const all = new Set<number>();
  let cur = new Set<number>();

  for (const num of arr) {
    let temp = new Set<number>();

    for (const val of cur) {
      const orValue = val | num;
      temp.add(orValue);
      all.add(orValue);
    }

    temp.add(num);
    all.add(num);
    cur = temp;
  }

  return all.size;
}

export { subarrayBitwiseORs };
