class MovableObject {
    x = 100;
    y = 250;
    // img;
    height = 200;
    width = 100;
    imageChace = {}; /* sieht so aus --> img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png: img  ---> das key ist = 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png' und das ruft img auf was schon definiert ist und bedeutet = <img src="img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"> */
    currantImage = 0;
    speed = 0.15; /* von x koordinate werden immer 0.15 px ebgezogen - function moveLeft*/
    otherDirection = false;

    speedY = 0;
    acceleration = 1.5; /* jump height  */

    energy = 100;

    applyGravity() { /* springen */
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration
            }
        }, 1000 / 30); /* jump speed */
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) { /* blaue viereck zeigen */
        if (this instanceof Character || this instanceof Chicken) { /* Das blaue viereck nur für chicken und character verwenden */
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }



    isColliding(object) {
        return this.x + this.width > object.x &&
            this.y + this.height > object.y &&
            this.x < object.x &&
            this.y < object.y + object.height
    }



    isAboveGround() {
        return this.y < 230;
    }

    loadImage(path) {
        this.img = new Image(); /*this.img = das gleiche wie -> document.getElementById('canvas') <img src="Pfad"> */
        this.img.src = path; /* .src = src"path" --> path ist das pfad von der Bild */
    }

    playAnimation(images) {
        let i = this.currantImage % this.IMAGES_WALKING.length; /* i = 0 % 6; --> 0, Rest 0  ==>  1 % 6; --> 0, Rest 1   =====> mathematische rest rechnet immet aktueller zahl z.b 1/IMAGES_WALKING.length ====> 1/6=0,1 => Rest is 1
            i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, */
        let path = images[i];
        // ⬆⬆ neue versie// alte versio ==> let path = this.IMAGES_WALKING[this.currantImage]; /* von IMAGES_WALKING array stelle 0 --> currantImage ist eine variable 0*/
        this.img = this.imageChace[path]; /* hier wird das erste Bild geladen siehe Moveble-object --> imageChace[path] ist das key und img das bild --> img ist als <img src="img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"> definiert */
        this.currantImage++;
    };


    loadImages(array) { /* array von character (da haben wir 6 Bilder(Pfad) drinen) */
        array.forEach(path => { /* forschleife geht durch diese 6 bilder array = path --> path ist das Pfad von Bild --> immer von 1 Bild */
            let img = new Image(); /* hier wird das document.getElement.... geleaden = img */
            img.src = path; /* hier wird von img src"path" geladen  */
            this.imageChace[path] = img; /* hier wird das Bild im array gepusht ---> das key ist = 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png' und das ruft img auf was schon definiert ist und bedeutet = <img src="img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"> */
        });

    }

    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed; /* von x koordinate werden immer 0.15 px ebgezogen */
    }


    jump() {
        this.speedY = 20;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        }
    }

    isDead() {
        return this.energy == 0;
    }



}