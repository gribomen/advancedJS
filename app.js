'use strict';

function getPosition(){
    return new Promise((resolve) =>{
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position.coords.latitude + " " + position.coords.longitude);
        })
    })

}

getPosition()
    .then(data => console.log(data));