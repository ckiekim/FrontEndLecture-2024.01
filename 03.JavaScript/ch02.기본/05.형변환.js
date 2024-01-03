// 자료형 변환
// 강제 변환
console.log(123, String(123));
console.log(Number('101'), Number(true), Number(false));
console.log(Number('hello'));       // NaN, Not a Number

// 아래 경우를 제외하면 모두 참(true)
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined), Boolean(null), Boolean(NaN));

// 자동 변환
// + 연산자:    boolean -> number -> string 으로 변환
console.log(123 + true, 'bool ' + true, 'integer ' + 123);

// -, *, / 연산자:  string -> number 로 변환
console.log(52 - '27', '8' * 8, '4' / 2);

// 두개의 값이 같으냐?
// 1) 변환된 값이 같으면 같다. (==)
console.log(52 == '52', 52 == 52.0);
console.log(true == 1, false == 0.0);

// 2) 변환된 값과 자료형이 일치하면 참. (===)
console.log(52 === '52', 52 === 52.0);
console.log(true === 1, false === 0.0);
