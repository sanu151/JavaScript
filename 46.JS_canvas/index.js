var c = document.querySelector('#my-canvas');

var ctx = c.getContext('2d');

ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.strokeRect(0, 0, 400, 300);

ctx.fillStyle = 'orange';
ctx.fillRect(2, 2, 396, 296);

ctx.fillStyle = 'white';
ctx.fillRect(2, 98, 396, 198);

ctx.fillStyle = 'green';
ctx.fillRect(2, 196, 396, 102);

var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.arc(centerX, centerY-2, 50, 0, 2*Math.PI, false);
ctx.stroke();

ctx.beginPath();
const angularIncrement = (2*Math.PI) / 24;

for(let i=0; i < 24; i++)
{
    const angle = i * angularIncrement;
    const pointX = centerX + 50 * Math.cos(angle);
    const pointY = centerY + 50 * Math.sin(angle);
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(pointX, pointY);
    ctx.stroke();
}