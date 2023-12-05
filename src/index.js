import "./style.css";
import { navBar, home, menu, contact } from "./navBar";
import { showHomepage, hideHomepage, hmMainContent } from "./homepage";
import { showContactInfo, hideContactInfo } from "./contact";
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
body.append(navBar());

//Background circle div
body.append(circleContainer);
console.log("testing");
setTimeout(() => {
  body.append(showHomepage());
}, 200);

home.addEventListener("click", () => {
  body.append(showHomepage());
  home.classList.add("active");
  menu.classList.remove("active");
  contact.classList.remove("active");
  hideMenu();
  hideContactInfo();
});
menu.addEventListener("click", () => {
  body.append(showMenu());
  menu.classList.add("active");
  home.classList.remove("active");
  contact.classList.remove("active");
  hideHomepage();
  hideContactInfo();
});
contact.addEventListener("click", () => {
  body.append(showContactInfo());
  contact.classList.add("active");
  home.classList.remove("active");
  menu.classList.remove("active");
  hideHomepage();
  hideMenu();
});
