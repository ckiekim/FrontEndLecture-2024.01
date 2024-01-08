// String 객체

let hello = '안녕하세요?';

// 속성
console.log(hello.length);

// 메소드(method)
console.log(hello[1], hello.charAt(1));         // '녕'
console.log(hello + ' 여러분!', hello.concat(' 여러분!'));
console.log(hello.indexOf('하'));               // 2
console.log('pineapple'.lastIndexOf('p'));      // 6

// 문자열을 분리하여 배열을 반환
let fruits = '사과,배,감,포도';
let fruitArray = fruits.split(',');         // ['사과', '배', '감', '포도']
console.log(fruitArray);             

// 문자열 일부분(substring)
const today = new Date().toISOString();
console.log(today);
// 2024-01-08T02:06:00.249Z
// 날짜 추출: 2024-01-08
console.log(today.substring(0, 10));
console.log(today.substring(0, today.indexOf('T')));
console.log(today.split('T')[0]);
// 시간 추출: 02:06:00
console.log(today.substring(11, 19));
console.log(today.substring(today.indexOf('T')+1, today.indexOf('.')));
console.log(new Date().toLocaleString());       // 2024. 1. 8. 오전 11:16:40

// YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);        // 4 --> '04', 23 --> '23'
}
function myDateTime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} ` +
        `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
}

console.log(new Date());
console.log(myDateTime());          // 2024-01-08 11:24:12
console.log(myDateTime().substring(11));        // 두번째 인수를 생략하면 끝까지

// 공백 제거
let space = '   Hello?   ';
console.log(space.trim(), ':', space.trimStart(), ':', space.trimEnd());

// Method chain
console.log(space.trim().substring(0,5).toUpperCase());

// 문자열 변환
const sample = 'A quick brown fox jumps over the lazy dog.';
console.log(sample.replace('A', 'a'));
console.log(sample.replace('o', 'O'));      // 앞에 있는 o 한개만 바뀜

// 정규 표현식 (딥 러닝을 이용한 자연어 처리 입문 > 02-05 정규 표현식 참조)
console.log(sample.replace(/o/g, 'O'));     // 모든 o 가 O 로 바뀜

const str = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog = 5 = 게으른 개';
let eng = str.replace(/[^A-Z a-z]/g, '');           // 영문자와 공백만 남기고 모두 지움
let kor = str.replace(/[^ㄱ-ㅎ ㅏ-ㅣ가-힣]/g, '');  // 한글과 공백만 남기고 모두 지움
let num = str.replace(/[^0-9]/g, '');       // 숫자만 남기고 모두 지움
let spe = str.replace(/[^-=]/g, '');        // -, = 특수기호만 남기고 모두 지움
console.log(eng);
console.log(kor);
console.log(num);
console.log(spe);   

// 문자열 찾기
console.log(hello.indexOf('안녕'));     // 결과값이 0 이상이면 찾는 문자열이 있음
let search = 'hello';
if (hello.indexOf(search) >= 0)
    console.log(`찾고싶은 단어 ${search} 이/가 문장안에 있습니다.`);
else
    console.log(`찾고싶은 단어 ${search} 이/가 문장안에 없습니다.`);
