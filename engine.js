var c = document.getElementById("game");
var ctx = c.getContext("2d");
let posX = 10;
let posY = 10;

window.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
      posX = (posX + 1);
    }
    if (event.key === 'ArrowLeft') {
        posX = (posX - 1);
      }
      if (event.key === 'ArrowUp') {
        posY = (posY - 1);
      }
      if (event.key === 'ArrowDown') {
          posY = (posY + 1);
        }
  })

function refresh(){
    var container = document.getElementById("game");
    container.innerHtml="";
    ctx.beginPath();
ctx.lineWidth = "10";
ctx.strokeStyle = "blue";
ctx.rect(posX, posY, 5, 5);
ctx.stroke();
}
function clearCanvas(){  c.width = c.width;}
window.setInterval(clearCanvas, 1000);
window.setInterval(refresh, 100);
