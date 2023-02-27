export function maximum69Number(num: number): number {
  let change: string[] = [];
  let hasChanged = false;
  for (let i of num.toString()) {
    if (i === '9') {
      change.push(i);
    } else if (i === '6' && !hasChanged) {
      change.push('9');
      hasChanged = true;
    } else {
      change.push(i);
    }
  }

  return +change.join('');
}
