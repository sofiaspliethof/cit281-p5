const express = require('express');
const { getFighters, attackFighter } = require('./p5-game');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static('public'));

app.get('/api/fighters', (req, res) => {
  res.json(getFighters());
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'Game is running' });
});

app.post('/api/attack', (req, res) => {
  const { attacker, target, move } = req.body;
  const result = attackFighter(attacker, target, move);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
