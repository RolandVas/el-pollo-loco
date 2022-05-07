class World {
    character = new Character();
    level = level1;

    canvas; /* canvas aus constructor(canvas) rausgeholt, damit man das in andere functionen verwenden kann */
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    bottleBar = new BottleBar();
    bottle = new Collectable();
    coinBar = new CoinBar();
    endbossBar = new EndbossBar();
    coin = new Coin();
    throwableObjects = [];

    endboss = this.level.endboss[0];

    coinsound = new Audio('audio/coin.mp3')
    bottlesound = new Audio('audio/bottle.mp3')
    chickensound = new Audio('audio/chicken-dead.mp3')
    hurtsound = new Audio('audio/hurt.mp3')
    throwsound = new Audio('audio/throw.mp3')

    


    constructor(canvas) {
        this.volumeOfSounds()
        this.ctx = canvas.getContext('2d'); /* befehl für mahlen */
        this.canvas = canvas /* siehe oben variable -> canvas */
        this.keyboard = keyboard
        this.draw();
        this.setWorld(); /* mit diese function können wir die gedrückte taster an character weitergeben  */
        this.run();
    }

    volumeOfSounds() {
        this.coinsound.volume = 0.1;
        this.bottlesound.volume = 0.5;
        this.chickensound.volume = 0.1;
        this.hurtsound.volume = 0.1;
    }

    run() {
        setInterval(() => {
            this.checkCollisionsCoin();
            this.checkCollisionsBottle();
            this.checkCollisionsEnemy();
            this.checkCollisionsHit();
            this.checkCollisionsEndbossHit();
            this.checkCollisionsEndboss();
            this.checkThrowObject();
            this.collisionCharacterAboveEnemies()
        }, 100);
    }

  

   


    checkThrowObject() {
        if (this.keyboard.D && this.bottleBar.amountOfBottles > 0) {
            let bottle = new ThrowableOject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottleBar.amountOfBottles -= 1;
            console.log('amount', this.bottleBar.amountOfBottles);
            this.bottleBar.setPercentage();
        }
        
    }


    checkCollisionsBottle() {
        this.level.collectable.forEach((bottleX, index) => {
                if (this.character.isColliding(bottleX) && this.bottleBar.amountOfBottles < 5) {
                    this.collectBottles();
                    this.bottleBar.setPercentage();
                    this.level.collectable.splice(index, 1);
                    this.bottlesound.play();
                    console.log('amountOfBottles ', this.bottleBar.amountOfBottles)
                }
        });
    }


    checkCollisionsCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.coinBar.collectCoins();
                this.level.coins.splice(index, 1);
                this.coinBar.updateCoinBar();
                this.coinsound.play();
            }
        });
    }



    checkCollisionsHit() {
        this.level.enemies.forEach((enemy, index) => {

            this.throwableObjects.forEach(throwBottle => {

                if (throwBottle.isColliding(enemy) && !enemy.chickenDead) {
                    this.chickensound.play();
                    this.level.enemies.splice(index, 1)
                }
            });
        });
    }

    checkCollisionsEndbossHit() {
        this.throwableObjects.forEach(throwBottle => {

            if (throwBottle.isColliding(this.endboss)) {
                this.endboss.hit();
                console.log('Endboss HP: ', this.endboss.energy)
                this.endbossBar.updateEndbossBar(this.endboss.energy)
            }
        });
    }


    checkCollisionsEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !enemy.chickenDead && !this.character.isAboveGround()) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy) /* leben wird von statusBar abgezogen */
                this.hurtsound.play();
            }
        });

    }

    collisionCharacterAboveEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && !enemy.chickenDead) { // Kill chicken from above
                this.character.jump();
                this.chickensound.play();
                enemy.chickenDead = true;
            }
        });
    }

    checkCollisionsEndboss() {
        if (this.character.isColliding(this.endboss)) {
            this.character.hit();
            console.log('Collision with Character energy', this.character.energy)
            this.statusBar.setPercentage(this.character.energy) /* leben wird von statusBar abgezogen */
            this.hurtsound.play();
        }
    }




    collectBottles() {
        this.bottleBar.amountOfBottles += 1;
        if (this.bottleBar.amountOfBottles > 5) {
            this.bottleBar.amountOfBottles = 5;
        }
    }



    setWorld() {
        this.character.world = this; /* mit this kann ich alle variabren an character weitergeben */
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) /* clear canva for redrawing */

        this.ctx.translate(this.camera_x, 0);/* Camera wird im X verschoben -> danach wird alles gezeichnet und dann wird X zurrückgeschoben -> so verhidert man dass das Bild ewig vershoben wird */

        this.AddObjectsToMap(this.level.backgroundObjects);
        this.AddToMap(this.character);
        this.AddObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        /* ------ Space for fixed objects ------ */
        this.AddToMap(this.statusBar);
        this.AddToMap(this.bottleBar);
        this.AddToMap(this.coinBar);
        

        if (this.character.x > 2000) {
            this.AddToMap(this.endbossBar);
            
        }

        this.ctx.translate(this.camera_x, 0);

        this.AddObjectsToMap(this.level.collectable)
        this.AddObjectsToMap(this.level.coins)
        this.AddObjectsToMap(this.level.enemies);
        this.AddObjectsToMap(this.level.endboss);

        this.AddObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        /* Draw wird immer wieder aufgerufen */
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    };

    AddObjectsToMap(objects) { /* add more then 1 objects to map - use for forEach schleife - siehe video 13 */
        objects.forEach(objects => {
            this.AddToMap(objects)
        })
    }

    AddToMap(object) { /* add 1 object to map - nur einen object - siehe video 13 */
        if (object.otherDirection) {
            this.flipImage(object)
        }

        object.draw(this.ctx);
        object.drawFrame(this.ctx);



        if (object.otherDirection) {
            this.flipImageBack(object);
        }

    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    flipImageBack(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }


}














/** --------------------Alte cod was man abkürzen kann siehe video 13----------

 this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
 ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆
 -----------abgekürzt durch AddToMap function----------------
 ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇ 
 this.AddToMap(this.character)




 this.enemies.forEach(enemy => {
     this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height)
 })
  ⬆  ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆
 -----------abgekürzt durch AddToMap function----------------
 ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇ 
 this.enemies.forEach(enemy => {
     this.AddToMap(enemy);
 })
  ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆
 -----------abgekürzt durch AddObjectsToMap function----------------
 ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇  ⬇ ⬇ ⬇ ⬇ 
 AddObjectsToMap(this.enemies)







 AddObjectsToMap(objects) { /* add more then 1 objects to map - use for forEach schleife - siehe video 13 
     objects.forEach(objects => {
         this.AddToMap(objects)
     })
 }

 AddToMap(objest) { /* add 1 object to map - nur einen object - siehe video 13 
     this.ctx.drawImage(objest.img, objest.x, objest.y, objest.width, objest.height)
 }


*/