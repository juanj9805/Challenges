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
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.-----------

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const choice = Number(
//       prompt(
//         "What is your favourite programming language   0: JavaScript        1: Python        2: Rust        3: C++        (Write option number)"
//       )
//     );

//     if (choice <= 3 && choice === 3) {
//       // this.answers.push(choice);
//       // console.log(this.answers);
//       this.answers[3]++;
//       // console.log(this.answers);
//     }

//     this.displayResults(this.answers);
//   },

//   displayResults(type) {
//     if (typeof type === "object") {
//       console.log(type);
//     }

//     if (typeof type === "string") {
//       console.log("hi");
//     }
//   },
// };

// console.log(poll.answers);

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     // Get answer
//     // First correction I should create a literal string passing the props question and options(these are an array so I should use a join method to convert from an array to string and the parameter should be new line \n)
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join("\n")}`)
//     );
//     console.log(answer);

//     // Register answer
//     // I don't need to add explicitly if to check the type of answer, I should pass in a dynamic way the extension of array (always avoid hard code things) using it's property length and I should use short circuiting to increase the number on the array
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults("string");
//   },

//   // Display answer
//   // I should add a default value to type argument, I should add else if to convert the array to string using the join method
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };

// // poll.registerNewAnswer();

// document
//   .querySelector(".btn")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

// /*
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//     console.log("click");
//   });
// })();
// */

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
//
// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const corrected = [...dogsJulia.slice(1, -2)];
//   console.log(corrected);
//   console.log(dogsJulia);
//   const complete = [...corrected, ...dogsKate];

//   complete.forEach(function (dogAge, i) {
//     const type = dogAge >= 3 ? "adult" : "puppy";
//     console.log(`
//       ${
//         type === "adult"
//           ? `Dog number ${i + 1} is and ${type} and is ${dogAge} years old`
//           : `Dog number ${i + 1} is still a ${type}`
//       }
//       `);
//   });
// };

// checkDogs(julia, kate);

// console.log("----------------------------------------------------------");

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const ageOk = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
//   const exclude = ageOk.filter((age) => age >= 18);
//   const avg = exclude.reduce((acc, age) => acc + age, 0) / exclude.length;
//   // return ageOk;
//   // return exclude;
//   return avg;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

///////////////////////////////////////
// Coding Challenge #4

// TEST DATA:

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

*/
// 1
const huskyWeight = breeds.find(
  (breed) => breed.breed === "Husky"
).averageWeight;
// console.log(huskyWeight);

// const dogActivities = breeds.some((breed) =>
//   breed.activities.includes("running" && "fetch")
// ).name;

// 2
const dogActivities = breeds.find(
  (breed) =>
    breed.activities.includes("fetch") && breed.activities.includes("running")
).breed;
// console.log(dogActivities);

// 3
const allActivities = breeds.flatMap((breed) => breed.activities.flat(1));
// console.log(allActivities);

// 4
const UniqueActivities = [...new Set(allActivities)];
// console.log(UniqueActivities);

// 5

const swimingAd = [
  ...new Set(
    breeds
      .filter((breed) => breed.activities.includes("swimming"))
      .flatMap((activitie) => activitie.activities)
      .filter((activitie) => activitie !== "swimming")
  ),
];
// console.log(swimingAd);

// 6
// console.log(breeds.every((breed) => breed.averageWeight > 10));

// 7
// console.log(breeds.some((activitie) => activitie.activities.length >= 3));

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.


GOOD LUCK 😀
*/

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1
dogs.forEach((dog) => (dog.recFood = dog.weight ** 0.75 * 28));
// console.log(dogs);

// 2
// const seek = dogs.filter((dog) => dog.owners.includes("Sarah"));
const seek = dogs.find((dog) => dog.owners.includes("Sarah"));

// 3
// console.log(
//   `Sarah's dog eats too ${seek.curFood > seek.recFood ? "much" : "little"}`
// );

const { much, little } = dogs.reduce(
  (acc, cur) => {
    acc[cur.curFood > cur.recFood ? "much" : "little"] += cur;
    return acc;
  },
  { much: 0, little: 0 }
);

// console.log(much, little);

// OBJECTS

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   console.log(this.speed - 5);
// };

// const mustang = new Car("ford", 95);
// const ferrari = new Car("ferrari", 120);

class Car {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }

  accelerate() {
    console.log((this.speed += 10));
  }

  brake() {
    console.log((this.speed -= 5));
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car("ford", 100);

ford.speedUS = 50;
console.log(ford);
