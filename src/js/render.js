const list = document.querySelector('.todo-list');

export function render(todos) {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    li.dataset.index = index;
    if (todo.done) li.classList.add('done');
    list.append(li);
  });
}
