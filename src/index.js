import './style.css';
import List from './list.js';
import Task from './task.js';
const listsContainer = document.querySelector('[data-lists]');

listsContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECT_LIST_ID_KEY = 'task.selectedListId';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECT_LIST_ID_KEY);
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListButton = document.querySelector('[data-delete-list-button]');
const listDisplayContainer = document.querySelector(
  '[data-list-display-container]'
);
const listTitleElement = document.querySelector('[data-list-title]');
const listCountElement = document.querySelector('[data-list-count]');
const taskTemplte = document.getElementById('task-template');
const priorityTemplate = document.getElementById('priority-template');
const tasksContainer = document.querySelector('[data-tasks]');
const formDisplayButton = document.getElementById('formBtn');
const showForm = document.getElementById('form');
const clearCompleteTasksButton = document.querySelector(
  '[data-clear-complete-tasks-button]'
);

clearCompleteTasksButton.addEventListener('click', e => {
  const selectedList = lists.find(list => list.id === selectedListId);
  selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
  saveAndRender();
});

const newTaskTitle = document.querySelector('[data-new-task-title]');
const newTaskDescription = document.querySelector(
  '[data-new-task-description]'
);
const newTaskDueDate = document.querySelector('[data-new-task-dueDate]');
const newTaskPriority = document.querySelector('[data-new-task-priority]');
const submitForm = document.getElementById('submit');

formDisplayButton.addEventListener('click', e => {
  showForm.style.display = 'block';
});

deleteListButton.addEventListener('click', e => {
  lists = lists.filter(list => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
});

newListForm.addEventListener('submit', e => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === '') return;
  const list = new List(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
});

submitForm.addEventListener('click', e => {
  // e.preventDefault();
  const taskName = newTaskTitle.value;
  const taskDescription = newTaskDescription.value;
  const taskDueDate = newTaskDueDate.value;
  const taskPriority = newTaskPriority.checked;
  if (
    taskName == null ||
    taskName === '' ||
    taskDescription == null ||
    taskDescription === '' ||
    taskDueDate == null ||
    taskPriority == null
  )
    return;
  const task = new Task(taskName, taskDescription, taskDueDate, taskPriority);
  const selectedList = lists.find(list => list.id === selectedListId);
  selectedList.tasks.push(task);
  // hideForm();
  saveAndRender();
  // console.log(task);
});

// function createTask(name, description, dueDate, priority) {
//   return {
//     id: Date.now().toString(),
//     name: name,
//     description: description,
//     dueDate: dueDate,
//     priority: priority,
//     complete: false
//   };
// }

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECT_LIST_ID_KEY, selectedListId);
}

function render() {
  clearElement(listsContainer);
  renderLists();
  const selectedList = lists.find(list => list.id === selectedListId);
  if (selectedListId == null) {
    listDisplayContainer.style.display = 'none';
  } else {
    listDisplayContainer.style.display = '';
    listTitleElement.innerText = selectedList.title;
    renderTaskCount(selectedList);
    clearElement(tasksContainer);
    renderTasks(selectedList);
    expandTask();
  }
}

function expandTask() {
  const listTesting = document.querySelectorAll('.test-add');
  const descriptionTest = document.querySelectorAll('.description');
  for (let i = 0; i < listTesting.length; i++) {
    listTesting[i].addEventListener('click', () => {
      descriptionTest[i].classList.toggle('hidden');
    });
  }
}

function renderTasks(selectedList) {
  selectedList.tasks.forEach(task => {
    const taskElement = document.importNode(taskTemplte.content, true);
    const descriptionText = taskElement.querySelector('.description');
    const ul = taskElement.querySelector('ul');
    ul.id = task.id;
    const label = taskElement.querySelector('li');
    label.htmlFor = task.id;
    label.append(task.name);
    descriptionText.append(task.description);
    const deleteTask = document.createElement('button');
    deleteTask.innerHTML = 'Delete';
    deleteTask.classList.add('delete-task-button');
    descriptionText.append(deleteTask);
    if (task.complete === false) {
      const completeTask = document.createElement('button');
      completeTask.innerHTML = 'Mark As Complete';
      completeTask.classList.add('complete-task-button');
      descriptionText.append(completeTask);
    } else {
      label.style.textDecoration = 'line-through';
    }
    if (task.priority === true) {
      const priority = document.importNode(priorityTemplate.content, true);
      tasksContainer.appendChild(priority);
    }
    tasksContainer.appendChild(taskElement);
  });

  deleteTasks(selectedList);
  completeTasks(selectedList);
}

function renderTaskCount(selectedList) {
  const incompleteTasksCount = selectedList.tasks.filter(task => !task.complete)
    .length;
  const taskString = incompleteTasksCount === 1 ? 'task' : 'tasks';
  listCountElement.innerText = `${incompleteTasksCount} ${taskString} remaining`;
}

function renderLists() {
  lists.forEach(list => {
    const listElement = document.createElement('li');
    listElement.dataset.listId = list.id;
    listElement.classList.add('list-name');
    listElement.innerText = list.title;
    if (list.id === selectedListId) {
      listElement.classList.add('active-list');
    }
    listsContainer.appendChild(listElement);
  });
}

function deleteTasks(selectedList) {
  const deleteTaskButton = document.querySelectorAll('.delete-task-button');

  for (let i = 0; i < deleteTaskButton.length; i++) {
    deleteTaskButton[i].addEventListener('click', e => {
      let deleteTest = selectedList.tasks.findIndex(
        task => task.id === deleteTaskButton[i].parentNode.parentNode.id
      );
      selectedList.tasks.splice(deleteTest, 1);
      saveAndRender();
    });
  }
}

function completeTasks(selectedList) {
  const completeTaskButton = document.querySelectorAll('.complete-task-button');
  for (let i = 0; i < completeTaskButton.length; i++) {
    completeTaskButton[i].addEventListener('click', e => {
      let changeCompletion = selectedList.tasks.find(
        task => task.id === completeTaskButton[i].parentNode.parentNode.id
      );
      changeCompletion.complete = true;
      saveAndRender();
    });
  }
}

function saveAndRender() {
  save();
  render();
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
