class World {
    character = new Character();
    level = level1;

    canvas; /* canvas aus constructor(canvas) rausgeholt, damit man das in andere functionen verwenden kann */
    ctx;
    keyboard;
    camera_x = 0;




    constructor(canvas) {
        this.ctx = canvas.getContext('2d'); /* befehl für mahlen */
        this.canvas = canvas /* siehe oben variable -> canvas */
        this.keyboard = keyboard
        this.draw();
        this.setWorld(); /* mit diese function können wir die gedrückte taster an character weitergeben  */
        this.checkCollisions();
    }


    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach( enemy => {
                if (this.character.isColliding(enemy)) {
                    console.log('Collision with Character', enemy)
                }
            });
        }, 200);
    }


    setWorld() {
        this.character.world = this; /* mit this kann ich alle variabren an character weitergeben */
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) /* clear canva for redrawing */

        this.ctx.translate(this.camera_x, 0);/* Camera wird im X verschoben -> danach wird alles gezeichnet und dann wird X zurrückgeschoben -> so verhidert man dass das Bild ewig vershoben wird */

        this.AddObjectsToMap(this.level.backgroundObjects);
        this.AddToMap(this.character);
        this.AddObjectsToMap(this.level.enemies);
        this.AddObjectsToMap(this.level.clouds);

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