function numberOfPairs(points: number[][]): number {
  const n = points.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];

    for (let j = 0; j < n; j++) {
      const [x2, y2] = points[j];

      if (i === j || !(x1 <= x2 && y1 >= y2)) {
        continue;
      }

      let isValid = true;

      for (const [x, y] of points) {
        if ((x1 === x && y1 === y) || (x2 === x && y2 === y)) continue;

        const isXContained = x1 <= x && x <= x2;
        const isYContained = y1 >= y && y >= y2;

        if (isXContained && isYContained) {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        res++;
      }
    }
  }

  return res;
}

export { numberOfPairs };
