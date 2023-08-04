// backtracking
function makesquare(matchsticks: number[]): boolean {
  if (matchsticks.length < 4) return false;

  const total = matchsticks.reduce((acc, curr) => acc + curr, 0);
  if (total % 4) return false;

  matchsticks.sort((a, b) => b - a);
  const maxSideLength = total / 4;
  const currSides = [0, 0, 0, 0];
  const end = matchsticks.length;

  const backtrack = (start: number) => {
    if (start >= end) {
      return (
        currSides[0] === maxSideLength &&
        currSides[1] === maxSideLength &&
        currSides[2] === maxSideLength &&
        currSides[3] === maxSideLength
      );
    } else {
      for (let i = 0; i < 4; i++) {
        if (currSides[i] + matchsticks[start] > maxSideLength) {
          continue;
        }
        currSides[i] += matchsticks[start];
        if (backtrack(start + 1)) {
          return true;
        }
        currSides[i] -= matchsticks[start];
      }
    }
    return false;
  };

  return backtrack(0);
}

export { makesquare };
