const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight - 100

class Player {

    constructor(x, y, radius, coler,) {
        this.x = x
        this.y = y
        this.radius = radius
        this.coler = coler

        this.speedX = 0;
        this.speedY = 0;
        this.gravitx = 0
        this.gravity = 0.05;
        this.gravitySpeed = 0;
        this.gravitxSpeed = 0;
        this.hitBottom = function () {
            var rockbottom = canvas.height - radius;
            if (this.y > rockbottom) {
                this.y = rockbottom;
                this.gravitySpeed = 0;
            }
            if (this.y < 0 + radius) {
                this.gravitySpeed = 0;
                this.y = 0 + radius;
            }
        }
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.coler
        c.fill()
    }
    newPos() {
        this.gravitySpeed += this.gravity;
        this.y += this.speedY + this.gravitySpeed;
        this.gravitxSpeed += this.gravitx;
        this.x += this.speedx + this.gravitxSpeed;
        this.hitBottom();
    }

}

const x = canvas.width / 2
const y = canvas.height / 2
const player = new Player(x, y, 30, 'blue')



addEventListener('keydown', keyDown, false)
addEventListener('keyup', keyUp, false)

function keyDown(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: player.gravitx = -0.1; break; //Left key
        case 38: player.gravity = -0.1; break; //Up key
        case 39: player.gravitx = 0.1; break; //Right key
        case 40: break; //Down key
        default: alert(code); //Everything else
    }
}
function keyUp(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: player.gravityx = 0.1; break; //Left key
        case 38: player.gravity = 0.05; break; //Up key
        case 39: player.gravityx = -0.1; break; //Right key
        case 40: break; //Down key
        default: alert(code); //Everything else
    }
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.draw()
    player.newPos()
}
animate()

function accelerate(n) {
    player.gravity = n;
}
