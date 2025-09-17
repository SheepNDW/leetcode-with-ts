function replaceNonCoprimes(nums: number[]): number[] {
  const stack: number[] = [];

  for (const num of nums) {
    let cur = num;

    while (stack.length > 0 && gcd(stack[stack.length - 1], cur) > 1) {
      cur = lcm(stack.pop()!, cur);
    }

    stack.push(cur);
  }

  return stack;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a / gcd(a, b)) * b;
}

export { replaceNonCoprimes };
