var div = document.getElementById("boo");
function FindVexNote(val) {
  VF = Vex.Flow;

  // Create an SVG renderer and attach it to the DIV element named "boo".

  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  // Size our SVG:
  renderer.resize(500, 500);

  // And get a drawing context:
  var context = renderer.getContext();
  // Create a stave at position 10, 40 of width 400 on the canvas.
  var stave = new VF.Stave(150, 60, 140);

  // Add a clef and time signature.
  stave.addClef("bass");

  var note = new VF.StaveNote({
    clef: "bass",
    keys: [val],
    duration: "w",
  });

  if (val[1] === "#") {
    note.addAccidental(0, new VF.Accidental("#"));
  }
  // Create a voice in 4/4 and add the notes from above
  var voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
  voice.addTickables([note]);

  // Format and justify the notes to 350 pixels (50 pixels left for key and time signatures).
  var formatter = new VF.Formatter().joinVoices([voice]).format([voice]);

  // Render voice
  voice.draw(context, stave);

  // Connect it to the rendering context and draw!
  stave.setContext(context).draw();
}

function showStaffNote(letter) {
  div.innerHTML = `<h2>${letter}</h2>`;

  let num = letter.slice(-1);
  num = parseInt(num) + 1;
  letter = letter.slice(0, -1);
  FindVexNote(letter + "/" + num);
}

// BASS NECK
const synth = new Tone.Synth().toDestination();

const main = document.querySelector(".bassNeck");
// const bassNotes = [
//   ["E1", "A1", "D2", "G2"],
//   ["F1", "A#1", "D#2", "G#2"],
//   ["F#1", "B1", "E2", "A2"],
//   ["G1", "C2", "F2", "A#2"],
//   ["G#1", "C#2", "F#2", "B2"],
// ];

const bassStrings = [
  ["E1", "F1", "F#1", "G1", "G#1"],
  ["A1", "A#1", "B1", "C2", "C#2"],
  ["D2", "D#2", "E2", "F2", "F#2"],
  ["G2", "G#2", "A2", "A#2", "B2"],
];

bassStrings.forEach((bassString) => {
  const fret = document.createElement("div");
  fret.className = "fret";
  bassString.forEach((letter) => {
    const note = document.createElement("div");
    note.className = "note";
    note.textContent = letter;

    note.addEventListener("mousedown", (evt) => {
      showStaffNote(letter);
      Tone.start();
      synth.triggerAttackRelease(letter, "16n");

      // const now = Tone.now();
      // synth.triggerAttackRelease(letter, tune.duration, now);
      evt.preventDefault();
    });
    fret.appendChild(note);
  });

  main.appendChild(fret);
});

/*
  todo:

  figure out why sound doesn't start at touch
  - something with start sound right away
  - have a card alert with a play button on top before start
  grid or flexbox? fiugre out layout
  - align properly when in horizontal mode
  
  - get proper eleectric bass sound
  wood background,
*/
