const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.get("/api/whoami", async (req, res) => {
  console.log(req.headers);
  const ip = await req.headers["x-forwarded-for"];
  const lang = await req.headers["accept-language"];
  const software = await req.headers["user-agent"];

  res.status(200).json({
    ipaddress: ip,
    language: lang,
    software,
  });
});

app.get("/", async (req, res) => {
  await res.sendFile(__dirname + "/views/index.html");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Application listening on port ${port}...`);
});
