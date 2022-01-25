const btn = document.querySelector('#add-btn');
const input = document.querySelector('#add-input');
const itemsUL = document.querySelector('#list');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!input.value) return;

  const newItemText = input.value;
  const newLI = document.createElement('li');
  newLI.innerHTML = `
    <p>${newItemText}</p>
    <p>
      <i class="fa fa-pencil"></i>
      <i class="fa fa-times"></i>
    </p>`;
  itemsUL.appendChild(newLI);
  input.value = '';
});
