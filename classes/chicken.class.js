class Chicken extends MovableObject {

    y = 350;
    height = 80;
    width = 50;
    chickenDead = false;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ];


    IMAGES_DEAD =[
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];
    



     constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
    
        this.x = 400 + Math.random() * 3000; /* Zahl zwischen 200 und 700 - Math.random() -> zahl zwischen 0 - 1 z.b 0.563 */
        this.speed = 0.15 + Math.random() * 0.5; /* speed von chicken */

        this.loadImages(this.IMAGES_WALKING);
        
        this.animate()
    }



    animate() {

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); /* hier gibt man die Zeit ein immer in millisekunden z.b 1000 -> das ist 1s */

        

        setInterval(() => {
            if (this.chickenDead) {
                this.loadImage(this.IMAGES_DEAD);
                this.speed = 0;
            }
            else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 10); /* 10x pro sekunden wird das Bild aktualisiert */
    }

    









}