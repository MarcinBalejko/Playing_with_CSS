const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function slideShow() {
  setTimeout(() => {
    removeActiveClasses();
    panels[0].classList.add("active");
  }, 1000);

  setTimeout(() => {
    removeActiveClasses();
    panels[1].classList.add("active");
  }, 7000);

  setTimeout(() => {
    removeActiveClasses();
    panels[2].classList.add("active");
  }, 13000);

  setTimeout(() => {
    removeActiveClasses();
    panels[3].classList.add("active");
  }, 19000);

  setTimeout(() => {
    removeActiveClasses();
    panels[4].classList.add("active");
  }, 25000);
}

function continuousRun() {
  slideShow();
  setInterval(() => {
    slideShow();
  }, 31000);
}

continuousRun();
