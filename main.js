// this is where the function will go that is being tested
// function will take first letters of the passed pokemon name and return it twice with a hyphen in between

// // simplest way to pass test
// export function testPokeCryGenerator(pokemon) {
//   return "Pika-pika";
// }

// function with code that works with multiple inputs

export function pokeCryGenerator(pokemon) {
  if (pokemon.trim() === "") {
    return "";
  }
  let preHyphen = pokemon.trim().slice(0, 4);
  let postHyphen = preHyphen.toLowerCase();
  let result = `${preHyphen}-${postHyphen}`;
  return result;
}
