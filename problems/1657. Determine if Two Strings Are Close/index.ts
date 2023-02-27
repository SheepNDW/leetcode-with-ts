export function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
    map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
  }

  if (map1.size !== map2.size) return false;
  for (let key of map1.keys()) {
    if (!map2.get(key)) return false;
  }

  const arr1 = [...map1.values()].sort();
  const arr2 = [...map2.values()].sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

// console.log(closeStrings('cabbba', 'abbccc')); // expect: true
// console.log(closeStrings('abbbzcf', 'babzzcz')); // expect: false
// console.log(closeStrings('abbzzca', 'babzzcz')); // expect: false
