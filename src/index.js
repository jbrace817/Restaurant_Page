import "./style.css";
import { navBar, home, menu, contact } from "./navBar";
import { showHomepage, hideHomepage, hmMainContent } from "./homepage";
import { showMenu, hideMenu } from "./menu";

//Body
const body = document.body;

//Background circle
const circleContainer = document.createElement("div");
const circle = document.createElement("div");
circleContainer.classList.add("outerCircle");
circleContainer.appendChild(circle);
circle.classList.add("circle");

//Navbar
body.prepend(navBar());
// console.log(navBar().offsetHeight);
//Background circle div
body.append(circleContainer);
console.log("testing");
body.append(showHomepage());
home.addEventListener("click", () => {
  showHomepage();
  home.classList.add("active");
  menu.classList.remove("active");
  contact.classList.remove("active");
  hideMenu();
});
menu.addEventListener("click", () => {
  hideHomepage();
  body.append(showMenu());
  menu.classList.add("active");
  home.classList.remove("active");
  contact.classList.remove("active");
});
contact.addEventListener("click", () => {
  contact.classList.add("active");
  home.classList.remove("active");
  menu.classList.remove("active");
  body.append(hideHomepage());
});
