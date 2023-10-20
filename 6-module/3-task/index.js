import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.elem = this.createCarouselElement();
    this.addButtonClickListeners();
    this.toggleArrowVisibility();
  }

  createCarouselElement() {
    const elem = createElement('<div class="carousel"></div>');
    const elemInner = createElement('<div class="carousel__inner"></div>');

    const prevButton = createElement(`
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `);

    const nextButton = createElement(`
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
    `);

    this.slides.forEach((slide) => {
      const slideElement = createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);

      elemInner.appendChild(slideElement);
    });

    elemInner.appendChild(prevButton);
    elemInner.appendChild(nextButton);
    elem.appendChild(elemInner);

    return elem;
  }

  addButtonClickListeners() {
    const prevButton = this.elem.querySelector('.carousel__arrow_left');
    const nextButton = this.elem.querySelector('.carousel__arrow_right');

    prevButton.addEventListener('click', () => {
      this.slideToPrevious();
    });

    nextButton.addEventListener('click', () => {
      this.slideToNext();
    });

    const addButtonList = this.elem.querySelectorAll('.carousel__button');
    addButtonList.forEach((addButton) => {
      addButton.addEventListener('click', (event) => {
        const currentSlide = this.slides[this.currentSlideIndex];
        const customEvent = new CustomEvent('product-add', {
          detail: currentSlide.id,
          bubbles: true
        });
        this.elem.dispatchEvent(customEvent);
      });
    });
  }

  slideToPrevious() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.slideCarousel();
      this.toggleArrowVisibility();
    }
  }

  slideToNext() {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
      this.slideCarousel();
      this.toggleArrowVisibility();
    }
  }

  slideCarousel() {
    const elemInner = this.elem.querySelector('.carousel__inner');
    const slideWidth = this.elem.querySelector('.carousel__slide').offsetWidth;
    elemInner.style.transform = `translateX(${-this.currentSlideIndex * slideWidth}px)`;
  }

  toggleArrowVisibility() {
    const prevButton = this.elem.querySelector('.carousel__arrow_left');
    const nextButton = this.elem.querySelector('.carousel__arrow_right');

    prevButton.style.display = this.currentSlideIndex === 0 ? 'none' : 'flex';
    nextButton.style.display = this.currentSlideIndex === this.slides.length - 1 ? 'none' : 'flex';
  }
}
