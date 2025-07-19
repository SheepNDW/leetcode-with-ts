import { a } from 'vitest/dist/chunks/suite.BJU7kdY9';

/*
  set
*/
function removeSubfolders0(folder: string[]): string[] {
  // folder.sort();
  const set = new Set<string>();
  const res: string[] = [];

  for (const p of folder) {
    const folders = p.split('/');

    let path = '';
    let isSub = false;

    for (let i = 1; i < folders.length; i++) {
      path = path + '/' + folders[i];
      if (set.has(path)) {
        isSub = true;
        break;
      }
    }

    if (!isSub) {
      res.push(path);
      set.add(path);
    }
  }

  return res;
}

/*
  sorting
*/
function removeSubfolders(folder: string[]): string[] {
  folder.sort((a, b) => a.localeCompare(b));
  const res: string[] = [folder[0]];

  for (let i = 1; i < folder.length; i++) {
    const prev = res[res.length - 1] + '/';

    if (!folder[i].startsWith(prev)) {
      res.push(folder[i]);
    }
  }

  return res;
}

/*
  Trie
*/

class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEnd: boolean = false;
}

function removeSubfolders2(folder: string[]): string[] {
  const root = new TrieNode();

  for (const path of folder) {
    let current = root;
    const parts = path.split('/');

    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];

      if (!current.children[part]) {
        current.children[part] = new TrieNode();
      }
      current = current.children[part];
    }

    current.isEnd = true;
  }

  const res: string[] = [];

  for (const path of folder) {
    let current = root;
    let isSub = false;
    const parts = path.split('/');

    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];

      current = current.children[part];
      if (current.isEnd && i !== parts.length - 1) {
        isSub = true;
        break;
      }
    }

    if (!isSub) {
      res.push(path);
    }
  }

  return res;
}

export { removeSubfolders };
