const carousel = document.querySelector('.grid-carousel');
const slides = carousel.querySelectorAll('.grid-carousel__item');
const leftButton = carousel.querySelector('.js-left');
const rightButton = carousel.querySelector('.js-right');



const getOrder = (elem) => {
  const styles = getComputedStyle(elem);
  const orderValue = styles.order;
  //turns it into a number instead of string
  const order = parseInt(orderValue);
  return order;
}

const featuredItem = e => {
  if (order == 3) {
    e.classList.add('featured');
  } else {
    e.classList.remove('featured');
  }
}

const moveRight =_=> {
  slides.forEach(function(slide) {
    order = getOrder(slide);

    if (order > 1) {
      slide.style.order = order -= 1;
    } else {
      slide.style.order = 5;
    }

    featuredItem(slide);
  });
}

const moveLeft =_=> {
  slides.forEach(function(slide) {
    order = getOrder(slide);
    
    if (order < slides.length) {
      slide.style.order = order += 1;
    } else {
      slide.style.order = 1;
    }
    
    featuredItem(slide);

  });
}

//Event Listeners
rightButton.addEventListener('click', _ => {
  moveRight();
})

leftButton.addEventListener('click', _ => {
  moveLeft();
})