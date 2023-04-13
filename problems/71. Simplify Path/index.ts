function simplifyPath(path: string): string {
  const stack: string[] = [];
  const pathArr = path.split('/');

  const emptyString = '';
  const onePeriod = '.';
  const doublePeriod = '..';

  pathArr.forEach((d) => {
    if (d === doublePeriod) {
      stack.pop();
    } else if (d !== onePeriod && d !== emptyString) {
      stack.push(d);
    }
  });

  return '/' + stack.join('/');
}

export { simplifyPath };
