'use strict';

const Book = function(title, author){
    this.author = author;
    this.title = title
    this.isRead = false;
}

Book.prototype.read = function() {
    this.isRead = true;
}
class BookClass{
    isRead = false;

    constructor(title, author){
        this.author = author;
        this.title = title;
    }

    read() {
        this.isRead = true;
    }
}

const lotr1 =  new BookClass('lotr','Tolkien');
const lotr2 =  new Book('lotr','Tolkien');
console.log(lotr1.__proto__);
console.log(lotr2.__proto__);
