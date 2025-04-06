const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const trends = [
  {
    year: 2020,
    "top-description": "The year 2020 redefined fashion as the world embraced comfort and 'dopamine dressing' due to the pandemic. Oversized garments became the new norm, but blazers and crop tops stayed relevant. Fun and bold prints also made a major comeback, bringing a playful touch to everyday outfits.",
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
    "top-description": "The early 2000s aesthetic made a full-force comeback in 2021. Gen Z popularized baby tees, baguette bags, and low-rise jeans. Meanwhile, cottagecore—a romantic, nature-inspired style—took over social media, celebrating vintage floral patterns and flowy dresses.",
    "bottom-text": "The revival of Y2K fashion x1 billion. Everything from crop tops and baguette bags to low-rise denim and rhinestones made an appearance. Comfort-driven fashion dominated. Loungewear became the norm, with sweat sets and oversized fits reigning supreme. Bold colors & accessories made a statement. Bright color blocking and chunky shoes defined 2021 and brought a sense of playfulness.",
    "main-image": "",
    images: [
      { src: "corset.jpeg", title: "Corsets" },
      { src: "lowrise.jpeg", title: "Low-rise Jeans" },
      { src: "accessories.jpeg", title: "Bold Colors & Accessories" },
      { src: "loungewear.jpeg", title: "Sweat Sets" }
    ]
  },
  {
    year: 2022,
    "top-description": "2022 marked a shift toward elevated basics and sustainable fashion. As the world transitioned back to in-person life post-pandemic, fashion embraced understated luxury and timeless silhouettes. Quiet luxury—think neutral tones, quality fabrics, and minimal branding—became a major focus. However, bold statements still had their place, with sheer layers offering a daring but elegant touch. Cargo pants also dominated casualwear, blending practicality with trendiness.",
    "bottom-text": "Edgy streetwear dominates casual wear. Bold graphics, oversized silhouettes, and statement sneakers became wardrobe essentials. Quiet luxury gains popularity among professionals. Minimalist, high-quality fabrics and tailored looks defined a shift toward understated elegance.",
    "main-image": "2022piechart.png",
    images: [
      { src: "sheer.jpeg", title: "Sheer Layers" },
      { src: "cargopants.webp", title: "Cargo Pants" },
      { src: "quietluxury.jpeg", title: "Quiet Luxury" },
      { src: "leather.jpeg", title: "Leather Everything" }
    ]
  },
  {
    year: 2023,
    "top-description": "The year 2023 was a fusion of hyper-feminine and futuristic aesthetics. Balletcore emerged as a major movement, bringing delicate wrap tops, leg warmers, and pastel shades into everyday wear. Meanwhile, denim and metallics saw a resurgence, with full-denim looks and shiny statements making waves.",
    "bottom-text": "Balletcore’s influence extended beyond fashion into beauty trends. It is characterized by delicate aesthetics like ballet flats, wrap tops, and pastel tones. Fashion trends reflected the tech-inspired mood of the year. Sleek silhouettes and metallic fabrics dominated the runways, creating a space-age aesthetic.",
    "main-image": "2023percent.png",
    images: [
      { src: "balletcore.jpeg", title: "Balletcore" },
      { src: "metallics.jpeg", title: "Metallics" },
      { src: "denim.webp", title: "Denim on Denim" },
      { src: "statement_accessories.jpeg", title: "Statement Accessories" }
    ]
  },
  {
    year: 2024,
    "top-description": "2024 saw a bold contrast between structure and softness, with deconstructed tailoring and redefining silhouettes. Traditional suiting was given an undone twist—raw hems, asymmetrical cuts, and relaxed draping took center stage. Ribbons and bows added a hyper-feminine edge, adorning everything from shoes to statement blouses. Fashion embraced both power and playfulness, allowing for expressive layering and personal style curation.",
    "bottom-text": "Leopard print came back in full force, with everything from coats to footwear embracing the wild pattern. Burgundy emerged as the year’s “it” color, adding richness and depth to wardrobes across the board.",
    "main-image": "pyramid.png",
    images: [
      { src: "leopard.jpeg", title: "Leopard Print" },
      { src: "burgandy.jpeg", title: "Burgandy Takeover" },
      { src: "bows.jpeg", title: "Ribbons & Bows" },
      { src: "asymmetrical.webp", title: "Deconstructed Tailoring" }
    ]
  }
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/trends", (req, res) => {
  res.json(trends);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
