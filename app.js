'use strict';

class Character{
    #inventory = [];
    #health = 10;
    
    pickItem(item){
        this.#inventory.push(item);
    }

    recieveDamage(damage){
        this.#health -= damage;
    }

}

class DB {
    saveCharacter(){
        localStorage.setItem('char',this);
    }

    loadCharacter(){
        localStorage.setItem('char',this);
    }
}