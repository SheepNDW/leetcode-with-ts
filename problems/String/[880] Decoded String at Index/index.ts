function decodeAtIndex(s: string, k: number): string {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (isNaN(+ch)) {
      count++;
      if (count === k) {
        return ch;
      }
    } else {
      const times = +ch;
      if (count * times < k) {
        count *= times;
      } else if (k % count === 0) {
        return decodeAtIndex(s.substring(0, i), count);
      } else {
        return decodeAtIndex(s.substring(0, i), k % count);
      }
    }
  }

  return '';
}

export { decodeAtIndex };
