const synth = new Tone.Synth().toDestination();

const main = document.querySelector(".main");
const bassNotes = [
  ["E1", "A1", "D2", "G2"],
  ["F1", "A#1", "D#2", "G#2"],
  ["F#1", "B1", "E2", "A2"],
  ["G1", "C2", "F2", "A#2"],
  ["G#1", "C#2", "F#2", "B2"],
];

bassNotes.forEach((bassFret) => {
  const fret = document.createElement("div");
  fret.className = "fret";

  bassFret.reverse().forEach((letter) => {
    const note = document.createElement("div");
    note.className = "note";
    note.textContent = letter;

    note.addEventListener("pointerdown", (evt) => {
      console.log("touched " + letter);
      synth.triggerAttackRelease(letter, "16n");
      evt.preventDefault();
    });
    fret.appendChild(note);
  });

  main.appendChild(fret);
});
