import { describe, it, expect } from 'vitest';
import { reverseString } from '.';

describe.skip('reverseString', () => {
  it('should reverse the characters in the input array of "hello"', () => {
    const input = ['h', 'e', 'l', 'l', 'o'];

    reverseString(input);

    expect(input).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  it('should reverse the characters in the input array of "Hannah"', () => {
    const input = ['H', 'a', 'n', 'n', 'a', 'h'];

    reverseString(input);

    expect(input).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
