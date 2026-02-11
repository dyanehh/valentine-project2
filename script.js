const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const hearts = document.getElementById("hearts");

yesBtn.addEventListener("click", function () {
  popup.style.display = "block";
  hearts.style.display = "block";
  createHearts();
});

noBtn.addEventListener("mouseover", function () {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.position = "relative";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "🧡";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "24px";
    heart.style.animation = "float 3s linear infinite";
    hearts.appendChild(heart);
  }
}