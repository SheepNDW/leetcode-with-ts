function longestSubsequenceRepeatedK(s: string, k: number): string {
  const count = Array(26).fill(0);
  const baseCode = 'a'.charCodeAt(0);
  for (const ch of s) {
    count[ch.charCodeAt(0) - baseCode]++;
  }

  let t = '';
  for (let i = 0; i < 26; i++) {
    if (count[i] >= k) {
      t += String.fromCharCode(i + baseCode);
    }
  }

  let res = '';
  let temp = '';
  dfs(t, temp);

  return res;

  function dfs(t: string, temp: string) {
    if (!checkOk(temp)) return;

    if (temp.length > res.length || (temp.length === res.length && temp > res)) {
      res = temp;
    }

    if (temp.length === 7) return;

    for (const ch of t) {
      let origin = temp;
      temp += ch;
      dfs(t, temp);
      temp = origin;
    }
  }

  function checkOk(temp: string): boolean {
    if (temp === '') return true;

    let j = 0;
    let round = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] !== temp[j]) continue;
      j++;

      if (j === temp.length) {
        j = 0;
        round++;
        if (round === k) {
          return true;
        }
      }
    }

    return false;
  }
}

export { longestSubsequenceRepeatedK };
