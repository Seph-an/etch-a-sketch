//By Seph-an
//ref1 - random color gen: https://css-tricks.com/snippets/javascript/random-hex-color/
//ref2 - CSS custom props (variables): https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
//ref3 - More CSS custom props: https://www.w3.org/TR/css-variables-1/
//ref4 - grid gen: https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

//navbar- #F17676 | body-#ACEFC7 | pageTitle - #2C3D7A | sketchPad - #FEF7F7
const home = document.querySelector("#home");
home.classList.add("home");
const header = document.createElement("header");
header.classList.add("header", "flx");

const nav = document.createElement("ul");
nav.classList.add("nav", "flx");
//yet to add references to links

const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = "imgs/logo.png";
logo.alt = "logo";

const navElement1 = document.createElement("a");
navElement1.classList.add("navElement");

const list1 = document.createElement("li");
list1.classList.add("link");
list1.textContent = "Home";
navElement1.appendChild(list1);

const navElement2 = document.createElement("a");
navElement2.classList.add("navElement");

const list2 = document.createElement("li");
list2.classList.add("link");
list2.textContent = "More sketching space?";
navElement2.appendChild(list2);

const navElement3 = document.createElement("a");
navElement3.classList.add("navElement");

const list3 = document.createElement("li");
list3.classList.add("link");
list3.textContent = "About";
navElement3.appendChild(list3);

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
gridContainer.id = "grid-container";

const hero = document.createElement("h2");
hero.classList.add("hero");
hero.textContent = "Move cursor in sketch-pad to draw.";

home.append(header, hero, gridContainer);
header.append(logo, nav);
nav.append(navElement1, navElement2, navElement3);

const container = document.querySelector("#grid-container");

function makeCells(rows, cols) {
  //change value of the CSS variables '--grid-rows' to new value of 'rows'...
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-box";
  }
}
makeCells(96, 96);

const cell = document.querySelectorAll(".grid-box");
const grids = [...cell];

function getGridHover() {
  grids.forEach((grid, i) => {
    let passOvers = 0;
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    grid.addEventListener("mouseover", () => {
      grid.style.background = "#" + randomColor;
      if (passOvers < 0.9) {
        passOvers += 0.1;
        pass = Math.round(passOvers * 10) / 10;
        grid.style.opacity = passOvers;
        // console.log("grid " + i + " has" + " " + pass);
      }
    });
  });
}

getGridHover();
