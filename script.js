var scr = document.getElementById("hex");
var hex = scr.getContext("2d");

hex.fillStyle = "WhiteSmoke";
hex.fillRect(0,0,600,400);
hex.strokeStyle = "black";
hex.beginPath();
hex.moveTo(100,100);
hex.lineTo(200+16,100);
hex.lineTo(260+16,200);
hex.lineTo(200+16,300);
hex.lineTo(100,300);
hex.lineTo( 40,200);
hex.lineTo(100,100);


hex.stroke();