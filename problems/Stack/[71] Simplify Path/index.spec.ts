import { describe, expect, it } from 'vitest';
import { simplifyPath } from '.';

describe('simplifyPath', () => {
  it('should remove the tail slash', () => {
    const input = '/home/';

    const result = simplifyPath(input);

    expect(result).toBe('/home');
  });

  it('should not change the root directory when going up one level', () => {
    const input = '/../';

    const result = simplifyPath(input);

    expect(result).toBe('/');
  });

  it('should simplify a path that contains consecutive slashes', () => {
    const input = '/home//foo/';

    const result = simplifyPath(input);

    expect(result).toBe('/home/foo');
  });

  it('should simplify a path that contains parent directories', () => {
    const input = '/a/./b/../../c/';

    const result = simplifyPath(input);

    expect(result).toBe('/c');
  });
});
