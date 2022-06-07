var scr = document.getElementById("hex");
var hex = scr.getContext("2d");

hex.fillStyle = "WhiteSmoke";
hex.fillRect(0,0,600,400);
hex.strokeStyle = "black";
hex.beginPath();
/*
hex.moveTo(100,100);
hex.lineTo(200+16,100);
hex.lineTo(260+16,200);
hex.lineTo(200+16,300);
hex.lineTo(100,300);
hex.lineTo( 40,200);
hex.lineTo(100,100);

hex.stroke();
*/

function randomHexLine(x, y, count, size){
    var i = count;
    var direction = Math.floor(Math.random()*6);
    hex.moveTo(x,y);
    var posX = x + Math.sin(direction)*size;
    var posY = y + Math.cos(direction)*size;

    hex.lineTo(posX, posY);

    for(var i=0; i<count; i++){
        var dir = Math.round(Math.random());
        if(dir){
            direction++;
        }else{
            direction--;
        }
        posX += Math.sin(direction)*size;
        posY += Math.cos(direction)*size;
        hex.lineTo(posX, posY);
    }
    hex.stroke();
}

randomHexLine(300,200, 20, 20);