export class Player extends Entity {
    constructor(name, health, image, gold) {
        super(name, health, image, gold);
    }
    description() {
        return `The ${this.name} is a vailient warrior with ${this.health} and a gold purse with ${this.gold} gold coins.`;
    }
    heroAttach(monster, amount) {
        monster.health -= amount;
        return `${this.name} invokes mighty courage and strength and attacks the ${monster.name} for ${amount} damage! Their health is now at ${monster.health}.`;
    }
}