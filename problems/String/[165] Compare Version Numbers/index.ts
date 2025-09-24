function compareVersion(version1: string, version2: string): number {
  const v1 = version1.split('.').map(Number);
  const v2 = version2.split('.').map(Number);

  for (let i = 0; i <= Math.max(v1.length, v2.length); i++) {
    const a = v1[i] ?? 0;
    const b = v2[i] ?? 0;

    if (a < b) return -1;
    if (a > b) return 1;
  }

  return 0;
}

export { compareVersion };
