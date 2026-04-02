'use strict';

function Hero (param){
    this.species = param.species;
    this.name = param.name;
    this.language = param.language;
}

Hero.prototype.talk= function(){
    console.log(`Я ${this.name} и говорю на ${this.language}`);
}

const Orc = function (paramHero, weapon){
    Hero.call(this,paramHero);
    this.weapon = weapon;
};

Orc.prototype.talk = Hero.prototype.talk;

Orc.prototype.hit = function(){
    console.log(` Я бью ${this.weapon}`); 
}  

const Elf = function (paramHero,spell){
    Hero.call(this,paramHero);
    this.spell = spell;
};

Elf.prototype.talk = Hero.prototype.talk;

Elf.prototype.castSpell= function (){
    console.log(`Кастую заклинание ${this.spell}`);
}

const orc = new Orc({species: "орк", name: "Болг", language:"Гундабадский"},"топор");
const elf = new Elf({species: "эльф", name: "Леголайз", language:"Валарский"},"огненный шар")
console.log(orc);
console.log(elf);
elf.castSpell();