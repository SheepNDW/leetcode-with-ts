// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//   const diff = Math.max(...candies) - extraCandies;
//   return candies.map((num) => num >= diff);
// }

/**
 * use reduce when numeric array is very large
 * @see https://stackoverflow.com/questions/21255138/how-does-the-math-max-apply-work
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = candies.reduce((a, b) => Math.max(a, b));
  return candies.map((num) => num + extraCandies >= max);
}

export { kidsWithCandies };
