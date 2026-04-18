const taskInput = document.getElementById('taskInput');
const taskList = document.querySelector('.taskList')

function addTask(e) {
    event.preventDefault();

    if (taskInput.value === '') {
        alert("Must Write Task!");
    }
    else {
        let li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = "❌";
        li.appendChild(deleteBtn)
    }
    taskInput.value = "";
    saveData()
}

taskList.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('Checked');
        saveData()   
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem('data', taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem('data');
}
showTask();