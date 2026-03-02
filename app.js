'use strict';

const prom = new Promise((resolve,reject)=>{
    if( new Date() < new Date('07/04/2026')){
        reject( new Error('Error'));
    }
    resolve('Success');
});

prom
    .then(data =>console.log(data))
    .catch(error => console.log(error))

function timeOut(sec){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },1000*sec);
    })
}

timeOut(1)
    .then(() => {
        console.log(1);
        return timeOut(1);
    })    
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(1);
        return timeOut(1);
    })    
    .then(() => {
        console.log(1);
    });