class Cloud extends MovableObject { /* extends MovableObject das heisst das cloud die gleiche befehle hat wie MovableObject - als würde man die gleiche befhele hier reinkopieren  */
    y = 10;
    height = 250;
    width = 500;


    constructor() {
       super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
   
       this.x = Math.random() * 300; 
       this.animate();
   }






   animate() {
   this.moveLeft();
}









}