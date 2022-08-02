var min_year = 1980;
var year_swiper;
var month_swiper;

$(document).ready(function () {
    var date = new Date();

    $(".tit_page").data("year", date.getFullYear());
    $(".tit_page").data("year_index", date.getFullYear() - min_year);
    $(".tit_page").data("month", date.getMonth()+1);
    $(".tit_page").data("month_index", date.getMonth());

    $(".tit_month").text(date.getMonth()+1);
});


$(".tit_page").click(function () {
    $('.pop_back.date').show();
    $(".swiper-wrapper").empty();

    set_year_slide();
    set_month_slide();

    year_swiper = new Swiper('.year', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        direction: 'vertical',
        centeredSlides: true,
        slideToClickedSlide: true,
    });

    month_swiper = new Swiper('.month', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        direction: 'vertical',
        centeredSlides: true,
        slideToClickedSlide: true,
    });

    year_swiper.slideTo($(".tit_page").data("year_index"));
    month_swiper.slideTo($(".tit_page").data("month_index"));
});


$(".btn_confirm").click(function () {
    var $sel_year = $(".year_slides").find(".swiper-slide-active");
    var $sel_month = $(".month_slides").find(".swiper-slide-active");

    $(".tit_page").data("year", $sel_year.data("year"));
    $(".tit_page").data("year_index", $sel_year.data("index"));
    $(".tit_page").data("month", $sel_month.data("month"));
    $(".tit_page").data("month_index", $sel_month.data("index"));

    $(".tit_month").text($sel_month.data("month"));

    year_swiper.destroy();
    month_swiper.destroy();

    $('.pop_back.date').hide();
});

$(".btn_close").click(function () {
    year_swiper.destroy();
    month_swiper.destroy();
    $('.pop_back.date').hide();
});


function set_year_slide() {
    var max_year = new Date().getFullYear();

    for (var year = min_year, index = 0; year <= max_year; year++, index++) {
        $(".year_slides").append("<div class='year_slide swiper-slide' data-year='" + year + "' data-index='" + index + "'> " + year + "년</div > ");
    }
}

function set_month_slide() {
    for (var month = 1, index = 0; month <= 12; month++, index++) {
        $(".month_slides").append("<div class='month_slide swiper-slide' data-month='" + month + "' data-index='" + index + "'> " + month + "월</div > ");
    }
}