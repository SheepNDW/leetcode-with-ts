/**
 * 1. 建立母音集合，包含大小寫
 * 2. 找出母音並排序
 * 3. 跑回圈重新建構字串，如果目前字元是母音就填上排序後的母音，並追蹤 index
 */
function sortVowels(s: string): string {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  const vowels: string[] = [];

  for (const c of s) {
    if (vowelSet.has(c)) {
      vowels.push(c);
    }
  }

  vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  let t = '';
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (!vowelSet.has(s[i])) {
      t += s[i];
    } else {
      t += vowels[j];
      j++;
    }
  }

  return t;
}

export { sortVowels };
