export default class Entity {
    constructor(name, health, image, gold) {
        this.name = name;
        this.health = health;
        this.image = image;
        this.gold = gold;
    }

    // Methods available to all entities in the game
    attack(enemy, amount) {
        enemy.health -= amount;
    }

    heal(amount) {
        this.health += amount;
    }
}