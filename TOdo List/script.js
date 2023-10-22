document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${taskText}
                <button>Delete</button>
            `;

            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = "";

            // Attach a delete task function to the delete button
            listItem.querySelector("button").addEventListener("click", function () {
                taskList.removeChild(listItem);
            });
        }
    });
});
