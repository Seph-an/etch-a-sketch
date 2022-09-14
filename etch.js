//ref: https://css-tricks.com/snippets/javascript/random-hex-color/
//random color generator.
const home = document.querySelector("#home");
const gridContainer = document.createElement("div");
home.appendChild(gridContainer);

const grid1 = document.createElement("div");
grid1.classList.add("grid-box");
grid1.textContent = "thst";
const grid2 = document.createElement("div");
grid2.classList.add("grid-box");
grid2.textContent = "thst";
const grid3 = document.createElement("div");
grid3.classList.add("grid-box");
grid3.textContent = "thst";
const grid4 = document.createElement("div");
grid4.classList.add("grid-box");
grid4.textContent = "thst";
const grid5 = document.createElement("div");
grid5.classList.add("grid-box");
grid5.textContent = "thst";
const grid6 = document.createElement("div");
grid6.classList.add("grid-box");
grid6.textContent = "thst";
const grid7 = document.createElement("div");
grid7.classList.add("grid-box");
grid7.textContent = "thst";

gridContainer.append(grid1, grid2, grid3, grid4, grid5, grid6, grid7);

// gridContainer.appendChild(grid1);
// gridContainer.appendChild(grid2);
// gridContainer.appendChild(grid3);
// gridContainer.appendChild(grid4);
// gridContainer.appendChild(grid5);
// gridContainer.appendChild(grid6);
// gridContainer.appendChild(grid7);

const cells = document.querySelectorAll(".grid-box");
const grids = [...cells];

function getGridHover() {
  grids.forEach((grid, i) => {
    let passOvers = 0;
    grid.addEventListener("mouseover", () => {
      //   grid.style.background = "red";
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      grid.style.background = "#" + randomColor;
      if (passOvers < 0.9) {
        passOvers += 0.1;
        pass = Math.round(passOvers * 10) / 10;
        grid.style.opacity = passOvers;
        console.log("grid " + i + " has" + " " + pass);
      }
    });
  });
}
getGridHover();

/*The prob now is that although random colors are generated, 
cell colors change with each mouseover yet we want the color
to remain as set inspite of the mouseovers. The opacity works
 fine */
