document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return; // Ignore empty tasks

        const li = document.createElement("li");
        li.textContent = taskText;

        // Toggle completion status
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }

    addTaskButton.addEventListener("click", addTask);

    // Add task on pressing Enter
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

