







// const level1 = new level(
//     [
//         new Chicken(),
//         new Chicken(),
//         new Chicken(),
//     ],
//     [
//         new Endboss(),
//     ],
//     [
//         new Cloud(),
//     ],
//     [
//         new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
//         new backgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
//         new backgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
//         new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
//         new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
//         new backgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
//         new backgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
//         new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

//         new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*2),
//         new backgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*2),
//         new backgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*2),
//         new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*2),
//         new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*3),
//         new backgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*3),
//         new backgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*3),
//         new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*3),

//         new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*4),
//         new backgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*4),
//         new backgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*4),
//         new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*4),
//         new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*5),
//         new backgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*5),
//         new backgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*5),
//         new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*5),
//     ],
//     [
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//         new Collectable(),
//     ],
//     [
//         new Coin(),
//         new Coin(),
//         new Coin(),
//         new Coin(),
//         new Coin(),
//         new Coin(),
//         new Coin(),
//     ]
// );



let level1;

function initlevel() {

    level1 = new level(
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
        ],
        [
            new Endboss(),
        ],
        [
            new Cloud(),
        ],
        [
            new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new backgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new backgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
            new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new backgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new backgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),
    
            new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*2),
            new backgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*2),
            new backgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*2),
            new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*2),
            new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*3),
            new backgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*3),
            new backgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*3),
            new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*3),
    
            new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*4),
            new backgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*4),
            new backgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*4),
            new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*4),
            new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*5),
            new backgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*5),
            new backgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*5),
            new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*5),
        ],
        [
            new Collectable(),
            new Collectable(),
            new Collectable(),
            new Collectable(),
            new Collectable(),
            new Collectable(),
            new Collectable(),
            new Collectable(),
            new Collectable(),
            new Collectable(),
            new Collectable(),
            new Collectable(),
            new Collectable(),
            new Collectable(),
        ],
        [
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
        ]
    );
}