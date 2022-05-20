class DrawableObject {
    img;
    imageChace = {}; /* sieht so aus --> img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png: img  ---> das key ist = 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png' und das ruft img auf was schon definiert ist und bedeutet = <img src="img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"> */
    currantImage = 0;
    x = 100;
    y = 250;
    height = 200;
    width = 100;

    loadImage(path) {
        this.img = new Image(); /*this.img = das gleiche wie -> document.getElementById('canvas') <img src="Pfad"> */
        this.img.src = path; /* .src = src"path" --> path ist das pfad von der Bild */
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(array) { /* array von character (da haben wir 6 Bilder(Pfad) drinen) */
        array.forEach(path => { /* forschleife geht durch diese 6 bilder array = path --> path ist das Pfad von Bild --> immer von 1 Bild */
            let img = new Image(); /* hier wird das document.getElement.... geleaden = img */
            img.src = path; /* hier wird von img src"path" geladen  */
            this.imageChace[path] = img; /* hier wird das Bild im array gepusht ---> das key ist = 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png' und das ruft img auf was schon definiert ist und bedeutet = <img src="img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png"> */
        });

    }

    drawFrame(ctx) { /* blaue viereck zeigen */
        if (this instanceof Character || this instanceof Chicken || this instanceof Collectable) { /* Das blaue viereck nur für chicken und character verwenden */
            ctx.beginPath();
            ctx.stroke();
        }
    }

}