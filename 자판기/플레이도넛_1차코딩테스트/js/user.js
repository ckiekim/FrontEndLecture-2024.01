$(function () {

    create_menu_list(JSON.parse(sessionStorage.getItem("menu_json")));

    $('#product_manage').click(function(){

        $('#menu_list > li').each(function(){
            let menu_name = $(this).find(".menu_name").text();
            let menu_price = $(this).find(".menu_price").text().slice(0,-1);
            let menu_count = $(this).find(".menu_count").text();

            if(menu_name == "") {
                return false;
            }

            create_menu_json(menu_name, menu_price, menu_count)
        })

    })

    // 사용자 선택
    $(".user_info").click(function () {

        let target = $(this);

        $(".user_info").removeClass("active");
        target.addClass("active");

        $("#input_money_btn").removeClass("disabled");
        $("#machine_money_btn").removeClass("disabled");
    });

    // 1000단위 유효성 검사
    $("#input_money").on("blur", function () {
        if (parseInt($(this).val()) % 1000 > 0) {
            alert("1000단위로 넣어주세요.")
            $(this).val("");
        }
    })

    // 사용자 선택 유효성 검사
    $("#input_money").on("click", function () {
        if($(".active").length == 0){
            alert("이용자를 선택해주세요.")
            $(this).val("");
            $("#input_money").blur();
        }
    })
    
    // 금액 투입
    $("#input_money_btn").click(function () {
        let user_money = strToNum($(".active strong").text());
        let input_money = parseInt($("#input_money").val());
        let machine_money = parseInt($("#machine_money").text());

        if (user_money < 1000) {
            alert("소지금이 부족합니다!");
            $("#input_money").val("");
            return false;
        }else if(user_money < input_money ){
            alert("소지금을 확인해주세요!")
            $("#input_money").val(user_money);
            return false;
        }

        if ( input_money < 0){
            alert("투입금을 확인해주세요!")
            $("#input_money").val("");
            return false;
        }

        machine_money = input_money + machine_money;
        user_money = user_money - input_money;

        // 삽입
        $("#input_money").val("");
        $(".active strong").text(numToStr(user_money));
        $("#machine_money").text(machine_money + " 원");

    });

    // 잔액 반환
    $("#machine_money_btn").click(function() {

        let user_money = strToNum($(".active strong").text());
        let machine_money = parseInt($("#machine_money").text());


        $(".active strong").text(numToStr(user_money + machine_money));
        $("#machine_money").text("0 원");

        $(".active").removeClass("active");

        $("#input_money_btn").addClass("disabled");
        $("#machine_money_btn").addClass("disabled");
    });

    // 메뉴 클릭
    $(".menu_info").click(function () {

        let select_menu = $(this);
        
        let user_name = $(".active span").text();
        let menu_name = select_menu.find(".menu_name").text();
        let menu_price = select_menu.find(".menu_price").text();
        let menu_count = select_menu.find(".menu_count").text();
        let machine_money = parseInt($("#machine_money").text());
        
        // 최소금액 추출
        let minPrice = Math.min.apply(null, $(".menu_price").text().slice(0, -1).split('원').map(Number) );

        // 자판기 잔액
        if ((minPrice > machine_money) || (parseInt(menu_price) > machine_money )) {
            alert("잔액이 부족합니다!");
            return false;
        } 

        // 잔액
        machine_money = machine_money - parseInt(menu_price);
        $("#machine_money").text(machine_money + " 원");
    
        // 수량 없으면 디스에이블
        if (menu_count == 1) {
            select_menu.addClass('disabled')
        }

        select_menu.find(".menu_count").text(parseInt(menu_count) - 1);

        let select_order_list = $("#order_list");

        select_order_list.append('<li class="bg-white d-flex flex-row align-items-center justify-content-between shadow-sm px-4 py-3 mb-2"><span class="user_name">' + user_name + '</span><strong>' + menu_name + '</strong><span>' + menu_price + '</span><span>구매</span></li>');

        create_order_json(user_name, menu_name, menu_price);
        
    });
 
    // 재시작 클릭
    $("#reset_btn").click(function() {
        
        $(".user_money").each(function(index, item) {
            item.textContent = numToStr(strToNum(item.textContent)+10000);
        })

        $(".active").removeClass("active");

        $("#input_money_btn").addClass("disabled");
        $("#machine_money_btn").addClass("disabled");

        $("#order_list").children().remove();
    })


});

// 숫자를 문자로 변환 
// 숫자에 , 생성
function numToStr(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 문자를 숫자로 변환
// 문자의 , 제거
function strToNum(price) {
    return parseInt(price.replace(/,/g, ''));
}


// 주문내역 json
function create_order_json(user_name, menu_name, menu_price) {
    let order_json = {};
    var order_time = new Date();

    order_time = order_time.YYYYMMDDHHMMSS();

    order_json[order_time] = {
        "order_time": order_time,
        "user_name": user_name,
        "menu_name": menu_name,
        "menu_price": menu_price
    }

    if (sessionStorage.getItem("order_json") != null) {
        order_json = Object.assign(JSON.parse(sessionStorage.getItem("order_json")), order_json);
    }

    sessionStorage.setItem("order_json", JSON.stringify(order_json));

    return order_json;
}

Date.prototype.YYYYMMDDHHMMSS = function(){

    let yyyy = this.getFullYear().toString();
    let MM = pad(this.getMonth() + 1,2);
    let dd = pad(this.getDate(), 2);
    let hh = pad(this.getHours(), 2);
    let mm = pad(this.getMinutes(), 2);
    let ss = pad(this.getSeconds(), 2);
    return yyyy+MM+dd+hh+mm+ss;
}

function pad(num, len){
    let str = ''+num;
    while (str.length < len) {
        str = '0' + str;
    }
    return str;
}



