// 연습문제
// 1. 1에서 1000사이에 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되었는가?
//      1234567890101112131415...9991000
let numStr = '';
for (let i = 1; i <= 1000; i++) {
    numStr += i;
}

// 정규표현식 활용
// 1이 몇번 사용되었나?
console.log(numStr.replace(/[^1]/g, '').length);

for (let i = 0; i <= 9; i++) {
    let pattern = new RegExp('[^' + i + ']', 'g');
    count = numStr.replace(pattern, '').length;
    console.log(`${i}: ${count}`);
}

// count 배열을 만들어 일일이 체크
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < numStr.length; i++) {
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr);   // 192, 301, 300, ..., 300

// 2. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?
let displayTime = 0;
for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
        let clock = hour + ':' + minute;
        if (clock.indexOf('3') >= 0)
            displayTime += 60;
    }
}
console.log(`하루동안 3이 표시되는 시간은 ${displayTime}초 입니다.`);   // 29700 초

// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(s) {
    return s == s.split('').reverse().join('');
}

let maxPal = 0, max1 = 0, max2 = 0;
for (let i = 100; i <= 999; i++) {
    for (let k = i; k <= 999; k++) {
        let mul = i * k;
        if (isPalindrome(String(mul))) {
            if (mul > maxPal) {
                maxPal = mul; max1 = i; max2 = k;
            }
        }
    }
}
console.log(`${max1} x ${max2} = ${maxPal}`);       // 913 x 993 = 906609

// 4. C:/Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js
// 에서 파일명(04.String연습.js)만 출력하세요.
let path = 'C:/Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js';

// split 후 맨 마지막 요소
let pathArr = path.split('/');
console.log(pathArr[pathArr.length - 1]);

// 맨 마지막에 있는 / 위치를 찾아서 substring 메소드를 찾는 방법
let fileIndex = path.lastIndexOf('/');
console.log(path.substring(fileIndex + 1));
