import { describe, expect, it } from 'vitest';
import { removeSubfolders } from '.';

describe.skip('removeSubfolders', () => {
  it('should remove sub-folders from folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]', () => {
    const folder = ['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'];

    const result = removeSubfolders(folder);
    const expected = ['/a', '/c/d', '/c/f'];

    expect(result.length).toBe(expected.length);
    for (const item of result) {
      expect(expected).toContain(item);
    }
  });

  it('should remove sub-folders from folder = ["/a","/a/b/c","/a/b/d"]', () => {
    const folder = ['/a', '/a/b/c', '/a/b/d'];

    const result = removeSubfolders(folder);
    const expected = ['/a'];

    expect(result).toEqual(expected);
  });

  it('should remove sub-folders from folder = ["/a/b/c","/a/b/ca","/a/b/d"]', () => {
    const folder = ['/a/b/c', '/a/b/ca', '/a/b/d'];

    const result = removeSubfolders(folder);
    const expected = ['/a/b/c', '/a/b/ca', '/a/b/d'];

    expect(result).toEqual(expected);
  });

  it('should remove sub-folders from folder = ["/ah/al/am","/ah/al"]', () => {
    const folder = ['/ah/al/am', '/ah/al'];

    const result = removeSubfolders(folder);
    const expected = ['/ah/al'];

    expect(result).toEqual(expected);
  });
});
