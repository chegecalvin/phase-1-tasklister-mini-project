document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority")
  const newTasksList = document.getElementById("tasks");
  createTaskForm.addEventListener("submit", createNewTask);

});
const createNewTask = function (event) {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset(); 

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "X"
newTask.appendChild(deleteBtn);
deleteBtn.addEventListener("click", deleteTask)
};

const appendNewTask = function (task) {
  document.getElementById("tasks").appendChild(task);
}

function deleteTask (event) {
  event.target.parentNode.remove();
}
