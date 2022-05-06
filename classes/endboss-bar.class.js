class EndbossBar extends DrawableObject{

    

    ENDBOSS_BAR = [
        'img/7.Marcadores/Barra/Marcador vida/Naranja/0.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/1.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/2.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/3.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/4.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/5.png'
    ]

    energy = 25;

    constructor() {
        super();
        this.loadImages(this.ENDBOSS_BAR);
        this.x = 480;
        this.y = 0;
        this.width = 180;
        this.height = 50; 

        this.updateEndbossBar(25)
    }

   

    updateEndbossBar(energy) {
        this.energy = energy;
        let path = this.ENDBOSS_BAR[this.resolveImageIndex()];
        this.img = this.imageChace[path];
    }

    resolveImageIndex() {
        if (this.energy == 0) {
            return 0;
        } else if (this.energy == 5) {
            return 1;
        } else if (this.energy == 10) {
            return 2;
        } else if (this.energy == 15) {
            return 3;
        } else if (this.energy == 20) {
            return 4;
        } else if (this.energy == 25) {
            return 5;
        } 
    }


}