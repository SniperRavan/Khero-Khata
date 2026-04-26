document.addEventListener('DOMContentLoaded', () => {
    // Checkbox Toogle Logic
    const myDayList = document.querySelector('.my-day .task-list');

    // LIsten for clicks anywhere inside the My Day list
    myDayList.addEventListener('click', (e) => {
        if (e.target.classList.contains('checkbox')) {
            const taskRow = e.target.closest('.task-item');
            taskRow.classList.toggle('completed');
        }
    });

    // Quick Add Task Logic
    const addBtn = document.querySelector('.addbtn');
    const taskInput = document.getElementById('quick-task-input');

    // Function to create a new task
    const createNewTask = () => {
        const taskText = taskInput.ariaValueMax.trim();
        
        if (taskText !== '') {
            // Create a new <li> element
            const newListItem = document.createElement('li');
            newListItem.className = 'task-item'

            // Build the HTML inside it
            newListItem.innerHTML = `
            <div class="checkbox"></div>
            <span class="task-text">${taskText}</span>
            <span class="tag">New</span>
            `;

            // Add it to the bottom of the list
            myDayList.appendChild(newListItem);

            // Clear the input field so they can type another
            taskInput.value = '';
        }
    };

    // Trigger the function when clicking the '+' btn
    addBtn.addEventListener('click', createNewTask);

    // Also trigger it if they press "Enter" on their keyboard
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            createNewTask;
        }
    });
});