export const navbar = document.createElement("div");
const restaurantName = document.createElement("h1");
const navElement = document.createElement("nav");
const navElement_Ul = document.createElement("ul");
const mainContainer = document.createElement("div");
mainContainer.classList.add("mainContent");

//clickable navbar elements
export const home = document.createElement("li");
export const menu = document.createElement("li");
export const contact = document.createElement("li");

export function navBar() {
  navbar.classList.add("navbar");
  restaurantName.innerText = "Sushi Place";
  home.innerText = "Home";
  menu.innerText = "Menu";
  contact.innerText = "Contact";
  navbar.appendChild(restaurantName);
  navElement.appendChild(navElement_Ul);
  navElement_Ul.appendChild(home);
  navElement_Ul.appendChild(menu);
  navElement_Ul.appendChild(contact);
  home.classList.add("active");

  navbar.appendChild(navElement);
  return navbar;
}
