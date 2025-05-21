function playMusic() {
  const audio = document.getElementById("bg-music");
  audio.play();
}

function customizeMessage() {
  const name = document.getElementById("name-input").value || "[Your Name]";
  const message = document.getElementById("message-input").value || "Wishing you a magical day full of joy, surprises, and cake! 🎁🍰";
  document.getElementById("name-display").innerText = name;
  document.getElementById("custom-message").innerText = message;
}
