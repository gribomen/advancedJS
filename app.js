'use strict';

function getPosition(){
    return new Promise((resolve,reject) =>{
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position.coords.latitude + " " + position.coords.longitude);
        },(error) => {
            reject(error);
        })
    })

}

getPosition()
    .then(data => console.log(data))
    .catch(error => console.error(error));