'use strict';

async function main() {
    const resUsers = await fetch('https://dummyjson.com/users');
    const users = await resUsers.json();
    console.log(users);
    const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: "jamesd",
            password: "jamesdpass"
        })
    });
    const data = await res.json();
    console.log(data);
}

main();