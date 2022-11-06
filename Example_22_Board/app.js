const containeer = document.querySelector("#board");
const colors = [];
const SQUERES_NUMBER = 300;

for (let i = 0; i < SQUERES_NUMBER; i++) {
  const squere = document.createElement("div");
  squere.classList.add("square");
  squere.addEventListener("mouseover", () => {
    setColor(squere);
  });
  squere.addEventListener("mouseleave", () => {
    removeColor(squere);
  });
  containeer.append(squere);
}

const setColor = (el) => {
  let c = getRandomClor();
  el.style.backgroundColor = c;
  el.style.boxShadow = `0 0 2px ${c}, 0 0 10px ${c}`;
};

const removeColor = (el) => {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = `0 0 2px #000`;
};

const getRandomClor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

while (colors.length < 100) {
  do {
    var color = Math.floor(Math.random() * 1000000 + 1);
  } while (colors.indexOf(color) >= 0);
  colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}
