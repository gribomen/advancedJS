'use strict';

const Book = function(title, author){
    this.author = author;
    this.title = title
    this.isRead = false;
}

Book.prototype.read = function() {
    this.isRead = true;
}

const lordOftheRing = new Book ('Load of the ring', 'Tolkien');
lordOftheRing.read();

console.log(lordOftheRing);

console.log(lordOftheRing.__proto__);
console.log(lordOftheRing.__proto__ === Book.prototype);
console.log(Book.prototype.isPrototypeOf(lordOftheRing));
console.log(Book.prototype.isPrototypeOf(Book));
