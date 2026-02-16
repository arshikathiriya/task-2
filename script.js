const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = createTaskElement(taskText);
    taskList.appendChild(li);

    taskInput.value = "";
}

function createTaskElement(text) {
    const li = document.createElement("li");
    li.textContent = text;

   
    li.addEventListener("click", toggleTask);

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteTask);

    li.appendChild(deleteBtn);

    return li;
}

function toggleTask(event) {
    event.target.classList.toggle("completed");
}

function deleteTask(event) {
    event.target.parentElement.remove();
}
