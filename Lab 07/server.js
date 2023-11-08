const express = require('express');
const app = express();
const port = 3001; 


app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/yahtzee.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/roll-dices', (req, res) => {
  
  const diceValues = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
  res.json({ dice: diceValues }); 
});
