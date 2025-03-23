/*
  dp + hash
*/
function wordBreak0(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const set = new Set(wordDict);
  const dp = Array.from({ length: n + 1 }, () => false);
  dp[0] = true;

  for (let i = 0; i < dp.length; i++) {
    if (dp[i] === false) continue;

    for (const word of set) {
      const len = word.length;
      if (i + len <= n && set.has(s.slice(i, i + len))) {
        dp[i + len] = true;
      }
    }
  }

  return dp[n];
}

/*
  Trie
*/
class TrieNode {
  next: (TrieNode | null)[];
  isEnd: boolean;

  constructor() {
    this.next = Array.from({ length: 26 }, () => null);
    this.isEnd = false;
  }
}

function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const root = new TrieNode();
  const memo = new Array(n).fill(0);

  for (const word of wordDict) {
    let node = root;

    for (const ch of word) {
      const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);

      if (node.next[idx] === null) {
        node.next[idx] = new TrieNode();
      }
      node = node.next[idx];
    }

    node.isEnd = true;
  }

  return dfs(s, 0);

  function dfs(s: string, cur: number): boolean {
    if (cur === s.length) return true;
    if (memo[cur] === 1) return false;

    let node = root;

    for (let i = cur; i < s.length; i++) {
      const idx = s[i].charCodeAt(0) - 'a'.charCodeAt(0);

      if (node.next[idx] === null) {
        break;
      }

      node = node.next[idx];

      if (node.isEnd && dfs(s, i + 1)) {
        return true;
      }
    }

    memo[cur] = 1;
    return false;
  }
}

export { wordBreak };
