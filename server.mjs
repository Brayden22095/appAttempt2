import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const port = 5001;

// Enable CORS for your domain
app.use(
  cors({
    origin: "https://braydenheijden.gc-webhosting.nl",
  })
);

// Proxy endpoint for fortify API
app.get("/fortify/:code", async (req, res) => {
  try {
    const code = req.params.code;
    const response = await fetch(
      `https://builderssanctuary.com/download/fortify/${code}`
    );

    if (!response.ok) {
      res.status(response.status).json({ error: "Failed to fetch base data" });
      return;
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
