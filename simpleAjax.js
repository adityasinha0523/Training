var app = {};

app.options = {

    type:'GET',
    url:'http://jsonplaceholder.typicode.com/users/1',
    contentType:"application/json; charset=utf-8"
}

app.init = function(){
    var promise = $.ajax(app.options);
    
    promise.done(function(data, status, xhr){
        app.updateDom(data);
    });

    promise.fail(function(data, status, xhr){
        console.log("Ajax fail "+status);
    });

    
    promise.done(function(data, status, xhr){
        console.log(status);
    });
}

app.updateDom = function(data){
    $("#placeholder").text(data);
}

$(function(){
    $("#invokeButton").on('click',app.init);
}); 
