const API_URL = 'https://randomuser.me/api?results=50';
const result = document.getElementById('result');
const filter = document.getElementById('filter');

async function getData() {
  const response = await fetch(API_URL);
  const { results } = await response.json();

  // clear result
  result.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'user-list';
  results.forEach((el) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const user = document.createElement('div');
    const name = document.createElement('h4');
    const location = document.createElement('p');

    img.setAttribute('src', el.picture.medium);
    li.appendChild(img);

    user.className = 'user-info';
    name.textContent = el.name.first + ' ' + el.name.last;
    user.appendChild(name);

    location.textContent = el.location.city + ', ' + el.location.country;
    user.appendChild(location);
    li.appendChild(user);

    container.appendChild(li);
  });
  result.appendChild(container);
}

filter.addEventListener('keyup', (e) => {
  let searchChar = e.target.value.toLowerCase();
  let users = result.querySelectorAll('li');

  Array.from(users).forEach((user) => {
    if (
      user.lastChild.childNodes[0].textContent
        .toLowerCase()
        .indexOf(searchChar) !== -1
    ) {
      user.classList.remove('hide');
    } else user.classList.add('hide');
  });
});

getData();
