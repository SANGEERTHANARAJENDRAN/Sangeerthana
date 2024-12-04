// script.js

// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add a new task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const taskItem = document.createElement('li');

  // Add task text
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete">Delete</button>
  `;

  // Mark as completed on click
  taskItem.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      taskItem.classList.toggle('completed');
    }
  });

  // Delete task on button click
  const deleteButton = taskItem.querySelector('.delete');
  deleteButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent triggering the mark-completed event
    taskList.removeChild(taskItem);
  });

  // Add task to the list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';
});
