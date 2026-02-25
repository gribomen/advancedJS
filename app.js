'use strict';

class Enemy {
    health;
    constructor(health){
        this.health = health;
    }

    getDemage(damage){
        if(damage < this.health){
            this.health = this.health - damage;
            console.log(this.health);
            return;
        }

        this.health = 0;
    }
}

class Sword {
    #damage;
    constructor(damage){
        this.#damage = damage;
    }

    strike(enemy){
        enemy.getDemage(this.#damage);
    }
}

class Orc extends Enemy{
    constructor(health){
        super(health);
    }

    getDemage(damage){
        if(Math.random() > 0.5){
            if(this.health> damage){
                this.health = this.health - damage;
            }else{
                this.health = 0;
            }
            console.log(this.health);
            return;
        }
        console.log(this.health);
    }
}

const enemy1 = new Orc(10);
const sword = new Sword(6)
sword.strike(enemy1);
sword.strike(enemy1);
sword.strike(enemy1);
sword.strike(enemy1);
sword.strike(enemy1);
sword.strike(enemy1);
sword.strike(enemy1);
sword.strike(enemy1);
sword.strike(enemy1);
sword.strike(enemy1);
sword.strike(enemy1);