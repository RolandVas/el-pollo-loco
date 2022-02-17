class MovableObject {
    x = 50;
    y = 300;
    img;
    height = 200;
    width = 100;



    loadImage(path) {
        this.img = new Image(); 
        this.img.src = path;
    }


    moveRight() {
        console.log('Moving right')
    }
}