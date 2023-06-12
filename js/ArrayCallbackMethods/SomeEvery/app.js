const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

exams.every((score) => score >= 75);

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

movies.some((movie) => movie.year > 2015);
