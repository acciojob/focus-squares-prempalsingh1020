//your JS code here. If required.

let squares = document.querySelectorAll(".square");

for (let box of squares) {
  box.addEventListener("mouseenter", hover);
  box.addEventListener("mouseleave", reset);
}

function hover(event) {
  for (let box of squares) {
    if (box !== event.target) {
      box.style.backgroundColor = "#6F4E37"; // Coffee
    }
  }
}

function reset() {
  for (let box of squares) {
    box.style.backgroundColor = "#E6E6FA"; // Lavender
  }
}









