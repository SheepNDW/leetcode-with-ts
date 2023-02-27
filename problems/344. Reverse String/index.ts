export function reverseString(s: string[]): void {
  const mid = Math.ceil((s.length - 1) / 2);
  for (let i = 0; i < mid; i++) {
    const r = s.length - 1 - i;
    [s[i], s[r]] = [s[r], s[i]];
  }
}

// let input = ['h', 'e', 'l', 'l', 'o'];

// reverseString(input);
// console.log(input);
