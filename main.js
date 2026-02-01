import { Entity, Monster, Player } from './classes/index.js';

const hero = new Player("Aaron", 100, "insert image", 40);
const troll = new Monster("Troll", 130, "insert image", 50);

const textSection = document.querySelector(".text-section");
const button = document.querySelector("button");

const playerSection = document.querySelector(".player-section");
const monsterSection = document.querySelector(".monster-section");

button.addEventListener("click", () => {
    textSection.innerHTML = `
    <p>${hero.description()}</p>
    <p>${troll.description()}</p>
    `

    playerSection.innerHTML = `
    <h2>${hero.name}</h2>
    <img src="" alt="" />
    <p>Health: ${hero.health}</p>
    <p>Gold: ${hero.gold}</p>
    <button class="player-fight bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-36">Fight</button>
    <button class="player-heal bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-36">Heal</button>
    `

    monsterSection.innerHTML = `
    <h2>${troll.name}</h2>
    <img />
    <p>Health: ${troll.health}</p>
    <p>Gold: ${troll.gold}</p>
    <button class="monster-fight bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-36">Fight</button>
    <button class="monster-heal bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-36">Heal</button>
    `
})

