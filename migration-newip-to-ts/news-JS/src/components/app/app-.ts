import AppController from '../controller/controller';
import { AppView } from '../view/appView';

interface EventNews {
  target: HTMLElement,
  currentTarget: HTMLElement
}



interface IApp {

  getNews : {}

}


class App {
  
  
  constructor() {
    this.controller :  = new AppController();
    this.view = new AppView();
  }



  start() {
    const sources = document.querySelector('.sources') as HTMLElement

    sources.addEventListener('click',

    (e) => this.controller.getNews(e, (data) => this.view.drawNews(data))
    
    );

    this.controller.getSources((data) => this.view.drawSources(data));
  }
}

export default App;
