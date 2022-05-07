let canvas;
let world;
let keyboard = new Keyboard();
let music_on = false;

gamemusic = new Audio('audio/music.mp3')

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function restart() {
    
    location.reload();
    
}

function win() {
    document.getElementById('game').classList.add('d-none');
    document.getElementById('win').classList.remove('d-none');
    gamemusic.pause();
}

function gameOver() {
    document.getElementById('game').classList.add('d-none');
    document.getElementById('gameOver').classList.remove('d-none');
    document.getElementById('win').classList.add('d-none');
    gamemusic.pause();
}

function startGame() {
    initlevel()
    init();
    playMusic();
    document.getElementById('start').classList.add('d-none');
    document.getElementById('game').classList.remove('d-none');
    document.getElementById('win').classList.add('d-none');
}

function playMusic() {
    gamemusic.loop = true;
    gamemusic.play();
    gamemusic.volume = 0.1;
    music_on = true;
    document.getElementById('mute').classList.remove('opacity')
}

function stopMusic() {

    if (music_on) {
        gamemusic.pause()
        document.getElementById('mute').classList.add('opacity')
        music_on = false;
    } else {
        playMusic();
    }

}


window.addEventListener("keydown", (e) => {
    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if(e.keyCode == 38) {
        keyboard.UP = true;
    }

    if(e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if(e.keyCode == 68) {
        keyboard.D = true;
    }

})


window.addEventListener("keyup", (e) => {
    if(e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if(e.keyCode == 38) {
        keyboard.UP = false;
    }

    if(e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if(e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if(e.keyCode == 68) {
        keyboard.D = false;
    }

})














// function init() {
//     canvas = document.getElementById('canvas');
//     ctx = canvas.getContext('2d'); /* mit diese variable ctx kann man elemente im canva darstellen*/

//     character.src = '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png' /* .. vor dem lenk wenn das element im anderen ordner ist &&& das bild braucht etwas Zeit bis es geladen ist und daswegen wird diese Zeile nicht ausgeführt und das Program springt in di nächste Zeile */

//     ctx.drawImage(character, 20, 20, 50, 150) /* mit diese befehl stellt man etwas dar im canva // 20, 20 X und Y position  50, 150 breite und höhe*/
// }
