export function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  // s === goal
  if (s === goal) {
    const map: { [index: string]: boolean } = {};
    for (let i = 0; i < s.length; i++) {
      if (map[s[i]]) return true;
      map[s[i]] = true;
    }
  }
  // s !== goal
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

// console.log(buddyStrings('ab', 'ba')); // expect: true
// console.log(buddyStrings('ab', 'ab')); // expect: false
// console.log(buddyStrings('aa', 'aa')); // expect: true
// console.log(buddyStrings('abcd', 'cbad')); // expect: true
// console.log(buddyStrings('abcd', 'badc')); // expect: false
// console.log(buddyStrings('abab', 'abab')); // expect: true
// console.log(buddyStrings('abcaa', 'abcbb')); // expect: false
