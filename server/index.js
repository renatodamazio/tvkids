const express = require("express");
const cors = require("cors");
const { Client } = require("youtubei");
const { stringify } = require("flatted");

const youtube = new Client();

const server = express();

server.use(
  cors({
    origin: "*",
  })
);

server.get("/", async (req, res) => {
  const param = req.query.q;
  const videos = await youtube.search(param, {
    type: "video",
  });

  const results = [];

  videos.items.forEach((video, index) => {
      results.push({
        id: video.id,
        title: video.title,
      });
  });

  res.status(200).send(results);
});

server.listen(3001, () => console.log("server running"));
