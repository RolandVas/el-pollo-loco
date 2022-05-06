class StatusBar extends DrawableObject{


    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/verde/0.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/1.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/2.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/3.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/4.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/5.png',
        
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 40;
        this.y = 0;
        this.width = 180;
        this.height = 50; 
        this.setPercentage(100);
       
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageChace[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }


}