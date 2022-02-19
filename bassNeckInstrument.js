import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

const main = document.querySelector(".main");
const bassNotes = [
  ["E1", "A1", "D1", "G2"],
  ["F1", "A#1", "D#1", "G#2"],
  ["F#1", "B1", "E2", "A2"],
  ["G1", "C1", "F2", "A#2"],
  ["G#1", "C#1", "F#2", "B2"],
];

bassNotes.forEach((bassFret) => {
  const fret = document.createElement("div");
  fret.setAttribute("class", "fret");

  bassFret.reverse().forEach((letter) => {
    const note = document.createElement("div");
    note.setAttribute("class", "note");
    note.textContent = letter;

    fret.appendChild(note);
  });

  main.appendChild(fret);
});
