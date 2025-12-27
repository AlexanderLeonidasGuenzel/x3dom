const containers = document.querySelectorAll(".container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

showContainer(currentIndex);

function showContainer(index) {
  containers.forEach((c, i) => {
    c.classList.toggle("active", i === index);
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % containers.length;
  showContainer(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + containers.length) % containers.length;
  showContainer(currentIndex);
});
