function reorganizeString(s: string): string {
  const n = s.length;
  const hashTable = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    hashTable.set(s[i], (hashTable.get(s[i]) ?? 0) + 1);
  }

  // 按次數降序排列字元
  const chars = [...hashTable.keys()];
  chars.sort((a, b) => hashTable.get(b)! - hashTable.get(a)!);
  // 最多重複字元是否大於長度的一半
  if (hashTable.get(chars[0])! > (n + 1) >> 1) return '';

  // 放置字元
  let result: string[] = new Array(n).fill('');
  let index = 0;
  for (const char of chars) {
    const count = hashTable.get(char)!;
    for (let i = 0; i < count; i++) {
      if (index >= result.length) index = 1;
      result[index] = char;
      index += 2;
    }
  }

  return result.join('');
}

export { reorganizeString };
