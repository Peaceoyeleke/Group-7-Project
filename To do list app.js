const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const categorySelect = document.getElementById('categorySelect');
const dueDateInput = document.getElementById('dueDateInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask(taskInput.value, categorySelect.value, dueDateInput.value);
    taskInput.value = '';
    dueDateInput.value = '';
});

function addTask(taskText, category, dueDate) {
    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <span class="category-${category}">${category}</span>
        <span>${dueDate}</span>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(taskItem);
    
    const checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskItem.classList.add('complete');
        } else {
            taskItem.classList.remove('complete');
        }
    });
    
    const deleteButton = taskItem.querySelector('.delete');
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });
}
