function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 5 + "s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 300);

document.body.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    isPlaying = true;
  }
}, { once: true }); // só ativa uma vez
