var transformModule = (function(){

	var tranApp  ={};

	tranApp.init = function(){
		var canvas = document.getElementById('myCanvas');
		context = canvas.getContext('2d');

		canvasHeight = canvas.height;
		canvasWidth = canvas.canvasWidth;
	};

	tranApp.translate = function(){
		var lineGrad = context.createLinearGradient(0,0,150,0);

		lineGrad.addColorStop(0,'red');
		lineGrad.addColorStop(0.25,'green');
		lineGrad.addColorStop(0.5,'blue');

		context.fillStyle=lineGrad;

		context.fillRect(20,20,100,50);
	};

	tranApp.rotate=function(){};
	tranApp.scale=function(){};
	tranApp.transform = function(){};

	return tranApp;

})()

transformModule.init();
transformModule.translate(); 