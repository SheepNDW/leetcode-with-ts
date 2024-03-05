import { describe, expect, it } from 'vitest';
import { bagOfTokensScore } from '.';

describe.skip('bagOfTokensScore', () => {
  it('should return 0 for tokens = [100], power = 50', () => {
    const tokens = [100];
    const power = 50;

    const result = bagOfTokensScore(tokens, power);

    expect(result).toBe(0);
  });

  it('should return 1 for tokens = [200, 100], power = 150', () => {
    const tokens = [200, 100];
    const power = 150;

    const result = bagOfTokensScore(tokens, power);

    expect(result).toBe(1);
  });

  it('should return 2 for tokens = [100, 200, 300, 400], power = 200', () => {
    const tokens = [100, 200, 300, 400];
    const power = 200;

    const result = bagOfTokensScore(tokens, power);

    expect(result).toBe(2);
  });
});
