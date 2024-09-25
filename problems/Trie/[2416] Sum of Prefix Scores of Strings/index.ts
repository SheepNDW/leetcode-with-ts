/*
  brute force TLE!!!
  TC: O(m * n)
*/
function sumPrefixScores0(words: string[]): number[] {
  const scorebox: Record<string, number> = {};

  for (const word of words) {
    let prefix = '';
    for (const c of word) {
      prefix += c;
      if (!scorebox[prefix]) {
        scorebox[prefix] = 0;
      }
      scorebox[prefix] += 1;
    }
  }

  const res: number[] = [];

  for (const word of words) {
    let score = 0;
    let prefix = '';
    for (const c of word) {
      prefix += c;
      score += scorebox[prefix];
    }
    res.push(score);
  }

  return res;
}

/*
  Trie
*/
class TrieNode {
  count: number;
  children: Record<string, TrieNode>;

  constructor() {
    this.count = 0;
    this.children = {};
  }
}

function sumPrefixScores(words: string[]): number[] {
  const root = new TrieNode();

  // 建立 Trie 並且累加每個前綴的出現次數
  for (const word of words) {
    let node = root;
    for (const c of word) {
      if (!node.children[c]) {
        node.children[c] = new TrieNode();
      }
      node = node.children[c];
      node.count += 1;
    }
  }

  const res: number[] = [];

  // 計算每個字串的前綴分數
  for (const word of words) {
    let node = root;
    let score = 0;
    for (const c of word) {
      node = node.children[c];
      score += node.count;
    }
    res.push(score);
  }

  return res;
}

export { sumPrefixScores };
