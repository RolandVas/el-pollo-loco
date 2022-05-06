class level {
    endboss
    coins;
    collectable;
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 3500;

    constructor(enemies, endboss, clouds, backgroundObjects, collectable, coins) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectable = collectable;
        this.coins = coins;
    }
}