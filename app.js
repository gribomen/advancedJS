'use strict';

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

class Troll extends Enemy{

}

const enemy1 = new Orc(10);
const sword1 = new Sword(3);
const troll1 = new Troll(20);
sword1.strike(enemy1);
sword1.strike(enemy1);
sword1.strike(enemy1);
sword1.strike(troll1);
sword1.strike(troll1);
sword1.strike(troll1);
// ad-hock полиморфизм
'2' + '4'
2 + 4