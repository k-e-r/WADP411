const avatar = document.querySelector('#avatar');
const coin = document.querySelector('#coin');
const sound = new Audio('assets/audio/smw_coin.wav');
const p = document.createElement('p');

let curLeft = 0,
  curTop = 0;
let score = 0;
let offsetCH, offsetCW, offsetMH, offsetMW;

window.onload = function () {
  offsetCH = parseInt(window.getComputedStyle(coin, null).height);
  offsetCW = parseInt(window.getComputedStyle(coin, null).width);
  offsetMH = parseInt(window.getComputedStyle(avatar, null).height);
  offsetMW = parseInt(window.getComputedStyle(avatar, null).width);
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
  const height = Math.floor(Math.random() * (window.innerHeight - offsetCH));
  const width = Math.floor(Math.random() * (window.innerWidth - offsetCW));

  coin.style.left = `${width}px`;
  coin.style.top = `${height}px`;

  (curLeft = aRect.left), (curTop = aRect.top);
  p.textContent = `Score: ${score}`;
  document.body.appendChild(p);
};

document.addEventListener('keydown', (event) => {
  const aRect = avatar.getBoundingClientRect();
  const moveVal = 50;

  if (event.key === 'ArrowLeft') {
    if (aRect.left > 0) {
      curLeft -= moveVal;
      avatar.style.left = `${curLeft}px`;
    }
  } else if (event.key === 'ArrowUp') {
    if (aRect.top > 0) {
      curTop -= moveVal;
      avatar.style.top = `${curTop}px`;
    }
  } else if (event.key === 'ArrowRight') {
    if (aRect.left < window.innerWidth - (offsetMW + moveVal)) {
      curLeft += moveVal;
      avatar.style.left = `${curLeft}px`;
    }
  } else if (event.key === 'ArrowDown') {
    if (aRect.top < window.innerHeight - (offsetMH + moveVal)) {
      curTop += moveVal;
      avatar.style.top = `${curTop}px`;
    }
  }

  if (isTouching(avatar, coin)) {
    sound.play();
    score++;
    init();
    Sleep(350);
    sound.pause();
    sound.currentTime = 0;
  }
});

function Sleep(milli_second) {
  var start = new Date();
  while (new Date() - start < milli_second);
}
