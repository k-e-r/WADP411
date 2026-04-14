const addBtn = document.querySelector('#add-btn');
const input = document.querySelector('#add-input');
const list = document.querySelector('#list');

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
  list.appendChild(li);
  input.value = '';

  /**
   * answer 2 (before adding delete function)
   */
  // const data = list.firstElementChild.cloneNode(true);
  // data.firstElementChild.textContent = input.value;
  // list.appendChild(data);
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
  // list.appendChild(newLI);
  // input.value = '';
});

list.addEventListener('click', function (e) {
  if (e.target.classList[1] === 'fa-pencil') {
    let parentP = e.target.parentNode;
    parentP.style.display = 'none';

    let note = parentP.previousElementSibling;
    let edInput = parentP.nextElementSibling;

    edInput.style.display = 'block';
    edInput.value = note.textContent;

    input.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        console.log('enter');
      }
    });
  } else if (e.target.classList[1] === 'fa-times') {
    e.target.parentNode.parentNode.remove();
  }
});
