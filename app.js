'use strict'

const user = {
    name: 'Vasia',
    birthday:'09/06/1999'
}

function isBirthdayToday(user){
    const now = new Date();
    const birthdayDay =  new Date(user.birthday);
    if((now.getMonth() == birthdayDay.getMonth()) && (now.getDay() == birthdayDay.getDay())){
        return true;    
    }
    return false;
}

console.log(isBirthdayToday(user));