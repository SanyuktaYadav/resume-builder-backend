const express = require("express");
const cors = require("cors");
const pdf = require("html-pdf");
const pdfSample = require("./pdf-sample");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfSample(req.body), {}).toFile("Resume.pdf", (err) => {
    console.log("hello");
    if (err) {
      res.send(Promise.reject(err));
      console.log("err = ", err);
    }
    res.send(Promise.resolve());
    console.log("Success");
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/Resume.pdf`);
});

app.listen(port, () => {
  console.log("server is running on port");
});
