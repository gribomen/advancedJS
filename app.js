'use strict';

const contur1 = document.querySelector(".contur1");

for(let i = 0; i < 100; i++){
    const el = document.createElement("div");
    el.innerText = `User id ${i}`;
    el.setAttribute("data-id", i);
    el.classList.add("contur2");
    contur1.append(el);
}

contur1.addEventListener("click",function(event){
    const i = event.target.getAttribute('data-id');
    console.log(`Deleted user ${i}`);
});