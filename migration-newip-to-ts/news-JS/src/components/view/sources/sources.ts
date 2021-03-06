import './sources.css';
import { IChannel } from '../../interfaces/intefaces';

export class Sources {
  draw(data: Array<IChannel>) {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
      const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
      sourceItemName.textContent = item.name;
      const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
      sourceItem.setAttribute('data-source-id', item.id);
      fragment.append(sourceClone);
    });
    const sources = document.querySelector('.sources') as HTMLElement;
    sources.append(fragment);

  }
}
