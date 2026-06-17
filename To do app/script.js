const input =
  document.querySelector("#taskInput");

const addBtn =
  document.querySelector("#addBtn");

const taskList =
  document.querySelector("#taskList");

addBtn.addEventListener("click", () => {

    const task = input.value;

    const li = document.createElement("li");

    li.textContent = task;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";

});