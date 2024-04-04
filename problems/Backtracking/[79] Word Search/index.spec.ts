import { describe, expect, it } from 'vitest';
import { exist } from '.';

describe.skip('exist', () => {
  it('should return true for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'ABCCED';
    expect(exist(board, word)).toBe(true);
  });

  it('should return true for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'SEE';
    expect(exist(board, word)).toBe(true);
  });

  it('should return false for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'ABCB';
    expect(exist(board, word)).toBe(false);
  });

  it('should return true for board = [["C","A","A"],["A","A","A"],["B","C","D"]], word = "AAB"', () => {
    const board = [
      ['C', 'A', 'A'],
      ['A', 'A', 'A'],
      ['B', 'C', 'D'],
    ];
    const word = 'AAB';
    expect(exist(board, word)).toBe(true);
  });
});
