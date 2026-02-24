'use strict';

class User {
    #login;
    #_password;

    #getPassword(){
        return this.#password;
    }

    constructor(login, password){
        this.#login = login;
        this.#password = password;
    }

    set #password(pass){
        this.#_password = pass.split('').reverse().join('');
    }

    get #password(){
        return this.#_password.split('').reverse().join('');
    }

    get login(){
        return this.#login;
    }

    verificationPassword(password){
        return this.#password == password;
    }

    changePassword(lastPassword, newPassword){
        if(this.verificationPassword(lastPassword)){
            this.#password = newPassword;
            return true;
        }
        return false;
    }
}

const user1 = new User( "slava","123");

console.log(user1.verificationPassword("123"));
console.log(user1.verificationPassword("137"));
user1.changePassword("123","137");
console.log(user1.verificationPassword("123"));
console.log(user1.verificationPassword("137"));