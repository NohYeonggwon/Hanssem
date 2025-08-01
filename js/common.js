$(function () {

    /* nav open <-> close */
    $('#openBtn_icon').on('click', function () {
        $('.navInner').stop().animate({ right: 0 }, 350);
        $('.backdrop').addClass('menu_on');
        $('.headerInner').addClass('bg');
    });

    $('#closeBtn_icon').on('click', function () {
        $('.navInner').stop().animate({ right: '-100%' }, 350);
        $('.backdrop').removeClass('menu_on');
        $('.headerInner').removeClass('bg');
    });

    $(window).on('resize', function () {
        var windowWidth = $(window).width();
        if (windowWidth >= 1660) {
            $('.backdrop').removeClass('menu_on');
            $('.headerInner').removeClass('bg');
        }
    });

    $('.backdrop').on('click', function () {
        $('#closeBtn_icon').click();
    });

    $('.Btn_icon').on('click', function () {
        var vsb = $(this).find('#openBtn_icon').hasClass('vsb')

        if (vsb == false) {
            $(this).find('#openBtn_icon').addClass('vsb');
            $(this).find('#closeBtn_icon').removeClass('vsb');
        }

        else {
            $(this).find('#closeBtn_icon').addClass('vsb');
            $(this).find('#openBtn_icon').removeClass('vsb');
        }

        return false;
    });
    /* /nav open <-> close */
    $('.navmenu>li>a').on('click', function () {
        var arrow = $(this).find('.arrow');
        var subMenu = $(this).next();

        if (!arrow.hasClass('on')) {
            $('.navmenu>li>a .arrow.on').not(arrow).removeClass('on');
            $('.navmenu>li>a').not($(this)).next().stop().slideUp();

            arrow.addClass('on');
            subMenu.stop().slideDown();
        } else {
            arrow.removeClass('on');
            subMenu.stop().slideUp();
        }

        return false;
    });
    /* /nav svg */

    /* scroll header css */
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > 300) {
            $(".headerInner").addClass("scroll");
        }
        else {
            $(".headerInner").removeClass("scroll");
        }
    });

    /* footer family_site */
    $(".family_site > a").on("click", function () {
        $(this).next().slideToggle(300);
    });

    
});