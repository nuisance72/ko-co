let perView = 3;

const swiper = new Swiper('.swiper', {

    loop: true,
    slidesPerView: 2,
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
    spaceBetween: 20,
    variableWidth: true,
    navigation: {
        nextEl: '.new__button-next',
        prevEl: '.new__button-prev',
    },
    pagination: {
        el: '.new__pagination',
        clickable: true,
        type: 'custom',
        renderCustom: function(swiper, current, total) {
            const currentPage = document.querySelector('#currentPagination');
            const totalPage = document.querySelector('#totalPagination');
            currentPage.innerHTML = current >= 10 ? current : '0' + current;
            totalPage.innerHTML = total >= 10 ? total : '0' + total;

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
});

slider.on('afterChange', function(event, slick) {
    const currentSlide = Math.ceil(slick.currentSlide / slick.options.slidesToShow) + 1;
    document.querySelector('#currentPag').innerHTML = currentSlide;
});