import "./style.css";
import navBar from "./navBar";

const body = document.body;
const circleContainer = document.createElement("div");
const circle = document.createElement("div");
circleContainer.classList.add("outerCircle");
circleContainer.appendChild(circle);
circle.classList.add("circle");
console.log(navBar().offsetHeight);
body.prepend(navBar());
body.append(circleContainer);
// navBar();
console.log("testing");
