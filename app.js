'use strict';

function getData(url){
    return fetch(url)
        .then( response => {
            if(!response.ok){
                throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json();
        })
}

getData('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(({abilities}) => {
        const {ability} = abilities[0];
        return getData(ability.url);
    })
    .then((data) => {
        const description = data.effect_entries;
        for(let {effect,language} of description){
            if(language.name === "en"){
                console.log(effect);
            }
        }
    })
    .catch(error => {
        console.log(error.message);
    });