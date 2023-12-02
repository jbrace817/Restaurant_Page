//Array of menu Items
const arrayOfMenuObjects = [
  {
    name: "California Roll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora ut ea! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis facilis qui odit perspiciatis.",
  },
];

//new elements
const div_MenuContainer = document.createElement("div");
// const div_MenuItemComponent = document.createElement("div");
// const nameOfItem = document.createElement("header");
const description = document.createElement("article");

//classes
div_MenuContainer.classList.add("menuContainer");

export function showMenu() {
  console.log("showMenu");
  return div_MenuContainer;
}
