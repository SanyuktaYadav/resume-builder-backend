const express = require("express");
const cors = require("cors");
const pdf = require("html-pdf");
const pdfSample = require("./pdf-sample");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfSample(req.body), {}).toFile("/tmp/Resume.pdf", (err, _) => {
    if (err) {
      console.error("Error creating PDF:", err);
      return res.status(500).json({ error: "Failed to create PDF" });
    }
    console.log("PDF created successfully");
    res.status(200).json({ message: "PDF created successfully" });
  });
});

app.get("/fetch-pdf", (req, res) => {
  const filePath = "/tmp/Resume.pdf";
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending PDF file:", err);
      return res.status(500).json({ error: "Failed to fetch PDF" });
    }
    console.log("PDF sent successfully");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
