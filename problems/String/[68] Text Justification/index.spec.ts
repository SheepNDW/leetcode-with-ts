import { describe, expect, it } from 'vitest';
import { fullJustify } from '.';

describe('fullJustify', () => {
  it('should justify a standard text input', () => {
    const words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];
    const maxWidth = 16;

    const result = fullJustify(words, maxWidth);

    // prettier-ignore
    expect(result).toEqual([
      'This    is    an',
      'example  of text',
      'justification.  '
    ]);
  });

  it('should handle words with various lengths', () => {
    const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'];
    const maxWidth = 16;

    const result = fullJustify(words, maxWidth);

    // prettier-ignore
    expect(result).toEqual([
      'What   must   be',
      'acknowledgment  ',
      'shall be        '
    ]);
  });

  it('should justify text with maxWidth = 20', () => {
    const words = [
      'Science',
      'is',
      'what',
      'we',
      'understand',
      'well',
      'enough',
      'to',
      'explain',
      'to',
      'a',
      'computer.',
      'Art',
      'is',
      'everything',
      'else',
      'we',
      'do',
    ];
    const maxWidth = 20;

    const result = fullJustify(words, maxWidth);

    expect(result).toEqual([
      'Science  is  what we',
      'understand      well',
      'enough to explain to',
      'a  computer.  Art is',
      'everything  else  we',
      'do                  ',
    ]);
  });

  it('should handle the case with a single word', () => {
    const words = ['single'];
    const maxWidth = 7;

    const result = fullJustify(words, maxWidth);

    expect(result).toEqual(['single ']);
  });
});
