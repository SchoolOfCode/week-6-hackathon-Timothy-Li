import { describe, it, expect } from "vitest";
import { pokeCryGenerator } from "./main.js";

// Testing core functionality with correct input format
describe("pokeCryGenerator core functionality tests", () => {
  it("Should return Pika-pika with input Pikachu", () => {
    expect(pokeCryGenerator("Pikachu")).toBe("Pika-pika");
  });

  it("Should return Char-char with input Charmander", () => {
    expect(pokeCryGenerator("Charmander")).toBe("Char-char");
  });

  it("Should return Bulb-bulb with input Bulbasaur", () => {
    expect(pokeCryGenerator("Bulbasaur")).toBe("Bulb-bulb");
  });

  it("Should return Squi-squi with input Squirtle", () => {
    expect(pokeCryGenerator("Squirtle")).toBe("Squi-squi");
  });
  // name only has 3 letters
  it("Should return Mew-mew string with input Mew", () => {
    expect(pokeCryGenerator("Mew")).toBe("Mew-mew");
  });
  // name only has 3 letters
  it("Should return Muk-muk string with input Muk", () => {
    expect(pokeCryGenerator("Muk")).toBe("Muk-muk");
  });
});

// Handling added complexity (i.e. edge cases)
describe("pokeCryGenerator handling of added complexity", () => {
  // empty string input
  it("Should return empty string if input empty string", () => {
    expect(pokeCryGenerator("")).toBe("");
  });

  // string containing spaces only
  it("Should return empty string if input is a string containing only spaces", () => {
    expect(pokeCryGenerator("       ")).toBe("");
  });

  // extra spaces in input
  it("Should return Drat-drat with    Dratini    input", () => {
    expect(pokeCryGenerator("   Dratini   ")).toBe("Drat-drat");
  });
});

// Handling of capitilisation
describe("pokeCryGenerator capitilisation handling", () => {
  // all caps
  it("Should return 'Pika-pika' with input PIKACHU'", () => {
    expect(pokeCryGenerator("PIKACHU")).toBe("Pika-pika");
  });
  // all lowercase
  it("Should return 'Pika-pika' with input pikachu", () => {
    expect(pokeCryGenerator("pikachu")).toBe("Pika-pika");
  });
  // mixed upper and lower casing
  it("Should return 'Pika-pika' with input pIkAcHu", () => {
    expect(pokeCryGenerator("pIkAcHu")).toBe("Pika-pika");
  });
});
