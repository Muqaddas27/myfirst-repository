// let add = document.querySelector("#add");
// let h2 = document.querySelector("h2");
// add.addEventListener("click", function () {
//   h2.textContent = "Friend added";
//   h2.style.color = "Red";
// });
// let remove = document.querySelector("#remove");
// remove.addEventListener("click", function () {
//   h2.textContent = "Friend removed";
//   h2.style.color = "blue";
// });

// If we wanted that usuing only one button we could toggle the text and color, we could do the following:

let add = document.querySelector("#add");
let h2 = document.querySelector("h2");
count = 0;
add.addEventListener("click", function () {
  if (count === 0) {
    h2.textContent = "Friend added";
    h2.style.color = "Red";
    count = 1;
  } else {
    h2.textContent = "Friend removed";
    h2.style.color = "blue";
    count = 0;
  }
});
