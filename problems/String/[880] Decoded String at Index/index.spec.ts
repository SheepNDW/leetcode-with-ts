import { describe, expect, it } from 'vitest';
import { decodeAtIndex } from '.';

describe('decodeAtIndex', () => {
  it('should return "o" when s is "leet2code3" and k is 10', () => {
    const s = 'leet2code3';
    const k = 10;

    const result = decodeAtIndex(s, k);

    expect(result).toBe('o');
  });

  it('should return "h" when s is "ha22" and k is 5', () => {
    const s = 'ha22';
    const k = 5;

    const result = decodeAtIndex(s, k);

    expect(result).toBe('h');
  });

  it('should return "a" when s is "a2345678999999999999999" and k is 1', () => {
    const s = 'a2345678999999999999999';
    const k = 1;

    const result = decodeAtIndex(s, k);

    expect(result).toBe('a');
  });

  it('should return "b" for s = "jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt" and k = 731963130', () => {
    const s =
      'jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt';
    const k = 731963130;

    const result = decodeAtIndex(s, k);

    expect(result).toBe('b');
  });
});
