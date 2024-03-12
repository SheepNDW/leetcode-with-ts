function minimumLength(s: string): number {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    const curChar = s[left];
    while (left < right && s[left] === curChar) {
      left++;
    }
    while (left <= right && s[right] === curChar) {
      right--;
    }
  }

  return right - left + 1;
}

export { minimumLength };
