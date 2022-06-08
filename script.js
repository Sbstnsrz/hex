var scr = document.getElementById("hex");
var hex = scr.getContext("2d");
hex.beginPath();
hex.fillStyle = "black";
hex.fillRect(0,0,1000,800);

function randomHexLine(x, y, count, size, color, type){
    var i = count;
    var arrayX = [1, 0.5, -0.5, -1, -0.5, 0.5];
    var arrayY = [0, -0.866, -0.866, 0, 0.866, 0.866];
    var direction = Math.floor(Math.random()*3);
    if(type){
        direction = direction*2+1;
    }else{
        direction = direction*2;
    }
    hex.strokeStyle = color;
    hex.beginPath();

    hex.moveTo(x,y);
    var posX = x + arrayX[direction]*size;
    var posY = y + arrayY[direction]*size;

    hex.lineTo(posX, posY);

    for(var i=0; i<count; i++){
        
        if(Math.round(Math.random())){
            direction++;
        }else{
            direction--;
        }
        if(direction>5){
            direction=0;
        }else if(direction<0){
            direction=5;
        }
        posX += arrayX[direction]*size;
        posY += arrayY[direction]*size;
        hex.lineTo(posX, posY);
    }
    hex.stroke();    
}

var colors = ["green","blue","red","cyan","grey","pink","yellow","orange","brown"];

scr.addEventListener("mousemove", (e)=>{
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    hex.fillStyle = "black";
    hex.fillRect(0,0,1000,800);

    for(var i=0; i<colors.length; i++){
        var pos = syncHex(x, y, size);
        var size = 30;
        randomHexLine(pos[0], pos[1], 10, size, colors[i], pos[2]);
    }
});

function syncHex(x, y, size){
    var pointY = Math.floor(y/(0.866*size));
    var pointX = Math.floor(x/(0.5*size));
     
    if(pointY%2){
        var diffX = (pointX-1)%6;
        if(diffX<2){
            return [(pointX-diffX)*size*0.5, pointY*size*0.866, 0];
        }else{
            return [(pointX-diffX+2)*size*0.5, pointY*size*0.866, 1];
        }
    }else{
        var diffX = pointX%6;
        if(diffX<4){
            return [(pointX-diffX)*size*0.5, pointY*size*0.866, 1];
        }else{
            return [(pointX-diffX+4)*size*0.5, pointY*size*0.866, 0];
        } 
    }
}