const phoneMapping = new Map<string, string[]>([
  ['2', ['a', 'b', 'c']],
  ['3', ['d', 'e', 'f']],
  ['4', ['g', 'h', 'i']],
  ['5', ['j', 'k', 'l']],
  ['6', ['m', 'n', 'o']],
  ['7', ['p', 'q', 'r', 's']],
  ['8', ['t', 'u', 'v']],
  ['9', ['w', 'x', 'y', 'z']],
]);

function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  const letters: string[][] = digits.split('').map((d) => phoneMapping.get(d)!);
  const result: string[] = [];
  const candidate: string[] = [];

  const backtrack = (start: number) => {
    if (candidate.length === digits.length) {
      result.push(candidate.join(''));
      return;
    }

    for (const letter of letters[start]) {
      candidate.push(letter);
      backtrack(start + 1);
      candidate.pop();
    }
  };

  backtrack(0);
  return result;
}

// ==== Alternatives ====

function letterCombinations1(digits: string): string[] {
  if (!digits) return [];
  const result: string[] = [];

  const backtrack = (combination: string, nextDigitIndex: number) => {
    if (nextDigitIndex === digits.length) {
      result.push(combination);
      return;
    }

    const digit = digits[nextDigitIndex];
    const letters = phoneMapping.get(digit);

    if (letters) {
      for (const letter of letters) {
        backtrack(combination + letter, nextDigitIndex + 1);
      }
    }
  };

  backtrack('', 0);
  return result;
}

export { letterCombinations };
