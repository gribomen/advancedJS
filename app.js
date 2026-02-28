'use strict';

const request1 = new XMLHttpRequest();
request1.open('GET','https://pokeapi.co/api/v2/pokemon/ditto');
request1.send();
request1.addEventListener('load', function(){
    const {ability} = JSON.parse(this.responseText).abilities[0];


    const request2 = new XMLHttpRequest();
    request2.open('GET',ability.url);
    request2.send();
    request2.addEventListener('load', function(){
        const description = JSON.parse(this.responseText).effect_entries;
        for(let {effect,language} of description){
            if(language.name === "en"){
                console.log(effect);
            }

        }
    });
});