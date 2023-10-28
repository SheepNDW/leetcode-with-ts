function simplifyPath(path: string): string {
  const stack: string[] = [];
  const pathSegments = path.split('/');

  for (const segment of pathSegments) {
    if (segment === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (segment !== '' && segment !== '.') {
      stack.push(segment);
    }
  }

  return '/' + stack.join('/');
}

export { simplifyPath };
