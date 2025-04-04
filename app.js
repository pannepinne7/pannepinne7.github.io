const majorScales = [
  "C Major", "C# Major", "D Major", "D# Major", "E Major",
  "F Major", "F# Major", "G Major", "G# Major", "A Major", "A# Major", "B Major"
];

const minorScales = [
  "A Minor", "A# Minor", "B Minor", "C Minor", "C# Minor",
  "D Minor", "D# Minor", "E Minor", "F Minor", "F# Minor", "G Minor", "G# Minor"
];


const majorPentatonicScales = {
  "C Major Pentatonic": ["C", "D", "E", "G", "A"],
  "C# Major Pentatonic": ["C#", "D#", "F", "G#", "A#"],
  "D Major Pentatonic": ["D", "E", "F#", "A", "B"],
  "D# Major Pentatonic": ["D#", "F", "G", "A#", "C"],
  "E Major Pentatonic": ["E", "F#", "G#", "B", "C#"],
  "F Major Pentatonic": ["F", "G", "A", "C", "D"],
  "F# Major Pentatonic": ["F#", "G#", "A#", "C#", "D#"],
  "G Major Pentatonic": ["G", "A", "B", "D", "E"],
  "G# Major Pentatonic": ["G#", "A#", "C", "D#", "F"],
  "A Major Pentatonic": ["A", "B", "C#", "E", "F#"],
  "A# Major Pentatonic": ["A#", "C", "D", "F", "G"],
  "B Major Pentatonic": ["B", "C#", "D#", "F#", "G#"]
};

const minorPentatonicScales = {
  "A Minor Pentatonic": ["A", "C", "D", "E", "G"],
  "A# Minor Pentatonic": ["A#", "C#", "D#", "F", "G#"],
  "B Minor Pentatonic": ["B", "D", "E", "F#", "A"],
  "C Minor Pentatonic": ["C", "D#", "F", "G", "A#"],
  "C# Minor Pentatonic": ["C#", "E", "F#", "G#", "B"],
  "D Minor Pentatonic": ["D", "F", "G", "A", "C"],
  "D# Minor Pentatonic": ["D#", "F#", "G#", "A#", "C#"],
  "E Minor Pentatonic": ["E", "G", "A", "B", "D"],
  "F Minor Pentatonic": ["F", "G#", "A#", "C", "D#"],
  "F# Minor Pentatonic": ["F#", "A", "B", "C#", "E"],
  "G Minor Pentatonic": ["G", "A#", "C", "D", "F"],
  "G# Minor Pentatonic": ["G#", "B", "C#", "D#", "F#"]
};

const minorBluesScales = {
  "A Blues": ["A", "C", "D", "D#", "E", "G"],
  "A# Blues": ["A#", "C#", "D#", "E", "F", "G#"],
  "B Blues": ["B", "D", "E", "F", "F#", "A"],
  "C Blues": ["C", "D#", "F", "F#", "G", "A#"],
  "C# Blues": ["C#", "E", "F#", "G", "G#", "B"],
  "D Blues": ["D", "F", "G", "G#", "A", "C"],
  "D# Blues": ["D#", "F#", "G#", "A", "A#", "C#"],
  "E Blues": ["E", "G", "A", "A#", "B", "D"],
  "F Blues": ["F", "G#", "A#", "B", "C", "D#"],
  "F# Blues": ["F#", "A", "B", "C", "C#", "E"],
  "G Blues": ["G", "A#", "C", "C#", "D", "F"],
  "G# Blues": ["G#", "B", "C#", "D", "D#", "F#"]
};

const majorBluesScales = {
  "C Major Blues": ["C", "D", "D#", "E", "G", "A"],
  "C# Major Blues": ["C#", "D#", "E", "F", "G#", "A#"],
  "D Major Blues": ["D", "E", "F", "F#", "A", "B"],
  "D# Major Blues": ["D#", "F", "F#", "G", "A#", "C"],
  "E Major Blues": ["E", "F#", "G", "G#", "B", "C#"],
  "F Major Blues": ["F", "G", "G#", "A", "C", "D"],
  "F# Major Blues": ["F#", "G#", "A", "A#", "C#", "D#"],
  "G Major Blues": ["G", "A", "A#", "B", "D", "E"],
  "G# Major Blues": ["G#", "A#", "B", "C", "D#", "F"],
  "A Major Blues": ["A", "B", "C", "C#", "E", "F#"],
  "A# Major Blues": ["A#", "C", "C#", "D", "F", "G"],
  "B Major Blues": ["B", "C#", "D", "D#", "F#", "G#"]
};



