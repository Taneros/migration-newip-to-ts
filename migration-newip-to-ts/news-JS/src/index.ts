import {App} from './components/app/app';
import './global.css';

const app = new App();
app.start();

// webpack HMR
// if (module.hot) {
//   module.hot.accept();
//   module.hot.addStatusHandler((status) => {
//     if (status === 'apply') {
//       console.clear();
//     }
//   });
// }
