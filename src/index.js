let selectedCell = document.querySelectorAll(".col");
console.log(selectedCell);

selectedCell.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("ohu");
    item.classList.toggle("green");
  });
});
