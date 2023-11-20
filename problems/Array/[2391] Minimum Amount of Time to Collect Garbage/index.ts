/**
 * 調整 travel 陣列，讓它的索引就是到達該處所需花費的時間。
 * 建立一個 lastPos hash map 用來記錄各種分類的垃圾最後出現的位置。
 *
 * 1. 迴圈中每次都直接將垃圾總數加進總時間，然後存入個垃圾最後出現位置。
 * 2. 最後再補上每輛車的行駛時間。
 */
function garbageCollection(garbage: string[], travel: number[]): number {
  let time = 0;
  const lastPos = new Map<string, number>();

  // store the prefix sum in travel itself
  for (let i = 1; i < travel.length; i++) {
    travel[i] = travel[i - 1] + travel[i];
  }

  for (let i = 0; i < garbage.length; i++) {
    const currStr = garbage[i];

    for (const char of currStr) {
      lastPos.set(char, i);
    }

    time += currStr.length;
  }

  for (const index of lastPos.values()) {
    time += travel[index - 1] || 0;
  }

  return time;
}

export { garbageCollection };
