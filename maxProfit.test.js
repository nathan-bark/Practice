import { maxProfit } from "./maxProfit";

// Returns 0 if the prices array is empty.
it("should return 0 when the prices array is empty", () => {
  const prices = [];
  const result = maxProfit(prices);
  expect(result).toBe(0);
});

// Returns 0 for an array of prices with only one element
it("should return 0 for an array of prices with only one element", () => {
  const prices = [7];
  const expected = 0;
  const result = maxProfit(prices);
  expect(result).toBe(expected);
});

// Returns the correct maximum profit for an array of prices with the same value
it("should return the correct maximum profit for an array of prices with the same value", () => {
  const prices = [5, 5, 5, 5, 5];
  const expected = 0;
  const result = maxProfit(prices);
  expect(result).toBe(expected);
});

// Returns the maximum profit possible from a given array of prices
it("should return the maximum profit when given an array of prices", () => {
  const prices = [7, 1, 5, 3, 6, 4];
  const result = maxProfit(prices);
  expect(result).toBe(5);
});
