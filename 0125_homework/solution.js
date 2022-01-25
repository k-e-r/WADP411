const btn = document.querySelector('#add-btn');
const input = document.querySelector('#add-input');
const itemsUL = document.querySelector('#list');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!input.value) return;

  /**
   * answer 2
   */
  const data = itemsUL.firstElementChild.cloneNode(true);
  data.firstElementChild.textContent = input.value;
  itemsUL.appendChild(data);
  input.value = '';

  /**
   * answer 1
   */
  // const newItemText = input.value;
  // const newLI = document.createElement('li');
  // newLI.innerHTML = `
  //   <p>${newItemText}</p>
  //   <p>
  //     <i class="fa fa-pencil"></i>
  //     <i class="fa fa-times"></i>
  //   </p>`;
  // itemsUL.appendChild(newLI);
  // input.value = '';
});
