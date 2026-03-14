
export default class User{
    #task;
    do = ()=>{
        this.#task.run();
    }
    constructor(task){
        this.#task = task;
    }
}