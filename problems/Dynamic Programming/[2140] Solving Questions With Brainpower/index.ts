/*
  dp[i] = Math.max(points[i] + dp[i + brainpower[i] + 1], dp[i+1])
*/
function mostPoints(questions: number[][]): number {
  const n = questions.length;
  const dp = Array.from({ length: n + 1 }, () => 0);

  for (let i = n - 1; i >= 0; i--) {
    const [points, brainpower] = questions[i];
    const next = i + brainpower + 1;

    const solve = points + (next < n ? dp[next] : 0);
    const skip = dp[i + 1];

    dp[i] = Math.max(solve, skip);
  }

  return dp[0];
}

export { mostPoints };
