$(function () {

    create_menu_list(JSON.parse(sessionStorage.getItem("menu_json")));
    // JSON.parse(sessionStorage.getItem("order_json"))

    // 상품 등록 버튼
    $("#setting_btn").click(function () {
        let menu_name = $("#menu_name").val();
        let menu_price = $("#menu_price").val();
        let menu_count = $("#menu_count").val();

        // 유효성 검사
        let checkFg = check_insert_menu(menu_name, menu_price, menu_count);
        if (!(checkFg)) {
            return checkFg;
        }

        create_menu_list(create_menu_json(menu_name, menu_price, menu_count));

        // 초기화
        $("#menu_name").val("");
        $("#menu_price").val("");
        $("#menu_count").val("");
    });


    // 정산 버튼
    $("#result_btn").click(function () {
        let order_json = JSON.parse(sessionStorage.getItem("order_json"))

        let list = [];
        for (keys in order_json) {
            // 판매시간 / 이용자 / 상품이름 / 매출
            //order_time   user_name   menu_name   menu_price

            order_json[keys].판매시간 = order_json[keys].order_time
            order_json[keys].이용자 = order_json[keys].user_name
            order_json[keys].상품이름 = order_json[keys].menu_name
            order_json[keys].매출 = order_json[keys].menu_price

            delete order_json[keys].order_time;
            delete order_json[keys].user_name;
            delete order_json[keys].menu_name;
            delete order_json[keys].menu_price;

            list.push(order_json[keys]);
        }

        exportExcel(list);
    })

    // 정산완료 버튼
    $("#result_suc_btn").click(function () {

        // 초기화
        $('#best_menu').children().remove();
        $('#user_list').children().remove();
        $('#user_rank').children().remove();

        let order_json = JSON.parse(sessionStorage.getItem("order_json"))

        let best_user = {};
        let best_menu = {};

        for (keys in order_json) {
            let user_name = order_json[keys].user_name;
            let menu_name = order_json[keys].menu_name;
            let menu_price = order_json[keys].menu_price;

            $('#user_list').append('<li class="bg-white d-flex flex-row justify-content-between align-items-center shadow-sm px-4 py-3 mb-2"> <div class="w-25 d-flex flex-column align-items-center"><img src="./img/' + user_name + '.png" class="w-50"><span class="pt-2">' + user_name + '</span></div><strong>' + menu_name + '</strong><span>' + menu_price + '</span><span>1</span></li>');

            // 이용자 순위 객체 생성
            if (best_user[user_name] != null) {
                best_user[user_name] += parseInt(menu_price);
            } else {
                best_user[user_name] = parseInt(menu_price);
            }

            // 상품 순위 객체 생성
            if (best_menu[menu_name] != null) {
                best_menu[menu_name] += 1;
            } else {
                best_menu[menu_name] = 1;
            }
        }

        // 이용자
        let rank_best_user = order_best_user(best_user);

        for (keys in rank_best_user) {
            let rank_idx = parseInt(keys) + 1;
            let user_name = rank_best_user[keys].user_name;
            let menu_price = rank_best_user[keys].menu_price;

            $('#user_rank').append('<li class="bg-white d-flex flex-row shadow-sm px-4 py-3 mb-2 align-items-center"><span class="badge bg-secondary me-3">' + rank_idx + '</span><div class="w-25 d-flex flex-column align-items-center me-5"><img src="./img/' + user_name + '.png" class="w-50"><span class="pt-2">' + user_name + '</span></div><span>' + menu_price + '</span></li>');
        }

        // 상품
        let rank_best_menu = order_best_menu(best_menu);

        let max_count = 0;
        for (keys in rank_best_menu) {

            let best_menu = rank_best_menu[keys].best_menu;
            let count = rank_best_menu[keys].count;

            if (max_count <= count) {
                max_count = count;

                $('#best_menu').append('<div class="p-4 border-0 bg-light me-3 d-flex justify-content-around"><strong class="menu_name">' + best_menu + '</strong><span class="menu_count">' + count + '</span></div>');

                update_best_menu(best_menu);
            }
        }
    })

});

// 유효성 검사
function check_insert_menu(menu_name, menu_price, menu_count) {

    if ((menu_name == "") || (menu_price == "") || (menu_count == "")) {
        alert("다시 입력해주세요.")
        return false;
    }
    if ((parseInt(menu_price) < 0) || (parseInt(menu_count) < 0)) {
        alert("수량은 1개 이상 입력해주세요.")
        return false;
    }

    return true;
}


