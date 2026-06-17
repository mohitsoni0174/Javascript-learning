const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

function createTask(taskText) {

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // EDIT BUTTON
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", () => {

    const updatedTask = prompt(
      "Edit your task:",
      taskSpan.textContent
    );

    if (
      updatedTask !== null &&
      updatedTask.trim() !== ""
    ) {
      taskSpan.textContent = updatedTask;
    }

  });

  // DELETE BUTTON
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

addBtn.addEventListener("click", () => {

  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  createTask(task);

  input.value = "";

});