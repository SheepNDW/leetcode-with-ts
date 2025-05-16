/*
  dp[i]: the length of the longest subsequence ending with words[i]

  dp[i] = max(dp[i], dp[j] + 1) if groups[i] != groups[j], HammingDistance(words[i], words[j]) == 1
*/
function getWordsInLongestSubsequence(words: string[], groups: number[]): string[] {
  const n = groups.length;
  const dp = new Array(n).fill(1);
  const prev = new Array(n).fill(-1);
  let maxIndex = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (check(words[i], words[j]) && dp[j] + 1 > dp[i] && groups[i] !== groups[j]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }

    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  const res: string[] = [];
  for (let i = maxIndex; i >= 0; i = prev[i]) {
    res.push(words[i]);
  }
  res.reverse();
  return res;
}

function check(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  let diff = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff++;
      if (diff > 1) return false;
    }
  }

  return diff === 1;
}

export { getWordsInLongestSubsequence };
