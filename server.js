const express = require("express");
const cors = require("cors");
const path = require("path");
const Joi = require("joi");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

// Predefined trends array (already working in your project)
const trends = [
  // (leave your full trend data here — I’ve shortened for clarity)
  {
    year: 2020,
    "top-description": "Example...",
    "bottom-text": "",
    "main-image": "2020graph5.png",
    images: [
      { src: "prints.jpg", title: "Fun Prints" },
      { src: "oversized.webp", title: "Oversized Garments" },
      { src: "blazer.jpg", title: "Blazers" },
      { src: "croptops.jpg", title: "Crop Tops" }
    ]
  },
  // ...2021-2024 items...
];

// ✅ New array for predictions
const predictions = [];

// ✅ Joi schema for validating prediction text
const predictionSchema = Joi.object({
  text: Joi.string().min(2).max(100).required()
});

// ✨ INDEX ROUTE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ GET trends
app.get("/api/trends", (req, res) => {
  res.json(trends);
});

// ✅ GET predictions
app.get("/api/predictions", (req, res) => {
  res.json(predictions);
});

// ✅ POST prediction
app.post("/api/predictions", (req, res) => {
  const { error } = predictionSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: "Invalid prediction text" });
  }

  predictions.push(req.body.text);
  res.status(201).json({ message: "Prediction added!" });
});

// START SERVER
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
