'use strict';

let medianPrice = 0;
const request = new XMLHttpRequest();
request.open('GET','https://dummyjson.com/products/');
request.send();

request.addEventListener('load',function(){
    const data = JSON.parse(this.responseText).products;
    data.forEach(element => {
        medianPrice += (element.price/data.length);
    });
    console.log(Math.round(medianPrice));
});
