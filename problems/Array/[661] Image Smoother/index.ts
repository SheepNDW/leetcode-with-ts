function imageSmoother(img: number[][]): number[][] {
  const m = img.length;
  const n = img[0].length;
  const ans = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      ans[row][col] = calculate(img, row, col);
    }
  }

  return ans;
}

function calculate(img: number[][], row: number, col: number) {
  let total = 0;
  let num = 0;

  for (let i = row - 1; i <= row + 1; i++) {
    if (i < 0 || i >= img.length) continue;

    for (let j = col - 1; j <= col + 1; j++) {
      if (j >= 0 && j < img[0].length) {
        total += img[i][j];
        num += 1;
      }
    }
  }

  return Math.floor(total / num);
}

export { imageSmoother };
