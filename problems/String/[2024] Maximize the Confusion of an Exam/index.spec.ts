import { describe, expect, it } from 'vitest';
import { maxConsecutiveAnswers } from '.';

describe('maxConsecutiveAnswers', () => {
  it('should return the maximum number of consecutive Ts or Fs', () => {
    const answerKey = 'TTFF';
    const k = 2;

    const result = maxConsecutiveAnswers(answerKey, k);

    expect(result).toBe(4);

    const answerKey2 = 'FFFTTFTTFT';
    const k2 = 3;

    const result2 = maxConsecutiveAnswers(answerKey2, k2);

    expect(result2).toEqual(8);
  });

  it('should return the maximum number of consecutive Ts or Fs with only one possible change', () => {
    const answerKey = 'TFFT';
    const k = 1;

    const result = maxConsecutiveAnswers(answerKey, k);

    expect(result).toBe(3);
  });

  it('should return the maximum number of consecutive Ts or Fs with multiple possible changes', () => {
    const answerKey = 'TTFTTFTT';
    const k = 1;

    const result = maxConsecutiveAnswers(answerKey, k);

    expect(result).toBe(5);
  });

  it('should handle the edge case of one question', () => {
    const answerKey = 'T';
    const k = 1;

    const result = maxConsecutiveAnswers(answerKey, k);

    expect(result).toBe(1);
  });

  it('should handle the edge case of all questions have the same answer', () => {
    const answerKey = 'TTTT';
    const k = 2;

    const result = maxConsecutiveAnswers(answerKey, k);

    expect(result).toBe(4);
  });

  it('should handle the edge case where k equals to the number of questions', () => {
    const answerKey = 'TFTF';
    const k = 4;

    const result = maxConsecutiveAnswers(answerKey, k);

    expect(result).toBe(4);
  });
});
