const aboutContainer = document.createElement("div");
aboutContainer.classList.add("aboutContainer");

const aboutDiv = document.createElement("div");
aboutDiv.classList.add("aboutDiv");

const aboutBackBtn = document.createElement("button");
aboutBackBtn.classList.add("aboutBackBtn");
aboutBackBtn.innerHTML = "←";

home.append(aboutContainer);

aboutContainer.append(aboutBackBtn, aboutDiv);

const aboutContainerDiv = document.querySelector(".aboutContainer");
const about = document.querySelector(".about");
const backBtn = document.querySelector(".aboutBackBtn");
// const gridSizeContainerDiv = document.querySelector(".gridSizeContainer");

function getInfoAbout() {
  about.addEventListener("click", () => {
    if (window.getComputedStyle(gridSizeContainerDiv).display === "none") {
      aboutContainerDiv.classList.toggle("gridSizeContainerOn");
    } else {
      gridSizeContainerDiv.classList.toggle("gridSizeContainerOn");
      aboutContainerDiv.classList.toggle("gridSizeContainerOn");
    }
  });
}
getInfoAbout();

function backBtnClicked() {
  backBtn.addEventListener("click", () => {
    aboutContainerDiv.classList.toggle("gridSizeContainerOn");
  });
}
backBtnClicked();
