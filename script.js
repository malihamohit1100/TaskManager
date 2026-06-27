let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const title = document.getElementById("title").value;
    const subject = document.getElementById("subject").value;
    const priority = document.getElementById("priority").value;

    if (title === "" || subject === "") {
        alert("Please fill all fields");
        return;
    }

    const task = {
        title: title,
        subject: subject,
        priority: priority,
        completed: false
    };

    tasks.push(task);
    saveTasks();

    document.getElementById("title").value = "";
    document.getElementById("subject").value = "";

    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("task-list");

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    if (currentFilter === "pending") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    filteredTasks.forEach(task => {
        const index = tasks.indexOf(task);

        const div = document.createElement("div");

        div.classList.add("task");

        if (task.completed) {
            div.classList.add("completed");
        }

        div.innerHTML = `
            <h3>${task.title}</h3>
            <p>Subject: ${task.subject}</p>
            <p class="${task.priority.toLowerCase()}">
                Priority: ${task.priority}
            </p>
            <p>Status: ${task.completed ? "Completed" : "Pending"}</p>

            <button onclick="completeTask(${index})">
                Complete
            </button>

            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(div);
    });

    updateCounter();
}

function completeTask(index) {
    tasks[index].completed = true;
    saveTasks();
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

function filterTasks(filter) {
    currentFilter = filter;
    displayTasks();
}

function updateCounter() {
    const total = tasks.length;

    const completed = tasks.filter(task => task.completed).length;

    const pending = total - completed;

    document.getElementById("total").textContent = total;
    document.getElementById("completed").textContent = completed;
    document.getElementById("pending").textContent = pending;
}

function updateDateTime() {
    const now = new Date();

    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const time = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML =
        `<strong>Today:</strong><br>${day} ${month} ${year}<br>${time}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();
displayTasks();

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}


