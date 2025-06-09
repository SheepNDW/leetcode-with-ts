import { describe, expect, it } from 'vitest';
import { robotWithString } from '.';

describe.skip('robotWithString', () => {
  it('example 1', () => {
    const s = 'zza';

    const result = robotWithString(s);

    expect(result).toBe('azz');
  });

  it('example 2', () => {
    const s = 'bac';

    const result = robotWithString(s);

    expect(result).toBe('abc');
  });

  it('example 3', () => {
    const s = 'bdda';

    const result = robotWithString(s);

    expect(result).toBe('addb');
  });

  it('example 4', () => {
    const s = 'vzhofnpo';

    const result = robotWithString(s);

    expect(result).toBe('fnohopzv');
  });

  it('example 5', () => {
    const s = 'mmuqezwmomeplrtskz';

    const result = robotWithString(s);

    expect(result).toBe('eekstrlpmomwzqummz');
  });
});
