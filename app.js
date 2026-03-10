'use strict';

let cards;
let input;
input = document.querySelector(".find-card__input")
cards = document.querySelector(".activity-card");
cards.innerHTML = "";
for(let i = 0; i < 20; i++){
    generatorCard();
}

input.addEventListener("change", changeInput);


async function generatorCard(){
    const res = await fetch('https://bored.api.lewagon.com/api/activity');
    const data = await res.json();
    const {activity, type} = data;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card__title">
            ${type}
        </div>
        <div class="card__description">
            ${activity}
        </div>
    `;
    cards.appendChild(card);
}

function changeInput(){
    for(let item of cards.childNodes){
        if(item.innerHTML.includes(input.value) && input.value != ""){
            item.classList.add("card_active");
            continue;
        }
        item.classList.remove("card_active");
    }
}