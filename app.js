'use strict';

// function wait(msec) {
//     const {resolve,reject,promise} = Promise.withResolvers();
//     setTimeout(() => {
//         resolve();
//     },msec);
//     return promise;
//     // 1 Вариант
//     // return new Promise((resolve,reject)=>{
//     //     setTimeout(()=>{
//     //         resolve();
//     //     },msec)
//     // })
// }


// async function run() {
//     console.log('начало');
//     await wait(2000);
//     console.log('конец');
// }

// run();


class Queue {
    #message = [];
    #resolve;
    #reject;
    #promise;

    constructor(){
        const {resolve,reject,promise} = Promise.withResolvers();
        this.#resolve = resolve;
        this.#reject = reject;
        this.#promise = promise;
    };

    add(msg){
        this.#message.push(msg);
        return this;
    }

    close(){
        this.#resolve(this.#message)
    }

    error(reason){
        this.#reject(reason);
    }

    subsribe(){
        return this.#promise;
    }
}


const queue = new Queue();
const sub1 = queue.subsribe();
sub1.then(data => console.log(data)).catch(error => console.error(error));
const sub2 = queue.subsribe();
sub2.then(data => console.log(data)).catch(error => console.error(error));
queue.add('msg1').add('msg2').close();