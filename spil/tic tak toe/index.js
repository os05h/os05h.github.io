//setup af canvas
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
//canvas width and height set
canvas.width = 300
canvas.height = 300
//tic tac toe gridt
feltstait = [1, 1, 1, 2, 1, 2, 1, 1, 1, 1]
feltx = [0,0,0,0,0,0,0,0,0,0]
felty = [0,0,0,0,0,0,0,0,0,0]
class Leaut {
    constructor() {
        this.x = 300
        this.y = 300
        this.sw = 300
        this.sh = 300
        this.tw = 10
        this.th = 10
        this.text = 100
        let n = 0
        for(let x = 0;x<3;x++){
            for(let y = 0;y<3;y++){
                feltx[n] = this.tw*2 + this.sw/3*x
                felty[n] = this.th*9 + this.sh/3*y
                n++
            }
        }
    }
    draw() {
        //linje fladt
        c.beginPath()
        for(let i = 1;i < 4;i++){
            c.rect(0, this.y/3 * i, this.sw, this.tw)
            c.rect(this.x/3 * i , 0, this.tw ,this.sh+this.tw)
            
        }
        c.font = this.text + "px Arial"
        for(let i = 0;i<9;i++){
            if(feltstait[i]==1){
                c.fillText("X", feltx[i],felty[i])
            }else if(feltstait[i]==2){
                c.fillText("O", feltx[i],felty[i])
            }
        }
        c.fillStyle = 'blue'
        c.fill()
    }
    tjekvindx() {
        if (feltstait[1] == 1 & feltstait[2] == 1 & feltstait[3] == 1) {
          return true;
        } else if (feltstait[4] == 1 & feltstait[5] == 1 & feltstait[6] == 1) {
          return true;
        } else if (feltstait[7] == 1 & feltstait[8] == 1 & feltstait[9] == 1) {
          return true;
        } else if (feltstait[1] == 1 & feltstait[4] == 1 & feltstait[7] == 1) {
          return true;
        } else if (feltstait[2] == 1 & feltstait[5] == 1 & feltstait[8] == 1) {
          return true;
        } else if (feltstait[1] == 1 & feltstait[4] == 1 & feltstait[7] == 1 ) {
          return true;
        } else if (feltstait[2] == 1 & feltstait[5] == 1 & feltstait[8] == 1 ) {
          return true;
        } else if (feltstait[3] == 1 & feltstait[6] == 1 & feltstait[9] == 1 ) {
          return true;
        } else if (feltstait[1] == 1 & feltstait[5] == 1 & feltstait[9] == 1 ) {
          return true;
        } else if (feltstait[3] == 1 & feltstait[5] == 1 & feltstait[7] == 1 ) {
          return true;
        } else {
          return false;
        }
      }
    tjekvindo() {
        if (feltstait[1] == 2 & feltstait[2] == 2 & feltstait[3] == 2) {
          return true;
        } else if (feltstait[4] == 2 & feltstait[5] == 2 & feltstait[6] == 2) {
          return true;
        } else if (feltstait[7] == 2 & feltstait[8] == 2 & feltstait[9] == 2) {
          return true;
        } else if (feltstait[1] == 2 & feltstait[4] == 2 & feltstait[7] == 2) {
          return true;
        } else if (feltstait[2] == 2 & feltstait[5] == 2 & feltstait[8] == 2) {
          return true;
        } else if (feltstait[1] == 2 & feltstait[4] == 2 & feltstait[7] == 2 ) {
          return true;
        } else if (feltstait[2] == 2 & feltstait[5] == 2 & feltstait[8] == 2 ) {
          return true;
        } else if (feltstait[3] == 2 & feltstait[6] == 2 & feltstait[9] == 2 ) {
          return true;
        } else if (feltstait[1] == 2 & feltstait[5] == 2 & feltstait[9] == 2 ) {
          return true;
        } else if (feltstait[3] == 2 & feltstait[5] == 2 & feltstait[7] == 2 ) {
          return true;
        } else {
          return false;
        }
    }
}
const leaut = new Leaut()
//addEventListener('keydown', keyDown, false)
//addEventListener('keyup', keyUp, false)
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    leaut.draw()
}
animate()