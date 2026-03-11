
let canvas = document.querySelector("#game")
let draw = canvas.getContext("2d")
let red = Math.random()*255
let green = Math.random()*255
let blue = Math.random()*255
let color1 = "rgb(" + red + "," + green + "," + blue + ")"
let color2 = "rgb(" + green + "," + red + "," + blue + ")"
let color3 = "rgb(" + blue + "," + red + "," + green + ")"
function colorpick() {
    draw.fillStyle = color1;
    draw.fillRect(20, 49, 100, 88);
    draw.fillStyle = color2;
    draw.fillRect(120, 49, 100, 88);
    draw.fillStyle = color3;
    draw.fillRect(220, 49, 100, 88);
}
setTimeout( colorpick, 1000)
    let canvas1 = document.querySelector('#answ1')
    let draw1 = canvas1.getContext("2d")
    let canvas2 = document.querySelector('#answ2')
    let draw2 = canvas2.getContext("2d")
    let canvas3 = document.querySelector('#answ3')
    let draw3 = canvas3.getContext("2d")
    let canvas4 = document.querySelector('#answ4')
    let draw4 = canvas4.getContext("2d")
function answers() {

    draw1.fillStyle = color1;
    draw1.fillRect(0, 100, 25, 20);
    draw1.fillStyle = color2;
    draw1.fillRect(50, 100, 25, 20);
    draw1.fillStyle = color3;
    draw1.fillRect(100, 100, 25, 20);
    let red1 = red + 50
    let green1 = green + 50
    let blue1 = blue + 50
    let color4 = "rgb(" + red1 + "," + green1 + "," + blue1 + ")"
    let color5 = "rgb(" + green1 + "," + red1 + "," + blue1 + ")"
    let color6 = "rgb(" + blue1 + "," + red1 + "," + green1 + ")"

    draw2.fillStyle = color4;
    draw2.fillRect(0, 100, 25, 20);
    draw2.fillStyle = color5;
    draw2.fillRect(50, 100, 25, 20);
    draw2.fillStyle = color6;
    draw2.fillRect(100, 100, 25, 20);

    let red2 = red + 100
    let green2 = green + 100
    let blue2 = blue - 50
    let color7 = "rgb(" + red2 + "," + green2 + "," + blue2 + ")"
    let color8 = "rgb(" + green2 + "," + red2 + "," + blue2 + ")"
    let color9 = "rgb(" + blue2 + "," + red2 + "," + green2 + ")"

    draw3.fillStyle = color1;
    draw3.fillRect(0, 100, 25, 20);
    draw3.fillStyle = color8;
    draw3.fillRect(50, 100, 25, 20);
    draw3.fillStyle = color9;
    draw3.fillRect(100, 100, 25, 20);

    draw4.fillStyle = color7;
    draw4.fillRect(0, 100, 25, 20);
    draw4.fillStyle = color5;
    draw4.fillRect(50, 100, 25, 20);
    draw4.fillStyle = color3;
    draw4.fillRect(100, 100, 25, 20);
}
setTimeout(answers, 1000)
let containerGame = document.querySelector(".container_game"); 
canvas1.addEventListener("click", function() {
    containerGame.innerHTML = `    <div class="correct">
        <h2>CORRECT!</h2>
    </div>`
});
let canvases = [canvas2, canvas3, canvas4];
canvases.forEach(function(element) {
    element.addEventListener('click', function() {
        containerGame.innerHTML = `    <div class="incorrect">
        <h2>INCORRECT!</h2>
    </div>`
    })
})