/*
  brute force: TC O(n^2)

  奇數: 以 i 為中心的回文個數
  f c b a b c e c
        ^ ^ ^ ^
        3 1 1 2

  偶數: 以 i, i+1 為中心的回文個數
  d [c b a_a b c] e e
          ^ ^ ^  ^ ^
          3 0 0  0 1
*/
function countSubstrings(s: string): number {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // odd
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) break;
      count++;
      left--;
      right++;
    }

    // even
    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) break;
      count++;
      left--;
      right++;
    }
  }

  return count;
}

export { countSubstrings };
