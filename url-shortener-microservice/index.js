const express = require("express");
const mongo = require("mongodb").MongoClient;
const validUrl = require("valid-url");
const shortId = require("shortid");

const dbUrl =
  "mongodb://amk:W4UY|c-_hyJc7nJ@ds013222.mlab.com:13222/shorten_url";

const app = express();

app.use("/", express.static("public"));

app.get("/new/:url(*)", function (req, res) {
  const url = req.params.url;

  if (validUrl.isUri(url)) {
    mongo.connect(dbUrl, function (err, db) {
      if (err) {
        res.end("what the fuck is going on");
        return console.log(err);
      } else {
        const urlList = db.collection("urlList");
        const short = shortId.generate();
        urlList.insert([{ url: url, short: short }], function () {
          const data = {
            original_url: url,
            short_url: "http://" + req.headers["host"] + "/" + short,
          };
          db.close();
          res.send(data);
        });
      }
    });
  } else {
    const data = {
      error: "Are you fucking kidding me ? :(",
    };
    res.json(data);
  }
});

app.get("/:id", function (req, res) {
  const id = req.params.id;
  mongo.connect(dbUrl, function (err, db) {
    if (err) {
      return console.log(err);
    } else {
      const urlList = db.collection("urlList");
      urlList.find({ short: id }).toArray(function (err, docs) {
        if (err) {
          res.end("what the fuck is going on");
          return console.log("read", err);
        } else {
          // console.log(docs.length);
          if (docs.length > 0) {
            db.close();
            res.redirect(docs[0].url);
          } else {
            db.close();
            res.end("what the fuck is going on");
          }
        }
      });
    }
  });
});

const port = 8080;

app.listen(port, function () {
  console.log(`Application is listening on port ${port}...`);
});
