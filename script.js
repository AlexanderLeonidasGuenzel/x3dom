const stopBtn = document.querySelector("#stop");
const startBtn = document.querySelector("#start");
const spin = document.querySelector("#spin");
const container = document.querySelectorAll(".container");

stopBtn.addEventListener("click", () => {
  spin.classList.remove("spin");
});
startBtn.addEventListener("click", () => {
  window.location.reload();
});

container.forEach((c, index) => {
  if (index === 0) return;
  c.style.display = "none";
});
