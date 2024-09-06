const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player {

    constructor(x, y, radius, coler,) {
        this.x = x
        this.y = y
        this.radius = radius
        this.coler = coler
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.coler
        c.fill()
    }
    newPos(xplus, yplus) {
        this.x += xplus
        this.y += yplus
    }

}
class Bloke {
    constructor(rnr, cnr) {
        this.x = rnr * 30
        this.y = cnr * 30
    }
    draw() {
        c.beginPath()
        c.rect(this.x, this.y, 29, 29)
        c.fillStyle = 'blue'
        c.fill()
    }
}

var nomber = canvas.width / 30 * (canvas.height / 30)
var blok = new Array(Math.floor(nomber));
var gang = 1
for (x = 0; x < canvas.width / 30 * (canvas.height / 30); x++) {
    if (x >= canvas.width / 30 * gang) {
        var xx = x - Math.floor(canvas.width / 30 * gang)
    } else {
        xx++
    }
    if (x <= canvas.width / 30 * gang) {
        blok[x] = new Bloke(xx, gang)
    } else {
        gang++
        blok[x] = new Bloke(xx, gang)
    }
}
const player = new Player(canvas.width / 2, canvas.height / 2, 30, 'red')


addEventListener('keydown', keyDown, false)
addEventListener('keyup', keyUp, false)

function keyDown(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: player.newPos(-100, 0); break; //Left key
        case 38: player.newPos(0, -100); break;//Up key
        case 39: player.newPos(100, 0); break;//Right key
        case 40: player.newPos(0, 100); break;//Down key
        default: //alert(code); //Everything else
    }
}
function keyUp(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: player.newPos(0, 0); break; //Left key
        case 38: player.newPos(0, 0); break; //Up key
        case 39: player.newPos(0, 0); break; //Right key
        case 40: player.newPos(0, 0); break; //Down key
        default: //alert(code); //Everything else
    }
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    //player.newPos(0, 0)
    for (i = 0; i <= blok.length - 10; i++) {
        blok[i].draw()
    }
    player.draw()
}
animate()