const chordTypes = {
  "Major": [0, 4, 7],
  "Minor": [0, 3, 7],
  "Maj7":  [0, 4, 7, 11],
  "Min7":  [0, 3, 7, 10]
};

const chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function buildChord(root, type) {
  const intervals = chordTypes[type];
  const rootIndex = chromatic.indexOf(root);
  if (rootIndex === -1) {
    console.warn("Invalid root note:", root);
    return [];
  }
  return intervals.map(i => chromatic[(rootIndex + i) % 12]);
}




const pianoNotes = [
    { note: 'C', type: 'white' },
    { note: 'C#', type: 'black' },
    { note: 'D', type: 'white' },
    { note: 'D#', type: 'black' },
    { note: 'E', type: 'white' },
    { note: 'F', type: 'white' },
    { note: 'F#', type: 'black' },
    { note: 'G', type: 'white' },
    { note: 'G#', type: 'black' },
    { note: 'A', type: 'white' },
    { note: 'A#', type: 'black' },
    { note: 'B', type: 'white' }
  ];
  

const learnedScales = JSON.parse(localStorage.getItem("learnedScales")) || {};
const streakData = JSON.parse(localStorage.getItem("streakData")) || {
  count: 0,
  lastDate: null,
};

const streakEl = document.getElementById("streak");
const practiceBtn = document.getElementById("practiceBtn");

function renderScales(containerId, scales) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  scales.forEach(scale => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = learnedScales[scale] || false;
    
    checkbox.addEventListener("change", () => {
        learnedScales[scale] = checkbox.checked;
        localStorage.setItem("learnedScales", JSON.stringify(learnedScales));
      
        if (checkbox.checked) {
          drawKeyboard(getScaleNotes(scale));
        }
      });
      

    const label = document.createElement("label");
    label.innerHTML = `<span class="scale-label">${scale}</span>`;

    label.querySelector('.scale-label').addEventListener('click', () => {
      const { raw, normalized } = getScaleNotes(scale);
      const rootNormalized = enharmonic(raw[0]);
      drawKeyboard(normalized, rootNormalized); // main scale
      renderScaleTriads(scale);                 // render triads below
    });
    
    
    
    
      
      

    li.appendChild(checkbox);
    li.appendChild(label);
    container.appendChild(li);
  });
}

renderScales("majorScalesList", majorScales);

renderScales("minorScalesList", minorScales);

function updateStreakDisplay() {
  streakEl.textContent = `🔥 Current Streak: ${streakData.count} day${streakData.count === 1 ? '' : 's'}`;
}

function checkStreak() {
  const today = new Date().toDateString();
  if (streakData.lastDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const wasYesterday = new Date(streakData.lastDate).toDateString() === yesterday.toDateString();

    streakData.count = wasYesterday ? streakData.count + 1 : 1;
    streakData.lastDate = today;
    localStorage.setItem("streakData", JSON.stringify(streakData));
  }
  updateStreakDisplay();
}

practiceBtn.addEventListener("click", checkStreak);
updateStreakDisplay();

// Page switching
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(pageId + "Page").classList.remove('hidden');
}

// Submenu toggle
function toggleSubmenu(id) {
  document.getElementById(id).classList.toggle("hidden");
}

