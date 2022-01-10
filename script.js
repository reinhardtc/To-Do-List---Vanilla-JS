// get DOM elements by class
const toDoData = [];
const form = document.querySelector('form');
const input = document.querySelector('[name="toDo"]');
const toDoList = document.getElementById('toDoList');

//update internal HTML with new list item
function updateToDoList(toDoItem) {
  toDoData.push(toDoItem);
  const list = document.createElement('li');
  list.innerHTML = toDoItem;
  toDoList.appendChild(list);
  localStorage.setItem('toDos', JSON.stringify(toDoData));
}

form.onsubmit = event => {
  event.preventDefault();
  updateToDoList(input.value);
};
//save to local storage
