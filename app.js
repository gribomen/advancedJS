'use strict';

function race(promises){
    return new Promise((resolve,reject) => {
        for( const promise of promises){
            Promise.resolve(promise).then(resolve,reject);
        }

    });

}

const res = race([
    fetch('https://dummyjson.com/products/1'),
    fetch('https://dummyjson.com/products/2'),
    fetch('https://dummyjson.com/products/3'),
    fetch('https://dummyjson.com/products/4'),
    fetch('https://dummyjson.com/products/5'),
    fetch('https://dummyjson.com/products/6'),
    fetch('https://dummyjson.com/products/7'),
    fetch('https://dummyjson.com/products/8'),
    fetch('https://dummyjson.com/products/9'),
    new Promise((resolve,reject) => reject('Error'))  
]);

res
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log(e));