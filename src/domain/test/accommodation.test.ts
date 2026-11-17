import { describe, beforeEach, test , expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation("Acom1", 300);
    void accommodation;
  });

  describe("Accommodation name", () => {

     test("should set name correctly", () => {
    expect(accommodation.getName()).toBe("Acom1");
  });

  test("should throw error if name is empty", () => {
    expect(() => accommodation.setName("")).toThrow();
  });

  test("should throw error if name has only spaces", () => {
    expect(() => accommodation.setName("   ")).toThrow();
  });

  test("should throw error if name is not a string", () => {
    expect(() => accommodation.setName(123 as unknown as string)).toThrow();
  });

  test("should trim the name", () => {
    accommodation.setName("  Hotel Sol  ");
    expect(accommodation.getName()).toBe("Hotel Sol");
  });
  });


  describe("Accommodation cost", () => {
  test("should set cost correctly", () => {
    expect(accommodation.getCost()).toBe(300);
  });

  test("should throw error if cost is negative", () => {
    expect(() => accommodation.setCost(-1)).toThrow();
  });

  test("should accept a cost of zero", () => {
    accommodation.setCost(0);
    expect(accommodation.getCost()).toBe(0);
  });

  test("should accept a decimal cost", () => {
    accommodation.setCost(99.5);
    expect(accommodation.getCost()).toBe(99.5);
  });

  test("should throw error if cost is not a number", () => {
    expect(() => accommodation.setCost(Number.NaN)).toThrow();
  });
});
});



