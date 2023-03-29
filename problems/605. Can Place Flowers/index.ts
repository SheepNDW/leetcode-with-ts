// 用扣的
// function canPlaceFlowers(flowerbed: number[], n: number): boolean {
//   let count = n;

//   for (let i = 0; i <= flowerbed.length; i++) {
//     if (flowerbed[i] !== 0) continue;

//     if (flowerbed[i - 1] === undefined && flowerbed[i + 1] === 0) {
//       flowerbed[i] = 1;
//       count--;
//     } else if (flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
//       flowerbed[i] = 1;
//       count--;
//     } else if (flowerbed[i + 1] === undefined && flowerbed[i - 1] === 0) {
//       flowerbed[i] = 1;
//       count--;
//     } else if (flowerbed.length === 1) {
//       count--;
//     }
//   }

//   return count <= 0;
// }

// function canPlaceFlowers(flowerbed: number[], n: number): boolean {
//   let count = n;

//   for (let i = 0; i < flowerbed.length; i++) {
//     if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
//       count--;
//       flowerbed[i] = 1;
//     }
//   }

//   return count <= 0;
// }

// 用加的
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      count++;
      flowerbed[i] = 1;
    }
  }

  return count >= n;
}

export { canPlaceFlowers };
