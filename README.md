# ABOUT

SoC Cohort 18 Week 6 Hackathon Project - Testing and Codewars-stle Kata

Team HAT (Room 2): Hope Pichur, Alistair Lambert, Timothy Li

As a team, we valued: fun, skill development and usability.

# PLANNING AND EXECUTION

- Disney Ideation

* Gaming
* ** Pokémon ** we decided on this theme
* Dinosaurs

Each team-member was tasked with creating a Codewars-style Kata (a small coding challenge) within an overarching Pokemon theme.

We each took responsibility for creating a Kata involving a different data type:

Hope: Array
Alistair: Number
Tim: String

We worked indepedently on our own Kata but maintained constant communication to offer eachother assistance and discussion of ideas (via Teams meeting).

The idea for my Kata was for a function that takes in the name of a Pokemon and returns a defined Pokemon cry (the sound a Pokemon typically makes).

E.g. Pikachu tends to say "Pika-pika"!

For MVP 1, the function called `pokeCryGenerator(pokemon)` would take the first 4 letters of the input, repeat it once, join it with a hyphen, make the second substring all lowercase, and return the result.

E.g. pokeCryGenerator(Pikachu) would return "Pika-pika".

For MVP 2, the difficulty of the Kata would increase, the tests would therefore need to cover more scenarios and edge cases - see the equivalence partitioning table below:

- Equivalence Partitioning Table
  This table categorises different input types and expected outputs for the `pokeCryGenerator` function.

| Partition Type           | Input Example | Description                   | Expected Output |
| ------------------------ | ------------- | ----------------------------- | --------------- |
| Valid Names (4+ letters) | "Pikachu"     | Standard valid Pokémon name   | "Pika-pika"     |
|                          | "Charmander"  | Standard valid Pokémon name   | "Char-char"     |
|                          | "Bulbasaur"   | Standard valid Pokémon name   | "Bulb-bulb"     |
|                          | "Squirtle"    | Standard valid Pokémon name   | "Squi-squi"     |
| Valid Names (3 letters)  | "Mew"         | Name has only 3 letters       | "Mew-mew"       |
|                          | "Muk"         | Name has only 3 letters       | "Muk-muk"       |
| Edge Cases               | ""            | Empty string input            | ""              |
|                          | " "           | String containing only spaces | ""              |
|                          | " Dratini "   | Name with extra spaces        | "Drat-drat"     |
| Capitalisation Handling  | "PIKACHU"     | All uppercase input           | "Pika-pika"     |
|                          | "pikachu"     | All lowercase input           | "Pika-pika"     |
|                          | "pIkAcHu"     | Mixed case input              | "Pika-pika"     |

- The TDD cycle

1. Red: Write a failing test.
2. Green: Write the simplest code to pass the test.
3. Refactor: Improve the code while ensuring tests still pass.

# USER GUIDE

Preface:

Project uses the Node.js runtime environment.
User interacts with project directly in files and terminal.
Ensure requires dependencies are installed 'npm install'

Steps:

1. In main.js please read the challenge instructions.
2. Complete the missing code in the pokeCryGenerator function.
3. In the terminal type 'npn run test'
4. (a) If any test fails: "Please refactor and try again!".
   (b) If all tests pass: "Congratulations you've passed the Kata and are on your way to becoming a Pokemon master!".
5. Please see other Katas created by my teammates Hope Pichur and Alistair Lambert.

Thank you very much, we look forward to receiving any feedback and hope you had fun!.
