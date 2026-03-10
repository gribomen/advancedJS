'use strict';

const buttons = document.querySelector(".wrapper-btn");
const el_count = document.querySelector(".count-btn");
let count=0;

for(let i = 0; i < 5; i++){
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = "Нажми меня";
    buttons.append(btn);
}

buttons.addEventListener("click",function(event){
    const el_click = event.target;
    changeCount();
    el_click.innerText = "Нажата!";
    el_click.classList.add("btn_active");
    for(const item of [...buttons.children]){
        if(item != el_click){
            item.innerText = "Нажми меня";
            item.classList.remove("btn_active");
        }
    }

})

function changeCount(){
    count++;
    el_count.innerText = `Счетчик ${count}`;
}
