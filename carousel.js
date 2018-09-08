const carousel = document.querySelector('.grid-carousel');
const slides = carousel.querySelectorAll('.grid-carousel__item');
const leftButton = carousel.querySelector('.js-left');
const rightButton = carousel.querySelector('.js-right');

//Event Listeners
rightButton.addEventListener('click', _ => {
  moveRight();
})

const getOrder = (elem) => {
  const styles = getComputedStyle(elem);
  const orderValue = styles.order;
  //turns it into a number instead of string
  const order = parseInt(orderValue);
  return order;
}

const moveRight =_=> {
  slides.forEach(function(slide) {
    order = getOrder(slide);

    if (order < slides.length) {
      slide.style.order = order += 1;
    } else {
      slide.style.order = 1;
    }
  });
}

