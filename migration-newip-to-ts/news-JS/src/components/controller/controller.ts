import { AppLoader } from './appLoader';
import { CallbackType } from '../generics/callback-type';
import { IDataArt, IData } from '../interfaces/intefaces';

type callbackFunction = (data?: IData) => void;

export class AppController extends AppLoader {
  getSources(callback: callbackFunction) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: CallbackType<IDataArt>) {
    // let target: HTMLElement = e.target;
    let target = <HTMLElement>e.target;
    const newsContainer = <HTMLElement>e.currentTarget;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = <string>target.getAttribute('data-source-id');
        if (newsContainer.getAttribute('data-source') !== sourceId && sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

// export default AppController;
