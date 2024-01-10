function ans1() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
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
    document.getElementById('result1').innerHTML = resultStr;
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
    let sentence = document.getElementById('sentence').value;
    let search = document.getElementById('search').value;
    // 특수기호 제거, 소문자로 변경
    let noPunct = sentence.replace(/[-',.\n]/g, '').toLowerCase();
    let words = noPunct.split(' ');     // 공백으로 분리하여 배열로 만듦
    let count = 0;
    for (let word of words) {
        if (word == search)
            count++;
    }
    document.getElementById('result2').innerHTML = `${search} 갯수: ${count}`;
}

function ans3() {
    let price = document.getElementById('price').value;
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
    document.getElementById('result3').innerHTML = resultStr;
}