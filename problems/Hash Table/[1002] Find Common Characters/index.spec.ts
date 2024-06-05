import { describe, expect, it } from 'vitest';
import { commonChars } from '.';

describe.skip('commonChars', () => {
  it('should return the common characters for ["bella","label","roller"]', () => {
    const words = ['bella', 'label', 'roller'];

    const result = commonChars(words);

    expect(result).toHaveLength(3);
    expect(result.sort((a, b) => a.localeCompare(b))).toEqual(['e', 'l', 'l']);
  });

  it('should return the common characters for ["cool","lock","cook"]', () => {
    const words = ['cool', 'lock', 'cook'];

    const result = commonChars(words);

    expect(result).toHaveLength(2);
    expect(result.sort((a, b) => a.localeCompare(b))).toEqual(['c', 'o']);
  });
});
