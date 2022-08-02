var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
});
$(".btn_add").click(function() {
    swiper.appendSlide([
        '<div class="swiper-slide">' +
            '<div class="write_box_wrap">' +
                '<div class="tab_enroll">' +
                    '<div class="btn_wrap">' +
                        '<button class="btn_line round">매출</button>' +
                        '<button class="btn_line round select">매입</button>' +
                    '</div>' +
                '</div>' +
                '<div class="form_wrap">' +
                    '<form>' +
                        '<fieldset>' +
                            '<ul class="list_input">' +
                                '<li class="input_wrap">' +
                                    '<label class="tit_input">날짜</label>' +
                                    '<input class="line" type="date" placeholder="" value="2020.10.3">' +
                                '</li>' +
                                '<li class="input_wrap">' +
                                    '<label class="tit_input">거래처</label>' +
                                    '<input class="line" type="text" placeholder="거래처를 입력하세요." value="">' +
                                '</li>' +
                                '<li class="input_wrap Po_r">' +
                                    '<label class="tit_input">품목</label>' +
                                    '<input class="line" type="text" placeholder="품목을 입력하세요." value="">' +
                                    '<a class="btn_line_input" href="/stock/">재고조회</a>' +
                                '</li>' +
                                '<li class="input_wrap">' +
                                    '<label class="tit_input">규격</label>' +
                                    '<input class="line" type="text" placeholder="규격를 입력하세요." value="">' +
                                '</li>' +
                                '<li class="input_wrap">' +
                                    '<label class="tit_input">수량</label>' +
                                    '<input class="line" type="number" placeholder="수량을 입력하세요." value="">' +
                                '</li>' +
                                '<li class="input_wrap">' +
                                    '<label class="tit_input">단위</label>' +
                                    '<input class="line" type="text" placeholder="단위를 입력하세요." value="">' +
                                '</li>' +
                                '<li class="input_wrap">' +
                                    '<label class="tit_input">단가</label>' +
                                    '<input class="line" type="number" placeholder="단가를 입력하세요." value="">' +
                                '</li>' +
                                '<li class="input_wrap">' +
                                    '<label class="tit_input">합계</label>' +
                                    '<input class="line" type="number" placeholder="합계를 입력하세요." value="">' +
                                '</li>' +
                            '</ul>' +
                        '</fieldset>' +
                    '</form>' +
                '</div>' +
            '</div>' +
        '</div>'
    ]);
    swiper.slideTo($(".swiper-pagination-total").text());
});