// Kinza's birthday surprise interactions
const openSurpriseButton = document.getElementById("openSurprise");
const closeModalButton = document.getElementById("closeModal");
const surpriseModal = document.getElementById("surpriseModal");
const celebrateButton = document.getElementById("celebrateButton");
const heartButton = document.getElementById("heartButton");
const heartsLayer = document.getElementById("heartsLayer");
const loveToast = document.getElementById("loveToast");

let toastTimer;

function showToast(message) {
  loveToast.textContent = message;
  loveToast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => loveToast.classList.remove("show"), 2600);
}

function openSurprise() {
  surpriseModal.hidden = false;
  document.body.style.overflow = "hidden";
  launchHearts(18);
  closeModalButton.focus();
}

function closeSurprise() {
  surpriseModal.hidden = true;
  document.body.style.overflow = "";
  openSurpriseButton.focus();
}

function launchHearts(amount = 8) {
  const symbols = ["♥", "♡", "✦", "❤"];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 20}px`;
    heart.style.setProperty("--duration", `${3 + Math.random() * 2.5}s`);
    heart.style.animationDelay = `${Math.random() * 0.8}s`;
    heartsLayer.appendChild(heart);
    window.setTimeout(() => heart.remove(), 6500);
  }
}

function launchConfetti() {
  const colors = ["#f3a6c0", "#d85e87", "#f5d58a", "#fff4f7", "#b85a82", "#e7a4ba"];
  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--fall-time", `${2 + Math.random() * 2.2}s`);
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.animationDelay = `${Math.random() * 0.7}s`;
    piece.style.width = `${5 + Math.random() * 5}px`;
    piece.style.height = `${8 + Math.random() * 8}px`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 5200);
  }
  showToast("Birthday magic for Kinza! 🎉💗");
}

openSurpriseButton.addEventListener("click", openSurprise);
closeModalButton.addEventListener("click", closeSurprise);
celebrateButton.addEventListener("click", () => {
  launchConfetti();
  launchHearts(22);
});
heartButton.addEventListener("click", () => {
  launchHearts(26);
  showToast("Sending Kinza a little extra love 💗");
});

surpriseModal.addEventListener("click", (event) => {
  if (event.target === surpriseModal) closeSurprise();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !surpriseModal.hidden) closeSurprise();
});

// A few gentle floating hearts appear as the page loads.
window.addEventListener("load", () => {
  window.setTimeout(() => launchHearts(7), 500);
});
