function compareVersion(version1: string, version2: string): number {
  const v1arr = version1.split('.');
  const v2arr = version2.split('.');

  const maxLength = Math.max(v1arr.length, v2arr.length);

  for (let i = 0; i < maxLength; i++) {
    const v1 = i < v1arr.length ? parseInt(v1arr[i], 10) : 0;
    const v2 = i < v2arr.length ? parseInt(v2arr[i], 10) : 0;
    if (v1 > v2) return 1;
    if (v1 < v2) return -1;
  }

  return 0;
}

export { compareVersion };
