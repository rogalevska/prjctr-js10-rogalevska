"use strict";

// 1. Додавати задачі +
// 2. Видаляти окремі задачі +
// 3. Видаляти всі задачі +
// 4. Фільтрувати задачі +
// 5. Зберігати в localStorage +
// 6. Показувати актуальні задачі +

// оголошуємо змінні з якими будемо працювати
const form = document.querySelector(".create-task-form");
const taskInput = document.querySelector(".task-input");
const filterInput = document.querySelector(".filter-input");
const clearTasksButton = document.querySelector(".clear-tasks");
const taskList = document.querySelector(".collection");

// слухачі подій
// запускаємо функцію renderTasks коли весь HTML загружений
document.addEventListener("DOMContentLoaded", renderTasks);
// запускаємо функцію addTask коли відправляємо форму (клікаємо на кнопку "Додати завдання")
form.addEventListener("submit", addTask);
// запускаємо функцію removeTask коли клік попадає на список <ul>
taskList.addEventListener("click", handleItem);
// запускаємо функцію після кліку на кнопку "Видалити всі елементи"
clearTasksButton.addEventListener("click", removeAllTasks);
// запускаємо функцію filterTasks після того як ввідпускаємо клавішу (тоді, коли фокус в інпуті "Пошук завдань")
filterInput.addEventListener("input", filterTasks);

function handleItem(event) {
  if (event.target.classList.contains("delete-btn")) {
    removeTask(event);
  } else if (event.target.classList.contains("edit-btn")) {
    editTask(event);
  }
}

function renderTasks() {
  // чистимо все що всередниі тегу ul (collection)
  taskList.innerHTML = "";

  // робимо перевірку чи localStorage є щось за ключем tasks
  if (localStorage.getItem("tasks")) {
    // якщо щось там є - витягуємо і присвоюємо змінній
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    // для кожної задачі яка є
    tasks.forEach((task, index) => {
      // створюємо елемент списку - <li></li>
      const li = document.createElement("li");

      // сторюємо кнопку для видалення
      const button = document.createElement("button");
      const buttonEdit = document.createElement("button");
      // <button type="button" class="btn btn-default btn-sm">
      //     <span class="glyphicon glyphicon-pencil"></span> Pencil 
      //   </button>

      // всередині цього елементу списку додаємо опис завдання
      li.innerHTML = task;
      li.setAttribute('id', index);
      // всередину кнопку додаємо значення х
      button.innerHTML = "X";
      // додаємо їй клас
      button.classList.add("delete-btn");
      buttonEdit.classList.add("edit-btn");
      buttonEdit.innerHTML = "&#x270f;";

      // записуємо кнопку після всього, що є всередині елементу списку
      li.append(button);
      li.append(buttonEdit);

      // записуємо цей елемент в кінець списку - ul (collection)
      taskList.append(li);
    });
  }
}

// створюємо таску
function addTask(event) {
  // зупиняємо поведінку браузера за замовчуванням
  event.preventDefault();
  let tasksLength;
  if (JSON.parse(localStorage.getItem("tasks"))) {
    tasksLength = (JSON.parse(localStorage.getItem("tasks"))).length; 
  } else {
    tasksLength = 0;
  }
  // отримуємо значення з інпута через форму
  // const value = taskInput.value;
  // event.target.task ===  taskInput.value
  const value = event.target.task.value;

  // робимо перевірку на пустоту строки
  if (value.trim() === "") {
    return;
  }

  // повторюємо всі дії з функції renderTasks
  const li = document.createElement("li");
  const button = document.createElement("button");
  const buttonEdit = document.createElement("button");
  const span = document.createElement("span");

  li.innerHTML = value;
  li.setAttribute('id', tasksLength); 
  button.innerHTML = "X";
  button.classList.add("delete-btn");
  buttonEdit.classList.add("edit-btn");
  span.innerHTML = "&#x270f;";

  buttonEdit.append(span);
  li.append(button);
  li.append(buttonEdit);
  taskList.append(li);

  // але тут ще записуємо задачу в локал сторедж
  storeTaskInLocalStorage(value);
  // і чистимо інпут
  taskInput.value = "";
}

function storeTaskInLocalStorage(taskValue) {
  // і чистимо інпут
  let tasks = [];

  // перевіряємо чи є у localStorage вже якісь завдання
  if (localStorage.getItem("tasks")) {
    // якщо вони там є - витягуємо їх і присвоюємо змінній
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  // додаємо до списку нове завдання
  tasks.push(taskValue);

  // зберігаємо список завданнь в Local Storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// видалити якусь конкретну таску
function removeTask(event) {
  // якщо ми клікнули по хрестику - тоді
    // отримуємо всі елементи з стореджа
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    // отримуємо вміст задачі (те що всередині li)
    // const taskValue = event.target.previousSibling.textContent;

    const taskIndex = event.target.parentElement.id;
    
    // фільтруємо задачі
    // const filteredTasks = tasks.filter((task) => {
    //   return task !== taskValue;
    // });
    tasks.splice(taskIndex, 1);

    // зберігаємо в стореджі відфільтровані задачі
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // запускаємо функцію renderTasks
    renderTasks();
}

function editTask(event) {
    console.log("Edit Tasks");
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskIndex = event.target.parentElement.id;
    tasks[taskIndex] = prompt("Edit", tasks[taskIndex]);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();
}

// видаляємо всі таски
function removeAllTasks() {
  // видаляємо елементи з localStorage по ключу tasks
  localStorage.removeItem("tasks");
  // запускаємо функцію renderTasks
  renderTasks();
}

// фільтруємо задачі
function filterTasks(event) {
  // отримуємо результат з інпуту пошуку
  const searchQuery = event.target.value;
  // отримуємо всі задачі з dom дерева
  const liCollection = taskList.querySelectorAll("li");

  // перебираємо всі задачі
  liCollection.forEach((task) => {
    // отримуємо вміст задачі
    const liValue = task.firstChild.textContent;

    // якщо значення з інпута пошуку присутнє в задачі - додаємо dispaay: list-item
    if (liValue.includes(searchQuery)) {
      task.style.display = "list-item";
    } else {
      // інакше - display: none
      task.style.display = "none";
    }
  });
}
