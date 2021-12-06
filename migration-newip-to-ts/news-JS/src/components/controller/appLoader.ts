import {Loader} from './loader';

export class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: 'cb6ef4c8ae3d446b81779e64da70b5e3',
    });
  }
}

// export default AppLoader;
