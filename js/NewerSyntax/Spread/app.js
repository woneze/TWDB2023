// Basic Syntax
const nums = [13, 4, 5, 21, 3, 3, 1, 2, 4, 7, 6, 4, 2, 53456];

Math.max(...nums);
Math.min(...nums);

console.log(nums);
console.log(...nums);

console.log("hello");
console.log(..."hello");

// Spread in array literals
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats];

// Spread in object literals
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };
const catDog = { ...feline, ...canine };

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
