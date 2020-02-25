const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let posX = 10;
let posY = 10;

const keybinds = {
    ArrowRight: () => posX++,
    ArrowLeft: () => posX--,
    ArrowUp: () => posY--,
    ArrowDown: () => posY++,
};

window.addEventListener('keydown', event => {
    if (typeof keybinds[event.key] === 'function') keybinds[event.key]();
});

function refresh() {
    ctx.beginPath();
    ctx.lineWidth = '10';
    ctx.strokeStyle = 'blue';
    ctx.rect(posX, posY, 5, 5);
    ctx.stroke();
}

function clearCanvas() {
    canvas.width = canvas.width;
}

function main() {
    clearCanvas();
    refresh();
    requestAnimationFrame(main);
}

requestAnimationFrame(main);