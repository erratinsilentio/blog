import homeAction from "./Home";
import contactAction from "./Contact";
import photoAction from "./Photos";
import blogAction from "./Blog";

//create menu toggle button
const menu_button = document.querySelector(".menu-button");
window.menu_button = menu_button;
const menu = document.createElement("button");
window.menu = menu;
menu.classList.add("click");
menu.textContent = "| | |";
menu_button.appendChild(menu);

//make selectors
const list = document.getElementById("list");
window.list = list;
const header = document.querySelector(".header");
window.header = header;
const left = document.querySelector(".left");
window.left = left;
const right = document.querySelector(".right");
window.right = right;
const headerTitle = document.querySelector(".main-header");
window.headerTitle = headerTitle;
const title = document.querySelector(".bloginsilentio");
window.title = title;

//MAKE HEADER SHOW UP
const showheader = () => {
  header.style.opacity = "1";
};
window.showheader = showheader;

//MAKE MENU TOGGLE FUNCTION
const toggleMenu = () => {
  if (left.style.width === "0vw") {
    left.style.width = "7vw";
    list.style.opacity = "1";
  } else {
    left.style.width = "0vw";
    list.style.opacity = "0";
  }
};
window.toggleMenu = toggleMenu;

//MAKE NAVBAR CHANGE DISPLAY
const nav_home = document.getElementById("nav-home");
window.nav_home = nav_home;
nav_home.addEventListener("click", homeAction.makeHome);

const nav_blog = document.getElementById("nav-blog");
window.nav_blog = nav_blog;
nav_blog.addEventListener("click", blogAction.makeBlog);

const nav_photos = document.getElementById("nav-photos");
window.nav_photos = nav_photos;
nav_photos.addEventListener("click", photoAction.makePhotos);

const nav_contact = document.getElementById("nav-contact");
window.nav_contact = nav_contact;
nav_contact.addEventListener("click", contactAction.makeForm);


//MAKE GO-BACK ICON 
const backIcon = document.getElementById("back");
window.backIcon = backIcon;
backIcon.style.display = "none";
back.addEventListener('click', blogAction.makeBlog);


export { toggleMenu, showheader };
