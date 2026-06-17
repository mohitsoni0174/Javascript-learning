const countElement =
  document.querySelector("#count");

const btn =
  document.querySelector("#btn");

let count = 0;

btn.addEventListener("click", () => {

  count++;

  countElement.textContent = count;

});