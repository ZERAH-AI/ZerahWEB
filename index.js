const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log("📩 Webhook received:", req.body);
  res.status(200).send("✅ Received!");
});

app.get('/', (req, res) => {
  res.send("Zerah webhook is live!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
