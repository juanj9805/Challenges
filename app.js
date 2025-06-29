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

//
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// const op = function (msg) {
//   const sentences = msg.split("+");
//   // console.log(sentences);

//   const arr = [];

//   for (const sentence of sentences) {
//     // console.log(sentence);
//     const [info, from, to, time] = sentence.split(";");
//     const iok = info.slice(1).replace("_", " ");
//     const fok = from.slice(0, 3).toUpperCase();
//     const tok = to.slice(0, 3).toUpperCase();

//     console.log(
//       `${
//         iok.includes("Delayed") ? "😒 " : ""
//       }${iok} from ${fok} to ${tok} (${time})`
//     );
//   }
// };

// op(flights);

// const ok = function (msg) {
//   const [uno, dos, tres, cuatro] = msg.split("+");

//   const [info, from, to, time] = uno.split(";");
//   const iok = info.slice(1).replace("_", " ");
//   const fok = from.slice(0, 3).toUpperCase();
//   const tok = to.slice(0, 3).toUpperCase();

// console.log(time);
// console.log(from);
// console.log(to);
// console.log(time);
// const tiok =

// console.log(
//   `${
//     iok.includes("Departures") ? iok.padStart(30, "ok") : ""
//   } ${iok} from ${fok} to ${tok} (${time})`
// );

// console.log(
//   `${
//     iok.includes("Delayed") ? "😒 " : ""
//   }${iok} from ${fok} to ${tok} (${time})`
// );

// uno.replaceAll("_", " ");
// .replaceAll(";", " ");
// console.log(un.padStart(30, "#"));

// const words = [];
// };
//   for (const info of sentences) {
//     const [status, country, destination, time] = info.split(";");
//     // console.log(typeof status);
//     // const statu = status;

//     // words.push(sentence.includes("Delayed") ? sentence.padStart(0, "+") : "");

//     // words.push(info.replaceAll(";", " ").replaceAll("93766109", "").split("_"));
//   }

//   // console.log(words);

//   // console.log(w);
// };

// console.log("juan");

// ok(flights);

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)--------------------------------------------------------------------
  
  1.2. Based on the input number, update the a nswers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?) ---------------------------------------------------------------------------------
2. Call this method whenever the user clicks the "Answer poll" button. ---------------------------
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const choice = Number(
      prompt(
        "What is your favourite programming language   0: JavaScript        1: Python        2: Rust        3: C++        (Write option number)"
      )
    );

    if (choice <= 3 && choice === 3) {
      // this.answers.push(choice);
      // console.log(this.answers);
      this.answers[3]++;
      console.log(this.answers);
    }
  },
};

console.log(poll.answers);

document
  .querySelector(".btn")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
