class backgroundObject extends MovableObject { /* extends MovableObject das heisst das cloud die gleiche befehle hat wie MovableObject - als würde man die gleiche befhele hier reinkopieren  */

    width = 720;
    height = 480;

    constructor(imagePath, x) {
       super().loadImage(imagePath);
       this.x = x;
       this.y = 480 - this.height;
   }

}