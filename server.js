const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let newsData = [
];

// Get news
app.get('/api/news', (req, res) => {
  res.json(newsData);
});

// Add a POST endpoint to add news
app.post('/api/post_news', (req, res) => {
  const newNewsItem = req.body;
  console.log(newNewsItem)
  newsData.push(newNewsItem);
  res.status(201).json(newNewsItem); // Respond with added news item
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
