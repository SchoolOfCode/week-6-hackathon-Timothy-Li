import { test, expect } from "vitest";
import { pokeCryGenerator } from "./main.js";

// testing core functionality with correct input format

test("Should return Pika-pika with input Pikachu", () => {
  expect(pokeCryGenerator("Pikachu")).toBe("Pika-pika");
});

test("Should return Char-char with input Charmander", () => {
  expect(pokeCryGenerator("Charmander")).toBe("Char-char");
});

test("Should return Bulb-bulb with input Bulbasaur", () => {
  expect(pokeCryGenerator("Bulbasaur")).toBe("Bulb-bulb");
});

test("Should return Squi-squi with input Squirtle", () => {
  expect(pokeCryGenerator("Squirtle")).toBe("Squi-squi");
});

// EDGE CASE HANDLING

// test for Pokemon with names less than 4 letters
test("Should return Mew-mew string with input Mew", () => {
  expect(pokeCryGenerator("Mew")).toBe("Mew-mew");
});

// test for empty string input
test("Should return empty string if input empty string", () => {
  expect(pokeCryGenerator("")).toBe("");
});

// test for string containing spaces only
test("Should return empty string if input empty string", () => {
  expect(pokeCryGenerator("       ")).toBe("");
});

// test for extra spaces in input
test("Should return Drat-drat with    Dratini    input", () => {
  expect(pokeCryGenerator("   Dratini   ")).toBe("Drat-drat");
});
