// ============================================
//  GUESS A JOB - Game Logic
// ============================================

const JOBS = [
  {
    name: "Firefighter",
    clues: ["🔥🚒🧯👨‍🚒💧", "Works at a fire station", "Responds to emergencies and rescues people from burning buildings", "Fire hose, axe, ladder, breathing apparatus", "Dalmatians became firehouse dogs because they calmed the horses that pulled old fire engines"]
  },
  {
    name: "Chef",
    clues: ["👨‍🍳🍳🔪🍽️🔥", "Works in a restaurant kitchen", "Prepares meals and creates new recipes", "Knives, pans, ovens, whisks", "The tall white hat is called a toque and the folds once represented the number of ways a chef could cook an egg"]
  },
  {
    name: "Astronaut",
    clues: ["🚀👨‍🚀🌕⭐🛸", "Works at a space station or NASA facility", "Conducts experiments in zero gravity and maintains spacecraft", "Spacesuit, robotic arm, life support system", "Astronauts grow up to 2 inches taller in space because their spine expands without gravity"]
  },
  {
    name: "Dentist",
    clues: ["🦷😁🪥💉🏥", "Works in a dental clinic", "Examines teeth, fills cavities, and performs oral procedures", "Dental drill, mirror, X-ray machine, suction tool", "The first known dentist was an Egyptian named Hesy-Re who lived around 2600 BC"]
  },
  {
    name: "Pilot",
    clues: ["✈️👨‍✈️☁️🛫🌍", "Works in an airplane cockpit", "Flies aircraft and communicates with air traffic control", "Yoke, throttle, altimeter, headset", "Pilots and co-pilots are required to eat different meals to reduce the risk of both getting food poisoning"]
  },
  {
    name: "Teacher",
    clues: ["📚👩‍🏫✏️🎓🏫", "Works in a school classroom", "Creates lesson plans and helps students learn new concepts", "Whiteboard, textbooks, projector, grade book", "The word 'teacher' comes from the Old English word 'taecan' which means to show or point out"]
  },
  {
    name: "Veterinarian",
    clues: ["🐕🩺💉🐱🏥", "Works in an animal clinic", "Diagnoses illnesses and performs surgery on animals", "Stethoscope, syringes, X-ray machine, surgical tools", "Vets must learn the biology of many species — some specialize in animals as small as hamsters or as large as elephants"]
  },
  {
    name: "Photographer",
    clues: ["📸🖼️💡🎨👁️", "Works in a studio or on location", "Captures images and edits photos for clients", "Camera, lenses, tripod, lighting equipment", "The first photograph ever taken required an 8-hour exposure time in 1826"]
  },
  {
    name: "Plumber",
    clues: ["🔧🚿💧🪠🛁", "Works in homes and buildings", "Fixes leaky pipes and installs water systems", "Pipe wrench, plunger, soldering torch, pipe cutter", "Albert Einstein once said that if he could live his life over he would choose to be a plumber"]
  },
  {
    name: "Librarian",
    clues: ["📖🏛️🤫📚🔍", "Works in a library", "Organizes collections and helps people find information", "Computer catalog, barcode scanner, book cart", "The Library of Congress is the largest library in the world with over 170 million items"]
  },
  {
    name: "Electrician",
    clues: ["⚡🔌💡🔧🏠", "Works in buildings and construction sites", "Installs and repairs electrical wiring and systems", "Wire strippers, multimeter, conduit bender", "Benjamin Franklin did not actually discover electricity — he proved that lightning was electrical"]
  },
  {
    name: "Journalist",
    clues: ["📰🎤✍️📡🗞️", "Works in a newsroom or in the field", "Investigates stories and reports the news to the public", "Notebook, recorder, camera, press badge", "The term 'paparazzi' comes from a character named Paparazzo in the 1960 film La Dolce Vita"]
  },
  {
    name: "Surgeon",
    clues: ["🏥🔪💉🩺❤️", "Works in a hospital operating room", "Performs operations to treat injuries and diseases", "Scalpel, forceps, surgical sutures, anesthesia machine", "Some surgeries are now performed by robots controlled by the surgeon from a console"]
  },
  {
    name: "Architect",
    clues: ["🏗️📐✏️🏛️🖥️", "Works in a design studio or office", "Designs buildings and oversees their construction", "CAD software, blueprints, scale ruler, 3D models", "The word architect comes from Greek and literally means 'chief builder'"]
  },
  {
    name: "Farmer",
    clues: ["🌾🚜🐄🌻👨‍🌾", "Works on farmland and fields", "Grows crops and raises livestock for food production", "Tractor, plow, irrigation system, combine harvester", "A single farmer today feeds about 166 people compared to just 26 people in 1960"]
  },
  {
    name: "Police Officer",
    clues: ["👮🚔🔫🚨⚖️", "Works at a police station and patrols communities", "Enforces laws and investigates crimes", "Badge, handcuffs, radio, body camera", "The first modern police force was established in London in 1829 by Sir Robert Peel"]
  },
  {
    name: "Mechanic",
    clues: ["🔧🚗⚙️🛠️💨", "Works in an auto repair garage", "Diagnoses and fixes problems with vehicles", "Wrench set, diagnostic scanner, car lift, torque wrench", "Modern cars have more computing power than the Apollo 11 spacecraft"]
  },
  {
    name: "Florist",
    clues: ["💐🌹🌷🎀✂️", "Works in a flower shop", "Arranges flowers and creates bouquets for events", "Floral foam, shears, ribbon, wire", "The language of flowers called floriography was a way to send coded messages in the Victorian era"]
  },
  {
    name: "Baker",
    clues: ["🍞🧁🎂🥐🍩", "Works in a bakery, often starting before dawn", "Mixes dough and bakes bread, pastries, and cakes", "Oven, mixing bowls, rolling pin, piping bags", "The world's oldest known recipe is for beer-bread from ancient Sumeria, around 3100 BC"]
  },
  {
    name: "Musician",
    clues: ["🎵🎸🎤🎶🎹", "Works in studios, concert venues, and stages", "Composes and performs music for audiences", "Instruments, amplifiers, microphone, sheet music", "Mozart composed his first piece of music at age 5 and wrote over 600 works in his lifetime"]
  },
  {
    name: "Lawyer",
    clues: ["⚖️👔📜🏛️🔨", "Works in a law firm or courtroom", "Represents clients and argues cases in court", "Law books, briefcase, legal documents, gavel", "Abraham Lincoln kept important documents stored inside his tall stovepipe hat"]
  },
  {
    name: "Nurse",
    clues: ["💉🩺❤️🏥👩‍⚕️", "Works in a hospital or clinic", "Cares for patients and administers medications", "Blood pressure cuff, syringes, IV drip, thermometer", "Florence Nightingale is considered the founder of modern nursing after her work in the Crimean War"]
  },
  {
    name: "Carpenter",
    clues: ["🪵🔨🪚📏🏠", "Works on construction sites and workshops", "Builds and repairs structures made of wood", "Hammer, saw, measuring tape, wood plane", "Jesus of Nazareth is traditionally believed to have worked as a carpenter before his ministry"]
  },
  {
    name: "Scientist",
    clues: ["🔬🧪🧫📊👩‍🔬", "Works in a research laboratory", "Conducts experiments and analyzes data to test hypotheses", "Microscope, beakers, Bunsen burner, centrifuge", "Marie Curie is the only person to have won Nobel Prizes in two different sciences"]
  },
  {
    name: "Lifeguard",
    clues: ["🏖️🏊🩱🔴😎", "Works at a beach or swimming pool", "Monitors swimmers and performs water rescues", "Rescue buoy, whistle, binoculars, first aid kit", "The iconic red swimsuit became standard after the TV show Baywatch aired in the 1990s"]
  },
  {
    name: "Barber",
    clues: ["💈✂️🪒💇‍♂️🪞", "Works in a barbershop", "Cuts hair, trims beards, and styles hair for clients", "Clippers, scissors, straight razor, barber chair", "The red and white barber pole dates back to when barbers also performed surgery"]
  },
  {
    name: "Accountant",
    clues: ["🧮💰📊📋✍️", "Works in an office during business hours", "Manages financial records and prepares tax returns", "Calculator, spreadsheet software, ledger books", "The earliest accountants were found in ancient Mesopotamia tracking grain and livestock"]
  },
  {
    name: "Zookeeper",
    clues: ["🦁🐘🦒🐧🏞️", "Works at a zoo or wildlife park", "Feeds animals and maintains their habitats", "Food buckets, enclosure tools, enrichment toys", "Some zookeepers must learn to mimic animal sounds to build trust with their animals"]
  },
  {
    name: "Painter",
    clues: ["🎨🖌️🖼️🧑‍🎨🎭", "Works in an art studio or gallery", "Creates artwork on canvas using colors and techniques", "Brushes, palette, easel, canvas, turpentine", "Vincent van Gogh only sold one painting during his lifetime but today his works sell for tens of millions"]
  },
  {
    name: "Mailman",
    clues: ["📬✉️📦🚶📮", "Works on neighborhood delivery routes", "Delivers letters and packages to homes and businesses", "Mail bag, scanner, delivery truck, uniform", "The US Postal Service delivers to over 163 million addresses — more than any other carrier in the world"]
  },
  {
    name: "Taxi Driver",
    clues: ["🚕🏙️💛🛣️🧭", "Works on city streets picking up passengers", "Drives people to their destinations around the city", "Taximeter, GPS, two-way radio, car", "New York City taxi cabs became yellow in 1907 because a study found it was the easiest color to spot"]
  },
  {
    name: "Astronomer",
    clues: ["🔭🌌⭐🪐🌙", "Works at an observatory or university", "Studies stars, planets, and galaxies", "Telescope, spectrometer, computer models, star charts", "Astronomers discovered that the universe is expanding and that most galaxies are moving away from us"]
  },
  {
    name: "Software Developer",
    clues: ["💻⌨️🐛🖥️☕", "Works in an office or remotely from home", "Writes code and builds applications and websites", "Computer, IDE, version control, debugging tools", "The first computer programmer was Ada Lovelace who wrote an algorithm for Charles Babbage's machine in 1843"]
  },
  {
    name: "Flight Attendant",
    clues: ["✈️🧳☕🛫😊", "Works inside the cabin of an airplane", "Ensures passenger safety and serves food and drinks", "Safety equipment, serving cart, intercom, first aid kit", "The first flight attendant was a registered nurse named Ellen Church who flew in 1930"]
  },
  {
    name: "Geologist",
    clues: ["🪨🌋⛏️🗺️🧭", "Works in the field studying land formations", "Analyzes rocks, minerals, and Earth's structure", "Rock hammer, hand lens, GPS, field notebook", "Geologists discovered that Earth's inner core is as hot as the surface of the Sun"]
  },
  {
    name: "Pharmacist",
    clues: ["💊🏪⚕️🧴📋", "Works behind the counter at a pharmacy", "Dispenses medications and advises patients on drug use", "Pill counter, mortar and pestle, prescription system", "The mortar and pestle symbol dates back thousands of years and is still used to represent pharmacy"]
  },
  {
    name: "Tailor",
    clues: ["🧵✂️👔📏🪡", "Works in a tailor shop or atelier", "Measures, cuts, and sews fabric to make clothing", "Sewing machine, scissors, measuring tape, pins", "Savile Row in London has been the center of bespoke tailoring since the early 1800s"]
  },
  {
    name: "Beekeeper",
    clues: ["🐝🍯🌻🧤🏡", "Works in an apiary among beehives", "Manages bee colonies and harvests honey", "Smoker, hive tool, protective suit, honey extractor", "A single bee produces only about one-twelfth of a teaspoon of honey in its entire lifetime"]
  },
  {
    name: "Actor",
    clues: ["🎭🎬🌟📽️🎤", "Works on movie sets, theaters, and TV studios", "Performs roles and brings characters to life", "Script, costume, makeup, stage lights", "Charlie Chaplin once entered a Charlie Chaplin look-alike contest and came in third place"]
  },
  {
    name: "Detective",
    clues: ["🔍🕵️📂🔦🧩", "Works at a police department or private agency", "Investigates crimes by gathering evidence and interviewing witnesses", "Magnifying glass, forensic kit, notebook, badge", "Fingerprinting as a detective tool was first used by police in Argentina in 1892"]
  },
  {
    name: "Paramedic",
    clues: ["🚑💉❤️🩺🏥", "Works in an ambulance responding to 911 calls", "Provides emergency medical care at the scene of accidents", "Defibrillator, stretcher, oxygen tank, medical kit", "Paramedics must make life-or-death decisions in an average response time of just 7 minutes"]
  },
  {
    name: "Marine Biologist",
    clues: ["🐙🌊🐠🔬🤿", "Works near the ocean or in research labs", "Studies marine organisms and ocean ecosystems", "Scuba gear, underwater camera, water sampling tools", "Over 80 percent of the ocean remains unexplored and unmapped"]
  },
  {
    name: "DJ",
    clues: ["🎧🎶💿🎛️🕺", "Works at nightclubs, festivals, and events", "Mixes music and controls the energy of the crowd", "Turntables, mixer, headphones, speakers", "The first DJ ever was Ray Newby, a 16-year-old who played records on the radio in 1909"]
  },
  {
    name: "Archaeologist",
    clues: ["🏺⛏️🦴🗿📜", "Works at dig sites and historical locations", "Excavates artifacts to learn about past civilizations", "Trowel, brush, grid frame, dating equipment", "Howard Carter discovered King Tut's tomb in 1922 after searching for it for over a decade"]
  },
  {
    name: "Bus Driver",
    clues: ["🚌🛣️🎫👋🏙️", "Works behind the wheel on city routes", "Transports passengers safely along designated routes", "Steering wheel, fare box, route map, two-way radio", "School buses are yellow because a 1939 conference determined it was the most visible color at dawn and dusk"]
  },
  {
    name: "Locksmith",
    clues: ["🔑🔒🚪🔧🏠", "Works from a shop or mobile van", "Opens locks, makes keys, and installs security systems", "Lock picks, key cutting machine, blank keys", "The oldest known lock was found in the ruins of an Assyrian palace and is over 4000 years old"]
  },
  {
    name: "Meteorologist",
    clues: ["🌤️📡🌪️🗺️📊", "Works at a TV station or weather center", "Predicts weather patterns using data and satellite imagery", "Weather radar, barometer, satellites, computer models", "The butterfly effect concept came from a meteorologist who found tiny changes could drastically alter forecasts"]
  },
  {
    name: "Tattoo Artist",
    clues: ["🎨💉🖋️💪🐉", "Works in a tattoo parlor", "Creates permanent body art by injecting ink into the skin", "Tattoo machine, ink, stencils, gloves", "The oldest known tattooed human is Oetzi the Iceman who had 61 tattoos and lived over 5000 years ago"]
  },
  {
    name: "Fisherman",
    clues: ["🎣🐟🚤🌊🦐", "Works on boats in oceans, rivers, or lakes", "Catches fish and seafood for sale or consumption", "Fishing rod, nets, traps, sonar equipment", "The largest fish ever caught on a rod weighed over 2600 pounds — it was a great white shark in 1959"]
  },
  {
    name: "Translator",
    clues: ["🌍📝🗣️📖🔤", "Works in offices or remotely from anywhere", "Converts text or speech from one language to another", "Dictionaries, translation software, headset", "The most translated document in the world is the Universal Declaration of Human Rights available in over 500 languages"]
  },
  {
    name: "Stunt Performer",
    clues: ["🤸💥🎬🔥🏍️", "Works on movie and TV sets", "Performs dangerous action sequences in place of actors", "Crash pads, harness, fire-resistant suit, breakaway props", "Jackie Chan has broken nearly every bone in his body performing his own stunts over his career"]
  },
  {
    name: "Optometrist",
    clues: ["👓👁️🔍💡📋", "Works in an eye care clinic", "Tests vision and prescribes glasses or contact lenses", "Phoropter, eye chart, slit lamp, retinoscope", "The Snellen eye chart with the big E on top has been used since 1862"]
  },
  {
    name: "Sommelier",
    clues: ["🍷🍇👃🥂📝", "Works in fine dining restaurants", "Selects, serves, and recommends wine to guests", "Corkscrew, tastevin, decanter, wine list", "Master Sommeliers must pass one of the world's hardest exams — only about 10 percent pass on their first try"]
  },
  {
    name: "Cartographer",
    clues: ["🗺️📐🌍✏️🧭", "Works in geographic agencies or tech companies", "Creates and designs maps of geographic areas", "GIS software, surveying tools, aerial imagery", "The oldest surviving world map is the Babylonian Map of the World dating back to the 6th century BC"]
  },
  {
    name: "Park Ranger",
    clues: ["🌲🏕️🦌🥾🏔️", "Works in national parks and nature reserves", "Protects wildlife and educates visitors about nature", "Binoculars, radio, first aid kit, trail maps", "The National Park Service manages over 85 million acres of protected land in the United States"]
  },
  {
    name: "Yoga Instructor",
    clues: ["🧘‍♀️🕉️💆🌿😌", "Works in a yoga studio or wellness center", "Guides students through poses and breathing exercises", "Yoga mat, blocks, resistance bands, meditation bell", "Yoga is over 5000 years old and originated in ancient India as a spiritual practice"]
  },
  {
    name: "Auctioneer",
    clues: ["🔨💰🗣️🎤📦", "Works at auction houses and live events", "Sells items to the highest bidder using rapid chanting", "Gavel, microphone, catalog, bidding paddles", "Professional auctioneers can speak up to 400 words per minute during a fast-paced auction"]
  },
  {
    name: "Welder",
    clues: ["🔥⚙️🥽🏗️✨", "Works in factories and construction sites", "Joins metal parts together using extreme heat", "Welding torch, helmet, gloves, filler rods", "Underwater welders work in some of the most dangerous conditions earning premium hazard pay"]
  },
  {
    name: "Air Traffic Controller",
    clues: ["📡✈️🗼🎧📊", "Works in a control tower at an airport", "Directs aircraft takeoffs, landings, and flight paths", "Radar screen, radio headset, flight strips", "Air traffic controllers must retire by age 56 due to the extreme stress and focus the job requires"]
  }
];

