// 기본 자료형 - primitive type
let number = 273.14;
let string = 'Hello';
let boolean = true;
console.log(typeof(number), typeof(string), typeof(boolean));

// 객체 자료형 - 기본 자료형을 객체로 만들었음. Wrapper class라고도 함
let numObj = new Number(273.14);
let strObj = new String('Hello');
let boolObj = new Boolean(true);
console.log(typeof(numObj), typeof(strObj), typeof(boolObj));

console.log(number == numObj, number === numObj);
