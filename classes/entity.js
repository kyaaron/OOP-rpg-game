export default class Entity {
    constructor(name, health, image, gold) {
        this._name = name;
        this._health = health;
        this._image = image;
        this._gold = gold;
    }
    // Getters for unchangable data
    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }
    get image() {
        return this._image;
    }
    get gold() {
        return this._gold;
    }

    // Methods available to all entities in the game
    attack(enemy, amount) {
        enemy.health -= amount;
        return `${this._name} attacked ${enemy.name} for ${amount} damage! Their health is now at ${enemy.health}.`;
    }

    heal(amount) {
        this._health += amount;
        return `${this._name} has healed ${amount} health. Their total health is now ${this._health}.`;
    }
}