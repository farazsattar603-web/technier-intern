function addTask() {
    const input = document.getElementById("taskInput");
    const tasktext = input.value.trim();

    if (tasktext === "") {
        return;
    }

    const li = document.createElement('li');
    li.textContent = tasktext;

    const removebtn = document.createElement("button");
    removebtn.textContent = "X";
    removebtn.onclick = function() {
        li.remove();
    };

    li.appendChild(removebtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}