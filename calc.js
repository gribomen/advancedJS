'use strict';
 
const CALC = {};


(function(){
    function add(f, s){
        return f + s;
    }

    function sub(f, s){
        return f - s;
    }

    CALC.calc = {
        add,
        sub
    }
})()
