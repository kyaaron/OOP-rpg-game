import Entity from "./entity.js"

export default class Monster extends Entity {
    constructor(name, health, image, gold) {
        super(name, health, image, gold);
    }
    description() {
        return `The ${this.name} is a vicious monster with ${this.health} health.`;
    }
    monsterAttack(player, amount) {
        player.health -= amount;
        return `${this.name} dispells dark energy and attacks ${player.name} for ${amount} damage! Their health is now at ${player.health}.`;
    }
}