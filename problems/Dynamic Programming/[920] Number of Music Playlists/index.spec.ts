import { describe, expect, it } from 'vitest';
import { numMusicPlaylists } from '.';

describe('numMusicPlaylists', () => {
  it('should return the correct number of playlists when n = 3, goal = 3, k = 1', () => {
    const n = 3;
    const goal = 3;
    const k = 1;
    const expected = 6;

    const actual = numMusicPlaylists(n, goal, k);

    expect(actual).toEqual(expected);
  });

  it('should return the correct number of playlists when n = 2, goal = 3, k = 0', () => {
    const n = 2;
    const goal = 3;
    const k = 0;
    const expected = 6;

    const actual = numMusicPlaylists(n, goal, k);

    expect(actual).toEqual(expected);
  });

  it('should return the correct number of playlists when n = 2, goal = 3, k = 1', () => {
    const n = 2;
    const goal = 3;
    const k = 1;
    const expected = 2;

    const actual = numMusicPlaylists(n, goal, k);

    expect(actual).toEqual(expected);
  });
});