// ============ STATE ============

let state = {
  currentJobIndex: -1,
  revealedClues: 0,
  score: 0,
  streak: 0,
  round: 1,
  usedJobs: [],
  guessedWrong: false,
  roundOver: false
};

// ============ DOM REFS ============

const $score = document.getElementById('score');
const $streak = document.getElementById('streak');
const $streakFire = document.getElementById('streak-fire');
const $round = document.getElementById('round');
const $pointsBadge = document.getElementById('points-badge');
const $clueCards = document.getElementById('clue-cards');
const $guessInput = document.getElementById('guess-input');
const $btnGuess = document.getElementById('btn-guess');
const $btnNextClue = document.getElementById('btn-next-clue');
const $autocomplete = document.getElementById('autocomplete-dropdown');
const $resultOverlay = document.getElementById('result-overlay');
const $resultCard = document.getElementById('result-card');
const $resultEmoji = document.getElementById('result-emoji');
const $resultTitle = document.getElementById('result-title');
const $resultAnswer = document.getElementById('result-answer');
const $resultPoints = document.getElementById('result-points');
const $btnNextRound = document.getElementById('btn-next-round');
const $btnRestart = document.getElementById('btn-restart');
const $btnHow = document.getElementById('btn-how');
const $howModal = document.getElementById('how-modal');
const $btnCloseHow = document.getElementById('btn-close-how');
const $inputArea = document.getElementById('input-area');
const $canvas = document.getElementById('confetti-canvas');
const ctx = $canvas.getContext('2d');

