const taskInput = document.querySelector(`#taskInput`);
const addBtn = document.querySelector(`#addBtn`);
const taskList = document.querySelector(`#taskList`);
const clearBtn = document.querySelector(`#clearBtn`);

let tasks = [];

function renderTasks(tasks) {
    taskList.innerHTML = ``;
    for (const taskText of tasks) {
        const taskListElement = document.createElement(`li`);
        const deleteBtn = document.createElement(`button`);
        deleteBtn.textContent = ` ❌  `;
        deleteBtn.addEventListener(`click`, function () {
            const taskListElement = deleteBtn.parentElement;
            if (taskListElement) {
                taskListElement.remove();
            }
        });
        taskListElement.append(deleteBtn);


        taskListElement.append(taskText);
        taskList.append(taskListElement);
        if (taskInput.value !== ``) {
            taskInput.value = ``;
        }

    };
    
    const savedTask = localStorage.getItem(`mySavedTask`)
    
if (savedTask) {
    const obj = JSON.parse(savedTask);
    tasks = obj;
    renderTasks(tasks);

    
}
addBtn.addEventListener(`click`, function () {
    const taskText = taskInput.value.trim();
    if (taskText !== ``) {
        tasks.push(taskText);
        
        renderTasks(tasks);
    }
    localStorage.setItem(`mySavedTask`, JSON.stringify(tasks));
});

}






clearBtn.addEventListener(`click`, function () {
    localStorage.removeItem(`mySavedTask`);
    tasks = [];
    renderTasks(tasks);
});

// let nbTasks = 0;
// const compter = document.createElement(`compter`);
// const resultat = document.createElement(`resultat`);

// compter.addEventListener(`click`, function () {
//     nbTasks++;
//     resultat.textContent = ` ${nbTasks} tâches restantes.`;
//     console.log(resultat);
    
// });
// taskList.append(nbTasks)