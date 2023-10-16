export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.createCardElement();
    this.addButtonListener();
  }
  createCardElement() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTop = document.createElement('div');
    cardTop.classList.add('card__top');

    const image = document.createElement('img');
    image.src = `/assets/images/products/${this.product.image}`;
    image.alt = 'product';
    image.classList.add('card__image');

    const price = document.createElement('span');
    price.textContent = `€${this.product.price.toFixed(2)}`;
    price.classList.add('card__price');

    cardTop.appendChild(image);
    cardTop.appendChild(price);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card__body');

    const title = document.createElement('div');
    title.textContent = this.product.name;
    title.classList.add('card__title');

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('card__button');

    const icon = document.createElement('img');
    icon.src = '/assets/images/icons/plus-icon.svg';
    icon.alt = 'icon';

    button.appendChild(icon);

    cardBody.appendChild(title);
    cardBody.appendChild(button);

    card.appendChild(cardTop);
    card.appendChild(cardBody);

    return card;
  }
  addButtonListener() {
    const addButton = this.elem.querySelector('.card__button');
    addButton.addEventListener('click', (event) => {
      event.preventDefault();

      const customEvent = new CustomEvent('product-add', {
        detail: this.product.id,
        bubbles: true
      });

      this.elem.dispatchEvent(customEvent);
    });
  }

}


