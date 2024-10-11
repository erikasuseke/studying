let selectedDay = "monday";
let editingTaskIndex = null;

window.onload = function () {
  selectDay("monday", "Pirmadienio", document.querySelector(".weekListElement.active"));
};

function getTodoTasks() {
  let storedTasks = localStorage.getItem("todoTaskList");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function saveTodoTasks(data) {
  localStorage.setItem("todoTaskList", JSON.stringify(data));
}

function addNewTodoTask() {
  let taskInput = document.querySelector("#newTaskInput").value;
  if (taskInput === "") {
    alert("Įvesties laukas tuščias");
    return;
  }

  let selectedDayOption = document.querySelector("#assingListOption").value;
  if (selectedDayOption === "default") {
    alert("Pasirinkite savaitės dieną");
    return;
  }

  const newTask = {
    title: taskInput,
    day: selectedDayOption,
    taskIsDone: false,
  };

  const tasks = getTodoTasks();
  tasks.push(newTask);
  saveTodoTasks(tasks);

  selectDay(newTask.day, getDayText(newTask.day), document.querySelector(`[onclick="selectDay('${newTask.day}', '${getDayText(newTask.day)}', this)"]`));
  updateTodoList();
  document.querySelector("#newTaskInput").value = ""; // Clear input after adding
}

function getDayText(day) {
  switch (day) {
    case "monday":
      return "Pirmadienio";
    case "tuesday":
      return "Antradienio";
    case "wednesday":
      return "Trečiadienio";
    case "thursday":
      return "Ketvirtadienio";
    case "friday":
      return "Penktadienio";
    default:
      return "Užduotys";
  }
}

function selectDay(day, dayText, element) {
  selectedDay = day;
  const tasks = getTodoTasks();
  let listContainer = document.querySelector(".listContainer");
  let activeElements = document.querySelectorAll("#weekList .active");
  listContainer.innerHTML = "";

  let dayTitle = document.querySelector(".selectedDayText");
  dayTitle.innerText = `${dayText} užduotys`;

  tasks.forEach((task, index) => {
    if (task.day === day) {
      listContainer.innerHTML += `
      <div class="todo">
        <article class="${task.taskIsDone ? "taskDone" : ""}">
          <input type="checkbox" onclick="markAsDoneTask(${index})" ${task.taskIsDone ? "checked" : ""}/>
          <span>${task.title}</span>
        </article>
        <div class="btnContainer">
          <button onclick="editTodoTask(${index})">
            <i class="fa-solid fa-pen-to-square blue"></i>
          </button>
          <button onclick="deleteTodoTask(${index})"><i class="fa-solid fa-trash red"></i></button>
        </div>
      </div><br>`;
    }
  });

  activeElements.forEach((button) => button.classList.remove("active"));
  element.classList.add("active");
}

function updateTodoList() {
  selectDay(selectedDay, getDayText(selectedDay), document.querySelector(".weekListElement.active"));
}

function markAsDoneTask(id) {
  const tasks = getTodoTasks();
  tasks[id].taskIsDone = !tasks[id].taskIsDone;
  saveTodoTasks(tasks);
  updateTodoList();
}


function editTodoTask(id) {
  editingTaskIndex = id;
  const editContainer = document.querySelector(".editContainer");
  editContainer.style.display = "flex";

  const tasks = getTodoTasks();
  const taskToEdit = tasks[id];

  document.querySelector("#editInputVal").value = taskToEdit.title;
  document.querySelector("#editAssingListOption").value = taskToEdit.day;
}

function deleteTodoTask(id) {
  const tasks = getTodoTasks();
  const deletedTaskDay = tasks[id].day;

  tasks.splice(id, 1);
  saveTodoTasks(tasks);

  selectDay(deletedTaskDay, getDayText(deletedTaskDay), document.querySelector(".weekListElement.active"));
  updateTodoList();
}

function saveEdit() {
  const tasks = getTodoTasks();
  tasks[editingTaskIndex].title = document.querySelector("#editInputVal").value;
  tasks[editingTaskIndex].day = document.querySelector("#editAssingListOption").value;

  saveTodoTasks(tasks);
  closeEditTodoTask();
  updateTodoList();
}

function closeEditTodoTask() {
  const editContainer = document.querySelector(".editContainer");
  editContainer.style.display = "none";
}
