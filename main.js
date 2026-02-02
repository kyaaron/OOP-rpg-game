import { Entity, Monster, Player } from './classes/index.js';

const hero = new Player("Aaron", 100, "insert image", 40);
const troll = new Monster("Troll", 130, "insert image", 50);

const attachListeners = () => {
    document.querySelector("#player-attack").addEventListener("click", () => {
        hero.heroAttack(troll, 40);
        updateUI();
    }) 

    document.querySelector("#monster-attack").addEventListener("click", () => {
        troll.monsterAttack(hero, 35);
        updateUI();
    })

    document.querySelector("#player-heal").addEventListener("click", () => {
        hero.heal(30);
        document.querySelector("#text-section").innerText = `${hero.name} healed some health. Their HP is now ${hero.health}.`;
        updateUI();
    })

    document.querySelector("#monster-heal").addEventListener("click", () => {
        troll.heal(30);
        document.querySelector("#text-section").innerText = `${troll.name} healed some health. Their HP is now ${troll.health}.`;
        updateUI();
    })
}

const updateUI = () => {
    document.querySelector("#player-name").innerHTML = `<h2>Hero: ${hero.name}<h2>`;
    document.querySelector("#monster-name").innerHTML = `<h2>Monster: ${troll.name}</h2>`;
    document.querySelector("#player-health").innerHTML = `<p>Health: ${hero.health}</p>`;
    document.querySelector("#monster-health").innerHTML = `<p>Health: ${troll.health}</p>`;
    document.querySelector("#player-gold").innerHTML = `<p>Gold: ${hero.gold}</p>`;
    document.querySelector("#monster-gold").innerHTML = `<p>Gold: ${troll.gold}</p>`;

    if (hero.health === 0) { document.querySelector("#player-health").innerHTML = `<p>Health: DEAD</p>` };
    if (troll.health === 0) { document.querySelector("#monster-health").innerHTML = `<p>Health: DEAD</p>` };
}

window.addEventListener("DOMContentLoaded", () => {
    attachListeners();
    updateUI();
})