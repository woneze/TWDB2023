// const add = function (x, y) {
//   return x + y;
// };

// const add = (x, y) => {
//   return x + y;
// };

const square = (num) => {
  return num * num;
};

// const rollDie = () => {
//   return Math.floor(Math.random() & 6) + 1;
// };

const rollDie = () => Math.floor(Math.random() & 6) + 1;

const add = (a, b) => a + b;

// const isEven = function (num) {
//   return num % 2 === 0;
// } // regular function expression

// const isEven = (num) => {
//   return num % 2 === 0;
// } // arrow function with parens around param

// const isEven = num => {
//   return num % 2 === 0 ;
// } // no parens around param

// const isEven = num => (
//   num % 2 === 0
// ); // implicit return

const isEven = (num) => num % 2 === 0;
// one-liner implicit return
// 깔끔한 표현식 단 하나로 유일한 값을 반환할 경우에만 사용함.

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

// const newMovies = movies.map(function (moive) {
//   return `${movie.title} - ${movie.score} / 10`;
// });

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score} / 10`);
