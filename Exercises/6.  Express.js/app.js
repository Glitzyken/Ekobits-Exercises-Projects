const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success", // using JSEND formating
    result: data.length, // number of items
    data: {
      data,
    },
  });
});

app.get("/:id", (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1; // converts param string to number
  const item = data.find((el) => el.id === id);

  if (!item) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      item,
    },
  });
});

app.post("/", (req, res) => {
  const newId = data[data.length - 1].id + 1;
  const newData = Object.assign({ id: newId }, req.body);

  data.push(newData);

  // Persist newData into data.json file
  fs.writeFile(`${__dirname}/data.json`, JSON.stringify(data), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        data: newData,
      },
    });
  });
});

app.patch("/:id", (req, res) => {
  const id = req.params.id * 1;

  if (id > data.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  data.forEach((el) => {
    if (el.id === id) {
      el.name = req.body.name;
    }
  });

  fs.writeFile(`${__dirname}/data.json`, JSON.stringify(data), (err) => {
    res.status(201).json({
      status: "success",
      message: "updated!",
    });
  });
});

app.delete("/:id", (req, res) => {
  const id = req.params.id * 1;

  if (id > data.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  for (let i = 0; i < data.length; ++i) {
    if (data[i].id === id) {
      data.splice(i, 1);
    }
  }

  fs.writeFile(`${__dirname}/data.json`, JSON.stringify(data), (err) => {
    res.status(201).json({
      status: "success",
      message: "Deleted!",
    });
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Appliation is listening on port: ${port}...`);
});
