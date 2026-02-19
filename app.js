'use strict';

console.log(1);

const messages = ['Bash!','Boom!'];

const boomTimer = setTimeout((message1,message2) =>{
    console.log(2);
    console.log(message1);
    console.log(message2);
},1000,...messages);
// clearTimeout(boomTimer);

console.log(3);