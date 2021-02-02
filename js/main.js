let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;

const contanier = document.querySelector('.latest__slider-contanier');
const track = document.querySelector('.latest__slider-track');
const items = document.querySelectorAll('.latest__slider-item');

const btnPrev = document.querySelector('.latest__slider-btn__prev');
const btnNext = document.querySelector('.latest__slider-btn__next');

const itemsCount = items.length;

const itemWidth = contanier.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.width = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth

    position -= itemsLeft > slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft > slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= - (itemsCount - slidesToShow) * itemWidth;
    
   
};

checkBtns();
