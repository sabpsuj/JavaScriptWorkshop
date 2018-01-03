document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.querySelector('input');
    var addButton = document.querySelector('#addTaskButton');
    var tasksList = document.querySelector('ul');
    var removeButton = document.querySelector('#removeFinishedTasksButton');
    var counter = document.querySelector('span#counter');
    var count = 0;
    taskInput.value = taskInput.innerHTML;
    var arr = [];

    function addTask() {
        if (taskInput.value.length >= 5 && taskInput.value.length <= 100) {
            var li = document.createElement('li');
            var taskTitle = document.createElement('h1');
            var completeButton = document.createElement('button');
            var deleteButton = document.createElement('button');
            tasksList.appendChild(li);
            li.appendChild(taskTitle);
            taskTitle.innerText = taskInput.value;
            li.appendChild(deleteButton);
            deleteButton.innerText = 'Delete';
            li.appendChild(completeButton);
            completeButton.innerText = 'Complete';
            taskInput.value = '';
            arr.push(li);
            counter.innerText = ++count;
        }
    };

    tasksList.onclick = function (event) {
        var target = event.target;
        if (target.innerText === 'Complete') {
            if (target.parentElement.classList !== 'done') {
                target.parentElement.classList.toggle('done');
                counter.innerText = --count;
            }
        } else if (target.innerText === 'Delete') {
            target.parentElement.parentElement.removeChild(target.parentElement);
            counter.innerText = --count;
        }
    }


    function removeCompleted() {
        var toDelete = document.querySelectorAll('li.done');
        for (var i = 0; i < toDelete.length; i++) {
                toDelete[i].parentElement.removeChild(toDelete[i]);
            counter.innerText = count;
        }
    };


    addButton.addEventListener('click', addTask);
    removeButton.addEventListener('click', removeCompleted);
})
;











