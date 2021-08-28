
canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
width_of_line=2;


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=width_of_line;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=width_of_line;
ctx.arc(260, 240, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=width_of_line;
ctx.arc(320, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=width_of_line;
ctx.arc(380, 240, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=width_of_line;
ctx.arc(440, 200, 40, 0, 2*Math.PI);
ctx.stroke();






