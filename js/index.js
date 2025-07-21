const teams = [
  {
    name: "McLaren",
    description: "McLaren is a British Formula 1 team with a rich history and a strong presence in the sport. They are known for their innovative engineering and competitive spirit.",
    drivers: [
      {
        name: "Lando Norris",
        age: 25,
        nationality: "British",
        aspirations: "Lando Norris aims to secure his first World Drivers' Championship in 2025 with McLaren, showcasing his talent and potential as a future star of Formula 1."
      },
      {
        name: "Oscar Piastri",
        age: 24,
        nationality: "Australian",
        aspirations: "While Oscar Piastri is considered the junior driver at McLaren, he is determined to prove his worth and bring the fight to anyone who stands in his way. Oscar currently maintains the lead in the WDC."
      }
    ]
  },
  {
    name: "Oracle Red Bull Racing",
    description: "Oracle Red Bull Racing is a dominant force in Formula 1, known for their innovative approach and strong performance on the track. They have a history of success and are always a team to watch.",
    drivers: [
      {
        name: "Max Verstappen",
        age: 27,
        nationality: "Dutch",
        aspirations: "Max Verstappen aims to defend his title and secure a fifth consecutive World Drivers' Championship in 2025 with Red Bull Racing, solidifying his legacy as one of the sport's greats."
      },
      {
        name: "Yuki Tsunoda",
        age: 25,
        nationality: "Japanese",
        aspirations: "After a turbulent and uncertain start to his 2025 season, Yuki Tsunoda aims to show his worth within the Red Bull Racing fold and prove that he can be a consistent and competitive driver in Formula 1."
      }
    ]
  },
  {
    name: "Scuderia Ferrari",
    description: "Scuderia Ferrari is one of the most iconic teams in Formula 1, with a rich history and the passionate Tifosi. They are known for their red cars and competitive spirit.",
    drivers: [
      {
        name: "Lewis Hamilton",
        age: 40,
        nationality: "British",
        aspirations: "Lewis Hamilton looks to restore his image and legacy by proving himself as a top driver in the 2025 season with Ferrari. Showing the younger drivers that he is still a force to be reckoned with."
      },
      {
        name: "Charles Leclerc",
        age: 27,
        nationality: "Monegasque",
        aspirations: "Charles Leclerc has been struggling to find his form in the 2025 season, but he is determined to bounce back and show the world that he isn't just the second driver for Scuderia Ferrari."
      }
    ]
  },
  {
    name: "Mercedes-AMG Petronas",
    description: "Mercedes-AMG Petronas is a highly successful Formula 1 team with a strong focus on performance and innovation.",
    drivers: [
      {
        name: "George Russell",
        age: 27,
        nationality: "British",
        aspirations: "With everything on the line, George Russell is now the lead driver for Mercedes-AMG Petronas in 2025. The pressure is on to deliver results and prove himself as the competent number one for the team."
      },
      {
        name: "Andrea Kimi Atonelli",
        age: 18,
        nationality: "Italian",
        aspirations: "Andrea 'Kimi' Atonelli is the youngest driver on the grid in 2025, and he is determined to make a name for himself in Formula 1. He aims to learn from the best and prove that he can compete at the highest level, despite his age."
      }
    ]
  },
  {
    name: "Aston Martin",
    description: "Aston Martin aims to be at the top step in the championship within the next few years, bringing in the likes of Adrian Newey to help with the development of their car.",
    drivers: [
      {
        name: "Fernando Alonso",
        age: 43,
        nationality: "Spanish",
        aspirations: "Fernando Alonso aims to make a significant impact in the 2025 season with Aston Martin, leveraging his vast experience to mentor Lance Stroll and bring Aston Martin to the front of the field."
      },
      {
        name: "Lance Stroll",
        age: 25,
        nationality: "Canadian",
        aspirations: "Lance Stroll, possibly one of the most controversial drivers on the grid, is determined to prove his value as a competent driver, despite the criticism he faces as a 'Pay Driver'."
      }
    ]
  },
  {
    name: "BWT Alpine F1 Team",
    description: "BWT Alpine F1 Team is on the decline in the 2025 season, with a new driver lineup and a focus on rebuilding their competitiveness.",
    drivers: [
      {
        name: "Pierre Gasly",
        age: 29,
        nationality: "French",
        aspirations: "Pierre Gasly and the BWT Alpine F1 Team had a turbulent start to the 2025 season, but they are determined to bounce back and secure a strong finish in the championship."
      },
      {
        name: "Franco Colapinto",
        age: 22,
        nationality: "Argentinian",
        aspirations: "Franco Colapinto, 22, is widely considered the best rookie on the 2025 Formula 1 grid. He didn't start the season driving for Alpine, but he has quickly adapted to his role within the team. "
      }
    ]
  },
  {
    name: "MoneyGram Haas F1 Team",
    description: "MoneyGram Haas F1 Team is looking to solidify their position in the midfield and prove to the more experienced teams they they can compete at the highest level.",
    drivers: [
      {
        name: "Esteban Ocon",
        age: 28,
        nationality: "French",
        aspirations: "Esteban Ocon, after getting the boot from Alpine, is looking to resolidify his Formula 1 career with Haas, and prove he's a valuable asset to the team." 
      },
      {
        name: "Oliver Bearman",
        age: 20,
        nationality: "British",
        aspirations: "Oliver Bearman, the young Ferrari Academy driver, is a star in waiting. His strong will and determination to succeed make him a formidable rookie in the 2025 season."
      }
    ]
  },
  {
    name: "Atlassian Williams Racing",
    description: "Atlassian Williams Racing, perhaps one of the most iconic teams in Formula 1, is looking to regain dominance in the sport.",
    drivers: [
      {
        name: "Alex Albon",
        age: 29,
        nationality: "Thai",
        aspirations: "Alex Albon, the previous Red Bull driver, now long time Williams driver, is looking to bring Williams back to the forefront of Formula 1, with consistent performances and strong results."
      },
      {
        name: "Carlos Sainz",
        age: 30,
        nationality: "Spanish",
        aspirations: "Carlos Sainz, the former Ferrari driver, is now with Williams and is determined to prove that he can still compete at the highest level in Formula 1. He aims to help Williams regain its competitive edge."
      }
    ]
  },
  {
    name: "Stake F1 Team Kick Sauber",
    description: "Stake F1 Team Kick Sauber, while struggling for the past decade, had had a resurgence in the 2025 season. They aim to be a top team when Audi finally takes the reins in 2026.",
    drivers: [
      {
        name: "Nico Hulkenberg",
        age: 37,
        nationality: "German",
        aspirations: "Nico Hulkenberg is widely considered one of the most experienced drivers on the F1 grid, with his recent and first ever podium at the British Grand Prix, he has proven that he's still got what it takes to compete."
      },
      {
        name: "Gabriel Bortoleto",
        age: 20,
        nationality: "Brazilian",
        aspirations: "Gabriel Bortoleto is another rookie who is widely considered to be the best on the grid. Previously winning the F2 Championship and the F3 Championship back to back, he definitely has the potential to be a future star in Formula 1."
      }
    ]
  },
  {
    name: "Visa CashApp Racing Bulls",
    description: "Visa CashApp Racing Bulls might be the sister team to Red Bull Racing, but they're not easily overlooked. Junior drivers within this team often go on to become future champions.",
    drivers: [
      {
        name: "Liam Lawson",
        age: 23,
        nationality: "New Zealander",
        aspirations: "Liam Lawson had a fall from grace within the fold of Red Bull Racing after a rough start in the second seat. He is determined to prove himself and regain his position as a top driver in Formula 1."
      },
      {
        name: "Isack Hadjar",
        age: 20,
        nationality: "French",
        aspirations: "Isack Hadjar is a promising young talent in Formula 1, and he is eager to prove himself on the big stage. With a strong performance in the junior categories, he aims to make a name for himself in the sport."
      }
    ]
  }
];

