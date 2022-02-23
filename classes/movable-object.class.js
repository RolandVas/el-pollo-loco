class MovableObject {
    x = 50;
    y = 250;
    // img;
    height = 200;
    width = 100;
    imageChace = {}; /* sieht so aus --> img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png: img  ---> das key ist = 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png' und das ruft img auf was schon definiert ist und bedeutet = <img src="img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"> */
    currantImage = 0;
    speed = 0.15; /* von x koordinate werden immer 0.15 px ebgezogen - function moveLeft*/
    otherDirection = false;


    loadImage(path) {
        this.img = new Image(); /*this.img = das gleiche wie -> document.getElementById('canvas') <img src="Pfad"> */
        this.img.src = path; /* .src = src"path" --> path ist das pfad von der Bild */
    }


    loadImages(array) { /* array von character (da haben wir 6 Bilder(Pfad) drinen) */
        array.forEach(path => { /* forschleife geht durch diese 6 bilder array = path --> path ist das Pfad von Bild --> immer von 1 Bild */
            let img = new Image(); /* hier wird das document.getElement.... geleaden = img */
            img.src = path; /* hier wird von img src"path" geladen  */
            this.imageChace[path] = img; /* hier wird das Bild im array gepusht ---> das key ist = 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png' und das ruft img auf was schon definiert ist und bedeutet = <img src="img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"> */
        });

    }

    moveRight() {
        console.log('Moving right')
    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed; /* von x koordinate werden immer 0.15 px ebgezogen */
        }, 1000 / 60); /* hier gibt man die Zeit ein immer in milisekunden z.b 1000 -> das ist 1s */
    }



}