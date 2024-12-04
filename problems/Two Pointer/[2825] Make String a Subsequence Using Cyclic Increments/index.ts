// map a~z cyclically
const cyclicalMap: Record<string, string> = {
  a: 'b',
  b: 'c',
  c: 'd',
  d: 'e',
  e: 'f',
  f: 'g',
  g: 'h',
  h: 'i',
  i: 'j',
  j: 'k',
  k: 'l',
  l: 'm',
  m: 'n',
  n: 'o',
  o: 'p',
  p: 'q',
  q: 'r',
  r: 's',
  s: 't',
  t: 'u',
  u: 'v',
  v: 'w',
  w: 'x',
  x: 'y',
  y: 'z',
  z: 'a',
};

function canMakeSubsequence(str1: string, str2: string): boolean {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      if (cyclicalMap[str1[i]] === str2[j]) {
        j++;
      }
      i++;
    }
  }

  return j === str2.length;
}

export { canMakeSubsequence };
