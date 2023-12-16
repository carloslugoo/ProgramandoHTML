 // Cargar tareas almacenadas al cargar la página
 window.onload = function() {
    var storedTasks1 = localStorage.getItem('tasks1');
    var storedTasks2 = localStorage.getItem('tasks2');
    var storedTasks3 = localStorage.getItem('tasks3');
    var storedTasks4 = localStorage.getItem('tasks4');


    if (storedTasks1) {
        var estudioList = document.getElementById('estudio');
        estudioList.innerHTML = storedTasks1;
    }
    if (storedTasks2) {
        var tareaList = document.getElementById('tarea');
        tareaList.innerHTML = storedTasks2;
    }
    if (storedTasks3) {
        var personalList = document.getElementById('personal');
        personalList.innerHTML = storedTasks3;
    }
    if (storedTasks4) {
        var completoList = document.getElementById('completo');
        completoList.innerHTML = storedTasks4;
    }
};
function addTask() {
    var taskInput = document.getElementById('task-input');
    var tagsSelect = document.getElementById('tags-select');
    var taskText = taskInput.value.trim();
    var taskTag = tagsSelect.value;

    if (taskText !== '') {
       
        var taskItem = document.createElement('li');
        miLista.style.fontWeight = "bold";
        
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        var taskLabel = document.createElement('span');
        taskLabel.textContent = `${taskText}`;
        console.log(taskTag)

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() {
            taskItem.style.color = "black";
            todoList.removeChild(taskItem);
            saveTasks();
        };

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        
        if (taskTag == 'estudio'){
            var todoList = document.getElementById('estudio');
            todoList.appendChild(taskItem);
        } else if (taskTag == 'tarea'){
            var todoList = document.getElementById('tarea');
            todoList.appendChild(taskItem);
        } else{
            var todoList = document.getElementById('personal');
            todoList.appendChild(taskItem);
        }
        taskInput.value = '';


        // Guardar tareas después de agregar una nueva
        saveTasks();
    }
}

function deleteTask() {
    var estudioList = document.getElementById('estudio');
    var tareaList = document.getElementById('tarea');
    var personalList = document.getElementById('personal');
    var completoList = document.getElementById('completo');

    var tasks1 = estudioList.querySelectorAll('.task input:checked');
    var tasks2 = tareaList.querySelectorAll('.task input:checked');
    var tasks3 = personalList.querySelectorAll('.task input:checked');
    var tasks4 = completoList.querySelectorAll('.task input:checked');

    tasks1.forEach(function(checkedTask) {
        var taskItem = checkedTask.parentElement;
        estudioList.removeChild(taskItem);
    });

    tasks2.forEach(function(checkedTask) {
        var taskItem = checkedTask.parentElement;
        tareaList.removeChild(taskItem);
    });

    tasks3.forEach(function(checkedTask) {
        var taskItem = checkedTask.parentElement;
        personalList.removeChild(taskItem);
    });
    
    tasks4.forEach(function(checkedTask) {
        var taskItem = checkedTask.parentElement;
        completoList.removeChild(taskItem);
    });


    // Guardar tareas después de eliminar
    saveTasks();
}

//completado
function completeTask() {
    var estudioList = document.getElementById('estudio');
    var tareaList = document.getElementById('tarea');
    var personalList = document.getElementById('personal');
    var tasks1 = estudioList.querySelectorAll('.task input:checked');
    var tasks2 = tareaList.querySelectorAll('.task input:checked');
    var tasks3 = personalList.querySelectorAll('.task input:checked');

    var completoList = document.getElementById('completo');
    
    tasks1.forEach(function(checkedTask) {
        var taskItem = checkedTask.parentElement;
        completoList.appendChild(taskItem);
    });

    tasks2.forEach(function(checkedTask) {
        var taskItem = checkedTask.parentElement;
        completoList.appendChild(taskItem);
    });

    tasks3.forEach(function(checkedTask) {
        var taskItem = checkedTask.parentElement;
        completoList.appendChild(taskItem);
    });

    saveTasks();
}
function saveTasks() {
    var estudioList = document.getElementById('estudio');
    var tareaList = document.getElementById('tarea');
    var personalList = document.getElementById('personal');
    var completoList = document.getElementById('completo');

    var tasks1 = estudioList.innerHTML;
    var tasks2 = tareaList.innerHTML;
    var tasks3 = personalList.innerHTML;
    var tasks4 = completoList.innerHTML;

    localStorage.setItem('tasks1', tasks1);
    localStorage.setItem('tasks2', tasks2);
    localStorage.setItem('tasks3', tasks3);
    localStorage.setItem('tasks4', tasks4);
}