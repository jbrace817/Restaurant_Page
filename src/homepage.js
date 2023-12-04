import { navBar } from "./navBar";
import ImgWordForSushi from "./images/sushi_japanese.png";
import ImgPlateOfSushi from "./images/Component 9.png";

//Elements
export const hmMainContent = document.createElement("div");

const outerWord = document.createElement("div");
const textContainer = document.createElement("div");
const textParagraph = document.createElement("p");

//Class list of elements
hmMainContent.classList.add("mainContent");
outerWord.classList.add("outerWord");
textContainer.classList.add("text");

//Images
const wordSushi = new Image();
wordSushi.src = ImgWordForSushi;
wordSushi.alt = 'Japenese caligraphy for the word "sushi"';
wordSushi.classList.add("word");
const plate = new Image();
plate.src = ImgPlateOfSushi;
plate.alt = "Plate of sushi";
plate.classList.add("plate");

//Paragraph of text
textParagraph.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque, dolorem laboriosam consequuntur perspiciatisplaceat. Porro doloremque nulla eos, quaerat nemo temporibus id eligendi laborum tempora laudantium. Quo, numquam. Possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere voluptatem beatae,repellendus, veniam blanditiis";

export function showHomepage() {
  hmMainContent.classList.remove("hidden");
  outerWord.appendChild(wordSushi);
  textContainer.appendChild(textParagraph);
  hmMainContent.appendChild(plate);
  hmMainContent.appendChild(outerWord);
  hmMainContent.appendChild(textContainer);
  hmMainContent.style.height = `calc(100vh - ${navBar().offsetHeight}px)`;
  console.log(navBar().offsetHeight);

  return hmMainContent;
}

export function hideHomepage() {
  hmMainContent.classList.add("hidden");
  return hmMainContent;
}
