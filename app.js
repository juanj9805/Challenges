const game = {
  team1: "team Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Solution 1
for (const [i, name] of game.scored.entries()) {
  console.log(`${name} ${i + 1}`);
}

// Solution 2
let avg = 0;
for (const odd of Object.values(game.odds)) {
  console.log(odd);
  avg += odd;
}
console.log(avg / Object.entries(game.odds).length);

// Solution 3
for (const [team, odd] of Object.entries(game.odds))
  console.log(`odd of victory ${team}: ${odd}`);
