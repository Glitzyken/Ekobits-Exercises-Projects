const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

// A request to /api/timestamp/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

app.get("/api/timestamp/:date", async (req, res) => {
  let paramDate;
  if (new Date(req.params.date * 1).getTime()) {
    paramDate = req.params.date * 1;
  } else {
    paramDate = req.params.date;
  }

  const date = new Date(paramDate);

  const unix = await date.getTime();
  const utc = await date.toUTCString();

  res.status(200).json({
    unix,
    utc,
  });
});

app.get("/api/timestamp/", async (req, res) => {
  const unix = await Date.now();
  const utc = await new Date().toUTCString();

  res.status(200).json({
    unix,
    utc,
  });
});

app.get("/", async (req, res) => {
  await res.sendFile(__dirname + "/views/index.html");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Application listening on port ${port}...`);
});
