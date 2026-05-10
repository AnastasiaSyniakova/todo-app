import { loadTodos, saveTodos } from './storage.js';
import { render } from './render.js';

// Date
const dateEl = document.querySelector('.current-date');
dateEl.textContent = new Date().toLocaleDateString('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const todos = loadTodos();

render(todos);

const form = document.querySelector('.todo-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = e.target.elements.task.value.trim();
  if (text === '') return;
  todos.push({ text, done: false });
  saveTodos(todos);
  render(todos);
  e.target.reset();
});

document.querySelector('.todo-list').addEventListener('click', e => {
  if (e.target.tagName !== 'LI') return;
  const index = Number(e.target.dataset.index);
  todos[index].done = !todos[index].done;
  saveTodos(todos);
  render(todos);
});

// Clear button
document.querySelector('.clear-btn').addEventListener('click', () => {
  todos.splice(0, todos.length); // empty the array
  saveTodos(todos);
  render(todos);
});
