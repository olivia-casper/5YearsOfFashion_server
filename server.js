const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const trends = [
  {
    year: 2020,
    "top-description": "The year 2020 redefined fashion...",
    "bottom-text": "",
    "main-image": "2020graph5.png",
    images: [
      { src: "prints.jpg", title: "Fun Prints" },
      { src: "oversized.webp", title: "Oversized Garments" },
      { src: "blazer.jpg", title: "Blazers" },
      { src: "croptops.jpg", title: "Crop Tops" }
    ]
  },
  {
    year: 2021,
    "top-description": "The early 2000s aesthetic made a full-force comeback...",
    "bottom-text": "The revival of Y2K fashion x1 billion...",
    "main-image": "",
    images: [
      { src: "corset.jpeg", title: "Corsets" },
      { src: "lowrise.jpeg", title: "Low-rise Jeans" },
      { src: "accessories.jpeg", title: "Bold Colors & Accessories" },
      { src: "loungewear.jpeg", title: "Sweat Sets" }
    ]
  },
  // ... repeat for 2022, 2023, 2024
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/trends", (req, res) => {
  res.send(trends);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
