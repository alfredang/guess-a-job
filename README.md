<div align="center">

# Guess a Job!

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**A fun, casual web game where you guess occupations from progressive clues. Built for leisure and passing time.**

[Play Now](https://alfredang.github.io/guess-a-job/) · [Report Bug](https://github.com/alfredang/guess-a-job/issues) · [Request Feature](https://github.com/alfredang/guess-a-job/issues)

</div>

## Screenshot

![Guess a Job Screenshot](screenshot.svg)

## About

Guess a Job is a trivia-style guessing game with 58 unique occupations. Each round, a mystery job is chosen and you receive up to 5 progressive clues — from an emoji hint to a fun fact. Guess early to earn more points, build streaks for bonus multipliers, and see how high you can score.

### Key Features

- 58 unique jobs with 5 handcrafted clues each (emoji hint, workplace, daily task, tools, fun fact)
- Progressive clue reveal with decreasing point values (5 pts down to 1 pt)
- Autocomplete input with keyboard navigation
- Fuzzy matching — accepts synonyms (e.g., "cop" for Police Officer)
- Streak bonuses for consecutive correct guesses
- Card flip animations and confetti celebrations
- Mobile responsive design
- Zero dependencies — pure HTML, CSS, and JavaScript

## Tech Stack

| Category | Technology |
|----------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (animations, backdrop-filter, CSS variables, Fredoka + DM Sans fonts) |
| Logic | Vanilla JavaScript (Canvas API for confetti, fuzzy matching) |
| Hosting | GitHub Pages |

## Architecture

```
┌─────────────────────────────────────┐
│            index.html               │
│  ┌───────────┐  ┌────────────────┐  │
│  │  style.css │  │   script.js    │  │
│  │            │  │                │  │
│  │ Animations │  │ JOBS[] (58)    │  │
│  │ Responsive │  │ Game Engine    │  │
│  │ Card Flips │  │ Autocomplete   │  │
│  │ Modals     │  │ Fuzzy Matching │  │
│  │ Confetti   │  │ Scoring/Streak │  │
│  └───────────┘  │ Confetti FX    │  │
│                  └────────────────┘  │
└─────────────────────────────────────┘
```

## Project Structure

```
guess-a-job/
├── index.html        # Game UI with clue cards, input, result overlay, modals
├── script.js         # Game logic, 58 jobs data, autocomplete, confetti engine
├── style.css         # Retro quiz show aesthetic, animations, responsive layout
├── screenshot.svg    # App screenshot for README
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/alfredang/guess-a-job.git
   ```
2. Open `index.html` in your browser
   ```bash
   cd guess-a-job
   open index.html
   ```

That's it — no build tools, no dependencies, no setup.

## How to Play

1. Each round, a mystery job is chosen from a pool of 58 occupations
2. You get **5 clues** revealed one at a time: emoji hint, workplace, daily task, tools, and a fun fact
3. Guess early for more points — **5 pts** on clue 1, down to **1 pt** on clue 5
4. Build a streak for bonus points with consecutive correct guesses

## Deployment

The game is deployed on **GitHub Pages** at [alfredang.github.io/guess-a-job](https://alfredang.github.io/guess-a-job/).

To deploy your own fork:
1. Fork this repository
2. Go to **Settings** > **Pages**
3. Set source to **Deploy from a branch** > `main` / `root`
4. Your game will be live at `https://<username>.github.io/guess-a-job/`

## Contributing

Contributions are welcome! To add new jobs, improve the UI, or fix bugs:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-jobs`)
3. Commit your changes (`git commit -m 'Add new jobs'`)
4. Push to the branch (`git push origin feature/new-jobs`)
5. Open a Pull Request

## Acknowledgements

- [Fredoka](https://fonts.google.com/specimen/Fredoka) and [DM Sans](https://fonts.google.com/specimen/DM+Sans) fonts by Google Fonts
- Emoji clues and fun facts curated by hand

---

<div align="center">

If you enjoyed this game, give it a star!

</div>
