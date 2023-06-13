const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// const total = prices.reduce((total, price) => {
//   return total + price;
// });

const total = prices.reduce((total, price) => total + price);

const minprice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

const movies = [
  {
    title: "Amadeus",
    scroe: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    scroe: 35,
    year: 2013,
  },
  {
    title: "13 Going on 30",
    scroe: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    scroe: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    scroe: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    scroe: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    scroe: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    scroe: 77,
    year: 1999,
  },
  {
    title: "Alien",
    scroe: 90,
    year: 1979,
  },
];

const highestRated = movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100);
