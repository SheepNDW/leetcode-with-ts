function average(salary: number[]): number {
  const max = Math.max(...salary);
  const min = Math.min(...salary);

  const total = salary.reduce((prev, curr) => {
    if (curr === max || curr === min) return prev;
    return prev + curr;
  }, 0);

  return total / (salary.length - 2);
}

/* function average(salary: number[]): number {
  let max = -Infinity;
  let min = Infinity;

  const total = salary.reduce((prev, curr) => {
    max = Math.max(max, curr);
    min = Math.min(min, curr);
    return prev + curr;
  }, 0);

  return (total - min - max) / (salary.length - 2);
} */

export { average };
