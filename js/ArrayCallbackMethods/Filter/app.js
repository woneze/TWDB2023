const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

numbers.filter((n) => {
  return n < 10;
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

const goodMovies = movies.filter((m) => m.score > 80);
const goodTitles = goodMovies.map((m) => m.title);

movies.filter((m) => m.score > 80).map((m) => m.title);

const badMovies = movies.filter((m) => m.score < 70);

const recentMovies = movies.filter((m) => m.year > 2000);