function toggleMenu() {
    const menu = document.getElementById("menuItems");
    menu.classList.toggle("hidden");
  }
  
  function closeMenu() {
    const menu = document.getElementById("menuItems");
    menu.classList.add("hidden");
  }

  function enharmonic(note) {
    const map = {
      "Cb": "B",  "B#": "C",   "E#": "F",  "Fb": "E",
      "Db": "C#", "Eb": "D#",  "Gb": "F#", "Ab": "G#", "Bb": "A#",
      "F##": "G", "C##": "D",  "G##": "A", "D##": "E"
    };
    return map[note] || note;
  }
  
  

  function drawKeyboard(scaleNotes = [], rootNote = "", targetContainer = document.getElementById('keyboardContainer')) {
    const container = targetContainer;
    container.innerHTML = "";
  
    const fullNoteOrder = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const normalizedRoot = enharmonic(rootNote);
    const normalizedScale = scaleNotes.map(enharmonic);
  
    const whiteKeyWidth = 30;
    const whiteKeyHeight = 60;
    const blackKeyWidth = 20;
    const blackKeyHeight = 40;
  
    const keys = [];
    for (let i = 0; i < 24; i++) {
      const note = fullNoteOrder[i % 12];
      const type = note.includes('#') ? 'black' : 'white';
      keys.push({ note, type });
    }
  
    const rootIndex = keys.findIndex(k => k.note === normalizedRoot);
    if (rootIndex === -1) return;
  
    const oneOctave = keys.slice(rootIndex, rootIndex + 12).map(k => k.note);
    const highlightSet = new Set(oneOctave.filter(n => normalizedScale.includes(n)));
  
    // Render white keys
    let whiteIndex = 0;
    keys.forEach(({ note, type }, index) => {
      if (type === 'white') {
        const key = document.createElement('div');
        key.classList.add('key', 'white-key');
        key.style.width = whiteKeyWidth + 'px';
        key.style.height = whiteKeyHeight + 'px';
        key.style.display = 'inline-block';
        key.style.position = 'relative';
  
        const enhNote = enharmonic(note);
        if (index === rootIndex) {
          key.classList.add('root-note');
        } else if (highlightSet.has(enhNote) && index > rootIndex && index < rootIndex + 12) {
          key.classList.add('highlighted');
        }
  
        if (key.classList.contains('highlighted') || key.classList.contains('root-note')) {
          const label = document.createElement('span');
          label.innerText = enhNote;
          label.style.fontSize = '10px';
          label.style.position = 'absolute';
          label.style.bottom = '2px';
          label.style.left = '50%';
          label.style.transform = 'translateX(-50%)';
          label.style.color = type === 'white' ? 'black' : 'white';
          key.appendChild(label);
        }
  
        container.appendChild(key);
        whiteIndex++;
      }
    });
  
    // Reset whiteIndex for black key positioning
    whiteIndex = 0;
    const whiteKeyOffsets = [];
  
    keys.forEach(({ note, type }) => {
      if (type === 'white') {
        whiteKeyOffsets.push(whiteIndex * whiteKeyWidth);
        whiteIndex++;
      }
    });
  
    whiteIndex = 0;
    keys.forEach(({ note, type }, index) => {
      if (type === 'white') {
        whiteIndex++;
      } else {
        const key = document.createElement('div');
        key.classList.add('key', 'black-key');
        key.style.width = blackKeyWidth + 'px';
        key.style.height = blackKeyHeight + 'px';
        key.style.position = 'absolute';
        key.style.left = `${whiteKeyOffsets[whiteIndex - 1] + (whiteKeyWidth - blackKeyWidth / 2)}px`;
        key.style.zIndex = '2';
        key.style.border = '1px solid black';
  
        const enhNote = enharmonic(note);
        if (index === rootIndex) {
          key.classList.add('root-note');
        } else if (highlightSet.has(enhNote) && index > rootIndex && index < rootIndex + 12) {
          key.classList.add('highlighted');
        }
  
        if (key.classList.contains('highlighted') || key.classList.contains('root-note')) {
          const label = document.createElement('span');
          label.innerText = enhNote;
          label.style.fontSize = '10px';
          label.style.position = 'absolute';
          label.style.bottom = '2px';
          label.style.left = '50%';
          label.style.transform = 'translateX(-50%)';
          label.style.color = 'white';
          key.appendChild(label);
        }
  
        container.appendChild(key);
      }
    });
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  function normalizeNote(note) {
    const map = {
      "Cb": "B",  "Db": "C#", "Eb": "D#", "Fb": "E",  "Gb": "F#",
      "Ab": "G#", "Bb": "A#", "E#": "F",  "B#": "C"
    };
    return map[note] || note;
  }
  
  
  
  
  

  function getScaleNotes(scaleName) {
    const scales = {
      // === MAJOR SCALES ===
      "C Major":  ["C", "D", "E", "F", "G", "A", "B"],
      "C# Major": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
      "D Major":  ["D", "E", "F#", "G", "A", "B", "C#"],
      "D# Major": ["D#", "E#", "F##", "G#", "A#", "B#", "C##"],
      "E Major":  ["E", "F#", "G#", "A", "B", "C#", "D#"],
      "F Major":  ["F", "G", "A", "A#", "C", "D", "E"],  // Or use E#
      "F# Major": ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
      "G Major":  ["G", "A", "B", "C", "D", "E", "F#"],
      "G# Major": ["G#", "A#", "B#", "C#", "D#", "E#", "F##"],
      "A Major":  ["A", "B", "C#", "D", "E", "F#", "G#"],
      "A# Major": ["A#", "B#", "C##", "D#", "E#", "F##", "G##"],
      "B Major":  ["B", "C#", "D#", "E", "F#", "G#", "A#"],
  
      // === NATURAL MINOR SCALES ===
      "A Minor":  ["A", "B", "C", "D", "E", "F", "G"],
      "A# Minor": ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
      "B Minor":  ["B", "C#", "D", "E", "F#", "G", "A"],
      "C Minor":  ["C", "D", "D#", "F", "G", "G#", "A#"],
      "C# Minor": ["C#", "D#", "E", "F#", "G#", "A", "B"],
      "D Minor":  ["D", "E", "F", "G", "A", "A#", "C"],
      "D# Minor": ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
      "E Minor":  ["E", "F#", "G", "A", "B", "C", "D"],
      "F Minor":  ["F", "G", "G#", "A#", "C", "C#", "D#"],
      "F# Minor": ["F#", "G#", "A", "B", "C#", "D", "E"],
      "G Minor":  ["G", "A", "A#", "C", "D", "D#", "F"],
      "G# Minor": ["G#", "A#", "B", "C#", "D#", "E", "F#"]
    };
  
    const raw = scales[scaleName] || [];
    const normalized = raw.map(enharmonic);
    return { raw, normalized };
  }

  function renderChords(listId, roots, type) {
    const list = document.getElementById(listId);
    list.innerHTML = '';
  
    roots.forEach(root => {
      const chordName = `${root} ${type}`;
      const li = document.createElement("li");
  
      const label = document.createElement("label");
      label.innerHTML = `<span class="scale-label">${chordName}</span>`;
      
      label.querySelector('.scale-label').addEventListener('click', () => {
        const notes = buildChord(root, type).map(enharmonic);
        drawKeyboard(notes, enharmonic(root));
      });
      
  
      li.appendChild(label);
      list.appendChild(li);
    });
  }

  const roots = chromatic;

renderChords("majorChordsList", roots, "Major");
renderChords("minorChordsList", roots, "Minor");
renderChords("maj7ChordsList", roots, "Maj7");
renderChords("min7ChordsList", roots, "Min7");




function getScaleTriads(scaleNotes) {
  const triads = [];
  for (let i = 0; i < 7; i++) {
    const root = enharmonic(scaleNotes[i]);
    const third = enharmonic(scaleNotes[(i + 2) % 7]);
    const fifth = enharmonic(scaleNotes[(i + 4) % 7]);
    const chord = [root, third, fifth];

    // Determine chord quality
    const chroma = chromatic;
    const r = chroma.indexOf(root);
    const t = chroma.indexOf(third);
    const f = chroma.indexOf(fifth);
    const intervals = [
      (t - r + 12) % 12,
      (f - r + 12) % 12
    ];

    let type = "Major";
    if (intervals[0] === 3 && intervals[1] === 7) type = "Minor";
    else if (intervals[0] === 3 && intervals[1] === 6) type = "Diminished";

    triads.push({ root, chord, type });
  }
  return triads;
}



function renderScaleTriads(scaleName) {
  const container = document.getElementById("scaleChordsContainer");
  container.innerHTML = "";

  const { raw, normalized } = getScaleNotes(scaleName);
  const triads = getScaleTriads(normalized);

  const romanNumerals = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];

  triads.forEach((triad, i) => {
    const label = document.createElement("div");
    label.textContent = `${romanNumerals[i]} - ${triad.root} ${triad.type}`;
    label.style.fontWeight = "bold";
    label.style.margin = "10px 0 4px 0";
    container.appendChild(label);

    const keyboard = document.createElement("div");
    keyboard.className = "piano";
    keyboard.style.marginBottom = "20px";

    container.appendChild(keyboard);
    drawKeyboard(triad.chord, triad.root, keyboard);
  });
}


  
function renderCustomScaleList(containerId, scaleData) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  Object.entries(scaleData).forEach(([name, notes]) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.innerHTML = `<span class="scale-label">${name}</span>`;

    label.querySelector('.scale-label').addEventListener('click', () => {
      const root = enharmonic(notes[0]);
      drawKeyboard(notes.map(enharmonic), root);
      renderScaleTriads(""); // Clear triads if shown
    });

    li.appendChild(label);
    container.appendChild(li);
  });
}


renderCustomScaleList("majorPentatonicList", majorPentatonicScales);
renderCustomScaleList("minorPentatonicList", minorPentatonicScales);
renderCustomScaleList("majorBluesList", majorBluesScales);
renderCustomScaleList("minorBluesList", minorBluesScales);


  
  
  
  
  
  
  
  