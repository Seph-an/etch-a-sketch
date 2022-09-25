//By Sephan
//ref1 - random color gen:
// https://css-tricks.com/snippets/javascript/random-hex-color/
//ref2 - CSS custom props (variables):
// https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
//ref3 - More CSS custom props: https://www.w3.org/TR/css-variables-1/
//ref4 - grid gen:
//https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
/*
 ref5 - dealing with lost binding of event listeners:
 https://stackoverflow.com/questions/13767919/jquery-event-wont-fire-after-ajax-call
 */

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
list2.classList.add("link", "sketchSpace");
list2.textContent = "More sketching space?";
navElement2.appendChild(list2);

const navElement3 = document.createElement("a");
navElement3.classList.add("navElement");

const list3 = document.createElement("li");
list3.classList.add("link", "about");
list3.textContent = "How it works";
navElement3.appendChild(list3);

const containerPlus = document.createElement("div");
containerPlus.classList.add("containerPlus");

const sketchDiv = document.createElement("div");
sketchDiv.classList.add("sketchDiv", "flx");

const sketchTitle = document.createElement("p");
sketchTitle.classList.add("sketchTitle");
sketchTitle.textContent = "Sketch-pad.";

// const sketchClear = document.createElement("p");
// sketchClear.classList.add("sketchClear");
// sketchClear.textContent = "Clear";

const sketchClearBtn = document.createElement("button");
sketchClearBtn.classList.add("sketchClearBtn");
sketchClearBtn.id = "sketchClearBtn";
sketchClearBtn.innerHTML = "Clear";

// sketchDiv.append(sketchTitle, sketchClear);
sketchDiv.append(sketchTitle, sketchClearBtn);

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
gridContainer.id = "grid-container";

const hero = document.createElement("h2");
hero.classList.add("hero");
hero.textContent = "Move cursor in sketch-pad to draw.";

const gridSizeContainer = document.createElement("div");
gridSizeContainer.classList.add("gridSizeContainer");

const gridSizeDiv = document.createElement("div");
gridSizeDiv.classList.add("gridSizeDiv");
//gridSize should have: close button, input, enter button
const gridEnterBtn = document.createElement("button");
gridEnterBtn.classList.add("gridEnterBtn");
gridEnterBtn.innerHTML = "Enter";

const gridCloseBtn = document.createElement("button");
gridCloseBtn.classList.add("gridCloseBtn");
gridCloseBtn.innerHTML = "X";

const gridSizeTitle = document.createElement("h3");
gridSizeTitle.classList.add("gridSizeTitle");
gridSizeTitle.textContent = "Enter a number.";

const gridSizeInstruction = document.createElement("p");
gridSizeInstruction.classList.add("gridSizeInstruction");
gridSizeInstruction.textContent = "";
//it's same element which will handle error messages.--------------------

const gridSize = document.createElement("input");
gridSize.classList.add("gridSize");
gridSize.id = "gridSize";

const footer = document.createElement("footer");
footer.classList.add("footer", "flx");

const footerWords = document.createElement("p");
footerWords.classList.add("footerWords");
footerWords.textContent = "©️ All rights reserved | Terms of Service";

home.append(header, hero, containerPlus, gridSizeContainer, footer);
header.append(logo, nav);
nav.append(navElement1, navElement2, navElement3);
containerPlus.append(sketchDiv, gridContainer);

gridSizeDiv.append(gridSizeTitle, gridSizeInstruction, gridSize, gridEnterBtn);
gridSizeContainer.append(gridCloseBtn, gridSizeDiv);

footer.appendChild(footerWords);

const container = document.querySelector("#grid-container");

const sketchSpace = document.querySelector(".sketchSpace");
const gridSizeContainerDiv = document.querySelector(".gridSizeContainer");

const value = document.querySelector("#gridSize");
const enterBtn = document.querySelector(".gridEnterBtn");
const instruction = document.querySelector(".gridSizeInstruction");

function makeCells(rows, cols) {
  //change value of the CSS variables '--grid-rows' to new value of 'rows'...
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-box";
  }
}
makeCells(16, 16);

function getGridSize() {
  value.addEventListener("keyup", () => {
    let val = value.value;

    if (isNaN(val) || val === "") {
      gridSizeInstruction.textContent = "*Input must be a number";
    } else {
      if (val < 10 || val > 100) {
        // if (window.getComputedStyle(instruction).color === "#F17676") {
        //   gridSizeInstruction.textContent = "* Number must be between 10-100";
        // } else {
        //   gridSizeInstruction.classList.toggle("gridSizeInstructionOn");
        //   gridSizeInstruction.textContent = "* Number must be between 10-100";
        // }
        gridSizeInstruction.textContent = "* Number must be between 10-100";
      } else {
        gridSizeInstruction.classList.toggle("gridSizeInstructionOn");
        gridSizeInstruction.textContent = "✔️";
        // gridSizeInstruction.innerHTML = "&#x2713;";
        enterBtn.classList.toggle("gridEnterBtnOn");
        const grid = Number(val);
        container.innerHTML = "";
        makeCells(grid, grid);
        getGridHover();
        clearSketchPad();
      }
    }
  });
}
getGridSize();

function enterBtnClicked() {
  enterBtn.addEventListener("click", () => {
    gridSizeInstruction.classList.toggle("gridSizeInstructionOn");
    gridSizeInstruction.textContent = "";
    enterBtn.classList.toggle("gridEnterBtnOn");
    value.value = "";
    gridSizeContainerDiv.classList.toggle("gridSizeContainerOn");
  });
}
enterBtnClicked();

function getGridHover() {
  const cell = document.querySelectorAll(".grid-box");
  const grids = [...cell];
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

function clearSketchPad() {
  const cell = document.querySelectorAll(".grid-box");
  const grids = [...cell];
  const sketchClearBtn = document.querySelector("#sketchClearBtn");
  sketchClearBtn.addEventListener("click", () => {
    console.log("clickeed");
    grids.forEach((grid) => {
      grid.style.background = "";
    });
  });
}
clearSketchPad();

function getMoreSketchSpaceClicked() {
  sketchSpace.addEventListener("click", () => {
    // gridSizeContainerDiv.classList.toggle("gridSizeContainerOn");

    if (window.getComputedStyle(aboutContainerDiv).display === "none") {
      gridSizeContainerDiv.classList.toggle("gridSizeContainerOn");
    } else {
      aboutContainerDiv.classList.toggle("gridSizeContainerOn");
      gridSizeContainerDiv.classList.toggle("gridSizeContainerOn");
    }
  });
}
getMoreSketchSpaceClicked();

const closeBtn = document.querySelector(".gridCloseBtn");

function closeGridSizeContainer() {
  closeBtn.addEventListener("click", () => {
    gridSizeContainerDiv.classList.toggle("gridSizeContainerOn");
  });
}
closeGridSizeContainer();
