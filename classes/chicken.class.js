class Chicken extends MovableObject {

    y = 340;
    height = 100;
    width = 50;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ];
    



     constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
    
        this.x = 200 + Math.random() * 500; /* Zahl zwischen 200 und 700 - Math.random() -> zahl zwischen 0 - 1 z.b 0.563 */
        this.speed = 0.15 + Math.random() * 0.5; /* speed von chicken */

        this.loadImages(this.IMAGES_WALKING);
        
        this.animate()
    }



    animate() {
        this.moveLeft();

        setInterval(() => {
            let i = this.currantImage % this.IMAGES_WALKING.length; /* i = 0 % 6; --> 0, Rest 0  ==>  1 % 6; --> 0, Rest 1   =====> mathematische rest rechnet immet aktueller zahl z.b 1/IMAGES_WALKING.length ====> 1/6=0,1 => Rest is 1
            i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, */
            let path = this.IMAGES_WALKING[i];
            // ⬆⬆ neue versie// alte versio ==> let path = this.IMAGES_WALKING[this.currantImage]; /* von IMAGES_WALKING array stelle 0 --> currantImage ist eine variable 0*/
            this.img = this.imageChace[path]; /* hier wird das erste Bild geladen siehe Moveble-object --> imageChace[path] ist das key und img das bild --> img ist als <img src="img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"> definiert */
            this.currantImage++;
        }, 1000 / 10); /* 10x pro sekunden wird das Bild aktualisiert */
    }

    









}