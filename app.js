const pianoKeys = document.querySelectorAll(".key");

function playSound() {
  new Audio("./24-keys/key01.mp3").play();
}
pianoKeys.forEach((pianoKey) => {
  pianoKey.addEventListener("click", playSound);
});

