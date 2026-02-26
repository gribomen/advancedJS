'use strict';

class Billing{
    constructor(amount){
        this.amount = amount;
    }

    calculateTotal(){
        return this.amount;       
    }
}

class fixBilling extends Billing{
    
    constructor(amount){
        super(this,amount)
    }

    calculateTotal(){
        return this.calculateTotal();
    }
}

class hourBilling extends Billing{
    
    constructor(amount,hours){
        super(this,amount);
        this.hours = hours;
    }

    calculateTotal(){
        return this.amount*this.hours;
    }
}

class itemBilling extends Billing{
    
    constructor(amount,element){
        super(this,amount);
        this.element = element;
    }

    calculateTotal(){
        return this.amount * this.element;
    }
}