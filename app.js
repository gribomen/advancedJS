'use strict'
 
console.log( rollDice({dice:"d6"}));

function rollDice(dice){
    return Math.trunc(Math.random()*(Number.parseInt(dice.dice.slice(1))) + 1);
}
