$(function () {
    /* sub - vision */
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var win_h = $(window).height();
        var vision_top = $('#vision').offset().top;
        console.log(scrollPosition);
        if (scrollPosition >= vision_top - 400) {
            $(".visionInner").addClass("active");
            $(".vision_list_div").addClass("active");
        }
        else if (scrollPosition < vision_top - win_h) {
            $(".visionInner").removeClass('active')
            $(".vision_list_div").removeClass('active')
        }
    });
});