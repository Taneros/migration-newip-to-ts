import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';
import { overay } from '../view/overlay/overlay';

export class App {
  controller: AppController;
  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const sources = document.querySelector('.sources') as HTMLElement;
    const closeOverlay = document.querySelector('.closebtn') as HTMLElement;
    closeOverlay.addEventListener('click', () => {
      sources.style.display = 'flex'
      overay.closeNav()
    })
    sources.addEventListener('click', (e: Event) => {
      // console.log(e.target)
      overay.openNav()
      this.controller.getNews(e, (data) => this.view.drawNews(data))}
      );
    const category = document.querySelector('.category') as HTMLElement;
    category.addEventListener('click', (e: Event) => {
      // console.log(e)
      this.controller.getSources((data) => this.view.drawClick(data));
    })
    this.controller.getSources((data) => this.view.drawCategories(data));
  }
}

// export default App;
