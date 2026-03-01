'use strict';

const header = document.querySelector(".header");
const categoryList = document.createElement("ul");
categoryList.classList.add("categorys");
const nameLi = document.createElement("li");
nameLi.classList.add("categorys__item");
nameLi.innerText ="Категории"; 
categoryList.appendChild(nameLi);
header.appendChild(categoryList);

fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(response => {
            nameLi.addEventListener("click", function(){
                response.forEach(category => {
                    const categoryLi = document.createElement("li");
                    categoryLi.classList.add("categorys__item");
                    categoryLi.innerText = category.slug;
                    categoryList.appendChild(categoryLi);
                });    
            });
        }
    ).catch(error => console.log(error))
  .finally(() => console.log('FINALLY'))

document.addEventListener('click', function(event) {

  if (categoryList.childNodes.length === 1) return;
  const isClickInside = categoryList.contains(event.target);

  if (!isClickInside) {
    categoryList.innerHTML = "";
    categoryList.appendChild(nameLi);
  }
});