function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (isOperator(token)) {
      if (stack.length >= 2) {
        const rightNum = stack.pop()!;
        const leftNum = stack.pop()!;
        const result = compute(leftNum, rightNum, token);
        stack.push(result);
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
}

function isOperator(s: string) {
  return s === '+' || s === '-' || s === '*' || s === '/';
}

function compute(num1: number, num2: number, operator: string) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return ~~(num1 / num2);
    default:
      return 0;
  }
}

export { evalRPN };
