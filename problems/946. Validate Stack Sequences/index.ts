// ==== recursion ====
function validateStackSequences(pushed: number[], popped: number[]): boolean {
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
// function validateStackSequences(pushed: number[], popped: number[]): boolean {
//   const stack: number[] = [];
//   let popIndex = 0;

//   for (let i = 0; i < pushed.length; i++) {
//     stack.push(pushed[i]);
//     while (stack.length && stack[stack.length - 1] === popped[popIndex]) {
//       stack.pop();
//       popIndex++;
//     }
//   }

//   return stack.length === 0;
// }

export { validateStackSequences };
