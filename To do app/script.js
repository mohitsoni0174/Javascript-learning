const input =
  document.querySelector("#taskInput");

const addBtn =
  document.querySelector("#addBtn");

const taskList =
  document.querySelector("#taskList");
  addBtn.addEventListener("click", () => {

  const task =
    input.value;

  console.log(task);

});
const li =
  document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
  