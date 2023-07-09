// brute force
// function twoSumLessThanK(A: number[], k: number): number {
//   const n = A.length;
//   let max = -1;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       const sum = A[i] + A[j];
//       if (sum < k && sum > max) {
//         max = sum;
//       }
//     }
//   }
//   return max;
// }

// Two Pointer
function twoSumLessThanK(A: number[], k: number): number {
  A.sort((a, b) => a - b);

  let max = -1;
  let left = 0;
  let right = A.length - 1;

  while (left < right) {
    let sum = A[left] + A[right];
    if (sum < k) {
      max = Math.max(max, sum);
      left++;
    } else {
      right--;
    }
  }

  return max;
}

export { twoSumLessThanK };
