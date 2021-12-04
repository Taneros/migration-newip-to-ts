import News from './news/news';
import Sources from './sources/sources';

interface IData {
  status: string,
  sources: Array<[
      {
          id: string,
          name: string,
          description: string,
          url: string,
          category: string,
          language: string,
          country: string
      },]>
}

interface IDataArt {
  status: string,
  totalResults: number,
  articles: Array<[
      {
          source: {
              id: string,
              name: string
          },
          author: string,
          title: string,
          description: string,
          url: string,
          urlToImage: string,
          publishedAt: string,
          content: string
      }]>
}


export class AppView {
  
  news : {draw()}
  sources : {draw()}

  constructor() {
    
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data : IDataArt) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IData) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
