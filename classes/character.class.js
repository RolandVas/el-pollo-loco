class Character extends MovableObject {

    y = 230 ;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png',
    ];
    world;
    speed = 10;
    walking_sound = new Audio('audio/running.mp3')



    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);

        this.applyGravity();

        this.animate();
    }


    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
                this.otherDirection = false;
            }

            if (this.world.keyboard.LEFT && this.x > 100) {
                this.moveLeft();
                this.walking_sound.play();
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100; /* camera_x verschiebt das Bild immer bei draw funktion aber nur einmal -> durch this.x += this.speed; oder this.x -= this.speed; wird den wert von camera_x immert erhöht oder verringert und daswegent bewegt sich die Kamera*/
        
            if(this.world.keyboard.SPACE && !this.isAboveGround() ) {
                this.jump();
            }
        
        }, 1000 / 60);

        setInterval(() => {

            if (this.isAboveGround()) { /* wenn this.isAboveGround() = jump  aktiv ist soll das untere abgespielt werden */
                this.playAnimation(this.IMAGES_JUMPING); /* jump animation abspielen */
            } else { /* wenn jump nicht aktiev ist -> dann soll das Laufen animiert werden */

                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 1000 / 10); /* 10x pro sekunden wird das Bild aktualisiert */

    }





}