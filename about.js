const aboutContainer = document.createElement("div");
aboutContainer.classList.add("aboutContainer");

const aboutBackBtn = document.createElement("button");
aboutBackBtn.classList.add("aboutBackBtn");
aboutBackBtn.innerHTML = "←";

const aboutDiv = document.createElement("div");
aboutDiv.classList.add("aboutDiv", "flx");

const aboutTitle = document.createElement("h2");
aboutTitle.classList.add("aboutTitle");
aboutTitle.textContent = "How it works.";

const aboutParagraph = document.createElement("div");
aboutParagraph.classList.add("aboutParagraph");
// aboutParagraph.innerHTML = `The 'sketch-pad' has a default size of
//  16 by 16 cells. The area of sketching can be increased by
//   selecting the 'More sketching space?' link
//   where you'll be presented by an input interface
//    to key in your desired grid size; <br> the input only accepts numbers
//     which must be a number between 10 - 100. You need to only enter one
//      number as the system automatically uses the same number
//       for both the row and column size.
//       Moving your cursor around the 'sketch-pad' leaves a pixelated trail,
//        albeit painting the various cells with randomly generated colors.
//        Besides, a pixelated spot will only attain its full color tone
//         after 10 in-and-out hovers on the specific spot,
//         i.e each hover makes the color tone 10% stronger. Have fun.
// `;
// -----------------------------------------------------------------------
aboutParagraph.innerHTML = `
<h3>Drawing</h3>
<p>Moving the cursor around the <b>sketch-pad</b> will leave a pixelated
trail on the spot which the cursor has touched. The pixelated trail is 
owing to randomly generated colors which paint the specific points.<br><br>
Each point painted as the cursor moves is done so with a hue strength 
of 10%, to attain the full color, the cursor needs to be moved in-and-out 
of the spot of interest 10 times; each time the color gets 10% stronger.
</p><br>
<h3>Clear</h3>
<p>There is a means to clear the sketching area and start on a plain
canvas, this is done by clicking the <b>clear</b> button towards the top
right corner.</p><br>
<h3>More sketching space</h3>
<p>The default sketching area is 16 by 16 cells. However, you can choose
the size of your 'sketch-pad' by clicking on the <b>More sketching space?</b>
 link on the navigation panel (top of page) where you'll be presented by 
 an input interface to key in your desired grid size. <br><br> The input
  only accepts numbers which must be a number between 10 - 100. 
  You need to only enter one number as the system automatically uses
   the same number for both the row and column size hence a sketch area of 'row by column'.</p>
`;
//------------------------------------------------------------------------
home.append(aboutContainer);
aboutContainer.append(aboutBackBtn, aboutDiv);
aboutDiv.append(aboutTitle, aboutParagraph);

const aboutContainerDiv = document.querySelector(".aboutContainer");
const about = document.querySelector(".about");
const backBtn = document.querySelector(".aboutBackBtn");

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
