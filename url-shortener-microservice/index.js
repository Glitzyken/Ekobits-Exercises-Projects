const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.post("/api/shorturl/new", async (req, res) => {
  res.status(200).json({
    ok: "ok",
  });
});

app.get("/", async (req, res) => {
  await res.sendFile(__dirname + "/views/index.html");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Application listening on port ${port}...`);
});
