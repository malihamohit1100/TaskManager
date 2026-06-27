# Student Task Manager (To-Do List)

## Overview

Student Task Manager is a simple web application built using HTML, CSS, and JavaScript. The purpose of this project is to help students organize their study tasks by adding, completing, deleting, and filtering tasks based on their status.

The application provides an easy-to-use interface and stores task data using Local Storage, allowing tasks to remain available even after the browser is closed or refreshed.

---

## Features

* Add new tasks with:

  * Task Name
  * Subject
  * Priority (High, Medium, Low)

* View all tasks in a structured format

* Mark tasks as completed

* Delete tasks

* Filter tasks by:

  * All
  * Completed
  * Pending

* Display task statistics:

  * Total Tasks
  * Completed Tasks
  * Pending Tasks

* Show current date and time with automatic updates

* Dark Mode support

* Persistent task storage using Local Storage

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## Task Structure

Each task is stored as an object:

```javascript
{
    title: "Practice JavaScript",
    subject: "Web Development",
    priority: "High",
    completed: false
}
```

---

## How It Works

1. Users enter task details and add a new task.
2. Tasks are displayed dynamically on the page.
3. Users can mark tasks as completed or delete them.
4. Tasks can be filtered based on their completion status.
5. Task statistics are updated automatically.
6. Tasks are saved in Local Storage so they remain available after refreshing or reopening the application.

---

## Concepts Applied

* DOM Manipulation
* Event Handling
* Arrays and Objects
* Functions
* Conditional Statements
* Loops
* Local Storage
* Date and Time Handling
* Dynamic UI Updates

---

## Learning Outcomes

This project helped me strengthen my understanding of JavaScript fundamentals, especially working with arrays, objects, DOM manipulation, event handling, and browser storage. It also provided practical experience in building an interactive web application from scratch.

---

## Future Improvements

* Edit existing tasks
* Add due dates
* Search functionality
* Sort tasks by priority
* Store data in a database
* User authentication system

---

## Conclusion

The Student Task Manager demonstrates the use of core web development technologies to create a functional and interactive task management application. It combines front-end development concepts with browser-based data persistence to provide a practical solution for managing study tasks.
