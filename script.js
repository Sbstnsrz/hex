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
        direction = direction*2;
    }else{
        direction = direction*2+1;
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
        var size = 30;
        randomHexLine(x-x%(size*0.5*1.5), y-y%(size*0.866*2), 10, size, colors[i], hexType(x, y, size));
    }
});

function hexType(x, y, size){
    if(Math.floor((x%(size*0.5*1.5))/size) === Math.floor((y%(size*0.866*2))/size)){
        return true;
    }else{
        return false;
    }
}