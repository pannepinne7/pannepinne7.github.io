"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var majorScales = ["C Major", "C# Major", "D Major", "D# Major", "E Major", "F Major", "F# Major", "G Major", "G# Major", "A Major", "A# Major", "B Major"];

var minorScales = ["A Minor", "A# Minor", "B Minor", "C Minor", "C# Minor", "D Minor", "D# Minor", "E Minor", "F Minor", "F# Minor", "G Minor", "G# Minor"];

var majorPentatonicScales = {
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

var minorPentatonicScales = {
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

var minorBluesScales = {
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

var majorBluesScales = {
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

var chordTypes = {
  "Major": [0, 4, 7],
  "Minor": [0, 3, 7],
  "Maj7": [0, 4, 7, 11],
  "Min7": [0, 3, 7, 10]
};

var chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function buildChord(root, type) {
  var intervals = chordTypes[type];
  var rootIndex = chromatic.indexOf(root);
  if (rootIndex === -1) {
    console.warn("Invalid root note:", root);
    return [];
  }
  return intervals.map(function (i) {
    return chromatic[(rootIndex + i) % 12];
  });
}

var pianoNotes = [{ note: 'C', type: 'white' }, { note: 'C#', type: 'black' }, { note: 'D', type: 'white' }, { note: 'D#', type: 'black' }, { note: 'E', type: 'white' }, { note: 'F', type: 'white' }, { note: 'F#', type: 'black' }, { note: 'G', type: 'white' }, { note: 'G#', type: 'black' }, { note: 'A', type: 'white' }, { note: 'A#', type: 'black' }, { note: 'B', type: 'white' }];

var learnedScales = JSON.parse(localStorage.getItem("learnedScales")) || {};
var streakData = JSON.parse(localStorage.getItem("streakData")) || {
  count: 0,
  lastDate: null
};

var streakEl = document.getElementById("streak");
var practiceBtn = document.getElementById("practiceBtn");

function renderScales(containerId, scales) {
  var container = document.getElementById(containerId);
  container.innerHTML = "";

  scales.forEach(function (scale) {
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = learnedScales[scale] || false;

    checkbox.addEventListener("change", function () {
      learnedScales[scale] = checkbox.checked;
      localStorage.setItem("learnedScales", JSON.stringify(learnedScales));

      if (checkbox.checked) {
        drawKeyboard(getScaleNotes(scale));
      }
    });

    var label = document.createElement("label");
    label.innerHTML = "<span class=\"scale-label\">" + scale + "</span>";

    label.querySelector('.scale-label').addEventListener('click', function () {
      var _getScaleNotes = getScaleNotes(scale);

      var raw = _getScaleNotes.raw;
      var normalized = _getScaleNotes.normalized;

      var rootNormalized = enharmonic(raw[0]);
      drawKeyboard(normalized, rootNormalized); // main scale
      renderScaleTriads(scale); // render triads below
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    container.appendChild(li);
  });
}

renderScales("majorScalesList", majorScales);

renderScales("minorScalesList", minorScales);

function updateStreakDisplay() {
  streakEl.textContent = "🔥 Current Streak: " + streakData.count + " day" + (streakData.count === 1 ? '' : 's');
}

function checkStreak() {
  var today = new Date().toDateString();
  if (streakData.lastDate !== today) {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var wasYesterday = new Date(streakData.lastDate).toDateString() === yesterday.toDateString();

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
  document.querySelectorAll('.page').forEach(function (p) {
    return p.classList.add('hidden');
  });
  document.getElementById(pageId + "Page").classList.remove('hidden');
}

// Submenu toggle
function toggleSubmenu(id) {
  document.getElementById(id).classList.toggle("hidden");
}

function toggleMenu() {
  var menu = document.getElementById("menuItems");
  menu.classList.toggle("hidden");
}

function closeMenu() {
  var menu = document.getElementById("menuItems");
  menu.classList.add("hidden");
}

function enharmonic(note) {
  var map = {
    "Cb": "B", "B#": "C", "E#": "F", "Fb": "E",
    "Db": "C#", "Eb": "D#", "Gb": "F#", "Ab": "G#", "Bb": "A#",
    "F##": "G", "C##": "D", "G##": "A", "D##": "E"
  };
  return map[note] || note;
}

function drawKeyboard() {
  var scaleNotes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var rootNote = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];
  var targetContainer = arguments.length <= 2 || arguments[2] === undefined ? document.getElementById('keyboardContainer') : arguments[2];

  var container = targetContainer;
  container.innerHTML = "";

  var fullNoteOrder = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  var normalizedRoot = enharmonic(rootNote);
  var normalizedScale = scaleNotes.map(enharmonic);

  var whiteKeyWidth = 30;
  var whiteKeyHeight = 60;
  var blackKeyWidth = 20;
  var blackKeyHeight = 40;

  var keys = [];
  for (var i = 0; i < 24; i++) {
    var note = fullNoteOrder[i % 12];
    var type = note.includes('#') ? 'black' : 'white';
    keys.push({ note: note, type: type });
  }

  var rootIndex = keys.findIndex(function (k) {
    return k.note === normalizedRoot;
  });
  if (rootIndex === -1) return;

  var oneOctave = keys.slice(rootIndex, rootIndex + 12).map(function (k) {
    return k.note;
  });
  var highlightSet = new Set(oneOctave.filter(function (n) {
    return normalizedScale.includes(n);
  }));

  // Render white keys
  var whiteIndex = 0;
  keys.forEach(function (_ref, index) {
    var note = _ref.note;
    var type = _ref.type;

    if (type === 'white') {
      var key = document.createElement('div');
      key.classList.add('key', 'white-key');
      key.style.width = whiteKeyWidth + 'px';
      key.style.height = whiteKeyHeight + 'px';
      key.style.display = 'inline-block';
      key.style.position = 'relative';

      var enhNote = enharmonic(note);
      if (index === rootIndex) {
        key.classList.add('root-note');
      } else if (highlightSet.has(enhNote) && index > rootIndex && index < rootIndex + 12) {
        key.classList.add('highlighted');
      }

      if (key.classList.contains('highlighted') || key.classList.contains('root-note')) {
        var label = document.createElement('span');
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
  var whiteKeyOffsets = [];

  keys.forEach(function (_ref2) {
    var note = _ref2.note;
    var type = _ref2.type;

    if (type === 'white') {
      whiteKeyOffsets.push(whiteIndex * whiteKeyWidth);
      whiteIndex++;
    }
  });

  whiteIndex = 0;
  keys.forEach(function (_ref3, index) {
    var note = _ref3.note;
    var type = _ref3.type;

    if (type === 'white') {
      whiteIndex++;
    } else {
      var key = document.createElement('div');
      key.classList.add('key', 'black-key');
      key.style.width = blackKeyWidth + 'px';
      key.style.height = blackKeyHeight + 'px';
      key.style.position = 'absolute';
      key.style.left = whiteKeyOffsets[whiteIndex - 1] + (whiteKeyWidth - blackKeyWidth / 2) + "px";
      key.style.zIndex = '2';
      key.style.border = '1px solid black';

      var enhNote = enharmonic(note);
      if (index === rootIndex) {
        key.classList.add('root-note');
      } else if (highlightSet.has(enhNote) && index > rootIndex && index < rootIndex + 12) {
        key.classList.add('highlighted');
      }

      if (key.classList.contains('highlighted') || key.classList.contains('root-note')) {
        var label = document.createElement('span');
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
  var map = {
    "Cb": "B", "Db": "C#", "Eb": "D#", "Fb": "E", "Gb": "F#",
    "Ab": "G#", "Bb": "A#", "E#": "F", "B#": "C"
  };
  return map[note] || note;
}

function getScaleNotes(scaleName) {
  var scales = {
    // === MAJOR SCALES ===
    "C Major": ["C", "D", "E", "F", "G", "A", "B"],
    "C# Major": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
    "D Major": ["D", "E", "F#", "G", "A", "B", "C#"],
    "D# Major": ["D#", "E#", "F##", "G#", "A#", "B#", "C##"],
    "E Major": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "F Major": ["F", "G", "A", "A#", "C", "D", "E"], // Or use E#
    "F# Major": ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
    "G Major": ["G", "A", "B", "C", "D", "E", "F#"],
    "G# Major": ["G#", "A#", "B#", "C#", "D#", "E#", "F##"],
    "A Major": ["A", "B", "C#", "D", "E", "F#", "G#"],
    "A# Major": ["A#", "B#", "C##", "D#", "E#", "F##", "G##"],
    "B Major": ["B", "C#", "D#", "E", "F#", "G#", "A#"],

    // === NATURAL MINOR SCALES ===
    "A Minor": ["A", "B", "C", "D", "E", "F", "G"],
    "A# Minor": ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
    "B Minor": ["B", "C#", "D", "E", "F#", "G", "A"],
    "C Minor": ["C", "D", "D#", "F", "G", "G#", "A#"],
    "C# Minor": ["C#", "D#", "E", "F#", "G#", "A", "B"],
    "D Minor": ["D", "E", "F", "G", "A", "A#", "C"],
    "D# Minor": ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
    "E Minor": ["E", "F#", "G", "A", "B", "C", "D"],
    "F Minor": ["F", "G", "G#", "A#", "C", "C#", "D#"],
    "F# Minor": ["F#", "G#", "A", "B", "C#", "D", "E"],
    "G Minor": ["G", "A", "A#", "C", "D", "D#", "F"],
    "G# Minor": ["G#", "A#", "B", "C#", "D#", "E", "F#"]
  };

  var raw = scales[scaleName] || [];
  var normalized = raw.map(enharmonic);
  return { raw: raw, normalized: normalized };
}

function renderChords(listId, roots, type) {
  var list = document.getElementById(listId);
  list.innerHTML = '';

  roots.forEach(function (root) {
    var chordName = root + " " + type;
    var li = document.createElement("li");

    var label = document.createElement("label");
    label.innerHTML = "<span class=\"scale-label\">" + chordName + "</span>";

    label.querySelector('.scale-label').addEventListener('click', function () {
      var notes = buildChord(root, type).map(enharmonic);
      drawKeyboard(notes, enharmonic(root));
    });

    li.appendChild(label);
    list.appendChild(li);
  });
}

var roots = chromatic;

renderChords("majorChordsList", roots, "Major");
renderChords("minorChordsList", roots, "Minor");
renderChords("maj7ChordsList", roots, "Maj7");
renderChords("min7ChordsList", roots, "Min7");

function getScaleTriads(scaleNotes) {
  var triads = [];
  for (var i = 0; i < 7; i++) {
    var root = enharmonic(scaleNotes[i]);
    var third = enharmonic(scaleNotes[(i + 2) % 7]);
    var fifth = enharmonic(scaleNotes[(i + 4) % 7]);
    var chord = [root, third, fifth];

    // Determine chord quality
    var chroma = chromatic;
    var r = chroma.indexOf(root);
    var t = chroma.indexOf(third);
    var f = chroma.indexOf(fifth);
    var intervals = [(t - r + 12) % 12, (f - r + 12) % 12];

    var type = "Major";
    if (intervals[0] === 3 && intervals[1] === 7) type = "Minor";else if (intervals[0] === 3 && intervals[1] === 6) type = "Diminished";

    triads.push({ root: root, chord: chord, type: type });
  }
  return triads;
}

function renderScaleTriads(scaleName) {
  var container = document.getElementById("scaleChordsContainer");
  container.innerHTML = "";

  var _getScaleNotes2 = getScaleNotes(scaleName);

  var raw = _getScaleNotes2.raw;
  var normalized = _getScaleNotes2.normalized;

  var triads = getScaleTriads(normalized);

  var romanNumerals = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];

  triads.forEach(function (triad, i) {
    var label = document.createElement("div");
    label.textContent = romanNumerals[i] + " - " + triad.root + " " + triad.type;
    label.style.fontWeight = "bold";
    label.style.margin = "10px 0 4px 0";
    container.appendChild(label);

    var keyboard = document.createElement("div");
    keyboard.className = "piano";
    keyboard.style.marginBottom = "20px";

    container.appendChild(keyboard);
    drawKeyboard(triad.chord, triad.root, keyboard);
  });
}

function renderCustomScaleList(containerId, scaleData) {
  var container = document.getElementById(containerId);
  container.innerHTML = '';

  Object.entries(scaleData).forEach(function (_ref4) {
    var _ref42 = _slicedToArray(_ref4, 2);

    var name = _ref42[0];
    var notes = _ref42[1];

    var li = document.createElement("li");
    var label = document.createElement("label");
    label.innerHTML = "<span class=\"scale-label\">" + name + "</span>";

    label.querySelector('.scale-label').addEventListener('click', function () {
      var root = enharmonic(notes[0]);
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
