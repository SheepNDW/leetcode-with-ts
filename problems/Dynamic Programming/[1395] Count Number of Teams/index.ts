function numTeams(rating: number[]): number {
  const n = rating.length;
  let count = 0;

  for (let i = 1; i < n - 1; i++) {
    let leftSmaller = 0;
    let rightLarger = 0;

    for (let j = 0; j < i; j++) {
      if (rating[j] < rating[i]) leftSmaller++;
    }

    for (let j = i + 1; j < n; j++) {
      if (rating[j] > rating[i]) rightLarger++;
    }

    count += leftSmaller * rightLarger;

    const leftLarger = i - leftSmaller;
    const rightSmaller = n - i - 1 - rightLarger;

    count += leftLarger * rightSmaller;
  }

  return count;
}

export { numTeams };
