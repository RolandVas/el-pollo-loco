class MovableObject extends DrawableObject {



    speed = 0.15; /* von x koordinate werden immer 0.15 px ebgezogen - function moveLeft*/
    otherDirection = false;
    speedY = 0;
    acceleration = 1.5; /* jump height  */
    energy = 100;
    lastHit = 0;
    


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





    isColliding(object) {
        return this.x + this.width > object.x &&
            this.y + this.height > object.y &&
            this.x < object.x &&
            this.y < object.y + object.height
    }



    isAboveGround() {
        if (this instanceof ThrowableOject) {
            return true;
        } else {
            return this.y < 230;
        }
    }



    playAnimation(images) {
        let i = this.currantImage % images.length; /* i = 0 % 6; --> 0, Rest 0  ==>  1 % 6; --> 0, Rest 1   =====> mathematische rest rechnet immet aktueller zahl z.b 1/IMAGES_WALKING.length ====> 1/6=0,1 => Rest is 1
            i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, */
        let path = images[i];
        // ⬆⬆ neue versie// alte versio ==> let path = this.IMAGES_WALKING[this.currantImage]; /* von IMAGES_WALKING array stelle 0 --> currantImage ist eine variable 0*/
        this.img = this.imageChace[path]; /* hier wird das erste Bild geladen siehe Moveble-object --> imageChace[path] ist das key und img das bild --> img ist als <img src="img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"> definiert */
        this.currantImage++;
    };




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
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; /* Differenc in ms */
        timepassed = timepassed / 1000; /* Differenc in s */
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }


}