import { describe, expect, it } from 'vitest';
import { predictPartyVictory } from '.';

describe.skip('predictPartyVictory', () => {
  const testCases = [
    { input: 'RD', expected: 'Radiant' },
    { input: 'DRRRDD', expected: 'Radiant' },
    { input: 'DDRRRR', expected: 'Radiant' },
    { input: 'RRDDD', expected: 'Radiant' },
    { input: 'RDD', expected: 'Dire' },
    { input: 'DDRRR', expected: 'Dire' },
    { input: 'D', expected: 'Dire' },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return "${expected}" for input "${input}"`, () => {
      const result = predictPartyVictory(input);
      expect(result).toBe(expected);
    });
  });
});
