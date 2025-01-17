/*
INSTRUCTIONS

* Introduction *
Welcome, Pokémon Trainer! 🌟

Professor Oak has given you a very special mission: to develop a Pokémon Cry Generator! 🎵 You see, every Pokémon has a unique way of calling out its own name, Pikachu famously says "Pika-pika"! ⚡.

Your job is to write a program (function) that generates a Pokémon's signature cry based on its name. This will help trainers recognise Pokémon in the wild and help them bond with their own Pokémon.

* Task *

Implement the function pokeCryGenerator(pokemon), which takes a Pokémon’s name as input and returns its cry. The cry follows a simple pattern:

1. Take the first four characters of the name. (If the name has fewer than four letters, use the whole name.)
2. Repeat the first four characters, separating the two parts with a hyphen (-).
3. The first part should have the first letter capitalised, whilst the second part should all be lowercase.

E.g.
pokeCryGenerator("Charmander") // Output: "Char-char"

-- Your function should also handle some tricky cases - after all, Pokémon names come in all shapes and sizes! -- 

4. Whitespace handling: White spaces in the input should be ignored.

E.g.
pokeCryGenerator("   Dratini   ") // Output: "Drat-drat"

5. If the input is an empty string, or is a string containing only white spaces, the output should be an empty string.

E.g.
pokeCryGenerator("")            // Output: ""
pokeCryGenerator("       ")     // Output: ""

6. Case handling: The input may come in all uppercase, all lowercase, or mixed case - your function should always format the output to meet the criteria in steps 1 to 3.

E.g.
pokeCryGenerator("pIkAcHu")     // Output "Pika-pika"

*/

export function pokeCryGenerator(pokemon) {
  // complete to function to pass the Kata, good luck trainer!
}
