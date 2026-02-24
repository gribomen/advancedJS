'use strice'
class Car{
    #_mark;
    #_model;
    #_mileage;
    
    constructor(mark,model,mileage){
        this.#_mark = mark;
        this.#_model = model;
        this.#_mileage = mileage;
    }

    get mileage (){
        return this.#_mileage;
    }

    set mileage (mileage){
        mileage ?  this.#_mileage = mileage : false; 
    }

    info(){
        return `Марка ${this.#_mark}, модель ${this.#_model}, пробег ${this.#_mileage}`
    }
}

const car1 = new Car ("BMW", "JX-3","200");
car1.mileage = 400;
console.log(car1.mileage);
console.log(car1.info());