const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragoleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  console.log("drag start");
  this.className += " hold";
  setTimeout(() => {
    (this.className = "invisible"), 0;
  });
}

function dragEnd() {
  console.log("drag end");
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
  // ^^^ dragover and dragenter have default actions
  // so I want to prevent their default behavior here
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  console.log("drag leave");
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
