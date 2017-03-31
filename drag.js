var drag = document.getElementById('item1');

    drag.addEventListener('dragstart',function(){
        console.log('drag start fired');
    });

    drag.addEventListener('dragend',function(){
        console.log('drag end fired');
    });

var drop = document.getElementById('container');

    drop.addEventListener('drop',function(){
        console.log('dropped');
        drop.setAttribute('style','background-color:green');
    });
    drop.addEventListener('dropleave',function(){
        console.log('drag leave fired');
    });
    drop.addEventListener('dragover',function(){
        console.log('drag over fired');
    });
    drop.addEventListener('dragenter',function(){
        console.log('drag enter fired');
    }); 