function buddyStrings0(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  // input output 相同
  if (s === goal) {
    // 有一個以上同字母
    let map: { [index: string]: boolean } = {};
    for (let i = 0; i < s.length; i++) {
      if (map[s[i]]) return true;
      map[s[i]] = true;
    }
  }
  // input output 不相同
  const diff: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i);
    }
  }

  if (diff.length === 2) {
    return s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
  }

  return false;
}

// ==== Alternatives ====

function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  const hash = new Map<string, number>();
  s.split('').forEach((char) => hash.set(char, (hash.get(char) ?? 0) + 1));

  if (s === goal) {
    for (const value of hash.values()) {
      if (value !== 1) {
        return true;
      }
    }
    return false;
  }

  let swapCount = 0;
  goal.split('').forEach((char, i) => {
    if (char !== s[i]) {
      if (swapCount >= 2) return false;
      swapCount++;
    }
    const value = hash.get(char);
    if (value) {
      const newValue = value - 1;
      newValue ? hash.set(char, newValue) : hash.delete(char);
    }
  });

  return hash.size === 0;
}

export { buddyStrings };
