let todoList = [];

function addTodo() {
  todoList.push({
    title: document.querySelector('#add').value,
    no: document.querySelector('#todo-no').value
  })
  const toastBox = document.querySelector('#toastBox');

  let toast = document.createElement('div');
  toast.classList.add('toast')
  toast.classList.add('toast-add')
  toast.innerHTML = '<i class="ri-checkbox-circle-fill"></i> New Task Added';
  toastBox.appendChild(toast);


  setTimeout(() => {
    toast.remove();
  }, 3000)
  render()
}

function deleteTodo() {
  const todoNo = document.querySelector('#todo-no').value;
  const toastBox = document.querySelector('#toastBox');
  let toast = document.createElement('div');
  toast.classList.add('toast')
  if (todoNo > todoList.length || todoNo <= 0) {
    toast.innerHTML = '<i class="ri-error-warning-fill"></i> Invalid Task No';

  }
  else {
    todoList.splice(todoNo - 1, 1);
    toast.innerHTML = '<i class="ri-close-circle-fill"></i> Task Deleted';
    for (let i = 0; i < todoList.length; i++) {
      todoList[i].no = i + 1;
    }
  }
  if(toast.innerHTML.includes('Invalid')){
    toast.classList.add('toast-inv')
  }
  else{
    toast.classList.add('toast-del')
  }
  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000)
  render();
}

function modifyTodo() {
  const todoNo = document.querySelector('#todo-no').value;
  const modifyTask = document.querySelector('#modify').value;
  const toastBox = document.querySelector('#toastBox');
  let toast = document.createElement('div');
  toast.classList.add('toast')
  if (todoNo >= 1 && todoNo <= todoList.length) {
    todoList[todoNo - 1].title = modifyTask;
    toast.innerHTML = '<i class="ri-edit-circle-fill"></i> Task Modified';
  }
  else {
    toast.innerHTML = '<i class="ri-error-warning-fill"></i> Invalid Task No';
  }
  if(toast.innerHTML.includes('Invalid')){
    toast.classList.add('toast-inv')
  }
  else{
    toast.classList.add('toast-mod')
  }
  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000)
  render();
}
function createNewTodo(todo) {
  const div = document.createElement('div');
  div.classList.add('newTask')
  const p = document.createElement('p');
  p.textContent = `${todo.no}. ${todo.title}`;
  const label = document.createElement('label');
  const box = document.createElement('input');
  const span = document.createElement('span');
  box.type = 'checkbox';
  box.checked = false;
  label.appendChild(box);
  label.appendChild(span);
  div.append(p);
  div.append(label);
  return div;
}

function render() {
  document.querySelector('#todos').innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const newEle = createNewTodo(todoList[i]);
    document.querySelector('#todos').appendChild(newEle);
  }
}