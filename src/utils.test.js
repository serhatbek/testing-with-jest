import { describe, expect, it } from "vitest";
import { range } from "./utils";

// Testing utility functions

describe("utils", () => {
  describe("⭐ is equal", () => {
    it("check 2 equal 4", () => {
      expect(2 * 2).toEqual(4);
    });
  });

  describe("⭐ range", () => {
    it("return correct results from 1 - 6", () => {
      const result = range(1, 6);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("⭐ range", () => {
    it("return correct results from 41 - 45", () => {
      const result = range(41, 45);
      expect(result).toEqual([41, 42, 43, 44]);
    });
  });
});
