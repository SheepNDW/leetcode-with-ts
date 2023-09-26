// Stack + Greedy
function removeDuplicateLetters(s: string): string {
  const stack: string[] = [];
  const seen = new Set<string>();
  const lastOcc: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    lastOcc[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!seen.has(char)) {
      while (
        stack.length > 0 &&
        char < stack[stack.length - 1] &&
        i < lastOcc[stack[stack.length - 1]]
      ) {
        seen.delete(stack.pop()!);
      }
      seen.add(char);
      stack.push(char);
    }
  }

  return stack.join('');
}

export { removeDuplicateLetters };
