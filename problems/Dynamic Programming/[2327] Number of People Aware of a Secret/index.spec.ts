import { describe, expect, it } from 'vitest';
import { peopleAwareOfSecret } from '.';

describe('peopleAwareOfSecret', () => {
  it('example 1', () => {
    const n = 6;
    const delay = 2;
    const forget = 4;

    const result = peopleAwareOfSecret(n, delay, forget);

    expect(result).toBe(5);
  });

  it('example 2', () => {
    const n = 4;
    const delay = 1;
    const forget = 3;

    const result = peopleAwareOfSecret(n, delay, forget);

    expect(result).toBe(6);
  });
});
