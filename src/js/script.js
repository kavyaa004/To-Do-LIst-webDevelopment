function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let table = document.getElementById("taskTable");

    let row = document.createElement("tr");

    let serialCell = document.createElement("td");
    let taskCell = document.createElement("td");
    let statusCell = document.createElement("td");

    taskCell.innerText = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function () {
        row.remove();
        updateSerialNumbers();   // fix numbering
    };

    statusCell.appendChild(deleteBtn);

    row.appendChild(serialCell);
    row.appendChild(taskCell);
    row.appendChild(statusCell);

    table.appendChild(row);

    updateSerialNumbers();  // update when adding
    input.value = "";
}

// Function to update serial numbers
function updateSerialNumbers() {
    let rows = document.querySelectorAll("#taskTable tr");

    rows.forEach((row, index) => {
        row.children[0].innerText = index + 1;
    });
}
