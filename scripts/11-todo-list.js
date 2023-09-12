const todoList = [{
  name: 'make dinner',
  dueDate: '12-09-2023'
},{  
  name: 'wash dishes',
  dueDate: '12-09-2023'
}];

renderTodoList();

function renderTodoList() {
  let todolistHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
   
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">delete</button>  
    `;
    todolistHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todolistHTML;

    
}

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const inputElementDate = document.querySelector('.js-date');
  const dueDate = inputElementDate.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name, 
    dueDate
  });
  inputElement.value = '';
  renderTodoList();
}



