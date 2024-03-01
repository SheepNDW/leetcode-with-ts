/*
  counting ones
*/
function maximumOddBinaryNumber(s: string): string {
  const len = s.length;
  let oneCount = 0;
  for (const c of s) {
    if (c === '1') oneCount++;
  }
  const zeros = len - oneCount;

  const ans = '1'.repeat(oneCount - 1) + '0'.repeat(zeros) + '1';

  return ans;
}

/*
  two pointer (one pass)
*/
function maximumOddBinaryNumber1(s: string): string {
  const char = s.split('');
  const n = char.length;

  let left = 0;
  let right = n - 1;

  while (left <= right) {
    while (left <= right && char[left] === '1') left++;
    while (left <= right && char[right] === '0') right--;

    if (left < right) {
      [char[left], char[right]] = ['1', '0'];
      left++;
      right--;
    }
  }

  // move last 1 to tail
  char[left - 1] = '0';
  char[n - 1] = '1';

  return char.join('');
}

export { maximumOddBinaryNumber };
