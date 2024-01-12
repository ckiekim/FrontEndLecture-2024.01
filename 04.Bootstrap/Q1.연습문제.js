function ans1() {
    let num1 = Number($('#num1').val());
    let num2 = Number($('#num2').val());
    if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || num2 - num1 < 4) {
        alert('입력값의 범위를 확인하고 다시 입력하세요.');
        return;
    }
    let powerArr = [];
    for (let i = num1; i <= num2; i++) 
        powerArr.push(2 ** i);
    let resultStr = '';
    /* for (let element of powerArr)
        resultStr += element + '<br>'; */
    for (let i = 0; i < powerArr.length; i++) {
        if ((i + 1) % 5 == 0)
            resultStr += powerArr[i] + '<br>';      // 다섯개 찍고 줄바꿈
        else {
            if (i == powerArr.length - 1)
                resultStr += powerArr[i];           // 맨 마지막 요소뒤에는 , 를 붙이지 않겠다
            else
                resultStr += powerArr[i] + ', ';
        }
    }
    $('#result1').html(resultStr);
}

/*
the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, 
whether from the inside or the outside, and devote myself instead to geography, history, 
arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a 
magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One 
and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome 
for children to be always and forever explaining things to the.
*/
function ans2() {
    let sentence = $('#sentence').val();
    let search = $('#search').val();
    // 특수기호 제거, 소문자로 변경
    let noPunct = sentence.replace(/[-',.\n]/g, '').toLowerCase();
    let words = noPunct.split(' ');     // 공백으로 분리하여 배열로 만듦
    let count = 0;
    for (let word of words) {
        if (word == search)
            count++;
    }
    $('#result2').html(`${search} 갯수: ${count}`);
}

function ans3() {
    let price = $('#price').val();
    let priceStrArr = price.split(';');

    // priceValArr와 newPrices는 값이 같은 배열
    let priceValArr = [];
    for (let element of priceStrArr)
        priceValArr.push(Number(element));
    let newPrices = priceStrArr.map(x => parseInt(x));

    newPrices.sort((a, b) => b - a);        // 내림차순 정렬
    let resultStr = '';
    for (let element of newPrices)
        resultStr += element + '<br>';
    $('#result3').html(resultStr);
}

function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);        // 4 --> '04', 23 --> '23'
}
function myDateTime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` +
        `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}
$(document).ready(() => {
    setInterval(function() {
        const now = new Date();
        const week = '일월화수목금토'.split('');        // ['일', ..., '토']
        let dateStr = myDateTime(now).substring(0, 10);
        dateStr += '(' + week[now.getDay()] +')';
        const timeStr = myDateTime(now).substring(11);
        $('#date').text(dateStr);
        
        $('#h1').attr('src', `../03.JavaScript/ch13.문서객체모델/img/${timeStr[0]}.svg`);
        $('#h2').attr('src', `../03.JavaScript/ch13.문서객체모델/img/${timeStr[1]}.svg`);
        $('#m1').attr('src', `../03.JavaScript/ch13.문서객체모델/img/${timeStr[3]}.svg`);
        $('#m2').attr('src', `../03.JavaScript/ch13.문서객체모델/img/${timeStr[4]}.svg`);
        $('#s1').attr('src', `../03.JavaScript/ch13.문서객체모델/img/${timeStr[6]}.svg`);
        $('#s2').attr('src', `../03.JavaScript/ch13.문서객체모델/img/${timeStr[7]}.svg`);
    }, 1000);
});