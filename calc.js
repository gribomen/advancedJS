'use strict';
 
export function add(f, s){
    return f + s;
}

export function sub(f, s){
    return f - s;
}

setTimeout(()=>{
    add = function(f,s){
        return f*s;
    };

},1500)