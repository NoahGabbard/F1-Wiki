
// Requirement met: Node.js web server using Express.js (Table 2)
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/drivers', async (req, res) => {
  try {
    const url = 'https://api.openf1.org/v1/drivers';
    const response = await axios.get(url);
    const drivers = response.data;
    if (!drivers || drivers.length === 0) {
      return res.status(404).json({ error: 'No drivers found' });
    }
    const normalized = drivers.map(d => ({
      driver_number: d.driver_number || '',
      full_name: d.full_name || '',
      team_name: d.team_name || '',
      headshot_url: d.headshot_url || '',
      country_code: d.country_code || ''
    }));
    res.json(normalized);
  } catch (error) {
    if (error.response) {
      console.error('OpenF1 API error:', error.response.status, error.response.data);
    } else {
      console.error('Error fetching drivers from OpenF1:', error.message);
    }
    res.status(500).json({ error: 'Failed to fetch drivers from OpenF1' });
  }
});


app.get('/api/driver', async (req, res) => {
  console.log('API request received:', req.query);
  try {
    let { driver_number, full_name, name } = req.query;
    const url = 'https://api.openf1.org/v1/drivers';
    if (driver_number) {
      const response = await axios.get(url, { params: { driver_number } });
      const drivers = response.data;
      if (!drivers || drivers.length === 0) {
        return res.status(404).json({ error: 'Driver not found' });
      }
      const d = drivers[0];
      const normalized = {
        driver_number: d.driver_number || '',
        full_name: d.full_name || '',
        team_name: d.team_name || '',
        headshot_url: d.headshot_url || '',
        country_code: d.country_code || ''
      };
      return res.json(normalized);
    }

    const response = await axios.get(url);
    const drivers = response.data;
    if (!drivers || drivers.length === 0) {
      return res.status(404).json({ error: 'No drivers found' });
    }
    const searchName = (full_name || name || '').toLowerCase().replace(/\s+/g, ' ').trim();
    let match = drivers.find(d => (d.full_name || '').toLowerCase() === searchName);
    if (!match) {
      const searchParts = searchName.split(' ').filter(Boolean);
      match = drivers.find(d => {
        const fullName = (d.full_name || '').toLowerCase();
        return searchParts.every(part => fullName.includes(part));
      });
    }
    if (!match) {
      return res.status(404).json({ error: 'Driver not found' });
    }
    const normalized = {
      driver_number: match.driver_number || '',
      full_name: match.full_name || '',
      team_name: match.team_name || '',
      headshot_url: match.headshot_url || '',
      country_code: match.country_code || ''
    };
    res.json(normalized);
  } catch (error) {
    if (error.response) {
      console.error('OpenF1 API error:', error.response.status, error.response.data);
    } else {
      console.error('Error fetching driver data from OpenF1:', error.message);
    }
    res.status(500).json({ error: 'Failed to fetch driver data from OpenF1' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
