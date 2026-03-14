class User{
    #task;
    do = ()=>{
        this.#task.run();
    }
    constructor(task){
        this.#task = task;
    }
}

class Task{
    run(){
        console.log('Привет мир');
    }
}

const task1 = new Task();
task1.run();
const user1 = new User(task1);
user1.do();
