# F1 Pulse

A modern, responsive web application for exploring up-to-date information about Formula 1 drivers and teams, featuring live data integration from the OpenF1 API.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Goals](#project-goals)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [System Architecture](#system-architecture)
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
├── index.html           # Main HTML file
├── css/
│   └── F1-pulse.css     # Stylesheet for the site
├── js/
│   └── F1-pulse.js      # JavaScript for interactivity and API integration
├── assets/
│   ├── images/          # Images, icons, logos
│   └── fonts/           # Custom fonts
├── charts/              # Chart configs or images
├── README.md            # Project documentation
├── .gitignore           # Git ignore file
├── package.json         # For npm dependencies
```

## Technologies Used
- **HTML5** for structure
- **CSS3** for styling
- **JavaScript** for dynamic content, API integration, and interactivity
- **Chart.js** for data visualization
- **OpenF1 API** for live F1 data

## System Architecture
- **Frontend:** HTML, CSS, and JavaScript
- **Data Layer:**
  - Static driver/team data in JS arrays/objects
  - Live data fetched from OpenF1 API using an API key
  - LocalStorage for caching
- **User Interaction:**
  - Dynamic rendering of driver/team info
  - Forms with input validation
  - Charts, countdowns, and more
- **Development Tools:** VS Code, Git/GitHub
- **(Optional) Backend:** Node.js/Express for API key security

## Project Timeline
- **Week 1:** Planning, setup, basic HTML/CSS
- **Week 2:** Static content, core UI, JS structure
- **Week 3:** Dynamic rendering, interactivity
- **Week 4:** OpenF1 API integration, input validation, utility features
- **Week 5:** Data visualization, testing, documentation, finalization
