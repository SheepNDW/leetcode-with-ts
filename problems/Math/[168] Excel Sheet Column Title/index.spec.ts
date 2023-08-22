import { describe, expect, it } from 'vitest';
import { convertToTitle } from '.';

describe('convertToTitle', () => {
  const testCases = [
    { input: 1, output: 'A' },
    { input: 26, output: 'Z' },
    { input: 28, output: 'AB' },
    { input: 701, output: 'ZY' },
    { input: 703, output: 'AAA' },
  ];

  for (const { input, output } of testCases) {
    it(`should return "${output}" when input is ${input}`, () => {
      expect(convertToTitle(input)).toEqual(output);
    });
  }
});
