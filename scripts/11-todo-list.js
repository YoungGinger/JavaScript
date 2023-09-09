const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {
  let todolistHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todolistHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todolistHTML;

    
}

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);
  inputElement.value = '';
  renderTodoList();
}



