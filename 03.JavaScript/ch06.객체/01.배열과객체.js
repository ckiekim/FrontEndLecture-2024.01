// 배열(Array)과 객체(Object)

// 배열은 객체의 특수한 형태
let fruitArray = ['감', '귤', '밤', '배'];
console.log(typeof fruitArray);

let fruitObject = {0:'감', 1:'귤', 2:'밤', 3:'배'};
console.log(fruitArray[0], fruitObject[1]);

// 객체(Object) - 자료구조로서 객체는 파이썬의 딕셔너리, 자바의 맵과 유사함
// key - value 쌍
let personArray = ['James', 27, '남자', '프로그래머', 175.3];
let personInfo = {name:'James', age:27, gender:'남자', job:'프로그래머', height:175.3};
console.log(personInfo);
let car = {manufacturer:'현대자동차', 'model':'casper', color:'카키색'};    // key를 문자열로 써도 무방
console.log(car);

// 객체에 대한 접근
console.log(personInfo['name']);        // 이렇게는 사용되지 않음
console.log(personInfo.name);           // 대부분 이렇게 사용됨

let key = 'job';
console.log(personInfo[key]);           // key값을 변수로 사용하는 경우
