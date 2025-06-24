// const game = {
//   team1: "team Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Solution 1
// for (const [i, name] of game.scored.entries()) {
//   console.log(`${name} ${i + 1}`);
// }

// // Solution 2
// let avg = 0;
// for (const odd of Object.values(game.odds)) {
//   console.log(odd);
//   avg += odd;
// }
// console.log(avg / Object.entries(game.odds).length);

// // Solution 3
// for (const [team, odd] of Object.entries(game.odds))
//   console.log(`odd of victory ${team}: ${odd}`);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// // Solution 1
// // console.log(gameEvents.values());

// const arr = [...gameEvents.values()];

// console.log(arr);

// // console.log(gameEvents);

// const eventsSet = new Set(arr);
// console.log(eventsSet);

// // Solution 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // Solution 3
// for (const [minute, event] of gameEvents) {
//   console.log(`${event} (${minute < 45 ? "first time" : "second time"})`);
// }
//

// Coding challenge #4 Strings

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀

// const textarea = document.body.append(document.createElement("textarea"));
// const button = document.body.append(document.createElement("button"));

// const text = document.querySelector("textarea").value;

// document.querySelector("button").addEventListener("click", function () {
//   const input = text.toLowerCase();

//   textarea.value = input;
// });

// console.log(document.querySelector("textarea").value);

// console.log("     HI juan S da ".trim().toLowerCase());

const convert = function () {
  const input = prompt("send a msg");
  const textL = input.toLowerCase();
  const messages = textL.split("_");

  const messagesUp = [];

  for (const message of messages) {
    messagesUp.push(message.replace(message[0], message[0].toUpperCase()));
  }
  console.log(messagesUp.join("").trim());
};

const convert1 = function () {
  const message = prompt();
  // console.log(message);

  const rows = message.split("\n");
  // console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
  }
};

convert();
convert1();
