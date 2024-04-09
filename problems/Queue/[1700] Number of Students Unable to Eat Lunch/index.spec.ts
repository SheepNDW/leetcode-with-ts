import { describe, expect, it } from 'vitest';
import { countStudents } from '.';

describe.skip('countStudents', () => {
  it('should return 0 for students = [1,1,0,0], sandwiches = [0,1,0,1]', () => {
    const students = [1, 1, 0, 0];
    const sandwiches = [0, 1, 0, 1];

    const result = countStudents(students, sandwiches);

    expect(result).toBe(0);
  });

  it('should return 3 for students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]', () => {
    const students = [1, 1, 1, 0, 0, 1];
    const sandwiches = [1, 0, 0, 0, 1, 1];

    const result = countStudents(students, sandwiches);

    expect(result).toBe(3);
  });
});
