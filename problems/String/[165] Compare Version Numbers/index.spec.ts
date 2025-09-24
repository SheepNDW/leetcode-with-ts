import { describe, expect, it } from 'vitest';
import { compareVersion } from '.';

describe('compareVersion', () => {
  it('should return 0 for version1 = "1.01" and version2 = "1.001"', () => {
    const version1 = '1.01';
    const version2 = '1.001';

    const result = compareVersion(version1, version2);

    expect(result).toBe(0);
  });

  it('should return 0 for version1 = "1.0" and version2 = "1.0.0"', () => {
    const version1 = '1.0';
    const version2 = '1.0.0';

    const result = compareVersion(version1, version2);

    expect(result).toBe(0);
  });

  it('should return -1 for version1 = "1.2" and version2 = "1.10"', () => {
    const version1 = '1.2';
    const version2 = '1.10';

    const result = compareVersion(version1, version2);

    expect(result).toBe(-1);
  });
});
