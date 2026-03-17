import { AbstractView } from "../../common/view.js"
import onChange from "on-change";

export class MainView extends AbstractView{
    
    state = {
        list: [],
        loading:false,
        searchQuery:undefined,
        offset: 0
    };

    constructor(appState){
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle('Поиск книг');
    }

    appStateHook(patch){
        // console.log(patch);
        if(patch === 'favorites'){
            console.log(patch);
        }
    }

    render(){
        const main = document.createElement('div');
        main.innerHTML= `Число книг ${this.appState.favorites.length}`;
        this.app.innerHTML = '';
        this.app.append(main);
        this.appState.favorites.push('Book');
    }

    destroy(){
        const main = document.querySelector('div');
        main.innerHTML = "";
    }
}