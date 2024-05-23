/*
  backtracking
*/
function partition0(s: string): string[][] {
  const result: string[][] = [];
  const candidate: string[] = [];
  const end = s.length;

  function backtrack(start: number) {
    if (start === end) {
      result.push([...candidate]);
      return;
    }

    for (let i = start; i < end; i++) {
      const subStr = s.slice(start, i + 1);

      if (isPalindrome(subStr)) {
        candidate.push(subStr);
        backtrack(i + 1);
        candidate.pop();
      }
    }
  }

  backtrack(0);
  return result;
}

function isPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}

/*
  DP 預處理

  dp[i][j]: s[i:j] is palindrome
  s[i] === s[j] && dp[i+1][j-1] is palindrome
*/
function partition(s: string): string[][] {
  const n = s.length;
  const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  for (let i = 0; i + 1 < n; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
  }
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
      } else {
        dp[i][j] = false;
      }
    }
  }

  const result: string[][] = [];
  const ans: string[] = [];
  dfs(0);
  return result;

  function dfs(cur: number) {
    if (cur === n) {
      result.push([...ans]);
      return;
    }

    for (let j = cur; j < n; j++) {
      if (dp[cur][j]) {
        ans.push(s.slice(cur, j + 1));
        dfs(j + 1);
        ans.pop();
      }
    }
  }
}

export { partition };
