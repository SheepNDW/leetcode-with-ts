export function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map();
  arr.forEach((key) => {
    // Map.prototype.get(key)：讀取 key 對應的鍵值，如果找不到 key，回傳 undefined。
    map.set(key, (map.get(key) ?? 0) + 1);
  });
  // map.size 跟 value 組成的 set.size 不一樣就代表有重複
  return map.size === new Set(map.values()).size;
}

// const arr = [1, 2, 2, 1, 1, 3]; // true
// const arr2 = [1, 2]; // false
// const arr3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]; // true

// console.log(uniqueOccurrences(arr));
// console.log(uniqueOccurrences(arr2));
// console.log(uniqueOccurrences(arr3));
