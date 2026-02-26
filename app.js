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
        super(amount)
    }
    
}

class hourBilling extends Billing{
    
    constructor(amount,hours){
        super(amount);
        this.hours = hours;
    }

    calculateTotal(){
        return this.amount*this.hours;
    }
}

class itemBilling extends Billing{
    
    constructor(amount,element){
        super(amount);
        this.element = element;
    }

    calculateTotal(){
        return this.amount * this.element;
    }
}