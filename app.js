'use strict';

let button;
let cards;

window.onload = () => {
    button = document.querySelector(".button-generate");
    cards = document.querySelector(".activity-card");
    button.addEventListener('click',()=>{
        cards.innerHTML = "";
        for(let i = 0; i < 3; i++){
            generatorCard()
        }

    });
}


async function generatorCard(){
    const res = await fetch('https://bored.api.lewagon.com/api/activity');
    const data = await res.json();
    const {activity, type} = data;
    console.log(data);
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

