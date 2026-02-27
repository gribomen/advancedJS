'use strict';

function req(id){
    const request = new XMLHttpRequest();
    request.open('Get','https://dummyjson.com/products/'+id);
    request.send();

    request.addEventListener('load',function(){
        const data = JSON.parse(this.responseText);
        console.log(data);
    });
}
req('');
req(1);
req(3);
console.log("end");
