// const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// const [gold, silver, bronze, ...everyoneElse] = scores;

const user = {
  email: "harvey@gmail.com",
  password: "sCoTt1948sMiTh",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors",
  city: "San Francisco",
  state: "California",
};

const user2 = {
  email: "Stacy@gmail.com",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1987,
  city: "Tulsa",
  state: "Oklahoma",
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, city, bio } = user;

const { born: birthYear, died: deathYear = "N/A" } = user;

// const { city, state, died = "N/A" } = user2;

// function fullName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

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

// movies.filter((moive) => movies.score >= 90);
// movies.filter(({ socre }) => score >= 90);

movies.map(({ title, score, year }) => {
  return `${title} (${year}) is rated ${score}`;
});
