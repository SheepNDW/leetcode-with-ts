// brute force
// export function tribonacci(n: number): number {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 1;
//   return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
// }

// ver2
export function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let t0 = 0;
  let t1 = 1;
  let t2 = 1;

  for (let i = 3; i <= n; i++) {
    [t0, t1, t2] = [t1, t2, t0 + t1 + t2];
  }

  return t2;
}

// ver3
// function tribonacci(n: number): number {
//   const triArr = [0, 1, 1];

//   for (let i = 3; i <= n; i++) {
//     triArr[i] = triArr[i - 3] + triArr[i - 2] + triArr[i - 1];
//   }

//   return triArr[n];
// }

// console.log(tribonacci(25));
