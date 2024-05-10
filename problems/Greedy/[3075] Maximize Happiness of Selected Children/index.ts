/*
  sorting
*/
function maximumHappinessSum(happiness: number[], k: number): number {
  happiness.sort((a, b) => b - a);
  let ans = 0;
  for (let i = 0; i < k; i++) {
    const curHappiness = happiness[i] - i;
    if (curHappiness <= 0) break;
    ans += curHappiness;
  }
  return ans;
}

export { maximumHappinessSum };
