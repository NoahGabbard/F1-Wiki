# F1 Pulse

A modern, responsive web application for exploring up-to-date information about Formula 1 drivers and teams, featuring live data integration from the OpenF1 API.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Goals](#project-goals)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [System Architecture](#system-architecture)
- [Getting-Started](#getting-started)
- [Project Timeline](#project-timeline)
- [License](#license)

## Overview
F1 Pulse is designed to provide Formula 1 fans with a clean, visually appealing, and easy-to-navigate platform for learning about current F1 drivers and teams. The project leverages the OpenF1 API to display live and accurate data, and aims to be a go-to resource for both new and seasoned fans.

## Features
- **Modern UI:** Dark-themed, responsive design for all devices.
- **Driver & Team Profiles:** Dynamic display of driver and team information, including aspirations and achievements.
- **Live Data:** Real-time updates from the OpenF1 API.
- **Expandable Sections:** Interactive dropdowns for more driver details (planned).
- **Input Validation:** Forms with regex validation to ensure clean user input.
- **Data Visualization:** (Planned) Charts and graphs using Chart.js.
- **Countdown Timer:** (Planned) Days until the next F1 race.
- **Easy Navigation:** Simple, clean layout for a seamless user experience.

## Project Goals
- Provide a user-friendly, visually appealing resource for F1 driver and team information.
- Integrate live data from the OpenF1 API.
- Ensure the site is responsive and accessible on all devices.
- Expand to include all drivers and teams on the F1 grid.
- Lay the groundwork for future features like data visualization and race countdowns.

## File Structure
```
F1-Pulse/
├── server.js              # Express server (backend entry point)
├── package.json           # Project dependencies
├── README.md              # Project documentation
├── .gitignore             # Git ignore file
├── public/
│   ├── index.html         # Main HTML file (served to client)
│   ├── drivers.html       # Single driver profile page
│   ├── css/
│   │   └── index.css      # Main stylesheet for the site
│   ├── js/
│   │   ├── index.js       # JavaScript for main page (teams/drivers list)
│   │   └── drivers.js     # JavaScript for driver profile page
│   ├── assets/
│   │   └── images/        # Images, icons, logos
```

## Technologies Used

## Dependencies


**Backend:**
- express
- axios

To install these backend dependencies, run the following command in your project directory:
```sh
npm install express axios
```

**Frontend:**
- No external dependencies (uses only HTML, CSS, and vanilla JavaScript)


- **Frontend:** HTML, CSS, and JavaScript (served from `public/`)
  - `index.html` displays all teams and drivers, with profile links.
  - `drivers.html` displays a single driver profile, based on the name in the URL query string.
- **Backend:** Node.js/Express (`server.js`)
  - Serves static files from `public/`
  - Proxies requests to the OpenF1 API (no API key required)
- **Data Source:**
  - All F1 data is fetched from the [OpenF1 API](https://openf1.org/)
- **Development Tools:** VS Code, Git/GitHub

## Getting Started

Follow these steps to set up and run F1 Pulse on your local machine:

### 1. Clone the repository
Clone the project to your computer using:
```sh
git clone https://github.com/NoahGabbard/F1-Pulse.git
cd F1-Pulse
```

### 2. Install dependencies
Install all required Node.js packages:
```sh
npm install
```

### 3. Start the development server
Start the Express server:
```sh
node server.js
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### 4. Open the app in your browser
Go to [http://localhost:3000](http://localhost:3000) to use F1 Pulse.

### 5. Project structure
The main files and folders are:
```
index.html         # Main HTML file (teams/drivers list)
drivers.html       # Single driver profile page
css/               # Stylesheets
js/                # JavaScript files (index.js, drivers.js)
assets/            # Images and Logos
server.js          # Express server
package.json       # Project dependencies
```

## Project Timeline
- **Week 1:** Planning, setup, basic HTML/CSS
- **Week 2:** Static content, core UI, JS structure
- **Week 3:** Dynamic rendering, interactivity
- **Week 4:** OpenF1 API integration, robust backend matching, error handling, documentation
- **Week 5:** Data visualization, testing, finalization
