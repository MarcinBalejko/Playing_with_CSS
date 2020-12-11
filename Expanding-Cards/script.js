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
  const panel1 = panels[0];
  const panel2 = panels[1];
  const panel3 = panels[2];
  const panel4 = panels[3];
  const panel5 = panels[4];

  setTimeout(() => {
    removeActiveClasses();
    panel1.classList.add("active");
  }, 1000);

  setTimeout(() => {
    removeActiveClasses();
    panel2.classList.add("active");
  }, 7000);

  setTimeout(() => {
    removeActiveClasses();
    panel3.classList.add("active");
  }, 13000);

  setTimeout(() => {
    removeActiveClasses();
    panel4.classList.add("active");
  }, 19000);

  setTimeout(() => {
    removeActiveClasses();
    panel5.classList.add("active");
  }, 25000);
}

function continuousRun() {
  slideShow();
  setInterval(() => {
    slideShow();
  }, 31000);
}

continuousRun();
