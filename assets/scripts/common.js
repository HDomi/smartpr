// header navigation menu
$(document).ready(function () {
    
    var no_header = new Array(
        '/history/app', '/history/day_list', '/history/detail', '/history/search', '/history/search_result',
        '/sale/cam', '/sale/cam_edit', '/sale/record', '/sale/record_edit', '/sale/record_start', '/sale/write', '/sale/write_edit', '/sale/write_list',
        '/buy/cam', '/buy/cam_edit', '/buy/record', '/buy/record_edit', '/buy/record_start', '/buy/write', '/buy/write_edit', '/buy/write_list', '/buy/qr',
        '/client/add', '/client/edit', '/client/index', '/client/info',
        '/stock/detail', '/stock/search', '/stock/search_result',
        '/user/info',
    );

    if (no_header.indexOf(window.location.pathname) != -1) {
        $('.main_header').hide();
    }

    // header_nav

        $('.menu_btn_wrap').click(function () {
            $('.header_nav').toggle();
            $('.top_wrap.logo').toggle();
            $('.top_wrap.noti').toggle();
            $('.all_menu_wrap').animate({
                width: 'toggle'
            }, 200, "linear");
            $(this).toggleClass('open_menu');
        });
        //end

    $('.nav_inner li a').filter(function () {
        $('.nav_inner a').removeClass('active');
        return this.href === location.href;
    }).addClass('active');


    // common_tab

    $('.tab_btn').click(function () {
        $('.tab_btn').removeClass('select');
        $('.tab_btn').find('.icon_b').removeClass('select');
        $(this).addClass('select');
        $(this).find('.icon_b').addClass('select');

        var num = $(this).attr('id');
        $('.tab_con').not($('.tab' + num)).hide();
        $('.tab' + num).show();
    });

    $('.tab_wrap button').click(function () {
        $('.tab_wrap button').removeClass('select');
        $(this).addClass('select');
    });

    $('.multi button').click(function () {
        $(this).toggleClass('select');
    });


    $('.tab_wrap .btn_write').click(function () {
        $('.write_wrap').show();
    });

    var w = $('.pa_history .data_graph_wrap .data_col').outerWidth(true);
    var l = $('.pa_history .data_graph_wrap .data_col').length;
    var gw = w * l;

    $('.pa_history .graph_grid').css({width:gw});

    var PT = $('.page_top_wrap').outerHeight();

    $('.main_wrap').css({ paddingTop: PT });


    // ************************ bntton ***************************//

    // common btn

    $('.btn_back').click(function (e) {
        e.preventDefault();
        window.history.back();
    });

    $('.page_top_wrap .btn_close').click(function (e) {
        e.preventDefault();
        window.history.back();
    });

    // record
    $('.pa_record .btn_player').click(function () {
        $(this).toggleClass('ic_stop');
    });

    // history_calendar
    $('.cal_num .box').click(function () {
        location.href = '../history/day_list.html';
    });

    //history_popup
    $('.btn_filter').click(function () {
        $('.pop_back.filter').show();
    });

    $('.btn_date').click(function () {
        $('.pop_back.date').show();
    });

    $('.pop_wrap .btn_close').click(function () {
        $(this).parents('.pop_back').hide();
    });
    $('.2').click(function () {
        $('.pop_back.2').hide();
    });


});

function numberFormat(num) {
    if (!num) {
        return 0;
    }
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}