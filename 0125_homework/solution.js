const addBtn = document.querySelector('#add-btn');
const input = document.querySelector('#add-input');
const itemsUL = document.querySelector('#list');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!input.value) return;

  /**
   * answer 3
   */
  const li = document.createElement('li');
  const textP = document.createElement('p');
  const iconP = document.createElement('p');
  const pen = document.createElement('i');
  const times = document.createElement('i');
  const brank = document.createElement('span');

  pen.className = 'fa fa-pencil';
  times.className = 'fa fa-times';
  textP.textContent = input.value;
  li.appendChild(textP);
  li.appendChild(iconP).appendChild(pen);
  brank.textContent = ' ';
  li.appendChild(iconP).appendChild(brank);
  li.appendChild(iconP).appendChild(times);
  itemsUL.appendChild(li);
  input.value = '';

  /**
   * answer 2 (before adding delete function)
   */
  // const data = itemsUL.firstElementChild.cloneNode(true);
  // data.firstElementChild.textContent = input.value;
  // itemsUL.appendChild(data);
  // input.value = '';

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
