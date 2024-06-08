/*
  TC: O(m * n)
  m: words.length
  n: word[i] length

  TLE!!!
*/
function replaceWords0(dictionary: string[], sentence: string): string {
  const rootSet = new Set(dictionary);
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let prefix = '';

    for (const c of word) {
      prefix += c;
      if (rootSet.has(prefix)) {
        words[i] = prefix;
        break;
      }
    }
  }

  return words.join(' ');
}

/*
  Trie
*/
class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEndOfWord = true;
  }

  findShortestPrefix(word: string): string {
    let node = this.root;
    let prefix = '';

    for (const char of word) {
      if (!node.children.has(char)) {
        break;
      }
      node = node.children.get(char)!;
      prefix += char;
      if (node.isEndOfWord) {
        return prefix;
      }
    }
    return word;
  }
}

function replaceWords(dictionary: string[], sentence: string): string {
  const trie = new Trie();
  for (const root of dictionary) {
    trie.insert(root);
  }

  return sentence
    .split(' ')
    .map((word) => trie.findShortestPrefix(word))
    .join(' ');
}

export { replaceWords };
