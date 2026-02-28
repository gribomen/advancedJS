'use strict';

const res = fetch('https://dummyjson.com/products/1')
    .then((response) =>{
        console.log(response);
        return response.json;
    })
    .then((data) => {
        console.log(data);
    });

console.log(res);
fetch('https://dummyjson.com/products/1').then((response)=>{return response.json;}).then((data) => {});