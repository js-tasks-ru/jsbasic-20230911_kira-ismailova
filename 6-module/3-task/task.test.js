import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.elem = this.createCarouselElement();
    this.addButtonClickListeners();
  }

  createCarouselElement() {
    const carousel = createElement('<div class="carousel"></div>');
    const carouselInner = createElement('<div class="carousel__inner"></div>');

    this.slides.forEach((slide) => {
      const slideElement = createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);

      carouselInner.appendChild(slideElement);
    });

    carousel.appendChild(carouselInner);

    return carousel;
  }

  addButtonClickListeners() {
    const addButton = this.elem.querySelectorAll('.carousel__button');
    addButton.forEach((button, index) => {
      button.addEventListener('click', () => {
        const currentSlide = this.slides[index];
        const customEvent = new CustomEvent('product-add', {
          detail: currentSlide.id,
          bubbles: true
        });
        this.elem.dispatchEvent(customEvent);
      });
    });
  }
}
