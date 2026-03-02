'use strict';

async function getProducts(){
    const productsResponse = await fetch('https://dummyjson/products');
    const {products} = await productsResponse.json();
    console.log(products);

    const productResponse = await fetch('https://dummyjson/products/' + products[0].id );
    const product = await productResponse.json();
    console.log(product);
}

getProducts();
console.log('End');