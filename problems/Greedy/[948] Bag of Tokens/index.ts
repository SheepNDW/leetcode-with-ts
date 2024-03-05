function bagOfTokensScore(tokens: number[], power: number): number {
  tokens.sort((a, b) => a - b);

  let maxScore = 0;
  let score = 0;
  let left = 0;
  let right = tokens.length - 1;

  while (left <= right) {
    if (power >= tokens[left]) {
      power -= tokens[left];
      score++;
      left++;
      maxScore = Math.max(score, maxScore);
    } else if (score > 0) {
      power += tokens[right];
      score--;
      right--;
    } else {
      break;
    }
  }

  return maxScore;
}

export { bagOfTokensScore };
