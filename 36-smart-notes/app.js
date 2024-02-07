window.onload = function () {
  displayTask();
};

const input = document.querySelector('input'),
  btn = document.querySelector('button'),
  todoList = document.querySelector('.todo-list'),
  clear = document.querySelector('.clear');
let tasks;

btn.addEventListener('click', addTask);

// Get tasks from the Local Storage
function getTasks() {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
}

function addTask() {
  if (input.value !== '') {
    addTaskToLocalStorage();
    todoList.innerHTML = '';
    displayTask();
  } else {
    alert('Please enter a task!');
  }
}

// Save the task to local storage
function addTaskToLocalStorage() {
  getTasks();
  tasks.push(input.value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  input.value = '';
}

// Display task on the page
function displayTask() {
  getTasks();

  tasks.forEach((task, index) => {
    const newLi = document.createElement('li');
    const delBtn = document.createElement('button');

    delBtn.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i>`;

    newLi.appendChild(document.createTextNode(task));
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);
  });
}

//  Delete task from local storage
function deleteTask(index) {
  const del = confirm('You are about to delete this task!!!');

  if (del == true) {
    getTasks();
  }
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  todoList.innerHTML = '';
  displayTask();
}

// Clear all tasks
clear.addEventListener('click', clearTasks);

function clearTasks() {
  const delTasks = confirm('Delete all tasks!!!');

  if (delTasks == true) {
    localStorage.clear();
    todoList.innerHTML = '';
  }
}
