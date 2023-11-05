function buildArray(target: number[], n: number): string[] {
  const result: string[] = [];
  let index = 0;

  for (let i = 1; i <= n; i++) {
    if (i === target[index]) {
      result.push('Push');
      index++;
    } else {
      result.push('Push');
      result.push('Pop');
    }

    if (index >= target.length) {
      break;
    }
  }

  return result;
}

export { buildArray };
