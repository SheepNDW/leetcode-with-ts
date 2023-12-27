function minCost0(colors: string, neededTime: number[]): number {
  let ans = 0;
  let tempMax = neededTime[0];
  let sum = neededTime[0];

  for (let i = 1; i < colors.length; i++) {
    if (colors[i] === colors[i - 1]) {
      sum += neededTime[i];
      if (neededTime[i] > tempMax) {
        tempMax = neededTime[i];
      }
    } else {
      ans += sum - tempMax;
      sum = neededTime[i];
      tempMax = neededTime[i];
    }
  }

  // Handle the last group of same colors
  ans += sum - tempMax;

  return ans;
}

// ==== Alternatives ====

function minCost(colors: string, neededTime: number[]): number {
  let ans = 0;
  let prev = 0;

  for (let i = 1; i < colors.length; i++) {
    if (colors[prev] === colors[i]) {
      if (neededTime[prev] < neededTime[i]) {
        ans += neededTime[prev];
        prev = i;
      } else {
        ans += neededTime[i];
      }
    } else {
      prev = i;
    }
  }

  return ans;
}

export { minCost };
