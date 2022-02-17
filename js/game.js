let canvas;
let world;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);

 console.log('My Character is', world.character)
}














// function init() {
//     canvas = document.getElementById('canvas');
//     ctx = canvas.getContext('2d'); /* mit diese variable ctx kann man elemente im canva darstellen*/

//     character.src = '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png' /* .. vor dem lenk wenn das element im anderen ordner ist &&& das bild braucht etwas Zeit bis es geladen ist und daswegen wird diese Zeile nicht ausgeführt und das Program springt in di nächste Zeile */

//     ctx.drawImage(character, 20, 20, 50, 150) /* mit diese befehl stellt man etwas dar im canva // 20, 20 X und Y position  50, 150 breite und höhe*/
// }
