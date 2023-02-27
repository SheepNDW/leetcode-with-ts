export function maxIceCream(costs: number[], coins: number): number {
  let count = 0;

  costs.sort((a, b) => a - b);
  costs.forEach((cost) => {
    if (coins >= cost) {
      coins -= cost;
      count++;
    }
  });

  return count;
}

// console.log(maxIceCream([1, 3, 2, 4, 1], 7)); // expect: 4
// console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5)); // expect: 0
// console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20)); // expect: 6
