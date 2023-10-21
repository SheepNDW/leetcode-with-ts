// convert to string
function isPalindrome0(x: number): boolean {
  if (x < 0) return false;

  const str = `${x}`;
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }

  return true;
}

// follow up
function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversed || x === Math.floor(reversed / 10);
}

export { isPalindrome };
