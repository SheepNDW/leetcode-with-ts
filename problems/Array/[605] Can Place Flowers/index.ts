function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
        count++;
        flowerbed[i] = 1;
      }
    }
  }

  return count >= n;
}

// 用扣的
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

export { canPlaceFlowers };
