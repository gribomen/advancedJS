'use strict'

const timeCooking = "01.30";

function getTimerCookPizza(ms){
    const end = new Date().getTime() + ms; 
    const interval = setInterval(() =>{
        console.log(
            new Intl.DateTimeFormat(navigator.language,{
                minute:"numeric",
                second:"numeric"
            }).format(end + 100 - new Date())
        );
    },1000);

    setTimeout(()=>{
        clearInterval(interval);
        console.log("🍕!!!");
    },ms);

}

getTimerCookPizza(35000);