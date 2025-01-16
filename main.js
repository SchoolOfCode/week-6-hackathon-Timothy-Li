/*
INSTRUCTIONS

*/

export function pokeCryGenerator(pokemon) {
  pokemon = pokemon.trim();
  if (pokemon === "") {
    return "";
  }
  let firstFourChars = pokemon.slice(0, 4);
  let lowerCasePart = firstFourChars.toLowerCase();
  let capitalisedPart =
    lowerCasePart.charAt(0).toUpperCase() + lowerCasePart.slice(1);
  let result = `${capitalisedPart}-${lowerCasePart}`;
  return result;
}
