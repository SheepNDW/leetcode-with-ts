export function halvesAreAlike(s: string): boolean {
  const vowels = 'aeiouAEIOU';
  let count: number = 0;

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) count++;
    if (vowels.includes(s[s.length - 1 - i])) count--;
  }

  return count === 0;
}

// function halvesAreAlike(s: string): boolean {
//   const vowels = 'aeiouAEIOU';
//   const firstHalf = s.substring(0, s.length / 2);
//   const lastHalf = s.substring(s.length / 2);

//   let count: number = 0;

//   for (let i = 0; i < s.length / 2; i++) {
//     if (vowels.includes(firstHalf[i])) count++;
//     if (vowels.includes(lastHalf[i])) count--;
//   }

//   return count === 0;
// }