// 상품 정보 JSON 형태로 sessionStorage 저장
function create_menu_json(menu_name, menu_price, menu_count) {

    let menu_json = {};

    menu_json[menu_name] = {
        "menu_name": menu_name,
        "menu_price": menu_price,
        "menu_count": menu_count
    }

    if (sessionStorage.getItem("menu_json") != null) {
        // JSON 병합하기
        menu_json = Object.assign(JSON.parse(sessionStorage.getItem("menu_json")), menu_json);
        if (Object.keys(menu_json).length == 7) {
            delete menu_json[menu_name];
            alert("더이상 추가할 수 없습니다.");
        }

        // 정렬
        menu_json = order_menu_json(menu_json);
    }

    sessionStorage.setItem("menu_json", JSON.stringify(menu_json));

    return menu_json;
}

// 상품 미리보기 생성
function create_menu_list(menu_json) {
    if (menu_json != null && Object.keys(menu_json).length == 7) {
        return false;
    } else if (menu_json != null && Object.keys(menu_json).length <= 6) {
        $("#menu_list").children().remove();
        for (keys in menu_json) {

            let countZero = "";
            if (menu_json[keys].menu_count == "0") {
                countZero = "disabled"
            }

            $("#menu_list").append('<li class="menu_info btn btn-outline-secondary d-flex flex-column justify-content-center shadow-sm p-4 mb-4 ' + countZero + '" style="width: 30%;"><strong class="menu_name">' + menu_json[keys].menu_name + '</strong><strong class="menu_price">' + menu_json[keys].menu_price + '원</strong><span class="menu_count">' + menu_json[keys].menu_count + '</span></li>')
        }
    }

}

// 액셀 만드는 함수
function exportExcel(list) {
    var excelHandler = {
        getExcelFileName: function () {
            return 'machine_json.xlsx';
        },
        getSheetName: function () {
            return 'Machine Test';
        },
        getExcelData: function () {
            return list;
        },
        getWorksheet: function () {
            return XLSX.utils.json_to_sheet(this.getExcelData());
        }
    }

    // workbook 생성
    var wb = XLSX.utils.book_new();

    // 시트 만들기 
    var newWorksheet = excelHandler.getWorksheet();

    // workbook에 새로만든 워크시트에 이름을 주고 붙인다.  
    XLSX.utils.book_append_sheet(wb, newWorksheet, excelHandler.getSheetName());

    // 엑셀 파일 만들기 
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    // 엑셀 파일 내보내기 
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), excelHandler.getExcelFileName());
}

// 엑셀 함수
function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

// 상품 정렬
function order_menu_json(menu_json) {

    const ordered = {};

    Object.keys(menu_json).sort().forEach(function (key) {
        ordered[key] = menu_json[key];
    });

    return ordered;

}

// 이용자 순위 정렬
function order_best_user(best_user) {

    let rank_best_user = [];
    let keys = Object.keys(best_user);

    for (let i = 0; i < keys.length; i++) {
        let ordered = {};
        ordered['user_name'] = keys[i];
        ordered['menu_price'] = best_user[keys[i]];
        rank_best_user.push(ordered)
    }

    rank_best_user.sort((a, b) => {
        return b.menu_price - a.menu_price
    });

    return rank_best_user;
}

// 베스트 상품 정렬
function order_best_menu(best_menu) {

    let rank_best_menu = [];
    let keys = Object.keys(best_menu);

    for (let i = 0; i < keys.length; i++) {
        let ordered = {};
        ordered['best_menu'] = keys[i];
        ordered['count'] = best_menu[keys[i]];
        rank_best_menu.push(ordered)
    }

    rank_best_menu.sort((a, b) => {
        return b.count - a.count
    });

    return rank_best_menu;
}

// 베스트 상품 가격 상승
function update_best_menu(best_menu) {

    let menu_json = JSON.parse(sessionStorage.getItem("menu_json"))

    let best_menu_price = parseInt(menu_json[best_menu].menu_price) + 100

    menu_json[best_menu].menu_price = best_menu_price;

    sessionStorage.setItem("menu_json", JSON.stringify(menu_json));

    create_menu_list(menu_json);
}
