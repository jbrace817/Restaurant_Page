import { showHomepage, hideHomepage } from "./homepage";
import { showMenu } from "./menu";

const body = document.body;
const navbar = document.createElement("div");
const restaurantName = document.createElement("h1");
const navElement = document.createElement("nav");

const home = document.createElement("ul");
const menu = document.createElement("ul");
const contact = document.createElement("ul");

export default function () {
  navbar.classList.add("navbar");
  restaurantName.innerText = "Sushi Place";
  navbar.appendChild(restaurantName);
  home.innerText = "Home";
  menu.innerText = "Menu";
  contact.innerText = "Contact";
  body.append(showHomepage()); //change to homepage.
  navElement.appendChild(home);
  navElement.appendChild(menu);
  navElement.appendChild(contact);
  home.classList.add("active");
  home.addEventListener("click", () => {
    home.classList.add("active");
    menu.classList.remove("active");
    contact.classList.remove("active");
    body.append(showHomepage());
  });
  menu.addEventListener("click", () => {
    menu.classList.add("active");
    home.classList.remove("active");
    contact.classList.remove("active");
    body.append(hideHomepage());
    body.append(showMenu());
  });
  contact.addEventListener("click", () => {
    contact.classList.add("active");
    home.classList.remove("active");
    menu.classList.remove("active");
    body.append(hideHomepage());
  });

  navbar.appendChild(navElement);
  // body.appendChild(navbar);
  return navbar;
}
