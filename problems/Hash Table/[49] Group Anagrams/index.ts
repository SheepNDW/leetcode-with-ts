/*
  sorting
*/
function groupAnagrams0(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  strs.forEach((s) => {
    const cur = s.split('').sort().join('');
    map.set(cur, [...(map.get(cur) || []), s]);
  });

  return [...map.values()];
}

/*
  counting character
*/
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  strs.forEach((s) => {
    const hash = countSort(s);
    map.set(hash, [...(map.get(hash) || []), s]);
  });

  return [...map.values()];
}

// 使用計數排序來生成每個字串的 key
function countSort(str: string): string {
  const BASE_CHAR_CODE = 'a'.charCodeAt(0);
  const count = new Array(26).fill(0);
  for (const char of str) {
    const index = char.charCodeAt(0) - BASE_CHAR_CODE;
    count[index]++;
  }

  // 重建排序後的字串作為 key
  let sortedStr = '';
  for (let i = 0; i < 26; i++) {
    sortedStr += String.fromCharCode(i + BASE_CHAR_CODE).repeat(count[i]);
  }

  return sortedStr;
}

export { groupAnagrams };
