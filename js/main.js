let perView = 3;

const swiper = new Swiper('.swiper', {

    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    variableWidth: true,
    breakpoints: {

        830: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    },
    navigation: {
        nextEl: '.new__button-next',
        prevEl: '.new__button-prev',
    },
    pagination: {
        el: '.new__pagination',
        type: 'custom',
        renderCustom: function(swiper, current, total) {
            const currentPage = current >= 10 ? current : '0' + current;
            const totalPage = total >= 10 ? total : '0' + total
            return `${currentPage} / ${totalPage}`;
        },
    }


});







const slider = $('.recipe__slider');

slider.on('init', function(event, slick, direction) {
    const totalSlides = Math.ceil(slick.slideCount / slick.options.slidesToShow);
    document.querySelector('#totalPag').innerHTML = totalSlides;
});

slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    spaceBetween: 20,
    prevArrow: '.recipe__button-left',
    nextArrow: '.recipe__button-right',
    breakpoints: {
        767: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }

    }
});

slider.on('afterChange', function(event, slick) {
    const currentSlide = Math.ceil(slick.currentSlide / slick.options.slidesToShow) + 1;
    document.querySelector('#currentPag').innerHTML = currentSlide;
});



const menuBtn = document.querySelector('.header__menu-mob');
const menuMobile = document.querySelector('.menu__mobile-info');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});

const selectWrapper = () => {
    const $list = $('.products__list');
    const $input = $('.products__input');
    console.log($list)
    $list.on('click', (event) => {
        console.log(event.target);
        $input.value = event.target.textContent;
        $('.products__mobile').toggleClass('open');
        $list.find('button').removeClass('active')
        $(event.target).addClass('active');
    })

}

$(document).ready(() => {
    selectWrapper();
})
