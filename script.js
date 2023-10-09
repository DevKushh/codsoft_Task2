document.addEventListener('DOMContentLoaded', function () 
{
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    const clearAllButton = document.getElementById('clearAll');

    // Logic for adding a task with fade-in animation.
    function addTaskWithAnimation(task) 
    {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span contenteditable="true">${task}</span>
            <button class="delete-button">Delete</button>
        `;
        listItem.classList.add('fade-in');
        taskList.appendChild(listItem);
    }

    // Logic for Adding a new task.
    addTaskButton.addEventListener('click', function () 
    {
        const newTask = taskInput.value.trim();
        if (newTask !== '') {
            addTaskWithAnimation(newTask);
            taskInput.value = '';
        }
    }
    );

    // Logic for Deleting or editing a task.
    taskList.addEventListener('click', function (event) 
    {
        const listItem = event.target.parentElement;
        if (event.target.classList.contains('delete-button'))
        {
            listItem.classList.add('fade-out');
            setTimeout(() => 
            {
                listItem.remove();
            }, 500); // Delay the removal to allow fade-out animation
        } else  
        {
            const span = listItem.querySelector('span');
            span.contentEditable = 'true';
            span.focus();
        }
    });

    // Logic for Clearing all tasks with fade-out animation 
    clearAllButton.addEventListener('click', function () 
    {
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach((task) => 
        {
            task.classList.add('fade-out');
            setTimeout(() => 
            {
                task.remove();
            }, 1000); // Delay the removal to allow fade-out animation
        });
    });
});
