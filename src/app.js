import { MainView } from "./views/main/main";

 
 class App{
    routes = [
        {patch:"",view: MainView},
        {patch:"#suck",view: MainView},
    ];
    appState = {
        favorites:[]
    };

    constructor(){
        window.addEventListener('hashchange',this.route.bind(this));
        this.route();
    }

    route(){
        if(this.currentView){
            this.currentView.destroy();
        }
        try{
            const view = this.routes.find(r => r.patch == location.hash).view;
            this.currentView = new view(this.appState);
            this.currentView.render();
        }catch(error){
            if(error.name == "TypeError"){
                console.log(`404 Страница не найдена`);
            }
        }


    }
 }

 new App();