document.addEventListener("DOMContentLoaded", function() {
  const teamsContainer = document.getElementById("teams");
  let html = "";

  const teamClassMap = {
    "Mercedes-AMG Petronas": "mercedes",
    "Oracle Red Bull Racing": "redbull",
    "Scuderia Ferrari": "ferrari",
    "McLaren": "mclaren",
    "Aston Martin": "astonmartin",
    "BWT Alpine F1 Team": "alpine",
    "Atlassian Williams Racing": "williams",
    "Stake F1 Team Kick Sauber": "stake",
    "MoneyGram Haas F1 Team": "haas",
    "Visa CashApp Racing Bulls": "rb",
    "Andretti Global": "andretti"
  };

  teams.forEach(team => {
    const classSuffix = teamClassMap[team.name] || "";
    const teamClass = classSuffix ? `team-${classSuffix}` : "";
    html += `
      <div class="team">
        <h3 class="${teamClass}">${team.name}</h3>
        <p>${team.description}</p>
        <div class="drivers">
          ${team.drivers.map(driver => `
            <div class="driver">
              <strong>${driver.name}</strong> (${driver.nationality}, Age: ${driver.age})<br>
              <em>${driver.aspirations}</em>
            </div>
          `).join("")}
        </div>
      </div>
      <hr>
    `;
  });

  teamsContainer.innerHTML = html;
});
