/**
 * 1. 建立母音集合，包含大小寫
 * 2. 找出母音並排序
 * 3. 跑回圈重新建構字串，如果目前字元是母音就填上排序後的母音，並追蹤 index
 */
function sortVowels(s: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const sArr = s.split('');
  const sortedVowel = sArr.filter((c) => vowels.has(c)).sort();

  let result = '';
  let vowelIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      result += sortedVowel[vowelIndex++];
    } else {
      result += s[i];
    }
  }

  return result;
}

export { sortVowels };
