const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
          <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
          <span class="${task.completed ? 'completed' : ''}">${task.name}</span>
          <button onclick="deleteTask(${index})">X</button>
        `;
        taskList.appendChild(taskItem);
      });
    }

    taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && taskInput.value.trim() !== '') {
        const newTask = {
          name: taskInput.value.trim(),
          completed: false
        };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
      }
    });

    
    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }

   
    function deleteAllTasks() {
      tasks = [];
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }

   
    function filterTasks(filterType) {
      const filteredTasks = tasks.filter(task => {
        if (filterType === 'active') {
          return !task.completed;
        } else if (filterType === 'completed') {
          return task.completed;
        } else {
          return true; 
        }
      });
      tasks = filteredTasks;
      renderTasks();
    }

   
    renderTasks();