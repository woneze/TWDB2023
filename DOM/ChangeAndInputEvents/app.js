const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener("change", function (e) {
//   console.log("safsdfsdafsad");
// });

input.addEventListener("input", function () {
  const username = input.value;
  h1.innerText = `Welcome, ${username}`;
  if (username.length === 0) {
    h1.innerText = "Enter Your Username";
  }
});
