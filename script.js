let tasks = [];
const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }
    const task = {
        text: text,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        const li = document.createElement("li");

        li.classList.add("task-item");

        const span = document.createElement("span");

        span.textContent = task.text;

        span.classList.add("task-text");

        if (task.completed) {
            span.classList.add("completed");
        }

        span.addEventListener("click", function() {

            task.completed = !task.completed;

            displayTasks();
        });

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function() {

            tasks.splice(index, 1);

            displayTasks();
        });

        li.appendChild(span);

        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });
}

addButton.addEventListener("click", addTask);




