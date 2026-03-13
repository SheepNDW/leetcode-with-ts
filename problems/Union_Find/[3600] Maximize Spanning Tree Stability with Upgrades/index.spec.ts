import { describe, expect, it } from "vitest";
import { maxStability } from ".";

describe("maxStability", () => {
  it("example 1", () => {
    const n = 3;
    const edges = [
      [0, 1, 2, 1],
      [1, 2, 3, 0],
    ];
    const k = 1;

    const result = maxStability(n, edges, k);

    expect(result).toBe(2);
  });

  it("example 2", () => {
    const n = 3;
    const edges = [
      [0, 1, 4, 0],
      [1, 2, 3, 0],
      [0, 2, 1, 0],
    ];
    const k = 2;

    const result = maxStability(n, edges, k);

    expect(result).toBe(6);
  });
});
