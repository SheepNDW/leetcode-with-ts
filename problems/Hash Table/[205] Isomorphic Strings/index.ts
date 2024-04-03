/*
  hash maps
*/
function isIsomorphic0(s: string, t: string): boolean {
  const n = s.length;
  const sToT = new Map<string, string>();
  const tToS = new Map<string, string>();

  for (let i = 0; i < n; i++) {
    const charS = s[i];
    const charT = t[i];
    if (sToT.has(charS) && sToT.get(charS) !== charT) return false;
    if (tToS.has(charT) && tToS.get(charT) !== charS) return false;
    sToT.set(charS, charT);
    tToS.set(charT, charS);
  }

  return true;
}

function isIsomorphic(s: string, t: string): boolean {
  const n = s.length;
  const sToT = new Array(26);
  const tToS = new Array(26);

  for (let i = 0; i < n; i++) {
    const charS = s.charCodeAt(i) - 'a'.charCodeAt(0);
    const charT = t.charCodeAt(i) - 'a'.charCodeAt(0);

    if (sToT[charS] !== undefined && sToT[charS] !== charT) return false;
    if (tToS[charT] !== undefined && tToS[charT] !== charS) return false;

    sToT[charS] = charT;
    tToS[charT] = charS;
  }

  return true;
}

export { isIsomorphic };
