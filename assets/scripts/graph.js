
function get_month_graph() 
{
    $graph_wrap = $(".graph_wrap").find(".data_graph_wrap");
    $day_wrap = $(".day_wrap").find(".table_wrap");
    $graph_wrap.empty();
    $day_wrap.empty();

    // 월별 순수익 데이터 (예시)
    var data = {
        '7' : -400000,
        '8' : 2400000, 
        '9' : 2100000,
        '10' : 2300000,
        '11' : 2300000,
    }
    
    var max = Object.values(data).reduce(function(pre, cur) {
        return pre > cur? pre : cur;
    });
    var min = Object.values(data).reduce(function(pre, cur) {
        return pre < cur? pre : cur;
    });

    var diff;
    var bottom;
    var top;
    
    // 그래프, 선의 위치를 양수/음수의 최대/최소 비율에 따라 조정
    if (min >= 0) {
        diff = max;
        bottom = 10;
        top = 90;
    } else if (max <= 0) {
        diff = Math.abs(min);
        bottom = 90;
        top = 10;        
    } else {
        diff = max - min;
        bottom = 80 * Math.abs(min) / diff + 10;
        top = 80 * max / diff + 10;
    }

    $(".graph_wrap").find(".graph_line").css('top', top+'%');
    $(".graph_wrap").find(".graph_zero").css('top', top-5+'%');

    $.each(data, function(month, amount) {
        var height = Math.abs(amount) / diff * 80;
        var today = month == new Date().getMonth()+1? 'today' : '';

        if (amount > 0) {
            $graph_wrap.append(
                '<li class="data_col '+today+'">'+
                '<div class="data_bar plus" style="bottom:'+bottom+'%;height:'+height+'%"></div>'+
                '</li>'
            );
        } else {
            $graph_wrap.append(
                '<li class="data_col '+today+'">'+
                '<div class="data_bar minus" style="top:'+top+'%;height:'+height+'%"></div>'+
                '</li>'
            );
        }
        
        $day_wrap.append(
            '<li class="data_col '+today+'">'+month+'월</li>'
        )

        if (today == 'today') {
            return false;
        }
    });

    // 월 순이익 성장률
    var d = new Date();
    var month_price = numberFormat(data[d.getMonth()+1]);
    var month_diff = Math.floor((data[d.getMonth()+1] - data[d.getMonth()]) / Math.abs(data[d.getMonth()]) * 100);
    var pos;

    if (month_diff == 0) {
        pos = "equal";
    } else if (month_diff > 0) {
        pos = "plus";
    } else {
        pos = "minus";
    }

    $(".benefit_wrap.month").find(".benefit_num").text(month_price);
    $(".benefit_wrap.month").find(".benefit_label").find("span").text(month_diff+'%');
    $(".benefit_wrap.month").find(".benefit_label").addClass(pos);
}

function get_day_graph() 
{
    $graph_wrap = $(".graph_wrap.day").find(".data_graph_wrap");
    $day_wrap = $(".day_wrap").find("ul");
    $graph_wrap.empty();
    $day_wrap.empty();

    // 일별 금액 데이터 (예시)
    var data = {
        '2020-11-01' : -1000,
        '2020-11-02' : 1000,
        '2020-11-03' : 2000,
        '2020-11-04' : 0,
        '2020-11-05' : 0,
        '2020-11-06' : 0,
        '2020-11-07' : 0,
        '2020-11-08' : 0,
        '2020-11-09' : 0,
        '2020-11-10' : 0,
        '2020-11-11' : 0,
        '2020-11-12' : 0,
        '2020-11-13' : 0,
        '2020-11-14' : 0,
        '2020-11-15' : 0,
        '2020-11-16' : 0,
        '2020-11-17' : 0,
        '2020-11-18' : 0,
        '2020-11-19' : 0,
        '2020-11-20' : 0,
        '2020-11-21' : 0,
        '2020-11-22' : 0,
        '2020-11-23' : 0,
        '2020-11-24' : 0,
        '2020-11-25' : 0,
        '2020-11-26' : 0,
        '2020-11-27' : 0,
        '2020-11-28' : 0,
        '2020-11-29' : 0,
        '2020-11-30' : 0,
    }
    
    var max = Object.values(data).reduce(function(pre, cur) {
        return pre > cur? pre : cur;
    });
    var min = Object.values(data).reduce(function(pre, cur) {
        return pre < cur? pre : cur;
    });

    var diff;
    var bottom;
    var top;
    
    // 그래프, 선의 위치를 양수/음수의 최대/최소 비율에 따라 조정
    if (min >= 0) {
        diff = max;
        bottom = 10;
        top = 90;
    } else if (max <= 0) {
        diff = Math.abs(min);
        bottom = 90;
        top = 10;        
    } else {
        diff = max - min;
        bottom = 80 * Math.abs(min) / diff + 10;
        top = 80 * max / diff + 10;
    }

    $(".graph_wrap").find(".graph_line").css('top', top+'%').css('width', '100%');
    $(".graph_wrap").find(".graph_zero").css('top', top-5+'%');

    var week_list = ['일', '월', '화', '수', '목', '금', '토'];

    $.each(data, function(date, amount) {
        var d = new Date(date)
        var height = Math.abs(amount) / diff * 80;
        var today = d.getDate() == new Date().getDate()? 'today' : '';

        var week = week_list[d.getDay()];
        var day = d.getDate();
        var today_price = '';

        var pos;
        var style;

        if (amount == 0) {
            pos = "equal";
            style = 'bottom:'+bottom+'%;height:'+height+'%';
        } else if (amount > 0) {
            pos = "plus";
            style = 'bottom:'+bottom+'%;height:'+height+'%';
        } else {
            pos = "minus";
            style = 'top:'+top+'%;height:'+height+'%';
        }

        if (today == 'today') {
            week = '오늘';
            today_price = '<span class="graph_today '+pos+'">'+numberFormat(amount)+'</span>'
        }

        $graph_wrap.append(
            '<li class="data_col '+today+'">'+
            today_price+
            '<div class="data_bar '+pos+'" style="'+style+'"></div>'+
            '</li>'
        );
        
        $day_wrap.append(
            '<li class="data_col '+today+'" style="width:37.5px">'+
            '<span class="font_b">'+day+'</span>'+week+
            '</li>'
        )

        if (today == 'today') {
            return false;
        }
    });
}