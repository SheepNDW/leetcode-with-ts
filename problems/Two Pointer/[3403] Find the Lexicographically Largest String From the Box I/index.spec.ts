import { describe, expect, it } from 'vitest';
import { answerString } from '.';

describe('answerString', () => {
  it('example 1', () => {
    const word = 'dbca';
    const numFriends = 2;

    const result = answerString(word, numFriends);

    expect(result).toBe('dbc');
  });

  it('example 2', () => {
    const word = 'gggg';
    const numFriends = 4;

    const result = answerString(word, numFriends);

    expect(result).toBe('g');
  });

  it('example 3', () => {
    const word = 'dah';
    const numFriends = 3;

    const result = answerString(word, numFriends);

    expect(result).toBe('h');
  });

  it('example 4', () => {
    const word = 'aann';
    const numFriends = 2;

    const result = answerString(word, numFriends);

    expect(result).toBe('nn');
  });
});
