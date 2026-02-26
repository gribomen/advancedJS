'use strict';

class Person{

    constructor(species,name,language){
        this.species = species;
        this.name = name;
        this.language = language;
    }

    talk(){
        return `Меня зовут ${this.name}, говорю на ${this.language} языке.`;
    }
}

class Orc extends Person{

    constructor(species,name,language,weopean){
        super(species,name,language);
        this.weopean = weopean;
    }

    talk(){
        return `Меня зовут ${this.name}, говорю на ${this.language} языке. Я обладаю ${this.weopean}`;
    }

    hit(person){
        return `Бью ${person.name} оружеем ${this.weopean}`;
    }
   
}

class Elf extends Person{

    talk(){
        return `Меня зовут ${this.name}, говорю на ${this.language} языке. Я знаю заклинание ${this.spell}`;
    }
    constructor(species,name,language,spell){
        super(species,name,language);
        this.spell = spell;
    }

    castSpell(){
        return `Кастую заклинание ${this.spell}`;
    }
}

const orc = new Orc("орк","Болг","мордорский","топор орка");
const elf = new Elf("эльф","Гондалин","эльфийский","шар света");

console.log(orc);
console.log(orc.hit(elf));
console.log(orc.talk());
console.log(elf);
console.log(elf.talk());
console.log(elf.castSpell());


