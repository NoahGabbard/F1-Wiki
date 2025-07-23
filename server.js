const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

const axios = require('axios');

app.get('/api/f1', async (req, res) => {
  try {
    const apiKey = process.env.OPENF1_API_KEY;
    const url = 'https://api.openf1.org/v1/teams';
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from OpenF1:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from OpenF1' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
