const phrases = [
  "clean, reliable code.",
  "applications.",
  "things that work.",
  "projects.",
];

let phraseIdx = 0;
let charIdx = 0;
let deleting = false;

const typedEl = document.getElementById("typed");

function type() {
  const current = phrases[phraseIdx];

  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIdx);

    if (charIdx === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }

  setTimeout(type, deleting ? 45 : 75);
}
setTimeout(type, 600);
