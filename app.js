'use strict'

const timer = document.querySelector(".timer");
const newYear =  new Date((new Date).getFullYear()+1,0,0,0,0,0);

function changeNow(){
    const now = new Date();
    const option = {
        month:"numeric",
        day: "numeric",
        hour:"numeric",
        minute:"numeric",
        second:"numeric"
    }

    const difference = new Intl.DateTimeFormat(navigator.language,option).format(newYear - now + 140);
    const month = difference.split(",")[0].split(".")[1];
    const day = difference.split(",")[0].split(".")[0];
    const hour = difference.split(",")[1].split(":")[0].trim();
    const minute = difference.split(",")[1].split(":")[1];
    const second = difference.split(",")[1].split(":")[2];

    const month_element = document.createElement("span");
    if(month[0] == "0"){
        month_element.innerText = (month[1]-1) + " месяцев";
    }else{
        month_element.innerText = (month-1) + " месяцев";        
    }

    const day_element = document.createElement("span");
    day_element.innerText = day + " дней";
    if(day[0] == "0"){
        day_element.innerText = day[1] + " дней";
    }else{
        day_element.innerText = day + " дней";        
    }

    const hour_element = document.createElement("span");
    if(hour[0] == "0"){
        hour_element.innerText = hour[1] + " часов";
    }else{
        hour_element.innerText = hour + " часов";        
    }

    const minute_element = document.createElement("span");
    if(minute[0] == "0"){
        minute_element.innerText = minute[1] + " минут";
    }else{
        minute_element.innerText = minute + " минут";        
    }

    const second_element = document.createElement("span");
    if(second[0] == "0"){
        second_element.innerText = second[1] + " минут";
    }else{
        second_element.innerText = second + " минут";        
    }

    second_element.innerText = second + " секунд";
    timer.innerHTML = month_element.innerHTML + ", " +
        day_element.innerHTML + ", " +
        hour_element.innerHTML  + ", " +
        minute_element.innerHTML  + ", " +
        second_element.innerHTML ;
}

function timeUntilNewYear(){
    changeNow()
    setInterval(changeNow,1000);
}


(()=>{
    timeUntilNewYear();
})()