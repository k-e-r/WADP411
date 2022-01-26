const avatar = document.querySelector('#avatar');
const coin = document.querySelector('#coin');
const sound = new Audio('assets/audio/smw_coin.wav');
const p = document.createElement('p');

let hMove = 0,
  vMove = 0;
let score = 0;
const offsetH = parseInt(window.getComputedStyle(coin, null).height);
const offsetW = parseInt(window.getComputedStyle(coin, null).width);

window.onload = function () {
  init();
};

function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const init = () => {
  const aRect = avatar.getBoundingClientRect();
  const height = Math.floor(Math.random() * (window.innerHeight - offsetH));
  const width = Math.floor(Math.random() * (window.innerWidth - offsetW));

  coin.style.left = `${width}px`;
  coin.style.top = `${height}px`;

  (hMove = aRect.left), (vMove = aRect.top);
  p.innerHTML = `Score: ${score}`;
  document.body.appendChild(p);
};

document.addEventListener('keydown', (event) => {
  const aRect = avatar.getBoundingClientRect();

  // left
  if (event.keyCode === 37) {
    if (aRect.left > 0) {
      hMove -= 50;
      avatar.style.left = `${hMove}px`;
    }
  }
  // up
  if (event.keyCode === 38) {
    if (aRect.top > 0) {
      vMove -= 50;
      avatar.style.top = `${vMove}px`;
    }
  }
  // right
  if (event.keyCode === 39) {
    if (aRect.left < window.innerWidth - offsetW) {
      hMove += 50;
      avatar.style.left = `${hMove}px`;
    }
  }
  // down
  if (event.keyCode === 40) {
    if (aRect.top < window.innerHeight - offsetH) {
      vMove += 50;
      avatar.style.top = `${vMove}px`;
    }
  }

  if (isTouching(avatar, coin)) {
    sound.play();
    score++;
    init();
  }
});