const progressDots = document.querySelectorAll('.progress-dot');
const cards = document.querySelectorAll('.clue-card');

// ============ CONFETTI ENGINE ============

let confettiPieces = [];
let confettiAnimating = false;

function resizeCanvas() {
  $canvas.width = window.innerWidth;
  $canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class ConfettiPiece {
  constructor() {
    this.x = Math.random() * $canvas.width;
    this.y = -10 - Math.random() * 40;
    this.size = 4 + Math.random() * 6;
    this.speedY = 2 + Math.random() * 3;
    this.speedX = (Math.random() - 0.5) * 3;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 10;
    this.opacity = 1;
    const colors = ['#ff6b6b', '#ffc857', '#6bcb77', '#a78bfa', '#67d4e2', '#ff9ff3', '#feca57'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.shape = Math.random() > 0.5 ? 'rect' : 'circle';
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.rotation += this.rotationSpeed;
    this.speedX *= 0.99;
    if (this.y > $canvas.height * 0.7) {
      this.opacity -= 0.02;
    }
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = this.color;
    if (this.shape === 'rect') {
      ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}

function launchConfetti() {
  confettiPieces = [];
  for (let i = 0; i < 120; i++) {
    confettiPieces.push(new ConfettiPiece());
  }
  if (!confettiAnimating) {
    confettiAnimating = true;
    animateConfetti();
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  confettiPieces = confettiPieces.filter(p => p.opacity > 0);
  confettiPieces.forEach(p => {
    p.update();
    p.draw();
  });
  if (confettiPieces.length > 0) {
    requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimating = false;
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  }
}

// ============ GAME LOGIC ============

function getAvailablePoints() {
  return Math.max(1, 5 - state.revealedClues + 1);
}

function pickRandomJob() {
  if (state.usedJobs.length >= JOBS.length) {
    state.usedJobs = [];
  }
  let idx;
  do {
    idx = Math.floor(Math.random() * JOBS.length);
  } while (state.usedJobs.includes(idx));
  state.usedJobs.push(idx);
  return idx;
}

function startRound() {
  state.currentJobIndex = pickRandomJob();
  state.revealedClues = 0;
  state.guessedWrong = false;
  state.roundOver = false;

  const job = JOBS[state.currentJobIndex];

  // Set clue content
  for (let i = 0; i < 5; i++) {
    document.getElementById(`clue-${i}`).textContent = job.clues[i];
  }

  // Reset cards
  cards.forEach((card, i) => {
    card.classList.remove('flipped', 'visible', 'current');
    if (i === 0) card.classList.add('current');
  });

  // Reset progress dots
  progressDots.forEach((dot, i) => {
    dot.classList.remove('active', 'revealed');
    if (i === 0) dot.classList.add('active');
  });

  // Reset input
  $guessInput.value = '';
  $guessInput.disabled = false;
  $btnGuess.disabled = false;
  $btnNextClue.classList.remove('hidden');
  $inputArea.classList.remove('hidden');
  $autocomplete.classList.remove('open');

  // Hide result
  $resultOverlay.classList.add('hidden');

  // Update display
  updatePointsBadge();
  updateStats();

  // Reveal first clue with a small delay
  setTimeout(() => revealClue(0), 300);
}

function revealClue(index) {
  if (index >= 5) return;

  const card = cards[index];
  card.classList.add('visible', 'flipped');

  // Update progress
  progressDots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i < index) dot.classList.add('revealed');
    if (i === index) dot.classList.add('active');
  });

  // Mark current
  cards.forEach(c => c.classList.remove('current'));
  card.classList.add('current');

  // Make next cards slightly visible
  for (let i = index + 1; i < 5; i++) {
    cards[i].classList.add('visible');
  }

  state.revealedClues = index + 1;
  updatePointsBadge();

  // Hide next clue button on last clue
  if (index >= 4) {
    $btnNextClue.classList.add('hidden');
  }
}

function updatePointsBadge() {
  const pts = getAvailablePoints();
  $pointsBadge.textContent = `${pts} pt${pts !== 1 ? 's' : ''}`;
  $pointsBadge.classList.add('score-pop');
  setTimeout(() => $pointsBadge.classList.remove('score-pop'), 400);
}

function updateStats() {
  $score.textContent = state.score;
  $round.textContent = state.round;

  // Streak display
  const streakText = state.streak;
  $streak.innerHTML = `${streakText}<span class="streak-fire" id="streak-fire">🔥</span>`;
  const fire = document.getElementById('streak-fire');
  if (state.streak >= 2) {
    fire.classList.add('visible');
  }
}

function normalizeAnswer(str) {
  return str.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ');
}

function checkGuess(guess) {
  const job = JOBS[state.currentJobIndex];
  const normalizedGuess = normalizeAnswer(guess);
  const normalizedAnswer = normalizeAnswer(job.name);

  // Exact match
  if (normalizedGuess === normalizedAnswer) return true;

  // Contains match (for multi-word jobs)
  if (normalizedAnswer.includes(normalizedGuess) && normalizedGuess.length >= 4) return true;
  if (normalizedGuess.includes(normalizedAnswer)) return true;

  // Handle common variations
  const variations = {
    'cop': 'police officer',
    'police': 'police officer',
    'doctor': 'surgeon',
    'doc': 'surgeon',
    'postman': 'mailman',
    'mail carrier': 'mailman',
    'postal worker': 'mailman',
    'coder': 'software developer',
    'programmer': 'software developer',
    'developer': 'software developer',
    'software engineer': 'software developer',
    'wine expert': 'sommelier',
    'wine steward': 'sommelier',
    'map maker': 'cartographer',
    'mapmaker': 'cartographer',
    'stewardess': 'flight attendant',
    'cabin crew': 'flight attendant',
    'weather forecaster': 'meteorologist',
    'weatherman': 'meteorologist',
    'eye doctor': 'optometrist',
    'hair stylist': 'barber',
    'hairdresser': 'barber',
    'disc jockey': 'dj',
    'exterminator': 'pest control',
    'vet': 'veterinarian',
    'atc': 'air traffic controller',
    'yoga teacher': 'yoga instructor',
    'marine scientist': 'marine biologist',
  };

  if (variations[normalizedGuess] === normalizedAnswer) return true;

  return false;
}

function submitGuess() {
  const guess = $guessInput.value.trim();
  if (!guess || state.roundOver) return;

  if (checkGuess(guess)) {
    handleCorrectGuess();
  } else {
    handleWrongGuess();
  }
}

function handleCorrectGuess() {
  state.roundOver = true;
  const points = getAvailablePoints();
  const streakBonus = state.streak >= 2 ? Math.floor(state.streak / 2) : 0;
  const totalPoints = points + streakBonus;

  state.score += totalPoints;
  state.streak += 1;

  // Reveal all remaining clues
  for (let i = 0; i < 5; i++) {
    cards[i].classList.add('visible', 'flipped');
    progressDots[i].classList.add('revealed');
  }

  // Show result
  $resultEmoji.textContent = '🎉';
  $resultTitle.textContent = 'Correct!';
  $resultTitle.className = 'result-title correct';
  $resultAnswer.innerHTML = `The job was <strong>${JOBS[state.currentJobIndex].name}</strong>`;
  let pointsText = `+${points} points`;
  if (streakBonus > 0) {
    pointsText += ` (+${streakBonus} streak bonus!)`;
  }
  $resultPoints.textContent = pointsText;
  $resultOverlay.classList.remove('hidden');

  // Animate score
  $score.textContent = state.score;
  $score.classList.add('score-pop');
  setTimeout(() => $score.classList.remove('score-pop'), 400);

  updateStats();
  launchConfetti();

  $guessInput.disabled = true;
  $btnGuess.disabled = true;
}

function handleWrongGuess() {
  $guessInput.classList.add('shake');
  setTimeout(() => $guessInput.classList.remove('shake'), 500);
  $guessInput.value = '';
  $guessInput.focus();
}

function handleSkipRound() {
  state.roundOver = true;
  state.streak = 0;

  // Reveal all clues
  for (let i = 0; i < 5; i++) {
    cards[i].classList.add('visible', 'flipped');
    progressDots[i].classList.add('revealed');
  }

  $resultEmoji.textContent = '😅';
  $resultTitle.textContent = 'Not quite!';
  $resultTitle.className = 'result-title wrong';
  $resultAnswer.innerHTML = `The job was <strong>${JOBS[state.currentJobIndex].name}</strong>`;
  $resultPoints.textContent = '0 points';
  $resultOverlay.classList.remove('hidden');

  updateStats();

  $guessInput.disabled = true;
  $btnGuess.disabled = true;
}

function nextClue() {
  if (state.revealedClues >= 5) {
    // All clues revealed, auto-skip
    handleSkipRound();
    return;
  }
  revealClue(state.revealedClues);
}

function nextRound() {
  state.round += 1;
  startRound();
}

function restartGame() {
  state = {
    currentJobIndex: -1,
    revealedClues: 0,
    score: 0,
    streak: 0,
    round: 1,
    usedJobs: [],
    guessedWrong: false,
    roundOver: false
  };
  startRound();
}

// ============ AUTOCOMPLETE ============

const allJobNames = JOBS.map(j => j.name).sort();

function showAutocomplete(query) {
  if (!query || query.length < 2) {
    $autocomplete.classList.remove('open');
    return;
  }

  const normalizedQuery = query.toLowerCase();
  const matches = allJobNames.filter(name =>
    name.toLowerCase().includes(normalizedQuery)
  ).slice(0, 6);

  if (matches.length === 0) {
    $autocomplete.classList.remove('open');
    return;
  }

  $autocomplete.innerHTML = matches.map((name, i) =>
    `<div class="autocomplete-item${i === 0 ? ' highlighted' : ''}" data-name="${name}">${name}</div>`
  ).join('');

  $autocomplete.classList.add('open');
}

let highlightedIndex = -1;

function navigateAutocomplete(direction) {
  const items = $autocomplete.querySelectorAll('.autocomplete-item');
  if (items.length === 0) return;

  items.forEach(item => item.classList.remove('highlighted'));

  if (direction === 'down') {
    highlightedIndex = Math.min(highlightedIndex + 1, items.length - 1);
  } else {
    highlightedIndex = Math.max(highlightedIndex - 1, 0);
  }

  items[highlightedIndex]?.classList.add('highlighted');
}

function selectAutocomplete() {
  const highlighted = $autocomplete.querySelector('.autocomplete-item.highlighted');
  if (highlighted) {
    $guessInput.value = highlighted.dataset.name;
    $autocomplete.classList.remove('open');
    highlightedIndex = -1;
  }
}

// ============ EVENT LISTENERS ============

$guessInput.addEventListener('input', () => {
  highlightedIndex = 0;
  showAutocomplete($guessInput.value);
});

$guessInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if ($autocomplete.classList.contains('open')) {
      const highlighted = $autocomplete.querySelector('.autocomplete-item.highlighted');
      if (highlighted) {
        $guessInput.value = highlighted.dataset.name;
        $autocomplete.classList.remove('open');
      }
    }
    submitGuess();
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    navigateAutocomplete('down');
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    navigateAutocomplete('up');
  } else if (e.key === 'Escape') {
    $autocomplete.classList.remove('open');
  }
});

$autocomplete.addEventListener('click', (e) => {
  const item = e.target.closest('.autocomplete-item');
  if (item) {
    $guessInput.value = item.dataset.name;
    $autocomplete.classList.remove('open');
    submitGuess();
  }
});

// Close autocomplete on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.input-wrapper')) {
    $autocomplete.classList.remove('open');
  }
});

$btnGuess.addEventListener('click', submitGuess);
$btnNextClue.addEventListener('click', nextClue);
$btnNextRound.addEventListener('click', nextRound);
$btnRestart.addEventListener('click', restartGame);

$btnHow.addEventListener('click', () => $howModal.classList.remove('hidden'));
$btnCloseHow.addEventListener('click', () => $howModal.classList.add('hidden'));
$howModal.addEventListener('click', (e) => {
  if (e.target === $howModal) $howModal.classList.add('hidden');
});

// ============ INIT ============

startRound();
