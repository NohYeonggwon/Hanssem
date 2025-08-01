$(function () {
    /* philosophy bgsvg */
    var $svg = $('#dbew').drawsvg(),
        startScroll = 1000,
        endScroll = 1600;

    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        if (scrollTop >= startScroll && scrollTop <= endScroll) {
            var progress1 = (scrollTop - startScroll) / (endScroll - startScroll);
            $svg.drawsvg('progress', progress1);
        }
    });

    /* Series list button */
    $(document).ready(function () {
        // 슬라이더 초기화
        var mySwiper = new Swiper('.mySwiper', {
            // 옵션 설정
            slidesPerView: 1,
            spaceBetween: 40,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: '.series_slider .swiper-button-next',
                prevEl: '.series_slider .swiper-button-prev',
            },
            on: {
                slideChangeTransitionEnd: function () {
                    // 현재 활성화된 슬라이드 인덱스 가져오기
                    var activeIndex = this.activeIndex;

                    // 모든 버튼에서 'on' 클래스 제거
                    $('.series_list .btn').removeClass('on');

                    // 현재 활성화된 슬라이드와 연결된 버튼에만 'on' 클래스 추가
                    $('.series_list .btn').eq(activeIndex).addClass('on');
                }
            }
        });


        /* // 각각의 버튼 클릭 이벤트 처리
        $('.series_list .btn').click(function () {
            var currentIndex = $(this).parent().index();

            mySwiper.slideTo(currentIndex);

            $('.series_list .btn').removeClass('on');

            $(this).addClass('on');
        }); */

        // 각각의 버튼 마우스엔터 이벤트 처리
        $('.series_list .btn').mouseenter(function () {
            var currentIndex = $(this).parent().index();

            mySwiper.slideTo(currentIndex);

            $('.series_list .btn').removeClass('on');

            $(this).addClass('on');
        });
    });

    /* Interior */
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var win_h = $(window).height();
        var cont1_top = $('.cont1').offset().top;
        var cont2_top = $('.cont2').offset().top;

        $('.itInner>div').each(function () {
            var box_top = $(this).offset().top;
            if (scrollPosition >= box_top - 300) {
                $(this).addClass('on')
            }
            else if (scrollPosition < cont1_top - win_h && scrollPosition < cont2_top - win_h) {
                $(this).removeClass('on')
            }
        });
    });

    /* spaceImg bgsvg */
    $(document).ready(function () {
        var windowWidth = $(window).width();

        $(window).scroll(function () {
            var scrollPosition = $(window).scrollTop();

            if (windowWidth >= 1660) {
                if (scrollPosition > 6600) {
                    $(".spaceInner .bg").addClass("on");
                } else {
                    $(".spaceInner .bg").removeClass("on");
                }
            } else if (windowWidth >= 1024) {
                if (scrollPosition > 7500) {
                    $(".spaceInner .bg").addClass("on");
                } else {
                    $(".spaceInner .bg").removeClass("on");
                }
            } else if (windowWidth >= 768) {
                if (scrollPosition > 8200) {
                    $(".spaceInner .bg").addClass("on");
                } else {
                    $(".spaceInner .bg").removeClass("on");
                }
            } else { // windowWidth < 768
                if (scrollPosition > 6600) {
                    $(".spaceInner .bg").addClass("on");
                } else {
                    $(".spaceInner .bg").removeClass("on");
                }
            }
        });
    });
});