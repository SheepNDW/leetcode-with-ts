function reverseString0(s: string[]): void {
  const mid = Math.ceil((s.length - 1) / 2);
  for (let i = 0; i < mid; i++) {
    const r = s.length - 1 - i;
    [s[i], s[r]] = [s[r], s[i]];
  }
}

// ==== Alternatives ====

// two pointer
function reverseString(s: string[]): void {
  const n = s.length;
  for (let l = 0, r = n - 1; l < r; l++, r--) {
    const temp = s[l];
    s[l] = s[r];
    s[r] = temp;
  }
}

export { reverseString };
