'use strict';

async function race(promises){
    return new Promise((resolve,reject) => {
        for( const promise of promises){
            Promise.resolve(promise).then(resolve,reject);
        }

    });

}

const res = race([
    new Promise(resolve => resolve(fetch('https://dummyjson.com/products/1'))),
    new Promise(resolve => resolve(fetch('https://dummyjson.com/products/2'))),
    new Promise(resolve => resolve(fetch('https://dummyjson.com/products/3'))),
    new Promise(resolve => resolve(fetch('https://dummyjson.com/products/4'))),
    new Promise(resolve => resolve(fetch('https://dummyjson.com/products/5'))),
    new Promise(resolve => resolve(fetch('https://dummyjson.com/products/6'))),
    new Promise(resolve => resolve(fetch('https://dummyjson.com/products/7'))),
    new Promise(resolve => resolve(fetch('https://dummyjson.com/products/8'))),
    new Promise(resolve => resolve(fetch('https://dummyjson.com/products/9'))),
    new Promise((resolve,reject) => reject('Error'))  
])

console.log(res);