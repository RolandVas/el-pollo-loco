class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud(),
    ]
    backgroundObjects = [
        new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new backgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new backgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
    ]

    canvas; /* canvas aus constructor(canvas) rausgeholt, damit man das in andere functionen verwenden kann */
    ctx;
    keyboard;



    constructor(canvas) {
        this.ctx = canvas.getContext('2d'); /* befehl für mahlen */
        this.canvas = canvas /* siehe oben variable -> canvas */
        this.keyboard = keyboard
        this.draw();
        this.setWorld(); /* mit diese function können wir die gedrückte taster an character weitergeben  */
    }


    setWorld() {
        this.character.world = this; /* mit this kann ich alle variabren an character weitergeben */
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) /* clear canva for redrawing */

        this.AddObjectsToMap(this.backgroundObjects);
        this.AddToMap(this.character);
        this.AddObjectsToMap(this.enemies);
        this.AddObjectsToMap(this.clouds);



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

    AddToMap(objest) { /* add 1 object to map - nur einen object - siehe video 13 */
        if (objest.otherDirection) {
            this.ctx.save();
            this.ctx.translate(objest.width, 0);
            this.ctx.scale(-1, 1);
            objest.x = objest.x * -1;
        }

        this.ctx.drawImage(objest.img, objest.x, objest.y, objest.width, objest.height);

        if (objest.otherDirection) {
            objest.x = objest.x * -1;
            this.ctx.restore();
        }
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