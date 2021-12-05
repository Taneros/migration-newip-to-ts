import {Loader} from './loader';

export class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'cb6ef4c8ae3d446b81779e64da70b5e3',
    });
  }
}

// export default AppLoader;
