class Character extends MovableObject {

    y = 230;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];
    world;
    speed = 10;
   


    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }


    animate() {
        setInterval(() => {
            if(this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }

            if(this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            
        }, 1000 / 60);

        setInterval(() => {

            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

            let i = this.currantImage % this.IMAGES_WALKING.length; /* i = 0 % 6; --> 0, Rest 0  ==>  1 % 6; --> 0, Rest 1   =====> mathematische rest rechnet immet aktueller zahl z.b 1/IMAGES_WALKING.length ====> 1/6=0,1 => Rest is 1
            i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, */
            let path = this.IMAGES_WALKING[i];
            // ⬆⬆ neue versie// alte versio ==> let path = this.IMAGES_WALKING[this.currantImage]; /* von IMAGES_WALKING array stelle 0 --> currantImage ist eine variable 0*/
            this.img = this.imageChace[path]; /* hier wird das erste Bild geladen siehe Moveble-object --> imageChace[path] ist das key und img das bild --> img ist als <img src="img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"> definiert */
            this.currantImage++;
        }
        }, 1000 / 10); /* 10x pro sekunden wird das Bild aktualisiert */
    
    }





    jump() {

    }

}