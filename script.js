var scr = document.getElementById("hex");
var hex = scr.getContext("2d");
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

function randomHexLine(x, y, count, size, color){
    var i = count;
    var arrayX = [1, 0.5, -0.5, -1, -0.5, 0.5];
    var arrayY = [0, -0.866, -0.866, 0, 0.866, 0.866];
    var direction = Math.floor(Math.random()*6);
    hex.strokeStyle = color;
    hex.beginPath();

    hex.moveTo(x,y);
    var posX = x + arrayX[direction]*size;
    var posY = y + arrayY[direction]*size;

    hex.lineTo(posX, posY);
    var path = 0;

    for(var i=0; i<count; i++){
        
        if(Math.round(Math.random())){
            direction++;
            path++;
        }else{
            direction--;
            path--;
        }
        
        if(path>3){
            direction-=2;
            path-=2;
        }
        if(path<-3){
            direction+=2;
            path+=2;
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

    return [posX, posY];
}

var colors = ["green","blue","red","cyan","grey","pink","yellow","orange","brown"];
var pos = [300,200];


scr.addEventListener("mousemove", (e)=>{
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    hex.fillStyle = "black";
    hex.fillRect(0,0,1000,800);

    for(var i=0; i<colors.length; i++){
        randomHexLine(x, y, 10, 20, colors[i]);
        console.log(x, y);
    }
});