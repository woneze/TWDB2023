const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!");
//   res.send("HELLO, WE GOT YOUR REQEST! THIS IS A RESPONSE!!");
// });

app.get("/", (req, res) => {
  res.send("This is the home page!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit<h1>`);
});

app.get("/r/:subreddit/:postID", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit<h1>`);
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats!!");
});

app.get("/cats", (req, res) => {
  res.send("MEOW!!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!!");
});

app.get("*", (req, res) => {
  res.send(`I don't know that path!`);
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
