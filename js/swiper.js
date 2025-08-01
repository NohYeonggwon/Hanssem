$(function () {
    /* Best Swiper */
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 40,
        freeMode: true,
        loop: true,
        navigation: {
            nextEl: ".bestInnner .swiper-button-next",
            prevEl: ".bestInnner .swiper-button-prev"
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 60,
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 18,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        }
    });

    /* Magazine Swiper */
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: "auto",
        spaceBetween: 60,
        centeredSlides: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".mgslider .swiper-button-next",
            prevEl: ".mgslider .swiper-button-prev"
        }
    });
});