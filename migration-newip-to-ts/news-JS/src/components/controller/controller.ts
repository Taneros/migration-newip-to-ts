import AppLoader from './appLoader';

interface EventNews {
  target: HTMLElement,
  currentTarget: HTMLElement
}

class AppController extends AppLoader {
  getSources(callback: () => void) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback,
    );
  }

  getNews(e: EventNews, callback: () => void) {
    // let target: HTMLElement = e.target;
    let { target } : {target: HTMLElement} = e;
    const newsContainer : HTMLElement = e.currentTarget;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId : string | null = target.getAttribute('data-source-id');
        if (newsContainer.getAttribute('data-source') !== sourceId && sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback,
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
