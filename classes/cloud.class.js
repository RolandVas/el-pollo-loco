class Cloud extends MovableObject { /* extends MovableObject das heisst das cloud die gleiche befehle hat wie MovableObject - als würde man die gleiche befhele hier reinkopieren  */
    y = 40;
    height = 250;
    width = 500;


    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 600;
        this.animate();
    }






    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); /* hier gibt man die Zeit ein immer in millisekunden z.b 1000 -> das ist 1s */
    }









}