import { News } from './news/news';
import { Sources } from './sources/sources';
import { Category } from './categories/categories';
import { IDataArt, IData, Options } from '../interfaces/intefaces';

interface IChannel {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export class AppView {
  news: News;
  sources: Sources;
  categories: Category;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.categories = new Category();
  }

  drawNews(data: IDataArt | undefined) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IData | undefined) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }

  drawSources_(data: Array<IChannel>) {
    this.sources.draw(data);
  }

  drawCategories(data: IData | undefined) {
    const values = data?.sources ? data?.sources : [];
    this.categories.draw(values);
    this.drawSources_(values)
    
  }

  drawClick(data: IData | undefined) {
    const values = data?.sources ? data?.sources : [];
    const categoryArr: Array<string> = this.categories.isChecked();
    const newsChannels: Array<IChannel> = [];

    categoryArr.forEach((item) => {
      values.forEach((channel) => {
        if (item === channel.category) {
          newsChannels.push(channel);
        }
      });
    });

    // console.log(newsChannels);
    this.removeChildren()
    this.drawSources_(newsChannels);
  }

  removeChildren() {
    const sources = document.querySelector('.sources') as HTMLElement;
    while(sources.firstChild) {
      sources.removeChild(sources.firstChild)
    }
  }
}

// export default AppView;
