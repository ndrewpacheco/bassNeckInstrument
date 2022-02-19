const synth = new Tone.Synth().toDestination();

const main = document.querySelector(".main");
const bassNotes = [
  ["E1", "A1", "D2", "G2"],
  ["F1", "A#1", "D#2", "G#2"],
  ["F#1", "B1", "E2", "A2"],
  ["G1", "C2", "F2", "A#2"],
  ["G#1", "C#2", "F#2", "B2"],
];

const bassStrings = [
  ["E1", "F1", "F#1", "G1", "G#1"],
  ["A1", "A#1", "B1", "C2", "C#2"],
  ["D2", "D#2", "E2", "F2", "F#2"],
  ["G2", "G#2", "A2", "A#2", "B2"],
];

bassStrings.forEach((bassString) => {
  const fret = document.createElement("div");
  fret.className = "fret";
  // Tone.start();
  bassString.forEach((letter) => {
    const note = document.createElement("div");
    note.className = "note";
    note.textContent = letter;

    note.addEventListener("mousedown", (evt) => {
      console.log("touched " + letter);
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
