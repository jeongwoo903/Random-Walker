const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function circle(x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fillStyle = "rgb(255, 215, 82)";
    context.fill();
    context.stroke();
    context.closePath();
}

function Walker() {
    this.x = WIDTH / 2;
    this.y = HEIGHT / 2;
    this.r = 3;
    this.sp = this.r * 2;
}

Walker.prototype.walk = function () {
    let choice = Math.floor(Math.random() * 4);
    switch (choice) {
        case 0:
            this.x += this.sp;
            break;
        case 1:
            this.x -= this.sp;
            break;
        case 2:
            this.y += this.sp;
            break;
        case 3:
            this.y -= this.sp;
            break;
    }
}

Walker.prototype.draw = function () {
    circle(this.x, this.y, this.r);
}

let w = new Walker();

function display() {
    w.walk();
    w.draw();
}

addEventListener("resize", function () {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
})

function animation() {
    requestAnimationFrame(animation);
    display();
}

animation();

