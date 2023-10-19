// time: O(m + n), space: O(m + n)
function backspaceCompare1(s: string, t: string): boolean {
  const parseString = (str: string) => {
    const stack: string[] = [];

    for (const char of str) {
      if (char !== '#') {
        stack.push(char);
      } else if (stack.length !== 0) {
        stack.pop();
      }
    }

    return stack.reduce((acc, curr) => (acc += curr), '');
  };

  return parseString(s) === parseString(t);
}

// two pointer
function backspaceCompare(s: string, t: string): boolean {
  let i = s.length - 1;
  let j = t.length - 1;
  let skipS = 0;
  let skipT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }

    while (j >= 0) {
      if (t[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }

    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false;
    }

    if (i >= 0 !== j >= 0) {
      return false;
    }

    i--;
    j--;
  }

  return true;
}

export { backspaceCompare };
