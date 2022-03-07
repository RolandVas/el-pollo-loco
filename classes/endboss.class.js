class Endboss extends MovableObject {

    y = 150;
    x = 2200;
    height = 300;
    width = 200;


    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }


    animate() {

        setInterval(() => {
            let i = this.currantImage % this.IMAGES_WALKING.length; /* i = 0 % 6; --> 0, Rest 0  ==>  1 % 6; --> 0, Rest 1   =====> mathematische rest rechnet immet aktueller zahl z.b 1/IMAGES_WALKING.length ====> 1/6=0,1 => Rest is 1
            i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, */
            let path = this.IMAGES_WALKING[i];
            // ⬆⬆ neue versie// alte versio ==> let path = this.IMAGES_WALKING[this.currantImage]; /* von IMAGES_WALKING array stelle 0 --> currantImage ist eine variable 0*/
            this.img = this.imageChace[path]; /* hier wird das erste Bild geladen siehe Moveble-object --> imageChace[path] ist das key und img das bild --> img ist als <img src="img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"> definiert */
            this.currantImage++;
        }, 1000 / 5); /* 10x pro sekunden wird das Bild aktualisiert */
    }





}