'use strict';

const birthDay = "2002-01-01";

/**
 * Функция для валидации возраста пользователя, больше 14 лет или меньше
 * @param {*} birthDay - дата рождения в формате "2002-01-01"
 * @returns {boolean} возвращает true если больше 14 лет пользователю в ином случае false
 */
function validateBirthDay(birthDay){
    const now = Date.now();
    const difference = (now - (new Date(birthDay)).getTime())/(1000*60*60*24);
    return (Math.round(difference) - 365*14 - Math.round(14/4)) > 0;
}

console.log(validateBirthDay(birthDay));
 


 








