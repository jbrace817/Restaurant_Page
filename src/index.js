import "./style.css";
import { navBar, home, menu, contact, navbar } from "./navBar";
import { showHomepage, hideHomepage } from "./homepage";
import { showContactInfo, hideContactInfo } from "./contact";
import { showMenu, hideMenu } from "./menu";

//Body
const body = document.body;
//Background circle
const div_outerCircle = document.createElement("div");
const div_innerCircle = document.createElement("div");
div_outerCircle.classList.add("outerCircle");
div_outerCircle.appendChild(div_innerCircle);
div_innerCircle.classList.add("circle");

//Navbar
body.prepend(navBar());

//Background circle div
body.append(div_outerCircle);

//Loads homepage after navbar loads. This has to happen for the offset height for the viewport.
// setTimeout(() => {
//   body.append(showHomepage());
// }, 300);

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
