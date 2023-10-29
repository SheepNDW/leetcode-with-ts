// brute force
function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

function longestPalindrome0(s: string): string {
  const n = s.length;
  let maxPalindrome = '';

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const substring = s.slice(i, j);
      if (isPalindrome(substring) && substring.length > maxPalindrome.length) {
        maxPalindrome = substring;
      }
    }
  }

  return maxPalindrome;
}

// brute force optimization
const check = (i: number, j: number, s: string): boolean => {
  let left = i;
  let right = j - 1;

  while (left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

function longestPalindrome1(s: string): string {
  for (let length = s.length; length > 0; length--) {
    for (let start = 0; start <= s.length - length; start++) {
      if (check(start, start + length, s)) {
        return s.substring(start, start + length);
      }
    }
  }
  return '';
}

// DP
function longestPalindrome(s: string): string {
  const n = s.length;
  const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));
  const ansIndex = [0, 0];

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      ansIndex[0] = i;
      ansIndex[1] = i + 1;
    }
  }

  for (let diff = 2; diff < n; diff++) {
    for (let i = 0; i < n - diff; i++) {
      const j = i + diff;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        ansIndex[0] = i;
        ansIndex[1] = j;
      }
    }
  }

  const start = ansIndex[0];
  const end = ansIndex[1] + 1;
  return s.slice(start, end);
}

export { longestPalindrome };
