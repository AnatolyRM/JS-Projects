const startBtn = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");

const next = (st) => screens[st - 1].classList.add("up");
let time = 0;
let zif;
let score = 0;
startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  next(1);
});

function setTime(data) {
  timeEl.innerHTML = otobr(data);
}

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    next(2);
    startGame();
  }
});

board.addEventListener('click', (e) => {
  if (e.target.classList.contains("circle")) {
    score++
    e.target.remove()
    createRandomCircle()
  }
})

//DEBAG
//startGame();

function startGame() {
  zif = setInterval(decreaseTime, 1000);
  setTime(time);
  createRandomCircle();
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    setTime(current);
  }
}

function otobr(n) {
  let a = `00:0${n}`;
  let b = `00:${n}`;
  return n < 10 ? a : b;
}

function finishGame() {
  timeEl.parentNode.classList.add('hide')
  clearInterval(zif);
  board.innerHTML = `<h1>Ваш счёт: <span class="primary">${score}</span></h1>`


}

function createRandomCircle() {
  let rasm = randomChislo(10, 60)
  const { height, width } = board.getBoundingClientRect()
  const circle = document.createElement("div");
  const x = randomChislo(0, `${width - rasm}`);
  const y = randomChislo(0, `${height - rasm}`);
  circle.classList.add("circle");
  circle.style.background = randomGradient();
  circle.style.width = circle.style.height = `${rasm}px`;
  circle.style.top = `${x}px`
  circle.style.left = `${y}px`
  board.append(circle);
}

function randomChislo(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randonColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomGradient() {
  return `linear-gradient(45deg, ${randonColor()} 0%, ${randonColor()} 47%, ${randonColor()} 100%)`;
}

function winner() {
  function kil() {
    let circl = document.querySelector('.circle')
    if (circl) {
      circl.click()
    }
  }
  setInterval(kil, 10)
}