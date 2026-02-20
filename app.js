'use strict';

const product = { id: 1, name: 'Bread', count: 1};
const product2 = { id: 2, name: 'Knife', count: 3};

const Product = function({id,name,count}){
    this.id = id;
    this.name = name;
    this.count = count;
}

const Basket =  function(){
    this.products = [];
}

Basket.prototype.addProduct = function(product){
    if(this.products.find(item => item.id == product.id)){
        return;
    }
    this.products.push(product);
}

Basket.prototype.increaseProduct = function (product){
    const currentProduct =  this.products.find( 
        item=> item.id == product.id);
    currentProduct.count++;
}

Basket.prototype.reduceProduct = function (product){
    const currentProduct =  this.products.find( 
        item=> item.id == product.id);
    if(currentProduct.count - 1 == 0){
        this.product.splice(this.products.findIndex(item => item.id == product.id),1);        
    }else{
        currentProduct.count--;
    }
}

const basket =  new Basket();
basket.addProduct(product);
basket.addProduct(product);
basket.addProduct(product2);

basket.increaseProduct(product);
basket.increaseProduct(product);
basket.increaseProduct(product);
basket.increaseProduct(product);

basket.increaseProduct(product2);
basket.increaseProduct(product2);

basket.reduceProduct(product);

basket.reduceProduct(product2);
basket.reduceProduct(product2);
basket.reduceProduct(product2);
basket.reduceProduct(product2);
console.log(basket);