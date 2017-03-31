var lineModule=(function(){
var lineApp={};
var context;
var canvas;
var canvasHeight;
var canvasWidth;

lineApp.init=function(){

	canvas=document.getElementById('mycanvas');
	context=canvas.getContext('2d');

	canvasHeight=canvas.height;
	canvasWidth=canvas.width;
};

lineApp.drawline=function(){
	context.moveTo(100,50);
	context.lineWidth=6;
	context.lineJoin='round';
	context.lineCap='butt';
	context.strokeStyle='blue';
	context.lineTo(150,100);
	context.lineTo(200,100);
	context.stroke();

};
lineApp.drawRectangle=function(){
context.fillStyle='orange';
context.fillRect(20,20,100,60);
context.strokeStyle='green';
context.strokeRect(50,60,100,60);

};
lineApp.drawcircle=function(){
var centerX = canvas.width / 2;
              var centerY = canvas.height / 2;
      
      var radius = 70;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();

};
lineApp.drawSemicircle=function(){
context.createGradient
};
return lineApp;
})();
lineModule.init();
lineModule.drawcircle();
//lineModule.drawRectangle();