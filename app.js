'use strict';

// Мой вариант
// const promise = new Promise ( (resolve, reject) => {  navigator.geolocation.getCurrentPosition((position) => {
//         resolve(fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`));
    
//     },(error) => {
//         reject(error);
    
//     })
// });

// promise
//     .then((response) => {
//         if(!response.ok){
//             throw new Error('Error: '+ response.status);
//         }
//         return response.json();
//     })
//     .then(({city}) => {
//         console.log(city);
//     })
//     .catch(error => console.error(error));

function getMyCoordinates(){
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                })
            }, 
            (error) => {
                reject(error);
            }
        );
    
    })
}

async function getMyCity(){
    try{
        const {latitude, longitude} = await getMyCoordinates();
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
        if(!response.ok){
            throw new Error(response.status);
        }
        const {city} = await response.json();
        console.log(city);
    }catch(error){
        console.error(error);
    }
}

getMyCity()