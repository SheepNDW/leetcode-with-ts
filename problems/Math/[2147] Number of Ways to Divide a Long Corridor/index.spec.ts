import { describe, expect, it } from 'vitest';
import { numberOfWays } from '.';

describe.skip('numberOfWays', () => {
  it('should retrun 3 when corridor = "SSPPSPS"', () => {
    const corridor = 'SSPPSPS';

    const result = numberOfWays(corridor);

    expect(result).toBe(3);
  });

  it('should retrun 1 when corridor = "PPSPSP"', () => {
    const corridor = 'PPSPSP';

    const result = numberOfWays(corridor);

    expect(result).toBe(1);
  });

  it('returns 0 if there is no way to divide the corridor (S)', () => {
    const corridor = 'S';
    const result = numberOfWays(corridor);
    expect(result).toBe(0);
  });

  it('returns 0 if there are only plants', () => {
    const corridor = 'PPPP';

    const result = numberOfWays(corridor);

    expect(result).toBe(0);
  });
});
