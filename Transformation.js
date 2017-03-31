var transformModule = (function(){
    var tranApp = {}
    var context,canvas,canvasHeight,canvasWidth;

    tranApp.init = function(){
        canvas = document.getElementById('mycanvas');
        context = canvas.getContext('2d');
        canvasHeight = canvas.height;
        canvasWidth = canvas.width;
    };

    tranApp.translate = function(){
        var lineGrad = context.createLinearGradient(0,0,150,0);
        lineGrad.addColorStop(0,'red');
        lineGrad.addColorStop(0.25,'green');
        lineGrad.addColorStop(0.5,'blue');
        lineGrad.addColorStop(1,'yellow');
        context.fillStyle = lineGrad;
        context.fillRect(20,20,100,50);
        context.translate(50,0);
        context.fillRect(20,20,100,50);
        context.scale(1.5,1.5);
        context.fillRect(20,20,100,50); 
    };

    tranApp.rotate = function(){};
    tranApp.scale = function(){};
    tranApp.transform = function(){};

    return tranApp;
})();

transformModule.init();
transformModule.translate();