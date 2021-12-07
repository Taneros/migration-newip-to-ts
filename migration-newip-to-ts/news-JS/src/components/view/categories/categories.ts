import './categories.css';
import { Options } from '../../interfaces/intefaces';
// import { Sources } from '../sources/sources';

export class Category {

  draw(data: Array<Options>) {

    const newsCategory = document.querySelector('#newsCategory') as HTMLTemplateElement;
    const categoryFragment = document.createDocumentFragment() as DocumentFragment;
    const uniqueCategories: Set<string> = new Set();

    data.forEach((item) => {
      uniqueCategories.add(item.category);
    });

    Array.from(uniqueCategories).forEach((item) => {
      const categoryClone = newsCategory.content.cloneNode(true) as DocumentFragment;
      const categoryLabel = categoryClone.querySelector('.category__item > label') as HTMLElement;
      categoryLabel.textContent = item;
      categoryLabel.setAttribute('for', item);
      const categoryInput = categoryClone.querySelector('.category__item > input') as HTMLElement;
      categoryInput.setAttribute('id', item);
      categoryFragment.append(categoryClone);
    });
    const category = document.querySelector('.category') as HTMLElement;
    category.append(categoryFragment);
    // console.log(uniqueCategories);

  }

  isChecked() {

    // const inputs = document.querySelectorAll('.category__item > input') as unknown as HTMLCollection
    const category = document.querySelector('.category') as HTMLElement
    const inputs = category.children
    const categoryArr : Array<string> = []

    Array.from(inputs).forEach(input => {
      const inputEl = input.querySelector('input') as HTMLInputElement
      // console.log(inputEl.checked)
      if(inputEl.checked) categoryArr.push(inputEl.id)
    })

    // console.log('cats: ', categoryArr)
    return categoryArr
  }
}

