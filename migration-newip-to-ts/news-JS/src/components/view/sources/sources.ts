import './sources.css';

interface Info {
  [key:string]: string
}

interface fragmentClone {
  [key: ] : 
}

class Sources {
  draw(data: Array<Info>) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as fragmentClone;

      sourceClone.querySelector('.source__item-name').textContent = item.name;
      sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources').append(fragment);
  }
}

export default Sources;
