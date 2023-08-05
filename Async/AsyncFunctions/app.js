// async function hello() {}

// const sing = async () => {
//   throw "OH NO, PROBLEM!";
//   return "LA LA LA LA";
// };

// sing()
//   .then((data) => {
//     console.log("PROMISE RESOLVED WITH: ", data);
//   })
//   .catch((err) => {
//     console.log("OH NO, PROMISE REJECTED!");
//     console.log(err);
//   });

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "corgifeetarecute") return "WELCOME!";
  throw "Invalid Password";
};

login("aksfsf", "corgifeetarecute")
  .then((msg) => {
    console.log("LOGGED IN");
    console.log(msg);
  })
  .catch((err) => {
    console.log("ERROR!");
    console.log(err);
  });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("purple", 1000));

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yeloow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "DONE!!";
}

// rainbow().then(() => console.log("END OF RAINBOW!"));

async function printRainbow() {
  await rainbow();
  console.log("END OF RAINBOW");
}
