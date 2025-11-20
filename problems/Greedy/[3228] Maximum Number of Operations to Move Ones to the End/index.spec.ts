import { describe, expect, it } from 'vitest';
import { maxOperations } from '.';

describe('maxOperations', () => {
  it('example 1', () => {
    const s = '1001101';
    const result = maxOperations(s);
    expect(result).toBe(4);
  });

  it('example 2', () => {
    const s = '00111';
    const result = maxOperations(s);
    expect(result).toBe(0);
  });
});
