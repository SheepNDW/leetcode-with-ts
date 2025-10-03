// ==== recursion ====
function validateStackSequences0(pushed: number[], popped: number[]): boolean {
  const stack: number[] = [];
  let popIndex = 0;

  function checkTopAndPop(stack: number[]) {
    if (stack[stack.length - 1] === popped[popIndex]) {
      stack.pop();
      popIndex++;
      if (stack.length !== 0) {
        checkTopAndPop(stack);
      }
    }
  }

  pushed.forEach((num) => {
    stack.push(num);
    checkTopAndPop(stack);
  });

  return stack.length === 0;
}

// ==== while loop ====
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const n = pushed.length;
  const stack: number[] = [];

  let j = 0;
  for (let i = 0; i < n; i++) {
    stack.push(pushed[i]);

    while (j < n && popped[j] === stack[stack.length - 1]) {
      stack.pop();
      j++;
    }
  }

  return stack.length === 0;
}

export { validateStackSequences };
