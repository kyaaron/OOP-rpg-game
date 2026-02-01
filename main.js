import { Entity, Monster, Player } from './classes/index.js';

const hero = new Player("Aaron", 100, "insert image", 40);
const troll = new Monster("Troll", 130, "insert image", 50);

const textSection = document.querySelector(".text-section");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    textSection.innerHTML = `
    <p>${hero.description()}</p>
    <p>${troll.description()}</p>
    `
})