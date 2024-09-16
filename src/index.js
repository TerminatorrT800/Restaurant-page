import "./style.css"
import Home from './mainPage.js'
import Menu from './menuPage.js'
import About from "./aboutPage.js";
const home = document.querySelector(".homeBTN");
const menu = document.querySelector(".menuBTN");
const about = document.querySelector(".aboutBTN");

const contentDiv = document.querySelector("#content");




window.addEventListener('load', (e) => {
    Home(contentDiv);
    home.classList.add('clicked');
    menu.classList.remove('clicked');
    about.classList.remove('clicked');
});


home.addEventListener('click', () => {
    Home(contentDiv);
    home.classList.add('clicked');
    menu.classList.remove('clicked');
    about.classList.remove('clicked');
});

menu.addEventListener('click', () => {
    Menu(contentDiv);
    home.classList.remove('clicked');
    menu.classList.add('clicked');
    about.classList.remove('clicked');
});

about.addEventListener('click', () => {
    About(contentDiv);
    about.classList.add('clicked');
    menu.classList.remove('clicked');
    home.classList.remove('clicked');

});


console.log("AAA");