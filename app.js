'use strict';

// 1 Вариант реализации
// function myFetch(url){
//     return new Promise((resolve,reject)=>{
//     const request = new XMLHttpRequest();
//         request.open('GET',url);
//         request.send();
//         request.addEventListener('load',function(){
//             try{
//                 resolve(this.response);
//             }catch(error){
//                 reject(new Error('error'));
//             }
//         })
//     });
// }

// 2 Вариант специализации
function myFetch(url){
    return new Promise((resolve,reject)=>{
    const request = new XMLHttpRequest();
        request.open('GET',url);
        request.send();
        request.addEventListener('load',function(){
            if(this.status > 400){
                reject(new Error(this.status));
            }
            resolve(this.responseText);

        })

        request.addEventListener('error',function(){
            reject(new Error(this.status));
        })

        request.addEventListener('timeout',function(){
            reject(new Error('Timeout'));

        })
    });
}
myFetch('https://dummysjson.com/products/')
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Это ошибка: ' + error));