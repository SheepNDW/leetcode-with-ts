import { describe, expect, it } from 'vitest';
import { canReach } from '.';

describe.skip('canReach', () => {
  it('should return true for s = "011010", minJump = 2, maxJump = 3', () => {
    const s = '011010';
    const minJump = 2;
    const maxJump = 3;

    const result = canReach(s, minJump, maxJump);

    expect(result).toBe(true);
  });

  it('should return false for s = "01101110", minJump = 2, maxJump = 3', () => {
    const s = '01101110';
    const minJump = 2;
    const maxJump = 3;

    const result = canReach(s, minJump, maxJump);

    expect(result).toBe(false);
  });
});
